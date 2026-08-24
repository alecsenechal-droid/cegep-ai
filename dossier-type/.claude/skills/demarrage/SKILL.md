---
name: demarrage
description: Configure le dossier scolaire la première fois. Lit Omnivox pour remplir _ETAT.md avec les cours, l'horaire, les locaux, les enseignants et la politique d'IA de chaque cours. Se déclenche avec /demarrage, ou quand _ETAT.md est encore le gabarit.
---

# Démarrage — configurer le dossier la première fois

Ton but : que l'étudiant passe d'un dossier vide à un `_ETAT.md` rempli avec ses
vrais cours, **en lui posant le moins de questions possible**.

Le principe : **ne demande jamais ce que tu peux lire.** L'horaire, les locaux,
les enseignants et les codes de cours sont tous dans Omnivox. Poser ces questions,
c'est faire faire à l'étudiant le travail qu'on lui promet d'éviter.

---

## Étape 1 — Vérifier que c'est bien un premier démarrage

Lis `_ETAT.md`. S'il contient encore des `<...>`, c'est le gabarit : continue.

S'il est déjà rempli, dis-le et demande si l'étudiant veut le refaire ou juste
mettre à jour une partie. **N'écrase jamais un `_ETAT.md` rempli sans demander.**

---

## Étape 2 — Les trois seules questions

Pose-les ensemble, pas une par une :

1. **Ton cégep ?** (sert à trouver l'adresse d'Omnivox)
2. **Ton programme ?**
3. **Ta session ?** (ex. Automne 2026)

C'est tout. Le reste se lit.

---

## Étape 3 — Expliquer avant d'agir, et attendre

Avant de toucher au navigateur, dis à l'étudiant, en langage simple :

- **ce que tu vas faire** : ouvrir Omnivox dans son navigateur, lire la liste de
  ses cours, son horaire, et télécharger ses plans de cours
- **ce que tu ne feras jamais** : entrer son mot de passe, ou aller ailleurs que
  dans son Omnivox
- **le coût** : lire six cours prend plusieurs minutes et consomme des jetons.
  C'est un import qu'on fait une fois par session, pas tous les jours.

Puis **attends une confirmation claire.**

---

## Étape 4 — L'import depuis Omnivox

**Si Claude in Chrome est disponible :**

1. Demande à l'étudiant d'**ouvrir Omnivox et de se connecter lui-même**.
   *Tu n'entres jamais son mot de passe. Jamais.*
2. Quand il confirme, va dans **Léa**.
3. Pour chaque cours, relève : le **code**, le **nom**, l'**enseignant**, l'**horaire**
   et le **local**.
   - Le code du cours affiché est dans `div.infoCGNoCours`.
   - `div.TitrePageLigne2` donne code + nom + groupe : sers-t'en pour recouper.
   - ⚠️ **Ignore `table.tblMenuSelectionMenuV2`** : c'est le menu de sélection, il
     contient *tous* les cours sur *toutes* les pages. Y chercher un code classe
     au hasard, en silence. Filtre avec
     `element.closest('table.tblMenuSelectionMenuV2')`.
   - ⚠️ **Ne conserve jamais une URL de Léa.** Elle contient `SID=`, un jeton de
     session vivant qui change à chaque page. Garde seulement le domaine et le
     chemin.
4. Télécharge les **plans de cours** dans `_inbox/`.

**Si Claude in Chrome n'est pas disponible :**

Demande à l'étudiant de télécharger lui-même ses plans de cours depuis Léa et de
les déposer dans `_inbox/`. Puis continue à l'étape 5. Ça marche aussi, ça prend
juste dix minutes de son temps.

---

## Étape 5 — Lire les plans de cours

Pour chaque plan de cours, en **une seule lecture** :

1. Écris un résumé à côté : même nom + `-resume.md`. Sujet, évaluations,
   pondérations, règles particulières (retard, seuil de réussite, présence).
2. **Trouve la politique d'utilisation de l'IA.** Elle est presque toujours dans
   le plan de cours, souvent sous « intégrité intellectuelle », « plagiat » ou
   « intelligence artificielle ».
3. Classe le plan de cours dans `cours/<code-nom>/documents/`.

⚠️ **Le PDF reste un PDF.** Ne le convertis pas en Markdown — ça détruit les
tableaux et les schémas.

---

## Étape 6 — Remplir `_ETAT.md`

Écris :

- le tableau des cours : code, nom, enseignant, horaire, local, **IA permise**
- les évaluations et pondérations trouvées, avec ✅ quand c'est lu dans le
  document et ❓ quand ça reste à confirmer
- les questions ouvertes : ce qui manque, et **comment le confirmer**

**La colonne « IA permise » prend trois valeurs :**

| Valeur | Quand |
|---|---|
| ✅ permise | le plan de cours l'autorise explicitement |
| ⚠️ sous conditions | permise avec mention, citation ou usage limité — écris lesquelles |
| ❌ interdite | le plan de cours l'interdit |
| ❓ à vérifier | rien trouvé, ou formulation ambiguë |

**Tant qu'un cours est à ❓, applique la position la plus restrictive et dis-le à
l'étudiant.** Ne suppose jamais que c'est permis parce que ce n'est pas écrit.

---

## Étape 7 — Le rapport final

Termine par un résumé court :

- ce qui a été trouvé et écrit
- **ce qui n'a pas été trouvé**, et ce que l'étudiant doit faire pour compléter
- ⚠️ **les cours où l'IA est interdite ou à vérifier** — c'est la chose la plus
  importante à lui dire, dis-la en dernier pour qu'elle reste à l'écran

Puis rappelle-lui la suite : à partir de maintenant, tout ce qui arrive va dans
`_inbox/`, et il n'a qu'à demander « traite mon inbox ».

---

## Ce que tu ne fais jamais

- Entrer un mot de passe, ou te connecter à la place de l'étudiant
- Aller ailleurs que là où l'étudiant t'a demandé d'aller
- Écrire une date dans un fichier alors qu'elle appartient à son agenda
- Recopier le nom d'un autre étudiant
- Présenter une déduction comme un fait
