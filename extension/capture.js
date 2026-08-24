// Logique pure : construire le nom de fichier et le contenu.
//
// Ce fichier ne connait ni Chrome ni les telechargements. C'est voulu : le jour
// ou la destination change (un serveur au lieu d'un dossier), seul background.js
// bouge. Voir docs/INSTALLATION.md.

const NL = String.fromCharCode(10);
const CR = String.fromCharCode(13);

function deuxChiffres(n) {
  return (n < 10 ? '0' : '') + n;
}

export function horodatage(d) {
  return d.getFullYear() + '-' + deuxChiffres(d.getMonth() + 1) + '-' + deuxChiffres(d.getDate()) +
         ' ' + deuxChiffres(d.getHours()) + ':' + deuxChiffres(d.getMinutes());
}

export function nomFichier(d, destination) {
  return d.getFullYear() + '-' + deuxChiffres(d.getMonth() + 1) + '-' + deuxChiffres(d.getDate()) +
         '-' + deuxChiffres(d.getHours()) + deuxChiffres(d.getMinutes()) +
         '-' + destination + '.md';
}

// Les URL d'Omnivox contiennent un identifiant de session vivant (SID) et un
// blob chiffre (Info). On ne garde jamais ca dans un fichier. Voir docs/INSTALLATION.md.
export function nettoyerUrl(brute) {
  if (!brute) return '';
  try {
    const u = new URL(brute);
    if (u.hostname.indexOf('omnivox.ca') !== -1) return u.origin + u.pathname;
    return brute;
  } catch (e) {
    return brute;
  }
}

// Une valeur YAML sur une seule ligne, entre guillemets, sans casser le format.
function valeurYaml(v) {
  if (v === null || v === undefined || v === '') return '""';
  const plat = String(v).split(CR).join(' ').split(NL).join(' ').trim();
  return '"' + plat.split('"').join("'") + '"';
}

export function construireFichier(infos) {
  const lignes = [
    '---',
    'capture: ' + horodatage(infos.date),
    'source: ' + valeurYaml(infos.url),
    'page: ' + valeurYaml(infos.titrePage),
    'destination: ' + infos.destination,
    'deduit_de: ' + valeurYaml(infos.deduitDe),
    'confiance: ' + infos.confiance
  ];

  // Le champ `note` n'apparait que quand la capture est degradee. Une capture
  // abimee doit se voir, pas dormir dans un dossier. Voir le README, le garde-fou.
  if (infos.note) lignes.push('note: ' + valeurYaml(infos.note));

  lignes.push('---', '', infos.texte, '');
  return lignes.join(NL);
}

// --- Medias et liens -------------------------------------------------------

// Les extensions qu'on telecharge telles quelles. Un lien qui pointe vers autre
// chose (une page web) devient une note .md avec son adresse, pas un fichier
// HTML inutilisable.
const EXTENSIONS_FICHIER = [
  'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'odt', 'zip', 'csv', 'txt',
  'jpg', 'jpeg', 'png', 'gif', 'webp', 'heic', 'svg', 'mp4', 'mov', 'mp3', 'm4a'
];

export function extensionDeUrl(adresse) {
  try {
    const morceaux = new URL(adresse).pathname.split('.');
    if (morceaux.length < 2) return null;
    const ext = morceaux[morceaux.length - 1].toLowerCase();
    return ext.length > 5 ? null : ext;
  } catch (e) {
    return null;
  }
}

export function estUnFichier(adresse) {
  const ext = extensionDeUrl(adresse);
  return ext !== null && EXTENSIONS_FICHIER.indexOf(ext) !== -1;
}

export function nomMedia(d, destination, extension) {
  const base = nomFichier(d, destination);
  return base.slice(0, base.length - 3) + '.' + (extension || 'bin');
}
