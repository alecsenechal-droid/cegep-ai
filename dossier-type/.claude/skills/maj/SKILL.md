---
name: maj
description: Va voir ce qui est nouveau dans Omnivox depuis la dernière fois — MIO, documents, travaux, notes — puis met _ETAT.md et l'agenda à jour. Se déclenche avec /maj, ou quand l'étudiant dit « quoi de neuf », « va voir Omnivox », « check mes MIO ».
---

# Mise à jour — aller voir ce qui est nouveau

C'est la boucle qui garde tout vivant. `/demarrage` a fait le grand balayage une
fois; toi, tu ne regardes que **ce qui a changé depuis**.

---

## Étape 1 — Savoir où on en était

Lis `_ETAT.md`, en particulier :

- la table **« Ce qui a été traité »** — la date du dernier passage
- les **questions ouvertes** — une réponse est peut-être arrivée
- **« Ce qui s'en vient »** — pour repérer ce qui est passé ou annulé

**Tu cherches du neuf, pas tout.** Relire ce qui est déjà résumé coûte cher et
n'apporte rien.

---

## Étape 2 — Annoncer, puis attendre

Dis en une phrase ce que tu vas faire — ouvrir Omnivox, regarder les MIO et les
sections de cours depuis telle date — et **attends le feu vert**.

Demande à l'étudiant d'ouvrir Omnivox et de se connecter lui-même s'il ne l'est
pas déjà. **Tu n'entres jamais son mot de passe.**

---

## Étape 3 — Le survol

Dans cet ordre, du plus signalant au moins signalant :

1. **MIO non lus** — c'est là que les changements de dernière minute arrivent
2. **Communiqués** de chaque cours
3. **Documents et Travaux** — repérer les fichiers ajoutés depuis le dernier
   passage
4. **Notes d'évaluation** — un résultat publié
5. **Actualités du cégep**, si l'étudiant en veut

**Lis les titres et les dates avant d'ouvrir quoi que ce soit.** La majorité des
éléments n'ont pas changé.

### Les pièges de Léa, rappel

- Le code du cours affiché est dans `div.infoCGNoCours`.
- ⚠️ **Ignore `table.tblMenuSelectionMenuV2`** — le menu contient tous les cours
  sur toutes les pages.
- ⚠️ **Ne conserve jamais une URL de Léa** : elle contient un jeton de session.

### 🔒 Les MIO de groupe

Ne recopie **jamais la liste des destinataires**. Ce sont des camarades de classe.
Garde l'expéditeur, la date, l'objet et le contenu.

---

## Étape 4 — Traiter ce qui est neuf

Pour chaque élément nouveau :

**Un message ou une annonce** → un fichier dans le bon dossier, nommé
`AAAA-MM-JJ-description-courte.md`, avec :

```markdown
# Un titre qui dit le sujet

- **Source** : MIO de <enseignant>, <cours>
- **Reçu le** : <date>
```

puis dans le corps : 🔴 ce que l'étudiant doit faire · ✅ ce qui est confirmé ·
❓ ce qui reste à valider · 🔒 ce qui a été retiré.

**Un document** → il reste dans son format, avec un `-resume.md` à côté. Une seule
lecture.

**Rien de neuf dans un élément** → dis-le, ne crée pas de fichier.

---

## Étape 5 — Croiser, c'est là qu'est la valeur

Ne traite pas les éléments un par un. Compare avec ce qui existe déjà :

- un MIO qui déplace un cours **contre l'horaire** → un conflit qu'il ne voyait pas
- une nouvelle date **contre les autres évaluations** → trois examens la même
  semaine
- un communiqué **contre le plan de cours** → une règle qui change

⚠️ **Un écart n'est pas forcément une erreur.** Les horaires changent en cours de
route. Avant de crier à la contradiction, demande-lui.

---

## Étape 6 — Mettre à jour l'agenda et `_ETAT.md`

**L'agenda reçoit les dates. `_ETAT.md` reçoit le reste.**

Dans l'agenda (calendrier « Cégep ») :

- **ajoute** les nouvelles dates certaines
- **modifie** un événement dont l'heure ou le local a changé
- **supprime** ce qui est annulé — un meeting annulé qui reste au calendrier, c'est
  pire que rien

Dans `_ETAT.md` :

- les réponses aux questions ouvertes, qui sortent de la liste
- les nouvelles questions ouvertes
- les pondérations ou règles découvertes
- une ligne dans **« Ce qui a été traité »**, avec la date

⚠️ **Une date certaine va dans l'agenda et nulle part ailleurs.** Ne construis
jamais une liste d'échéances en Markdown à côté — les deux copies vont diverger,
et personne ne le remarquera avant qu'une date soit manquée.

---

## Étape 7 — Le rapport

Court, et dans cet ordre :

1. ce qui est arrivé depuis la dernière fois
2. ce que tu as écarté, et pourquoi
3. les changements d'agenda — ajouts, modifications, suppressions
4. ⚠️ **les conflits trouvés en croisant** — c'est ce qu'il n'aurait pas vu tout
   seul
5. 🔴 **les actions qui lui reviennent** — en dernier, pour que ça reste à l'écran

S'il n'y a rien de neuf : dis-le en une phrase. C'est une bonne nouvelle, pas un
échec.
