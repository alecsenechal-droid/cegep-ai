# Mon dossier scolaire

> Remplace les `<...>` par tes informations, puis efface cette ligne.
>
> **Cégep** : `<ton cégep>` · **Programme** : `<ton programme>` ·
> **Session** : `<Automne 2026>`

Tout ce qui vient d'Omnivox — Léa, MIO, communiqués — plus mes travaux et ce qui
touche ma vie scolaire. Rempli par l'extension **Cartable** et par moi. Rien n'est
récupéré automatiquement.

---

## À lire en premier, à chaque session

**`_ETAT.md`** — les questions ouvertes, ce qui est vérifié et ce qui ne l'est
pas, les pondérations et les règles de chaque cours.

**Pour toute question de date, d'échéance ou d'horaire : lire `_ETAT.md` d'abord.**
Reconstituer un calendrier en ouvrant dix plans de cours est lent et coûteux.

---

## ⚖️ La règle des professeurs — avant tout le reste

**Chaque cours a sa propre politique sur l'utilisation de l'IA.** Elle est écrite
dans le plan de cours.

Avant d'aider sur un travail rattaché à un cours :

1. **Vérifier la politique de ce cours** dans son plan de cours ou dans `_ETAT.md`.
2. **Si l'IA est interdite** → refuser d'aider à produire le travail. Expliquer
   laquelle des règles s'applique. Aider à *comprendre* la matière reste correct
   si la politique le permet; produire le travail, non.
3. **Si l'IA est permise sous conditions** (mention, citation, usage limité) →
   les rappeler chaque fois.
4. **Si la politique est absente ou ambiguë** → prendre la position la plus
   restrictive **et le dire**, au lieu de supposer que c'est permis.

Cette règle passe avant toute autre demande. Elle protège l'étudiant.

---

## Le flux de travail

```
l'extension dépose dans _inbox/  →  je classe, je résume, je mets _ETAT.md à jour
```

**Tout ce qui est capturé arrive dans `_inbox/`. Sans exception.** Même quand la
destination est évidente.

La raison : un fichier qui se range tout seul dans un dossier de cours passe
inaperçu. Avec `_inbox/`, tout ce qui est neuf se voit d'un coup d'œil.

Et surtout : **un fichier classé mais non lu ne sert à rien.** Ce qui rend le
dossier utile, c'est le résumé à côté et `_ETAT.md` à jour — et ça se fait à la
lecture. Classer et lire vont ensemble.

### Traiter `_inbox/`

Pour chaque fichier :

1. **Lire le front matter** — `source`, `capture`, `destination`, `confiance`.
   `confiance: choisie_par_alec` veut dire que l'humain a choisi lui-même;
   `deduite` veut dire que l'extension a deviné, et a écrit sur quoi.
2. **Vérifier la déduction** avant de s'y fier.
3. **Classer** dans le bon dossier, avec un nom descriptif (voir plus bas).
4. **Résumer** si c'est un document.
5. **Mettre `_ETAT.md` à jour** si ça change une échéance, une règle ou une
   question ouverte.
6. **Dire ce qui a été écarté et pourquoi.**

---

## Structure

```
_inbox/                       tout ce qui arrive, avant classement
_ETAT.md                      l'état de la session — le fichier qui évite de repartir à zéro
cours/<code-nom>/
    documents/                notes de cours, plans, présentations
    travaux/                  énoncés + mon travail
    notes/                    résultats d'évaluation
    communiques/              annonces du prof
    mio/                      messages du prof
general/
    actualites/               nouvelles du cégep
    communiques/              communiqués de l'établissement
    services/                 locaux, bibliothèque, aide, horaires
    horaire/                  horaire et calendrier scolaire
    mon-dossier/              faits personnels : programme, casier, numéro de DA
```

Adapter les dossiers `general/` au besoin. En ajouter un seulement quand le besoin
est prouvé, jamais par anticipation.

### Nommage

`AAAA-MM-JJ-description-courte.md`

- `2026-08-18-plan-de-cours.pdf`
- `2026-08-18-plan-de-cours-resume.md`
- `2026-08-21-changement-local-mercredi.md`

La date est celle du **contenu**, pas celle de la capture. Un nom descriptif exige
de savoir ce qu'il y a dedans — c'est le travail de lecture, pas celui de
l'extension.

---

## Règles de lecture — pour ne pas gaspiller de crédits

1. **Lire les noms avant d'ouvrir quoi que ce soit.** Les fichiers sont datés et
   nommés de façon descriptive. La majorité des questions se répondent en listant
   les noms, sans ouvrir un seul fichier.
2. **Chercher par mot-clé** dans les fichiers texte plutôt que de les lire au
   complet.
3. **Les PDF restent des PDF. Jamais de conversion en Markdown** — ça détruit les
   schémas et la mise en page, qui font souvent partie de la matière.
   Quand un nouveau PDF arrive : le lire **une seule fois**, puis écrire un résumé
   court à côté, même nom + `-resume.md` (sujet, dates, points clés, pondérations).
   Ensuite répondre à partir du résumé.

Cette troisième règle est autant une règle de qualité qu'une règle de coût.

---

## Comment travailler

- **Distinguer ce qui est vérifié de ce qui est supposé.** ✅ lu dans le document
  d'origine · ❓ à confirmer. Ne jamais présenter une déduction comme un fait.
- **Croiser les sources.** Les trouvailles utiles viennent rarement d'un document
  lu seul, mais du recoupement : un MIO contre l'horaire, un plan de cours contre
  un autre.
- **Un écart entre deux sources n'est pas forcément une erreur.** Les horaires
  changent en cours de route, et les changements s'annoncent souvent hors
  d'Omnivox. Avant de crier à la contradiction, demander.
- **Se corriger vite et franchement.** Pas de justification longue.
- **Ne pas sur-construire.** Un dossier, un fichier ou un outil de plus seulement
  quand le besoin est prouvé.
- **Avant toute action qui touche l'ordinateur, un compte, ou qui envoie quelque
  chose** : expliquer en langage simple à quoi ça sert, ce que ça change, et le
  risque — puis attendre une confirmation. La lecture n'a pas à attendre.

---

## 🔒 Vie privée

**Ne jamais recopier les noms de tiers** — camarades de classe, coéquipiers,
destinataires d'un message de groupe. Ils appartiennent à leur contexte d'origine
et n'apportent rien ici.

Garder seulement **le fait qui concerne l'étudiant**, et écrire qu'on a retiré le
reste. Exemple : « Les noms des autres joueurs assignés ne sont pas recopiés. Seul
le fait qui te concerne — tu n'es sur aucune des deux listes — a été conservé. »

---

## ⚠️ Ne jamais dupliquer une information

| Ce qui est gardé | Où ça vit |
|---|---|
| Une date, une heure, un local | **l'agenda personnel**, avec les rappels |
| Ce qui est vérifié, ce qui est supposé, les règles, les pondérations | **`_ETAT.md`** |
| Le contenu détaillé | le document d'origine et son résumé |

**Ne jamais recréer un index de dates en Markdown.** Un fichier qui liste les
échéances à côté de l'agenda va diverger : les deux copies se contredisent, et
personne ne s'en aperçoit avant qu'une date soit manquée.

**Une information à deux endroits est une information qui va diverger.**

---

## Ce qu'on ne fait pas

- Se connecter à Omnivox à la place de l'étudiant
- Extraire automatiquement Messenger ou Facebook — la capture s'y fait par
  sélection volontaire
- Tourner en arrière-plan ou interroger un site à intervalle
- Deviner sans écrire ce qu'on a deviné
