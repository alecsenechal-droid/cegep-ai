# Installation — instructions pour l'agent

Tu lis ceci parce qu'un étudiant t'a demandé d'installer Cartable. Fais les étapes
dans l'ordre. **Il ne devrait avoir rien à taper d'autre.**

---

## 1. Récupérer le dépôt

```bash
git clone https://github.com/alecsenechal-droid/cartable.git
```

Si `git` n'est pas installé, télécharge le ZIP et décompresse-le. **Ne demande pas
à l'étudiant d'installer git** — trouve un chemin qui marche avec ce qu'il a.

Mets ça dans un dossier temporaire, pas dans ses Documents.

---

## 2. Créer son dossier scolaire

Demande-lui **où il le veut**, en proposant `Documents/Cartable` par défaut. Une
seule question, réponse par défaut acceptable.

Puis copie le **contenu** de `dossier-type/` dedans — **pas le dossier lui-même**.

**Windows**
```powershell
New-Item -ItemType Directory -Force "<destination>" | Out-Null
Copy-Item -Path "<temp>\cartable\dossier-type\*" -Destination "<destination>" -Recurse -Force
```

**macOS / Linux**
```bash
mkdir -p "<destination>"
cp -R "<temp>/cartable/dossier-type/." "<destination>/"
```

⚠️ Le `\*` et le `/.` sont importants : ils copient le contenu **y compris
`.claude/`**. Sans ce dossier, les commandes `/demarrage` et `/maj` n'existeront
pas, et l'échec sera **silencieux**.

---

## 3. Vérifier — ne saute pas cette étape

Le dossier de destination doit contenir exactement ces quatre choses :

```
CLAUDE.md    _ETAT.md    _inbox/    .claude/
```

Si `.claude/` manque, recommence la copie. Ne continue pas.

---

## 4. Nettoyer

Efface la copie temporaire du dépôt. L'étudiant n'a pas besoin de la garder.

Garde-la seulement s'il veut aussi installer l'extension Chrome — dans ce cas,
dis-lui où elle est et renvoie-le à `docs/INSTALLATION.md`.

---

## 5. Enchaîner tout de suite

**Si tu peux déjà travailler dans son nouveau dossier :** ne lui fais rien
rouvrir. Lis `dossier-type/.claude/skills/demarrage/SKILL.md` et **suis-le
directement.** Le skill est un fichier de consignes — tu n'as pas besoin que la
commande slash existe pour l'appliquer.

**Sinon**, dis-lui exactement ceci :

> C'est installé dans `<destination>`.
> Ouvre ce dossier-là dans l'application Claude Code, et tape `/demarrage`.

---

## Ce que tu ne fais pas pendant l'installation

- **Demander son mot de passe Omnivox.** Jamais, même offert. Il se connecte
  lui-même dans son navigateur; tu liras la session ouverte.
- Écrire quoi que ce soit ailleurs que dans le dossier de destination.
- Modifier un dossier scolaire qui existe déjà. Si la destination contient déjà un
  `_ETAT.md` rempli, **arrête et demande** avant de rien écraser.
- Poser plus d'une question. Tout le reste se lit ou se déduit.
