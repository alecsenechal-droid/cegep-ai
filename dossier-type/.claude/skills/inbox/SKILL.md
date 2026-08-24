---
name: inbox
description: Traite ce qui est arrivé dans _inbox/ — classe, résume, et met _ETAT.md à jour. Se déclenche avec /inbox, ou quand l'étudiant dit « traite mon inbox », « qu'est-ce qui est arrivé », « classe mes affaires ».
---

# Inbox — traiter ce qui est arrivé

C'est la boucle quotidienne. `_inbox/` contient ce que l'extension a capturé et ce
que l'étudiant a déposé. Ton but : que `_inbox/` soit vide et que `_ETAT.md` soit
à jour.

---

## Étape 1 — Regarder avant d'ouvrir

Liste les fichiers de `_inbox/`. **Lis les noms d'abord.** Le nom contient déjà la
date et la destination choisie (`2026-08-23-1725-hockey.md`).

S'il n'y a rien, dis-le en une phrase et arrête.

---

## Étape 2 — Pour chaque fichier

### Lire le front matter

```yaml
capture: 2026-08-23 17:25
source: "..."
page: "..."
destination: hockey
deduit_de: "choix manuel dans le menu"
confiance: choisie_par_utilisateur
note: "..."        # seulement si la capture est abîmée
```

| Champ | Ce que ça veut dire |
|---|---|
| `confiance: certaine` | lu directement dans la page, fiable |
| `confiance: deduite` | l'extension a deviné — **vérifie avant de t'y fier**, `deduit_de` dit sur quoi |
| `confiance: choisie_par_utilisateur` | l'étudiant a choisi lui-même |
| `note:` présent | la capture est **dégradée** : sauts de ligne perdus ou texte coupé. Signale-le |

### Décider ce qu'on garde

Beaucoup de captures ne contiennent **rien de neuf**. C'est normal. Compare avec ce
qui est déjà dans le dossier et dans `_ETAT.md` avant de créer un fichier.

- **Rien de neuf** → dis-le, ne crée pas de fichier, supprime la capture.
- **Du neuf** → classe-le.

### Classer

Nom : `AAAA-MM-JJ-description-courte.md`, où la date est celle du **contenu**, pas
celle de la capture.

Le fichier classé doit contenir, en tête :

```markdown
# Un titre qui dit le sujet

- **Source** : d'où ça vient, en clair
- **Relevé le** : la date
```

Puis, dans le corps :

- 🔴 **ce que l'étudiant doit faire** — l'action, et rien d'autre dans ce bloc
- ✅ **ce qui est réglé ou vérifié**, avec où ça a été lu
- ❓ **ce qui reste à confirmer**, avec comment le confirmer
- 🔒 **ce qui a été retiré**, et pourquoi

Cite l'original avec `>` quand la formulation exacte compte.

### Un document (PDF, Word, Excel)

**Le fichier reste dans son format d'origine.** Ne le convertis pas.

Lis-le **une seule fois**, écris un résumé à côté — même nom + `-resume.md` — puis
réponds à partir du résumé par la suite.

---

## Étape 3 — 🔒 La vie privée, à chaque fois

**Ne recopie jamais les noms de tiers** — camarades, coéquipiers, destinataires
d'un message de groupe.

Garde le fait qui concerne l'étudiant, retire le reste, et écris que tu l'as fait :

> 🔒 Les noms des autres joueurs assignés ne sont pas recopiés. Seul le fait qui te
> concerne — tu n'es sur aucune des deux listes — a été conservé.

---

## Étape 4 — Mettre `_ETAT.md` à jour

Si une capture change une échéance, une règle, une pondération ou répond à une
question ouverte : mets `_ETAT.md` à jour **dans le même passage**.

⚠️ **Les dates vont dans l'agenda de l'étudiant, pas dans un fichier.** Quand tu
trouves une nouvelle date, dis-le-lui pour qu'il l'ajoute — ou ajoute-la toi-même
s'il a branché son agenda. **Ne construis jamais une liste d'échéances en
Markdown à côté de son agenda.** Les deux vont diverger, et personne ne le
remarquera avant qu'une date soit manquée.

---

## Étape 5 — Le rapport

Termine par un résumé court :

- ce qui est entré, et où c'est rendu
- **ce que tu as écarté, et pourquoi**
- 🔴 les actions qui ressortent, en dernier pour qu'elles restent à l'écran
- ⚠️ toute capture dégradée (`note:` présent) que l'étudiant devrait reprendre

---

## Le croisement, c'est là qu'est la valeur

Ne traite pas chaque fichier isolément. Les trouvailles utiles viennent du
recoupement :

- un changement d'horaire contre l'horaire de cours → un conflit qu'il ne voyait pas
- un message de prof contre le plan de cours → une règle qui change
- deux sources qui se contredisent → **ce n'est pas forcément une erreur**, c'est
  souvent une mise à jour. Demande avant de conclure.
