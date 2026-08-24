# Cartable

**Ton Omnivox, mais utilisable.**

Tes profs garrochent leurs calendriers de cours dans Léa — un Word, un PDF, un
Excel — avec les devoirs et les remises cachés dedans. Les annonces arrivent par
MIO. Ton horaire est ailleurs. **Rien de tout ça ne se parle**, pis c'est déjà tout
dans le même portail.

Cartable lit tout ça une fois, remplit ton agenda, pis après tu lui poses tes
questions comme à un chum qui aurait lu tous tes documents.

```
/demarrage   une fois par session   →  tout ton Omnivox est lu, ton agenda est plein
/maj         quand y'a du nouveau   →  MIO, documents, notes : tout se replace
```

---

## Ce que tu peux lui demander

C'est là que ça devient intéressant. Il a lu tes plans de cours, tes travaux, tes
MIO, ton horaire.

**Sur ce qui s'en vient**
> « C'est quoi qui s'en vient cette semaine ? »
> « Où est mon local demain ? »
> « J'ai-tu un conflit d'horaire cette semaine ? »

**Sur tes travaux**
> « Peux-tu m'aider avec mon devoir de math que je dois remettre demain ? »
> « C'est quoi la matière à l'examen ? »
> « Qu'est-ce qui compte le plus dans ma note en maths ? »

**Sur ta session au complet**
> « Tu penses que je vais devoir mettre combien d'heures d'étude cette semaine ? »
> « Comment je pourrais être plus productif ? »
> « Je peux-tu manquer le cours de jeudi ? »
> « Qu'est-ce que j'ai manqué pendant que j'étais absent ? »

### Et parfois, il va dire non

> **Toi :** « Peux-tu m'aider avec mon devoir de math que je dois remettre demain ? »
>
> **Cartable :** « Ton plan de cours de maths dit que l'IA n'est pas permise pour
> les travaux notés. Je peux t'expliquer la matière si tu veux comprendre, mais je
> ne ferai pas le devoir. »

C'est voulu. Il lit la politique d'IA de **chaque** plan de cours et il l'applique
cours par cours. Si c'est pas écrit clairement, il prend la position la plus
prudente **pis il te le dit**.

C'est pas un cadenas — t'as juste à ouvrir ChatGPT dans un autre onglet. C'est pour
que tu saches toujours où tu te situes par rapport à ton prof.

---

## C'est quoi Claude in Chrome, pis pourquoi t'en as besoin

**En deux phrases :** c'est une extension qui laisse Claude voir ton navigateur et
cliquer dedans, comme si un chum prenait la souris à côté de toi. Sans ça, Claude
Code reste dans ton terminal et **il ne peut pas entrer dans Omnivox**.

Pourquoi c'est nécessaire : Omnivox demande une connexion. Un programme ne peut pas
rentrer là tout seul, pis c'est correct de même. Mais toi, t'es **déjà connecté**
dans ton navigateur — tu l'ouvres cinq fois par jour. Claude in Chrome utilise
cette session-là.

**C'est pour ça qu'on ne te demandera jamais ton mot de passe.** Tu te connectes
comme d'habitude, il lit ce qui est à l'écran. Rien de plus.

> ⚠️ **Claude in Chrome dépend de ton forfait Anthropic.** Vérifie que tu peux
> l'installer **avant** de commencer — c'est le seul truc qui peut vraiment
> bloquer.
>
> **Si tu peux pas :** c'est pas fini. Tu télécharges tes plans de cours de Léa à
> la main, tu les mets dans `_inbox/`, pis le reste marche pareil. Ça te prend
> dix minutes, une fois par session.

---

## Pourquoi brancher ton agenda perso

Parce que ton téléphone sonne tout seul. C'est tout.

Tu n'as pas à ouvrir Cartable pour savoir où t'en es — **ton examen apparaît dans
l'agenda que t'as déjà**, avec un rappel, comme tes autres affaires.

### Ce qui va s'écrire dedans

| Ce qui rentre | À quoi ça ressemble |
|---|---|
| **Tes cours récurrents** | *Mesure du travail* · 9 h à 12 h · **Q2183** · Rémy Bédard |
| **Tes examens** | *Examen 2 — Mathématiques (20 %)* · le 9 octobre |
| **Tes remises** | *Remise du rapport de laboratoire* · le 14 novembre, 23 h 59 |
| **Tes sorties et activités** | *Sortie en entreprise — Mesure du travail* · 8 h à 12 h |

