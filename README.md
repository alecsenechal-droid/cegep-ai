# Cartable

**Ton Omnivox, mais utilisable.**

Tes profs déposent leur calendrier de cours dans Léa — un Word, un PDF, un Excel —
avec les devoirs et les remises dedans. Les annonces arrivent par MIO. L'horaire
est ailleurs. **Aucun de ces endroits ne parle aux autres**, et tout ça est déjà
dans un seul portail.

Cartable lit tout ça une fois, remplit ton agenda, et répond ensuite à n'importe
quelle question sur ta session — à partir de tes vrais documents.

```
/demarrage   une fois par session   →  tout Omnivox est lu, ton agenda est rempli
/maj         quand il y a du neuf   →  MIO, documents, notes : tout se met à jour
```

Entre les deux, tu poses tes questions normalement :

> « Comment je fais le devoir d'aujourd'hui ? »
> « Où est mon local demain ? »
> « C'est quoi qui s'en vient cette semaine ? »

---

## ⚠️ Ce qu'il te faut avant de commencer

| Outil | Obligatoire ? | Pourquoi |
|---|---|---|
| **Claude Code** | ✅ oui | c'est lui qui lit, classe et répond |
| **Claude in Chrome** | ✅ oui | c'est lui qui va dans Omnivox à ta place |
| **Un connecteur d'agenda** (Google Agenda) | recommandé | sans lui, tu entres les dates à la main |
| **git** | ✅ oui | pour cloner le dépôt |

> **Claude in Chrome dépend de ton forfait Anthropic.** Vérifie que tu peux
> l'installer **avant** de commencer — c'est le seul prérequis qui peut vraiment
> bloquer.
>
> Sans lui, ça marche quand même : tu télécharges tes plans de cours à la main et
> tu les déposes dans `_inbox/`. Compte une dizaine de minutes, une fois par
> session.

Testé sur **Omnivox / Léa au Cégep Limoilou**. Les autres cégeps roulent sur la
même plateforme, alors ça devrait marcher — mais ce n'est pas vérifié.
👉 **Si tu es dans un autre cégep, ouvre une issue et dis-nous si ça marche.**

---

## Installation

**Windows** (PowerShell) :

```powershell
git clone https://github.com/<toi>/cartable.git
Copy-Item -Recurse cartable\dossier-type "$env:USERPROFILE\Documents\Cartable"
cd "$env:USERPROFILE\Documents\Cartable"
claude
```

**macOS / Linux** :

```bash
git clone https://github.com/<toi>/cartable.git
cp -r cartable/dossier-type ~/Documents/Cartable
cd ~/Documents/Cartable
claude
```

Puis, dans Claude :

```
/demarrage
```

---

## Ce que `/demarrage` fait

Il te pose **trois questions** — ton cégep, ton programme, ta session — puis il te
demande d'**ouvrir Omnivox et de te connecter toi-même**.

Ensuite il fait le grand balayage, une seule fois :

- il parcourt **chaque cours** : documents, travaux, notes, communiqués, MIO
- il **télécharge et résume tes plans de cours**, sans les convertir
- il trouve la **politique d'IA de chaque cours**
- il remplit **`_ETAT.md`** : tes cours, ton horaire, tes locaux, tes profs, tes
  pondérations, et ce qui reste à confirmer
- il remplit **ton agenda** : cours récurrents, examens, remises, sorties

**Il n'entre jamais ton mot de passe.** Tu te connectes, il lit. Cette règle ne
bougera pas.

**Il ne va nulle part ailleurs que dans Omnivox** pendant le balayage.

> ⏱️ Le balayage prend plusieurs minutes et consomme beaucoup de jetons. C'est
> **une fois par session**, pas tous les jours.

Le principe : **il ne demande jamais ce qu'il peut lire.** Ton horaire est déjà
dans Omnivox — te le faire retaper serait exactement le travail qu'on te promet
d'éviter.

---

## Ensuite, `/maj`

Quand il y a du neuf — un MIO, un document déposé, une note publiée :

