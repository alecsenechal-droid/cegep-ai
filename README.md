# Cégep AI

**Ta mémoire scolaire locale, avec un agent que tu peux questionner et personnaliser.**

Cégep AI t’aide à comprendre ta session à partir de tes propres documents, de ta session Omnivox ouverte et, si tu le choisis, de ton calendrier. Il ne te demande pas de lui faire confiance aveuglément : tu peux lui demander ses sources, changer sa façon de te parler, corriger son classement ou refuser une proposition.

> **Tu gardes la main.** Ton dossier reste dans `Documents\CegepAI`; tes mots de passe ne passent jamais par Cégep AI; aucune date n’est créée ou modifiée sans te la montrer.

## Commence ici

Le premier message à copier dans ton agent est volontairement simple :

```text
Installe Cégep AI pour moi : https://github.com/alecsenechal-droid/cegep-ai

Lis INSTALL-AGENT.md avant de commencer. Explique-moi chaque étape simplement et attends mon accord avant de modifier mes fichiers ou mon calendrier.
```

Cégep AI doit ensuite se présenter, expliquer ce qu’il peut faire et te proposer le parcours suivant : **Claude in Chrome → ta session Omnivox ouverte par toi → calendrier facultatif**. Tu n’as pas besoin de connaître les commandes, Git ou `_inbox` avant de lui parler.

| Tu veux… | Ouvre… |
|---|---|
| Être guidé dans le premier parcours | [`docs/START_HERE.md`](docs/START_HERE.md) |
| Installer Claude Desktop, ton dossier et Claude in Chrome | [`docs/INSTALL-DESKTOP.md`](docs/INSTALL-DESKTOP.md) |
| Lui poser de meilleures questions ou le corriger | [`docs/PROMPTS-DEPART.md`](docs/PROMPTS-DEPART.md) |
| Revenir en arrière sans paniquer | [`docs/RECUPERER.md`](docs/RECUPERER.md) |
| Lire le déroulé détaillé du premier contact | [`docs/PREMIER-DEMARRAGE.md`](docs/PREMIER-DEMARRAGE.md) |

## Ce qui se passe au départ

1. **Cégep AI se présente.** Tu peux lui poser toutes tes questions scolaires; il doit expliquer ce qu’il voit et ce qu’il propose.
2. **Tu choisis comment commencer.** Le parcours guidé vérifie Claude in Chrome. Si tu préfères, tu peux aussi commencer par un PDF local dans `_inbox`.
3. **Tu ouvres Omnivox toi-même.** Cégep AI peut ensuite accompagner la navigation visible dans Chrome, si ton compte, ton forfait et tes permissions le permettent.
4. **Tu choisis pour le calendrier.** Il te montre les dates et leurs sources; tu acceptes, refuses ou corriges avant toute écriture dans Google Calendar.

GitHub sert à distribuer le modèle. Tes documents, tes résumés et tes préférences vivent localement dans `Documents\CegepAI`, pas dans ce dépôt.

## Ce que tu peux faire avec Cégep AI

Tu peux lui dire : « parle-moi plus simplement », « explique pourquoi tu as classé ça ici », « propose deux options », « oublie cette règle », « ne touche pas à mon agenda » ou « montre-moi la source ». Ces questions ne sont pas des erreurs : c’est exactement comme tu construis un système qui te ressemble.

| Capacité | Statut | Ce que ça veut dire |
|---|---|---|
| Dossier local, `_inbox`, sources et règles | **Disponible maintenant** | Le template contient les fichiers lisibles et modifiables. |
| Claude Desktop + dossier local | **Recommandé** | Une conversation proche de Claude Chat, avec ton dossier de session. |
| Claude in Chrome | **Parcours guidé** | Disponible avec Chrome, l’extension, les permissions et un forfait Anthropic direct compatible. |
| Omnivox dans Chrome | **Selon ton compte et tes permissions** | Tu te connectes toi-même; l’agent ne demande jamais ton mot de passe. |
| Google Calendar | **Optionnel, avec accord** | L’agent peut proposer des dates trouvées, mais doit les montrer et attendre ton accord. |
| PDF local dans `_inbox` | **Solution de secours simple** | Utile si tu préfères commencer sans navigateur ou si Chrome n’est pas disponible. |
| Codex, Cursor, Antigravity | **À tester** | Le dossier est lisible, mais chaque agent doit être vérifié avant une promesse complète. |

## Les quatre éléments de ton dossier

Après l’installation, `Documents\CegepAI` contient :

```text
CLAUDE.md    _ETAT.md    _inbox    .claude
```

| Élément | À quoi il sert |
|---|---|
| `CLAUDE.md` | Les règles du système et tes droits de contrôle. |
| `_ETAT.md` | Ce qui est vérifié, ce qui reste à confirmer et les règles de cours. |
| `_inbox` | Les nouveaux fichiers avant leur classement. |
| `.claude` | Les consignes et compétences prises en charge par certains agents. |

## Règles simples de confiance

- Tu te connectes toi-même à Omnivox et à Google.
- Cégep AI ne demande jamais ton mot de passe, même si tu l’offres.
- Il explique avant une action qui touche un compte, un navigateur, un calendrier ou tes fichiers.
- Il garde les PDF originaux et indique ce qui est **à confirmer**.
- Tu peux toujours dire non, demander une autre approche ou revenir en arrière.

## État du projet

Cégep AI est un prototype ouvert, créé avec des étudiants. Si tu testes le projet, ouvre une Issue et raconte le premier endroit où tu as hésité : c’est plus utile qu’un « ça marche ».

MIT.
