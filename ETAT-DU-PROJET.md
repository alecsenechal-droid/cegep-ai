# État du projet — passage de témoin

*Dernière mise à jour : 23 août 2026.*
*À lire en premier quand on reprend le projet, peu importe l'agent utilisé.*

---

## Où on en est

**Deux projets, séparés volontairement :**

| Dossier | C'est quoi | État |
|---|---|---|
| `Desktop\AI\Projects\extension-ecole` | L'outil personnel d'Alec. Contient `PLAN.md` (la spec d'origine) et `VISION-PRODUIT.md` (le brief produit) | l'extension fonctionne |
| `Desktop\AI\Projects\cartable` | **Ce dépôt.** La version publique pour les étudiants qui ont un agent de codage | 5 commits, prêt à tester, **pas encore sur GitHub** |
| `Desktop\Ecole` | Le vrai dossier scolaire d'Alec. **La référence, jamais le chantier** | vivant, rempli à la main |

⚠️ **Ne jamais mettre de code de produit dans `Desktop\Ecole`.** Il contient ses
vraies données — notes, numéro de DA, noms de camarades.

---

## Ce qui est validé techniquement

Testé le 23 août 2026 sur un vrai compte Omnivox du Cégep Limoilou. **Ce ne sont
pas des hypothèses.** Ne pas les re-tester, ne pas les remettre en question sans
preuve contraire.

### Lire le code de cours dans Léa

| Élément | Ce qu'il contient |
|---|---|
| `div.infoCGNoCours` | le code du cours **affiché**, seul, une fois par page |
| `div.TitrePageLigne2` | code + nom + groupe — sert de recoupement |
| `span.RemTrav_Sommaire_NoGroupe` | sur une page de liste globale, le code de **chaque ligne** |

⚠️ **Le piège** : les six codes de cours apparaissent aussi dans
`table.tblMenuSelectionMenuV2` — le menu de sélection, présent sur **toutes** les
pages. Chercher un code « quelque part dans le HTML » classe au hasard, en silence.
Filtrer avec `element.closest('table.tblMenuSelectionMenuV2')`.

**L'URL de Léa est inutilisable :** paramètre `Info=` chiffré, et `SID=` qui change
à chaque chargement de page. **C'est un jeton de session vivant — ne jamais le
conserver.** Garder `origin + pathname` seulement.

Pas de `<frameset>` sur les pages de cours (contrairement à la messagerie MIO).
HTML rendu côté serveur en ASP.NET WebForms, donc lisible dès `document_end`.

### L'extension de capture

- Capture texte, images et liens par clic droit, avec source, date et titre.
- Lit la vraie sélection dans la page via `activeTab` + `scripting` : ça préserve
  les sauts de ligne et supprime la limite d'environ 1000 caractères que Chrome
  impose au texte des menus contextuels.
- Lit `location.href` **dans la page** — seul moyen d'avoir la bonne adresse sur
  les sites qui changent d'URL sans recharger (Facebook, Messenger).
- Écrit via `chrome.downloads` avec une `data:` URL. **Testé, ça marche** : pas
  besoin de document hors écran.
- `conflictAction: 'uniquify'` empêche tout écrasement.

### La jonction vers le dossier scolaire

Chrome n'écrit que dans Téléchargements. Une jonction Windows (`New-Item
-ItemType Junction`, **sans droits administrateur**) ou un lien symbolique
(`ln -s`) relie `Téléchargements/Cartable` au dossier `_inbox`.

**Testé de bout en bout le 23 août 2026** : Chrome rapporte
`C:\Users\...\Downloads\Ecole\test.md`, le fichier arrive dans
`Desktop\Ecole\_inbox\`. Chrome suit la jonction.

### Non vérifié

- **Est-ce que ça marche dans les autres cégeps ?** Le domaine observé est
  `climoilou-lea.omnivox.ca`. Le motif `<code>-lea.omnivox.ca` suggère que toute
  la plateforme Skytech est pareille, mais **ça demande un compte d'un autre
  cégep.** C'est le premier retour à aller chercher.
- **`.infoCGNoCours` existe-t-il dans Notes d'évaluation et Communiqués ?**
  Vérifié dans Documents et dans Travaux seulement.

---

## Les décisions prises, et pourquoi

Ne pas les rouvrir sans raison neuve. Chacune a coûté une discussion.

| Décision | Pourquoi |
|---|---|
| **Le produit couvre Omnivox, rien d'autre** | le sport et Messenger, c'est le besoin d'Alec, pas celui d'un cégépien ordinaire. Les inclure ajoutait du risque pour un cas qui se généralise pas |
| **Jamais de mot de passe Omnivox** | ça n'apporte aucune capacité — l'étudiant se connecte lui-même, on lit la session ouverte — et ça donnerait accès à ses notes, ses paiements, ses renseignements personnels |
| **Les noms de tiers ne se conservent pas** | lire un groupe de 28 membres expose 27 personnes qui ont rien demandé. Cette règle a survécu à toutes les révisions |
| **Lire Messenger n'est plus interdit** | *(décision d'Alec, 23 août)* c'est son compte, son risque. La règle sur les noms, elle, reste |
| **Une seule source de vérité par fait** | l'agenda possède les dates, `_ETAT.md` possède le vérifié/supposé, les documents possèdent le détail. Un `_echeances.md` avait accumulé 5 erreurs sans que personne le remarque |
| **Le flux vers l'agenda va dans un seul sens** | on écrit dedans, on ne relit jamais les modifications de l'étudiant comme une source |
| **La politique d'IA de chaque prof est respectée** | c'est ce qui sépare un assistant scolaire d'une machine à tricher, et ce qui rend l'outil défendable devant une direction de programme |
| **`capture.js` est séparé de `background.js`** | le jour où la destination devient un serveur au lieu d'un dossier, un seul fichier bouge |
| **Le dépôt agent-first est une piste parallèle** | presque aucun cégépien n'a Claude Code. Ça ne teste **pas** la demande du vrai public. Timeboxé à deux fins de semaine |

---

## Ce qui reste à faire

**Immédiat, et seul Alec peut le faire :**

1. **Vérifier que Claude in Chrome s'installe** avec un camarade de classe. C'est
   écrit comme prérequis obligatoire. Si personne ne peut l'installer, tout le flux
   tombe et il faut faire du chemin manuel le chemin principal. **Un seul test
   avant de distribuer.**
2. **Tester l'installation comme un inconnu** : copier `dossier-type/`, lancer
   `claude`, faire `/demarrage`, et noter où ça bloque.
3. ~~Vérifier que `/demarrage` se déclenche vraiment.~~ ✅ **Fait le 24 août
   2026.** Le skill démarre, détecte que `_ETAT.md` est un gabarit, vérifie le
   connecteur d'agenda et suit ses étapes. La forme
   `.claude/skills/<nom>/SKILL.md` fonctionne.
4. **Pousser sur GitHub.** Rien n'est publié. Ça demande un compte et un dépôt vide.
   ⚠️ Le README contient encore `https://github.com/<toi>/cartable.git` — le `<toi>`
   doit être remplacé au moment de publier.

**Ensuite :**

5. Donner le dépôt à 5-10 camarades qui ont un agent. **Mesurer s'ils reviennent
   une deuxième fois sans qu'on leur demande** — c'est la seule question qui
   compte.
6. Faire vérifier les sélecteurs de Léa par un étudiant d'un autre cégep.

---

## Ce qu'il y a dans ce dépôt

```
cartable/
├── README.md               la porte d'entrée, en langage d'étudiant
├── ETAT-DU-PROJET.md       ce fichier
├── LICENSE                 MIT
├── .gitignore              bloque PDF, docx, xlsx — aucun contenu scolaire ne peut fuir
├── extension/              l'extension Chrome, optionnelle
│   ├── manifest.json
│   ├── config.js           ⭐ le seul fichier que l'utilisateur modifie
│   ├── capture.js          logique pure : nom de fichier, front matter, nettoyage d'URL
│   └── background.js       menus contextuels et téléchargement
├── dossier-type/           ⭐ devient le dossier scolaire de l'étudiant
│   ├── CLAUDE.md           les conventions — la pièce la plus importante du projet
│   ├── _ETAT.md            le gabarit de l'état de session
│   ├── _inbox/             là où tout arrive
│   └── .claude/skills/
│       ├── demarrage/      accueil + grand balayage d'Omnivox + remplissage de l'agenda
│       ├── maj/            va voir ce qui est nouveau, croise, met l'agenda à jour
│       └── inbox/          traite ce que l'extension a capturé
└── docs/INSTALLATION.md    la jonction Windows / le lien macOS-Linux, et pourquoi
```

**Si tu ne dois lire qu'un fichier : `dossier-type/CLAUDE.md`.** C'est le système
d'Alec généralisé, et c'est l'actif transposable du projet.

---

## Comment travailler avec Alec

- **Français simple et direct.** Il dicte souvent : attendre des fautes et des
  phrases incomplètes. Comprendre l'intention, **ne jamais corriger son français**.
- **Avant toute action qui touche son ordinateur ou un de ses comptes** :
  expliquer en langage non technique à quoi ça sert, ce que ça change, le risque —
  puis **attendre le mot APPROUVE**. La lecture n'a pas à attendre.
- **Ne pas sur-construire.** Il coupe court à l'over-engineering, et il a raison.
- **Se corriger vite et franchement.** Pas de justification longue.
- **Vérifier avant d'affirmer.** Il a déjà été mal servi par un outil d'IA qui
  avait annoncé des pondérations totalisant 95 % pour un cours — il manquait un
  travail à 5 %, trouvé en lisant le vrai plan de cours.

### ⚠️ Le contexte qui explique toutes les règles de ce projet

**Alec a déjà abandonné deux projets pour le même besoin : `omnisync`, puis
`cegep-ai`.** Les deux sont dans `Desktop\AI\Projects\`.

**La cause n'était pas le code, c'était la duplication.** La même information
vivait à trois endroits, chaque copie devait être maintenue, et les erreurs
passaient inaperçues.

**Si une décision de design ajoute une copie d'une information qui existe déjà,
c'est la mauvaise décision.** C'est la règle qui prime sur toutes les autres.
