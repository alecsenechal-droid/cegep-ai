# Installer Cégep AI sur ton ordinateur

## La version courte

Tu peux commencer sans Git et sans terminal. Télécharge le ZIP, décompresse-le, copie `dossier-type` dans tes Documents et ouvre ce dossier dans ton agent. L’objectif n’est pas d’« installer un programme » : c’est de créer **ton dossier scolaire local**.

## Ce que chaque outil fait

| Outil | Est-ce requis au départ? | Pourquoi |
|---|---|---|
| Un agent avec accès à un dossier local | Oui | Il lit les documents que tu choisis et te montre ses changements. |
| Claude Code dans l’application Desktop | Recommandé | C’est le plus naturel si tu connais Claude Chat : tu ouvres un dossier et tu continues à converser. |
| Git | Non pour télécharger le template | Git garde l’historique du projet. Certaines applications peuvent le demander pour une session locale sur Windows. |
| Claude in Chrome | Non | C’est une intégration avancée pour travailler dans un navigateur ouvert. Tu peux commencer avec un PDF local. |
| Extension Cégep AI | Non | Elle sert seulement à capturer rapidement une sélection vers `_inbox`. |
| Agenda Google / `.ics` | Non | À utiliser seulement quand ton agent et ton flux sont testés. |

## Installer le dossier sans Git

1. Sur la page GitHub de Cégep AI, clique **Code**, puis **Download ZIP**.
2. Décompresse le ZIP dans Téléchargements.
3. Ouvre le dossier décompressé et prends le dossier **`dossier-type`**.
4. Renomme cette copie **`CegepAI`** — sans accent et sans espace, pour que les chemins restent simples.
5. Glisse `CegepAI` dans **Documents**.
6. Ouvre `Documents\CegepAI` dans ton agent.

Tu dois voir ces quatre éléments :

```text
CLAUDE.md    _ETAT.md    _inbox    .claude
```

Le dossier `.claude` peut être caché. Dans l’Explorateur Windows : **Affichage → Afficher → Éléments masqués**. S’il manque, retourne dans le ZIP et copie seulement `.claude` dans `Documents\CegepAI`.

## Si tu utilises Claude Desktop

1. Ouvre l’application Claude Desktop et connecte-toi avec ton compte habituel.
2. Va dans **Code**, choisis une session **Local**, puis sélectionne `Documents\CegepAI`.
3. Commence en mode **Plan** si l’interface te le propose. Plan veut dire : Claude explique d’abord, sans modifier tes fichiers.
4. Quand son plan est clair, utilise le mode où tu peux accepter ou refuser les changements avant d’écrire.

Si Claude Desktop te dit qu’il a besoin de **Git for Windows** pour ouvrir une session locale, installe Git for Windows et rouvre l’application. Git n’est pas nécessaire pour avoir téléchargé le ZIP; il peut être nécessaire à la manière dont l’application prépare son espace de travail local.

## Ne fais pas encore ces choses

Ne connecte pas Omnivox, ton agenda, Claude in Chrome ou l’extension de capture avant d’avoir réussi le PDF local décrit dans [`START_HERE.md`](START_HERE.md). Ce sont des outils utiles, mais ils ajoutent des permissions et des questions qui n’ont pas besoin d’être réglées le premier soir.

## Si tu préfères l’aide d’un agent

Dans une conversation où ton agent peut lire des liens GitHub, colle :

```text
Installe Cégep AI pour moi : https://github.com/alecsenechal-droid/cegep-ai
Suis INSTALL-AGENT.md. Avant d’écrire, explique-moi où mon dossier sera créé,
ce qui sera copié et comment je pourrai revenir en arrière. Attends mon OK.
```

L’agent ne doit jamais te demander ton mot de passe Omnivox. Il ne doit écrire que dans le dossier de destination que tu as approuvé.
