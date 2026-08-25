# Installer Claude Desktop, Cégep AI et Claude in Chrome

## La version courte

Tu as besoin de **Claude Desktop**, de ton dossier `Documents\CegepAI` et de Chrome. Cégep AI va ensuite t’aider à activer Claude in Chrome, ouvrir ta propre session Omnivox et, si tu le veux, proposer les dates à ajouter à Google Calendar.

## 1. Créer ton dossier Cégep AI

1. Sur GitHub, clique **Code**, puis **Download ZIP**.
2. Décompresse le ZIP dans Téléchargements.
3. Copie le dossier `dossier-type`, renomme la copie `CegepAI` et place-la dans **Documents**.
4. Vérifie que `Documents\CegepAI` contient :

```text
CLAUDE.md    _ETAT.md    _inbox    .claude
```

Ce dossier est le tien. Tu peux ouvrir les fichiers, les modifier ou demander à Cégep AI de t’expliquer à quoi ils servent.

## 2. Ouvrir Claude Desktop

1. Ouvre Claude Desktop et connecte-toi avec ton compte habituel.
2. Va dans **Code**, choisis une session **Local**, puis sélectionne `Documents\CegepAI`.
3. Commence en mode **Plan** si l’interface te le propose. Il explique l’approche avant de modifier les fichiers.

Sous Windows, Claude Desktop peut demander **Git for Windows** lors de la première ouverture d’une session locale. Installe-le seulement si l’application te le demande, puis rouvre Claude Desktop. Git n’est pas nécessaire pour télécharger le ZIP; il peut être nécessaire au fonctionnement de la session locale.

## 3. Activer Claude in Chrome

Dans Claude Desktop :

1. Clique sur tes initiales en bas à gauche.
2. Ouvre **Réglages**, puis **Connecteurs**.
3. Trouve **Claude in Chrome** et clique **Configurer**.
4. Active le connecteur. Installe et épingle l’extension Chrome si l’application te le propose.

Claude in Chrome dépend de Chrome, de l’extension, des permissions et d’un compte Anthropic direct compatible. Si tu ne vois pas le connecteur, ce n’est pas toi qui as raté une étape : commence avec un PDF dans `_inbox` et vérifie plus tard les conditions de ton compte.

## 4. Ouvrir Omnivox et ton agenda

Ouvre Omnivox dans Chrome et connecte-toi **toi-même**. Cégep AI peut accompagner la navigation de la session ouverte, mais il ne doit jamais demander ton mot de passe.

Tu peux ensuite lui dire :

```text
Je suis connecté à Omnivox. Dis-moi ce que tu peux regarder, puis attends mon OK avant une action dans le navigateur.
```

Pour Google Calendar, demande une proposition et non une synchronisation silencieuse :

```text
Si tu trouves des cours ou des échéances, montre-moi la date et la source avant de proposer un ajout à mon Google Calendar.
```

## Si tu préfères qu’un agent installe le dossier

```text
Installe Cégep AI pour moi : https://github.com/alecsenechal-droid/cegep-ai

Lis INSTALL-AGENT.md avant de commencer. Explique-moi chaque étape simplement et attends mon accord avant de modifier mes fichiers ou mon calendrier.
```
