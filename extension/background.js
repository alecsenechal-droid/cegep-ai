// Le service worker : cree le menu clic droit et ecrit dans le dossier Ecole.
//
// Trois cas, selon ce sur quoi tu fais ton clic droit :
//   texte selectionne -> un .md avec le texte et son contexte
//   image             -> l'image telle quelle
//   lien              -> le fichier si le lien pointe vers un document,
//                        sinon un .md qui garde l'adresse
//
// Aucune deduction automatique pour l'instant. L'etudiant choisit la destination lui-meme,
// donc la confiance est toujours "choisie_par_utilisateur". Une prochaine version ajoutera la
// deduction par URL.

import { DESTINATIONS, DOSSIER } from './config.js';
import {
  construireFichier, nomFichier, nomMedia,
  nettoyerUrl, estUnFichier, extensionDeUrl
} from './capture.js';

const RACINE = 'ecole';
const SEP = ':';
const CONTEXTES = ['selection', 'image', 'link'];

const NOTE_DEGRADEE =
  'texte lu par Chrome et non dans la page : sauts de ligne perdus, ' +
  'et coupe si la selection depassait environ 1000 caracteres';

function creerLeMenu() {
  chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
      id: RACINE,
      title: 'Envoyer à Cégep AI',
      contexts: CONTEXTES
    });
    for (const d of DESTINATIONS) {
      chrome.contextMenus.create({
        id: RACINE + SEP + d.id,
        parentId: RACINE,
        title: d.libelle,
        contexts: CONTEXTES
      });
    }
  });
}

chrome.runtime.onInstalled.addListener(creerLeMenu);
chrome.runtime.onStartup.addListener(creerLeMenu);

// Chrome abime le texte des menus contextuels (sauts de ligne aplatis, coupure
// vers 1000 caracteres) et `info.pageUrl` garde l'adresse du chargement initial,
// ce qui est faux sur Facebook ou Messenger qui changent d'adresse sans
// recharger. On lit donc les trois dans la page elle-meme.
//
// La permission activeTab n'ouvre l'acces qu'au moment du clic sur le menu.
// Rien entre deux clics, aucune surveillance. Voir docs/INSTALLATION.md.
async function lireDansLaPage(idOnglet) {
  if (!idOnglet) return null;
  try {
    const resultats = await chrome.scripting.executeScript({
      target: { tabId: idOnglet },
      func: function () {
        return {
          texte: window.getSelection().toString(),
          adresse: location.href,
          titre: document.title
        };
      }
    });
    return resultats && resultats[0] ? resultats[0].result : null;
  } catch (e) {
    console.warn('[ecole] lecture dans la page impossible :', e.message);
    return null;
  }
}

function ecrire(nom, url) {
  chrome.downloads.download(
    { url: url, filename: DOSSIER + '/' + nom, conflictAction: 'uniquify', saveAs: false },
    function (id) {
      if (chrome.runtime.lastError) {
        console.error('[ecole] echec :', chrome.runtime.lastError.message);
      } else {
        console.log('[ecole] ecrit :', nom, '(id ' + id + ')');
      }
    }
  );
}

chrome.contextMenus.onClicked.addListener(async function (info, onglet) {
  const identifiant = String(info.menuItemId || '');
  const prefixe = RACINE + SEP;
  if (identifiant.indexOf(prefixe) !== 0) return;

  const destination = identifiant.slice(prefixe.length);
  const maintenant = new Date();

  const page = await lireDansLaPage(onglet && onglet.id);

  // 1. Une image : on la prend telle quelle.
  if (info.mediaType === 'image' && info.srcUrl) {
    ecrire(nomMedia(maintenant, destination, extensionDeUrl(info.srcUrl) || 'jpg'), info.srcUrl);
    return;
  }

  // 2. Un lien vers un vrai document : on telecharge le document.
  if (info.linkUrl && estUnFichier(info.linkUrl)) {
    ecrire(nomMedia(maintenant, destination, extensionDeUrl(info.linkUrl)), info.linkUrl);
    return;
  }

  // 3. Sinon : un .md. Soit le texte selectionne, soit l'adresse du lien.
  const dansLaPage = page && page.texte && page.texte.trim() ? page.texte.trim() : null;
  let texte = dansLaPage || (info.selectionText || '').trim();
  let note = dansLaPage ? null : NOTE_DEGRADEE;

  if (!texte && info.linkUrl) {
    texte = 'Lien : ' + info.linkUrl;
    note = null;
  }

  if (!texte) {
    console.warn('[ecole] rien a ecrire');
    return;
  }

  const adresse = (page && page.adresse) || info.pageUrl || (onglet && onglet.url) || '';
  const titre = (page && page.titre) || (onglet && onglet.title) || '';

  const contenu = construireFichier({
    date: maintenant,
    url: nettoyerUrl(adresse),
    titrePage: titre,
    destination: destination,
    deduitDe: 'choix manuel dans le menu',
    confiance: 'choisie_par_utilisateur',
    note: note,
    texte: texte
  });

  ecrire(nomFichier(maintenant, destination),
         'data:text/markdown;charset=utf-8,' + encodeURIComponent(contenu));
});
