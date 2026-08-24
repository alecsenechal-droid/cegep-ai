# Commence ici — ton premier résultat en 5 minutes

Tu n’as pas besoin d’ouvrir Omnivox, d’installer une extension Chrome ni de connecter un agenda pour commencer. Ton premier objectif est plus simple : **voir ton agent lire un document que tu choisis et te répondre avec une source.**

> **Cégep AI n’est pas un chatbot séparé.** C’est un dossier scolaire sur ton ordinateur. Ton agent peut lire les fichiers que tu y mets, expliquer ce qu’il trouve et t’aider à les organiser — mais tu choisis toujours le dossier et les changements.

## Ce qu’il te faut maintenant

Tu as seulement besoin de deux choses : le dossier `Documents\CegepAI` installé avec ses quatre éléments (`CLAUDE.md`, `_ETAT.md`, `_inbox`, `.claude`) et un agent capable d’ouvrir un dossier local. Claude Code dans l’application Desktop est le parcours recommandé si tu connais déjà Claude Chat.

Git ne sert pas à lire ton PDF. Tu peux télécharger le ZIP du template et commencer sans Git. Certaines applications d’agent peuvent toutefois demander Git pour ouvrir une session locale; si l’application te le demande, elle t’expliquera comment l’installer. Ce n’est pas une raison d’abandonner le premier essai.

## Ton premier essai

1. Choisis un **plan de cours ou un PDF que tu as le droit de lire avec ton agent**. Ne prends pas un travail noté si la politique du cours interdit l’IA.
2. Copie le PDF dans `Documents\CegepAI\_inbox`.
3. Ouvre `Documents\CegepAI` dans ton agent.
4. Commence en mode **Plan** si ton agent l’offre. Ce mode sert à expliquer quoi faire avant de modifier des fichiers.
5. Copie ce message dans l’agent :

```text
Je découvre Cégep AI. Avant de modifier quoi que ce soit, explique-moi en 5 lignes
ce que tu vois dans ce dossier et ce que tu proposes de faire avec le PDF dans
_inbox. Attends mon OK.
```

6. Lis son plan. S’il est clair, réponds :

```text
OK. Lis le PDF dans _inbox. Garde l’original. Crée un résumé -resume.md à côté.
Dis-moi ce qui vient directement du PDF et ce qui reste à confirmer.
```

## Comment savoir que ça a marché

Ton PDF original est toujours dans `_inbox`. Un fichier du même nom qui finit par `-resume.md` apparaît à côté. L’agent doit pouvoir te dire quel fichier il a lu, citer une information précise et écrire `à confirmer` quand le document ne répond pas.

Si l’agent veut déplacer, supprimer ou renommer autre chose que le PDF et son résumé, refuse pour l’instant et demande-lui pourquoi. Ce n’est pas un échec : c’est exactement comme ça que tu gardes le contrôle.

## La suite, seulement quand tu veux

Quand ce premier essai fait du sens, lis ensuite :

| Tu veux… | Ouvre… |
|---|---|
| Installer le dossier sans jargon | [`INSTALL-DESKTOP.md`](INSTALL-DESKTOP.md) |
| Avoir des questions utiles à poser à ton agent | [`PROMPTS-DEPART.md`](PROMPTS-DEPART.md) |
| Réparer une erreur sans paniquer | [`RECUPERER.md`](RECUPERER.md) |
| Capturer rapidement un texte depuis Chrome | [`INSTALLATION.md`](INSTALLATION.md) — optionnel et plus avancé |

Omnivox, un navigateur connecté et un agenda sont des étapes **plus avancées**. Ils dépendent de ton agent, de ton forfait et des connecteurs disponibles. Commence par ton propre PDF : c’est la façon la plus simple de vérifier que Cégep AI t’aide réellement.