Tout ça va dans un calendrier séparé appelé **« Cégep »**, pour que tu puisses le
cacher ou l'effacer d'un coup sans toucher au reste.

### Ce qui ne rentre PAS

- **Une date pas sûre.** Si ton prof a juste écrit « semaine 6 », ça reste marqué
  ❓ dans ton `_ETAT.md` jusqu'à ce que ce soit confirmé. Mieux vaut pas de date
  qu'une mauvaise date.
- **Une tâche sans date.**

### Tu utilises quoi comme agenda ?

| Toi | Ce qui arrive |
|---|---|
| **Google Agenda** | branché en direct, ça se met à jour tout seul |
| **Apple, Outlook, autre** | tu reçois un fichier `.ics`, tu double-cliques, c'est importé |
| **Rien pour l'instant** | il te montre les dates à l'écran, tu décides plus tard |

⚠️ **Ça écrit dans ton agenda, ça ne le relit pas.** Si tu changes une affaire
directement dans Google Agenda, Cartable ne le saura pas. Une information à deux
places, ça finit toujours par se contredire — pis c'est toujours toi qui manges la
volée.

---

## Ce qu'il te faut

| Outil | Obligatoire ? | Pourquoi |
|---|---|---|
| **Claude Code** | ✅ oui | c'est lui qui lit, classe et répond |
| **Claude in Chrome** | ✅ oui | c'est lui qui va dans Omnivox à ta place |
| **Ton agenda** | recommandé | Google en direct, les autres par `.ics` |
| **git** | ✅ oui | pour cloner le dépôt |

Testé sur **Omnivox / Léa au Cégep Limoilou**. Les autres cégeps roulent sur la
même plateforme, ça devrait marcher — mais c'est pas vérifié.
👉 **Si t'es dans un autre cégep, ouvre une issue pis dis-nous si ça marche.**

---

## Installation

> ⚠️ **Le dépôt n'est pas encore publié.** Remplace `<toi>` par le vrai nom
> d'utilisateur GitHub quand il le sera.

### La façon simple — aucun terminal

1. Sur la page du dépôt, clique le bouton vert **Code** → **Download ZIP**
2. Décompresse le fichier
3. Prends le dossier **`dossier-type`**, renomme-le **`Cartable`**, et glisse-le
   dans tes **Documents**
4. Ouvre l'**application Claude Code** et ouvre ce dossier-là
5. Tape `/demarrage`

C'est tout. Pas de ligne de commande, pas de commande à copier-coller.

> 💡 **Utilise l'application, pas le terminal.** Claude Code existe en application
> pour Windows et Mac. C'est le même outil, mais lisible : les réponses sont
> formatées, les fichiers sont cliquables, et tu vois ce qui se passe. Le terminal
> marche aussi, mais c'est dur à lire quand on découvre.

### ⚠️ Vérifie avant de commencer

Dans ton dossier `Cartable`, tu dois voir **quatre choses** :

```
CLAUDE.md    _ETAT.md    _inbox    .claude
```

Le dossier **`.claude` peut être caché**. Dans l'Explorateur Windows :
**Affichage → Afficher → Éléments masqués**. Sur Mac : `Cmd + Shift + .`

**S'il manque, arrête tout et recopie-le à la main.** C'est lui qui contient
`/demarrage` et `/maj` — sans lui, les commandes n'existent pas, et tu vas
chercher pourquoi pendant une heure.

> 📖 **Tu veux voir a quoi ca ressemble avant d'essayer ?**
> [`docs/PREMIER-DEMARRAGE.md`](docs/PREMIER-DEMARRAGE.md) montre le parcours
> au complet, de GitHub jusqu'a ta premiere question.

### Si tu préfères le terminal

**Windows** (PowerShell) :

```powershell
git clone https://github.com/<toi>/cartable.git
New-Item -ItemType Directory -Force "$env:USERPROFILE\Documents\Cartable" | Out-Null
Copy-Item -Path "cartable\dossier-type\*" -Destination "$env:USERPROFILE\Documents\Cartable" -Recurse -Force
cd "$env:USERPROFILE\Documents\Cartable"
```

**macOS / Linux** :

```bash
git clone https://github.com/<toi>/cartable.git
mkdir -p ~/Documents/Cartable
cp -R cartable/dossier-type/. ~/Documents/Cartable/
cd ~/Documents/Cartable
```

