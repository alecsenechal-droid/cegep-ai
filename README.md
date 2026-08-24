# Cégep AI

**Ton dossier scolaire, mais utilisable.**

Cégep AI t’aide à garder tes documents de session dans un dossier local que tu peux comprendre, inspecter et personnaliser. Tu choisis ce que ton agent lit. Il peut résumer un plan de cours, te citer sa source, classer avec ton accord et t’aider à voir ce qui manque.

> **Le premier objectif n’est pas de brancher Omnivox.** Commence avec un PDF que tu choisis, vois comment l’agent travaille, puis décide si tu veux aller plus loin.

## Commence ici

Si tu connais Claude Chat, mais pas les agents de code, lis [`docs/START_HERE.md`](docs/START_HERE.md). Tu auras un premier résultat local en quelques minutes : un PDF dans `_inbox`, un résumé à côté et une réponse avec une source.

| Tu veux… | Ouvre… |
|---|---|
| Installer le dossier sans Git ni terminal | [`docs/INSTALL-DESKTOP.md`](docs/INSTALL-DESKTOP.md) |
| Comprendre avant de laisser l’agent écrire | [`docs/PROMPTS-DEPART.md`](docs/PROMPTS-DEPART.md) |
| Réparer une erreur sans tout supprimer | [`docs/RECUPERER.md`](docs/RECUPERER.md) |
| Capturer rapidement du texte depuis Chrome | [`docs/INSTALLATION.md`](docs/INSTALLATION.md) — optionnel |

## Le modèle mental

```text
GitHub distribue le template
        ↓
Documents/CegepAI est ton dossier personnel local
        ↓
Ton agent lit seulement les fichiers que tu choisis
        ↓
Tu vois le plan, acceptes ou refuses les changements
```

GitHub n’est pas l’endroit où tes documents scolaires doivent vivre. Le dépôt contient le gabarit et les guides; ton travail, tes plans de cours et tes préférences restent dans `Documents\CegepAI`.

## Ce qui est disponible, dépendant ou à tester

| Capacité | Statut | Ce que ça veut dire |
|---|---|---|
| Dossier local, `_inbox`, règles de classement et sources | **Disponible maintenant** | Le template contient les fichiers et les consignes. |
| Premier PDF local, résumé et réponse citée | **Dépend de ton agent** | Un agent avec accès au dossier peut suivre les règles du template. |
| Claude Desktop / Claude Code | **Parcours recommandé** | Le plus naturel si tu connais déjà Claude Chat et veux travailler dans un dossier local. |
| Codex, Cursor, Antigravity | **À tester** | Le template est lisible, mais chaque agent doit être testé avant une promesse de compatibilité. |
| Claude in Chrome et Omnivox | **Avancé / dépend de ton agent** | Ça demande un navigateur, les bonnes permissions et parfois un forfait compatible. Tu te connectes toujours toi-même. |
| Extension de capture Chrome | **Optionnelle** | Elle envoie une sélection ou un lien vers `_inbox`; elle se charge manuellement en mode développeur. |
| Agenda Google direct ou `.ics` | **À valider** | Ne le considère pas comme une fonction garantie du template seul. |

## Installer

La voie la plus simple est expliquée dans [`docs/INSTALL-DESKTOP.md`](docs/INSTALL-DESKTOP.md) : télécharge le ZIP, copie `dossier-type` vers `Documents\CegepAI`, puis ouvre ce dossier dans ton agent.

Si ton agent peut lire le dépôt GitHub et faire l’installation pour toi, copie ce message :

```text
Installe Cégep AI pour moi : https://github.com/alecsenechal-droid/cegep-ai
Suis INSTALL-AGENT.md. Avant d’écrire, explique-moi où mon dossier sera créé,
ce qui sera copié et comment je pourrai revenir en arrière. Attends mon OK.
```

L’agent ne doit jamais te demander ton mot de passe Omnivox. Il doit écrire seulement dans le dossier que tu as approuvé.

## Les quatre éléments essentiels

Après l’installation, `Documents\CegepAI` doit contenir :

```text
CLAUDE.md    _ETAT.md    _inbox    .claude
```

| Élément | À quoi il sert |
|---|---|
| `CLAUDE.md` | Les règles permanentes de ton système. |
| `_ETAT.md` | Ta vue d’ensemble : ce qui est vérifié, ce qui reste à confirmer. |
| `_inbox` | L’endroit où arrivent les documents nouveaux à traiter. |
| `.claude` | Les compétences `/demarrage`, `/maj` et `/inbox` pour les agents qui les prennent en charge. |

Le dossier `.claude` peut être caché. Sous Windows : **Affichage → Afficher → Éléments masqués**.

## Comment garder le contrôle

Commence toujours par :

> « Avant de modifier mes fichiers, montre-moi ton plan en 5 lignes et attends mon OK. »

Tu peux demander à l’agent de citer ses sources, de proposer deux classements, d’expliquer un changement ou de revenir en arrière. Le guide [`docs/PROMPTS-DEPART.md`](docs/PROMPTS-DEPART.md) te donne des messages prêts à utiliser.

Les originaux restent les originaux. Un PDF reste un PDF; un résumé est ajouté à côté. Quand l’information est incertaine, le système doit dire **« à confirmer »** au lieu de deviner.

## Omnivox, navigateur et agenda : seulement après le premier essai

Quand ton PDF local fonctionne, tu peux explorer les étapes avancées. Selon l’agent que tu utilises, il peut être possible de travailler dans un navigateur déjà ouvert ou d’ajouter des dates à un agenda. Ces fonctions ne sont pas garanties par les fichiers de ce dépôt seuls : elles dépendent de l’agent, de ses permissions et des connecteurs disponibles.

Tu ne donnes jamais ton mot de passe Omnivox à Cégep AI. Tu te connectes toi-même dans ton navigateur. Si un outil demande ton mot de passe, arrête-toi et vérifie.

## Extension Chrome — optionnelle

L’extension sert à capturer rapidement un texte, une image ou un lien dans `_inbox`. Elle ne remplace pas le premier essai local. Lis [`docs/INSTALLATION.md`](docs/INSTALLATION.md) seulement quand le dossier te sert déjà et que tu comprends le lien entre `Téléchargements\CegepAI` et `_inbox`.

## État du projet

Cégep AI est un prototype ouvert, créé pour tester un système scolaire local avec des étudiants. Les retours de testeurs sont bienvenus, surtout si tu es dans un autre cégep ou utilises un autre agent. Ouvre une Issue pour décrire ce qui a marché, ce qui a bloqué et le premier mot que tu n’as pas compris.

MIT.
