# Installation — instructions pour l'agent

Tu lis ceci parce qu'un étudiant t'a demandé d'installer Cégep AI. Fais les étapes
dans l'ordre. **Il ne devrait avoir rien à taper d'autre.**

---

## 1. Récupérer le dépôt

```bash
git clone https://github.com/alecsenechal-droid/cegep-ai.git
```

Si `git` n'est pas installé, télécharge le ZIP et décompresse-le. **Ne demande pas
à l'étudiant d'installer git** — trouve un chemin qui marche avec ce qu'il a.

Mets ça dans un dossier temporaire, pas dans ses Documents.

---

## 2. Créer son dossier scolaire

Demande-lui **où il le veut**, en proposant `Documents/CegepAI` par défaut. Une
seule question, réponse par défaut acceptable.

Puis copie le **contenu** de `dossier-type/` dedans — **pas le dossier lui-même**.

**Windows**
```powershell
New-Item -ItemType Directory -Force "<destination>" | Out-Null
Copy-Item -Path "<temp>\cegep-ai\dossier-type\*" -Destination "<destination>" -Recurse -Force
```

**macOS / Linux**
```bash
mkdir -p "<destination>"
cp -R "<temp>/cegep-ai/dossier-type/." "<destination>/"
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

## 5. Premier succès local avant tout le reste

Ne commence pas automatiquement par Omnivox, un navigateur, une extension ou un
agenda. L'étudiant doit d'abord comprendre son dossier et voir un résultat simple
avec un document qu'il choisit.

Explique-lui exactement ceci :

> C'est installé dans `<destination>`.
> Commence avec un PDF de cours que tu choisis : mets-le dans `_inbox`, ouvre ce
> dossier dans ton agent et demande un plan avant toute écriture.
> Le guide `docs/START_HERE.md` du dépôt te donne les deux messages à coller.

Si tu peux déjà travailler dans son nouveau dossier, lis `CLAUDE.md`, puis propose
ce premier essai local. **Attends son accord clair** avant de lire ou créer un
fichier. N'applique pas `/demarrage` par défaut : cette compétence peut dépendre
d'un navigateur et de capacités que l'agent n'a pas forcément.

---

## Ce que tu ne fais pas pendant l'installation

- **Demander son mot de passe Omnivox.** Jamais, même offert. Il se connecte
  lui-même dans son navigateur; tu liras la session ouverte.
- Écrire quoi que ce soit ailleurs que dans le dossier de destination.
- Modifier un dossier scolaire qui existe déjà. Si la destination contient déjà un
  `_ETAT.md` rempli, **arrête et demande** avant de rien écraser.
- Partir un navigateur, connecter un agenda ou installer une extension avant que
  l'étudiant ait réussi son premier document local.