Puis `claude`, et `/demarrage`.

## Ce que `/demarrage` fait

Il te pose **une seule question** — à quel cégep tu es — pis il te demande
d'**ouvrir Omnivox et de te connecter toi-même**.

Ton programme, ta session, ton horaire, tes profs : il les lit lui-même. Te les
faire retaper serait exactement le travail qu'on te promet d'éviter.

Ensuite il fait le grand tour, une seule fois :

- il passe à travers **chaque cours** : documents, travaux, notes, communiqués, MIO
- il **télécharge et résume tes plans de cours**
- il trouve la **politique d'IA de chaque cours**
- il remplit **`_ETAT.md`** : tes cours, ton horaire, tes locaux, tes profs, tes
  pondérations, pis ce qui reste à confirmer
- il remplit **ton agenda**

> ⏱️ Le grand tour prend quelques minutes pis ça consomme pas mal de jetons. Il va
> te proposer de **commencer par un seul cours** pour que tu voies le résultat
> avant de tout faire. Prends l'offre.

---

## Ensuite, `/maj`

Quand y'a du nouveau — un MIO, un document déposé, une note publiée :

```
/maj
```

Il regarde **juste ce qui a changé**, met ton agenda pis ton `_ETAT.md` à jour.

Pis surtout : **il croise.** Un MIO qui déplace un cours contre ton horaire, une
nouvelle date contre tes autres examens. C'est là qu'il te sort les conflits que
t'aurais pas vus tout seul.

---

## Où vit quoi — la règle la plus importante

| Ce qui est gardé | Où |
|---|---|
| **Une date, une heure, un local** | **ton agenda**, avec les rappels sur ton téléphone |
| **Ce qui est vérifié / supposé, les règles, les pondérations** | **`_ETAT.md`** |
| **Le contenu détaillé** | le document d'origine et son résumé |

**Une information à deux places, c'est une information qui va finir par se
contredire.** C'est la règle numéro un du projet.

---

## L'extension Chrome — optionnelle

T'en as **pas besoin** pour Omnivox : `/demarrage` et `/maj` s'en occupent.

Elle sert à la **capture rapide** : clic droit sur n'importe quoi, n'importe où.
Zéro token, zéro attente. Partir un agent juste pour sauver un message, c'est long
pour rien.

🔒 **Une règle qui bouge pas, peu importe d'où ça vient : les noms des autres, on
les garde pas.** Lire un groupe de 28 personnes, c'est voir les messages de 27
personnes qui t'ont rien demandé.

Installation : [`docs/INSTALLATION.md`](docs/INSTALLATION.md).

**Suggestion : essaie sans l'extension au début.** `/demarrage` et `/maj` suffisent
pour voir si l'affaire te sert.

---

## Les conventions

Tout est dans [`dossier-type/CLAUDE.md`](dossier-type/CLAUDE.md).

| Règle | Pourquoi |
|---|---|
| Tout arrive dans `_inbox/`, jamais ailleurs | ce qui est neuf doit se voir d'un coup d'œil |
| Un PDF reste un PDF, avec un `-resume.md` à côté | convertir détruit les tableaux; le résumé coûte une seule lecture |
| ✅ vérifié / ❓ supposé, toujours séparés | une supposition présentée comme un fait finit par coûter cher |
| Les dates vivent dans ton agenda, pas dans un fichier | deux copies vont diverger |
| Les noms des autres sont pas recopiés | c'est tes chums, c'est pas tes données |
| La politique d'IA du prof est respectée, cours par cours | voir plus haut |

---

## Ce que ça fait pas

- **On te demandera jamais ton mot de passe Omnivox.** Tu te connectes toi-même,
  Cartable lit la session déjà ouverte. Si un outil te demande ce mot de passe-là,
  peu importe lequel, méfie-toi.
- **Rien se fait sans que tu le demandes.** Ton agent va où tu lui dis d'aller.
- **Rien tourne en arrière-plan.** Pas de surveillance, pas de tâche planifiée.
- **Aucune donnée sort de ton ordinateur** — à part ce que ton propre agent envoie,
  sous ton contrôle.

---

## État du projet

Jeune, pis écrit par un étudiant de cégep pour lui-même avant d'être publié. Les
sélecteurs de Léa sont validés sur un vrai compte, mais Skytech peut changer son
HTML sans avertir.

Les issues et les retours d'autres cégeps sont les bienvenus.

MIT.
