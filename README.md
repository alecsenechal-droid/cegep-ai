# Cartable

**Ton dossier scolaire qu'un agent IA peut vraiment lire.**

Une extension Chrome qui capture ce que ton cégep t'envoie — un document dans
Léa, un MIO, un message de coach, un lien — et le dépose dans un dossier avec sa
source et sa date. Ensuite, ton agent (Claude Code, Codex, ou un autre) le classe,
le résume, et répond à tes questions à partir de tes vrais documents.

---

## ⚠️ Pour qui c'est, honnêtement

**Il te faut déjà un agent de codage** — Claude Code, Codex, ou équivalent — et
être à l'aise d'ouvrir un terminal.

Si tu n'as pas ça, ce dépôt ne te servira à rien pour l'instant. Une version sans
terminal est en préparation.

Testé sur **Omnivox / Léa au Cégep Limoilou**. Les autres cégeps roulent sur la
même plateforme, alors ça devrait marcher ailleurs — mais ce n'est pas vérifié.
👉 **Si tu es dans un autre cégep, ouvre une issue et dis-nous si ça marche.**
C'est le coup de main le plus utile que tu peux donner.

---

## Le problème que ça règle

Tes profs déposent leur calendrier de cours dans Léa — un Word, un PDF, un Excel —
avec les devoirs et les remises dedans. Rien n'est structuré. Pour savoir ce qui
s'en vient cette semaine, tu dois **ouvrir chaque document, de chaque cours.**

L'information existe. Elle est juste illisible en pratique.

---

## Ce que tu obtiens

```
tu sélectionnes un texte  →  clic droit  →  ton cours
                                                ↓
                             un .md daté dans ton dossier, avec sa source
                                                ↓
                                  ton agent le classe et le résume
```

- **Capture par clic droit** — texte, images, liens. Partout : Léa, MIO,
  Messenger, un site du cégep, un PDF affiché dans Chrome.
- **La source est toujours écrite** — d'où ça vient, quand, et sur quoi
  l'extension s'est basée pour deviner. Aucune déduction silencieuse.
- **Le code de cours est lu dans la page de Léa**, pas deviné à partir de l'URL.
- **Un fichier d'instructions pour ton agent** qui contient les conventions :
  quoi résumer, quoi vérifier, quoi ne jamais garder.

---

## Installation

**1. Clone le dépôt**

```bash
git clone https://github.com/<toi>/cartable.git
cd cartable
```

**2. Crée ton dossier scolaire**

Copie `dossier-type/` où tu veux — par exemple `Documents/Cartable`.

**3. Fais le lien vers Téléchargements**

Chrome ne peut écrire que dans Téléchargements. Un lien règle ça, une fois pour
toutes, sans programme en arrière-plan.

Windows :
```bash
mklink /J "%USERPROFILE%\Downloads\Cartable" "%USERPROFILE%\Documents\Cartable\_inbox"
```

macOS ou Linux :
```bash
ln -s ~/Documents/Cartable/_inbox ~/Downloads/Cartable
```

**4. Mets tes cours dans `extension/config.js`**

C'est le seul fichier à modifier.

**5. Charge l'extension**

`chrome://extensions` → Mode développeur → *Charger l'extension non empaquetée* →
choisis le dossier `extension/`.

**6. Pointe ton agent sur ton dossier**

```bash
cd ~/Documents/Cartable
claude
```

Il lira `CLAUDE.md` et `_ETAT.md` tout seul.

---

## Les conventions

Elles sont dans [`dossier-type/CLAUDE.md`](dossier-type/CLAUDE.md), et c'est la
partie qui compte le plus. En résumé :

| Règle | Pourquoi |
|---|---|
| Tout arrive dans `_inbox/`, jamais ailleurs | ce qui est neuf doit se voir d'un coup d'œil |
| Un PDF reste un PDF, avec un `-resume.md` à côté | convertir détruit les schémas; le résumé coûte une seule lecture |
| ✅ vérifié / ❓ supposé, toujours distingués | une supposition présentée comme un fait finit par coûter cher |
| Les dates vivent dans **ton agenda**, pas dans un fichier | une information à deux endroits va diverger |
| Les noms des autres ne sont pas recopiés | ce sont tes camarades, pas tes données |
| **La politique d'IA du prof est respectée, cours par cours** | voir plus bas |

### La règle des profs

Si le plan de cours dit que l'IA n'est pas permise, **l'agent refuse d'aider pour
ce cours-là**. Il lit la politique dans le plan de cours et l'applique.

Ce n'est pas un verrou — n'importe qui peut ouvrir ChatGPT dans un autre onglet.
C'est une règle de confiance : tu sais toujours où tu te situes par rapport au
règlement de ton cours.

---

## Ce que ça ne fait pas, et ne fera jamais

- **Aucune connexion automatique à Omnivox.** Toi seul entres ton mot de passe.
  Rien n'est stocké, aucun serveur ne se connecte à ta place.
- **Aucun scraping de Facebook ou Messenger.** La capture s'y fait par sélection,
  c'est-à-dire par toi. C'est contraire aux conditions de Meta, et ça capturerait
  la vie privée de tes contacts.
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
