# Installation

## Pourquoi il faut un lien

Chrome ne laisse pas une extension écrire où elle veut sur le disque.
`chrome.downloads` accepte un nom de fichier et un **sous-dossier de
Téléchargements**, rien d'autre. C'est une règle de sécurité du navigateur, pas
un obstacle à contourner par du code.

La solution : créer un **lien** — une jonction sur Windows, un lien symbolique sur
macOS et Linux — entre `Téléchargements/CegepAI` et le dossier `_inbox` de ton
dossier scolaire.

Les deux chemins deviennent **le même dossier physique**. Chrome croit écrire dans
Téléchargements, le fichier arrive dans ton dossier scolaire. Aucun programme en
arrière-plan, aucun script à maintenir.

---

## Créer le lien

Suppose que ton dossier scolaire est `Documents/CegepAI`. Adapte si tu l'as mis
ailleurs.

### Windows

Dans PowerShell, sans droits administrateur :

```powershell
New-Item -ItemType Junction -Path "$env:USERPROFILE\Downloads\CegepAI" -Target "$env:USERPROFILE\Documents\CegepAI\_inbox"
```

Ou avec l'invite de commandes :

```
mklink /J "%USERPROFILE%\Downloads\CegepAI" "%USERPROFILE%\Documents\CegepAI\_inbox"
```

⚠️ `Downloads\CegepAI` **ne doit pas exister** avant. Si le dossier est déjà là,
supprime-le ou choisis un autre nom (change aussi `DOSSIER` dans
`extension/config.js`).

### macOS et Linux

```bash
ln -s ~/Documents/CegepAI/_inbox ~/Downloads/CegepAI
```

---

## Vérifier que ça marche

Écris un fichier d'un bord, regarde s'il apparaît de l'autre :

```bash
echo test > ~/Downloads/CegepAI/verification.txt
ls ~/Documents/CegepAI/_inbox/
```

Si `verification.txt` apparaît, le lien fonctionne. Supprime-le ensuite.

---

## Charger l'extension

1. Ouvre `chrome://extensions`
2. Active **Mode développeur**, en haut à droite
3. **Charger l'extension non empaquetée** → choisis le dossier `extension/`
4. Après chaque modification de `config.js`, reviens ici et clique **↻**

Pour tester : sélectionne du texte sur n'importe quelle page, clic droit,
**Envoyer au dossier Ecole** → choisis une destination. Un `.md` daté doit
apparaître dans ton `_inbox/`.

---

## ⚠️ À savoir

**Un outil de nettoyage automatique** (Assistant Stockage de Windows, CCleaner)
qui vide les vieux téléchargements peut entrer dans le lien et effacer le contenu
de ton `_inbox`. Exclus `Téléchargements/CegepAI` de ces outils, ou désactive le
nettoyage automatique des téléchargements.

**Supprimer le lien** n'efface pas tes fichiers — seulement le raccourci :

```powershell
Remove-Item "$env:USERPROFILE\Downloads\CegepAI"   # Windows
```
```bash
rm ~/Downloads/CegepAI                              # macOS / Linux
```