```
/maj
```

Il regarde **seulement ce qui a changé** depuis la dernière fois, met `_ETAT.md`
et ton agenda à jour, et te dit ce qu'il a trouvé.

Et surtout : **il croise.** Un MIO qui déplace un cours contre ton horaire, une
nouvelle date contre tes autres examens. C'est là qu'il te sort les conflits que
tu n'aurais pas vus tout seul.

---

## Où vit quoi — la règle la plus importante du projet

| Ce qui est gardé | Où |
|---|---|
| **Une date, une heure, un local** | **ton agenda**, avec les rappels sur ton téléphone |
| **Ce qui est vérifié / supposé, les règles, les pondérations** | **`_ETAT.md`** |
| **Le contenu détaillé** | le document d'origine et son résumé |

L'agenda reçoit une copie **générée**. Cartable n'y relit jamais ce que tu modifies
comme si c'était la vérité.

**Une information à deux endroits est une information qui va diverger.**

---

## La règle des profs

Si le plan de cours dit que l'IA n'est pas permise, **Cartable refuse de t'aider
pour ce cours-là.** Il lit la politique dans le plan de cours et l'applique, cours
par cours. Si elle est absente ou ambiguë, il prend la position la plus restrictive
**et te le dit**.

Ce n'est pas un verrou — n'importe qui peut ouvrir ChatGPT dans un autre onglet.
C'est une règle de confiance : tu sais toujours où tu te situes par rapport au
règlement de ton cours.

---

## L'extension Chrome — optionnelle

Tu n'en as **pas besoin** pour Omnivox : `/demarrage` et `/maj` s'en occupent.

Elle sert à la **capture rapide** — un clic droit sur n'importe quoi, n'importe où,
zéro token, zéro attente. Faire démarrer un agent juste pour sauver un message,
c'est lent.

🔒 **Une règle qui ne bouge pas, peu importe la source : les noms des autres ne se
gardent pas.** Lire un groupe de 28 personnes, c'est voir les messages de 27
personnes qui ne t'ont rien demandé.

Installation : [`docs/INSTALLATION.md`](docs/INSTALLATION.md). Il faut créer un
lien entre `Téléchargements/Cartable` et ton `_inbox/`, parce que Chrome refuse
d'écrire ailleurs que dans Téléchargements.

**Suggestion : essaie sans l'extension d'abord.** `/demarrage` et `/maj` suffisent
pour voir si l'affaire te sert.

---

## Les conventions

Tout est dans [`dossier-type/CLAUDE.md`](dossier-type/CLAUDE.md).

| Règle | Pourquoi |
|---|---|
| Tout arrive dans `_inbox/`, jamais ailleurs | ce qui est neuf doit se voir d'un coup d'œil |
| Un PDF reste un PDF, avec un `-resume.md` à côté | convertir détruit les tableaux; le résumé coûte une seule lecture |
| ✅ vérifié / ❓ supposé, toujours distingués | une supposition présentée comme un fait finit par coûter cher |
| Les dates vivent dans ton agenda, pas dans un fichier | deux copies vont diverger |
| Les noms des autres ne sont pas recopiés | ce sont tes camarades, pas tes données |
| La politique d'IA du prof est respectée, cours par cours | voir plus haut |

---

## Ce que ça ne fait pas

- **Aucune connexion automatique à Omnivox.** Toi seul entres ton mot de passe.
- **Rien n'est fait sans que tu le demandes.** Ton agent va où tu lui dis d'aller.
- **Rien ne tourne en arrière-plan.** Pas de surveillance, pas de tâche planifiée.
- **Aucune donnée ne quitte ton ordinateur** — sauf ce que ton propre agent envoie,
  sous ton contrôle.

---

## État du projet

Jeune, et écrit par un étudiant de cégep pour son propre usage avant d'être publié.
Les sélecteurs de Léa sont validés sur un vrai compte, mais Skytech peut changer
son HTML sans prévenir.

Les issues et les retours d'autres cégeps sont les bienvenus.

MIT.
