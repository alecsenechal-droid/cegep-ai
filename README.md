# Cartable

**Ton dossier scolaire qu'un agent IA peut vraiment lire.**

Tes profs déposent leur calendrier de cours dans Léa — un Word, un PDF, un Excel —
avec les devoirs et les remises dedans. Pour savoir ce qui s'en vient cette
semaine, tu dois ouvrir chaque document, de chaque cours.

Cartable lit tout ça une fois, le range, le résume, et répond à tes questions à
partir de tes vrais documents.

---

## ⚠️ Pour qui c'est, honnêtement

**Il te faut Claude Code** (ou Codex, ou un agent équivalent) et être à l'aise
d'ouvrir un terminal. Si tu n'as pas ça, ce dépôt ne te servira à rien pour
l'instant.

Testé sur **Omnivox / Léa au Cégep Limoilou**. Les autres cégeps roulent sur la
même plateforme, alors ça devrait marcher — mais ce n'est pas vérifié.
👉 **Si tu es dans un autre cégep, ouvre une issue et dis-nous si ça marche.**
C'est le coup de main le plus utile que tu peux donner.

---

## Installation — trois commandes

```bash
git clone https://github.com/<toi>/cartable.git
cp -r cartable/dossier-type ~/Documents/Cartable
cd ~/Documents/Cartable && claude
```

Puis, dans Claude :

```
/demarrage
```

**C'est tout.** Le skill te pose **trois questions** — ton cégep, ton programme, ta
session — puis il fait le reste.

### Ce qu'il fait, et ce qu'il te demande

| Il fait | Il te demande |
|---|---|
| lit ta liste de cours, ton horaire, tes locaux, tes profs | **d'ouvrir Omnivox et de te connecter toi-même** |
| télécharge et résume tes plans de cours | de confirmer avant qu'il touche à ton navigateur |
| trouve la **politique d'IA de chaque cours** | rien d'autre |
| remplit `_ETAT.md` | |

**Il n'entre jamais ton mot de passe.** Tu te connectes, il lit. C'est la règle, et
elle ne bougera pas.

Le principe du skill : **ne jamais demander ce qu'il peut lire.** Ton horaire est
déjà dans Omnivox — te le faire retaper serait exactement le travail qu'on te
promet d'éviter.

> ⏱️ L'import initial prend quelques minutes et consomme des jetons. C'est une
> fois par session, pas tous les jours.

**Pas de Claude in Chrome ?** Le skill bascule tout seul : il te demande de
déposer tes plans de cours dans `_inbox/` à la main, et continue pareil.

---

## Au quotidien

```
/inbox
```

ou simplement « traite mon inbox ». Il classe, résume, met `_ETAT.md` à jour, et
te dit ce qu'il a écarté.

Ensuite tu poses tes questions normalement :

- « Comment je fais le devoir d'aujourd'hui ? »
- « Où est mon local pour la sortie de demain ? »
- « C'est quoi qui s'en vient cette semaine ? »

---

## L'extension Chrome — optionnelle

Si tu as Claude in Chrome, **tu n'en as pas besoin pour Omnivox.** L'agent navigue
tout seul.

Elle reste utile pour deux choses :

- **La capture rapide** — un clic droit, zéro token, zéro attente. Faire démarrer
  un agent pour sauver un message, c'est lent.
- **Messenger et Facebook** — et là elle est **obligatoire**. Faire naviguer un
  agent dans Messenger, ce serait du scraping de Meta : contraire à leurs
  conditions, et ça capturerait la vie privée de tes contacts. La capture s'y fait
  par sélection, c'est-à-dire **par toi**.

Installation : voir [`docs/INSTALLATION.md`](docs/INSTALLATION.md). Il faut créer
un lien entre `Téléchargements/Cartable` et ton `_inbox/`, parce que Chrome refuse
d'écrire ailleurs que dans Téléchargements.

---

## Les conventions

Elles sont dans [`dossier-type/CLAUDE.md`](dossier-type/CLAUDE.md), et c'est la
partie qui compte le plus.

| Règle | Pourquoi |
|---|---|
| Tout arrive dans `_inbox/`, jamais ailleurs | ce qui est neuf doit se voir d'un coup d'œil |
| Un PDF reste un PDF, avec un `-resume.md` à côté | convertir détruit les tableaux; le résumé coûte une seule lecture |
| ✅ vérifié / ❓ supposé, toujours distingués | une supposition présentée comme un fait finit par coûter cher |
| Les dates vivent dans **ton agenda**, pas dans un fichier | une information à deux endroits va diverger |
| Les noms des autres ne sont pas recopiés | ce sont tes camarades, pas tes données |
| **La politique d'IA du prof est respectée, cours par cours** | voir ci-dessous |

### La règle des profs

Si le plan de cours dit que l'IA n'est pas permise, **l'agent refuse d'aider pour
ce cours-là.** Il lit la politique dans le plan de cours et l'applique. Si elle est
absente ou ambiguë, il prend la position la plus restrictive **et te le dit**.

Ce n'est pas un verrou — n'importe qui peut ouvrir ChatGPT dans un autre onglet.
C'est une règle de confiance : tu sais toujours où tu te situes par rapport au
règlement de ton cours.

---

## Ce que ça ne fait pas, et ne fera jamais

- **Aucune connexion automatique à Omnivox.** Toi seul entres ton mot de passe.
- **Aucun scraping de Facebook ou Messenger.**
- **Rien ne tourne en arrière-plan.** Pas de surveillance, pas de tâche planifiée.
- **Aucune donnée ne quitte ton ordinateur** — sauf ce que ton propre agent
  envoie, sous ton contrôle.

---

## État du projet

Jeune, et écrit par un étudiant de cégep pour son propre usage avant d'être
publié. Les sélecteurs de Léa sont validés sur un vrai compte, mais Skytech peut
changer son HTML sans prévenir.

Les issues et les retours d'autres cégeps sont les bienvenus.

MIT.
