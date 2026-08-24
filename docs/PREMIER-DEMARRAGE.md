# À quoi ça ressemble, du début à la fin

> ⚠️ **Les mots exacts vont varier.** Ce que tu lis ici, c'est ce que le skill
> demande à l'agent de faire — pas un enregistrement. Un agent reformule à sa
> façon. Ce qui est garanti, c'est **l'ordre des étapes, les questions posées, et
> ce qui est refusé.**

---

## 1. Sur GitHub — 30 secondes

Tu arrives sur la page du dépôt.

Bouton vert **`< > Code`** en haut à droite de la liste des fichiers →
**Download ZIP**.

Un fichier `cartable-main.zip` tombe dans tes Téléchargements.

---

## 2. Sur ton ordinateur — 1 minute

1. **Décompresse** le ZIP (clic droit → Extraire tout)
2. Ouvre `cartable-main`. Tu vois `extension`, `dossier-type`, `docs`,
   `README.md`…
3. Prends **seulement le dossier `dossier-type`**
4. **Renomme-le `Cartable`**
5. **Glisse-le dans tes Documents**

Ouvre `Documents\Cartable`. Tu dois voir **quatre choses** :

```
CLAUDE.md      _ETAT.md      _inbox      .claude
```

> ⚠️ **`.claude` est peut-être caché.** Windows : *Affichage → Afficher →
> Éléments masqués*. Mac : `Cmd + Shift + .`
>
> **S'il n'est pas là, arrête.** C'est lui qui contient `/demarrage`. Sans lui,
> la commande n'existe pas et tu vas chercher pourquoi pendant une heure.

---

## 3. Dans l'application Claude Code

Ouvre l'application → **Ouvrir un dossier** → `Documents\Cartable`.

Il lit `CLAUDE.md` tout seul, voit que `_ETAT.md` est encore le gabarit, et
t'accueille :

> Salut ! Ton dossier Cartable est tout neuf — `_ETAT.md` est encore le gabarit.
> Tape **`/demarrage`** et je vais lire ton Omnivox pour le remplir.

**Toi :**

```
/demarrage
```

---

## 4. La préparation

> **Bienvenue dans Cartable.**
>
> Je vais lire ton Omnivox une seule fois, comprendre ta session, et remplir ton
> agenda. Ensuite tu me poses tes questions normalement.
>
> Avant de commencer, deux minutes de préparation.
>
> **1. Claude in Chrome** — c'est lui qui va aller dans Omnivox à ta place. Est-ce
> que tu l'as installé ?
>
> **2. Ton agenda** — *(il vérifie lui-même)* Je vois que ton Google Agenda est
> branché. Je vais créer un calendrier séparé « Cégep », pour que tu puisses le
> masquer ou l'effacer sans toucher au reste.
>
> Une seule question : **tu es à quel cégep ?**

**Toi :**

```
Limoilou
```

> 💡 **Une seule question, c'est voulu.** Ton programme, ta session, ton horaire,
> tes profs, tes locaux : tout ça est déjà dans Omnivox. Te les faire retaper
> serait exactement le travail qu'on te promet d'éviter.

**Si tu n'as pas Claude in Chrome**, il te dit comment l'installer. Si tu ne peux
pas, il bascule : *« Télécharge tes plans de cours depuis Léa et dépose-les dans
`_inbox/`, je fais le reste. »*

**Si aucun agenda n'est branché**, là seulement il demande : *« Tu veux tes dates
dans ton agenda ? Je peux te faire un fichier `.ics` à importer. »*

---

## 5. Il explique avant de bouger

> Voici ce que je vais faire :
>
> - ouvrir ton Omnivox et parcourir tes cours un par un
> - lire tes documents, tes travaux, tes communiqués et tes MIO
> - télécharger et résumer tes plans de cours
> - remplir `_ETAT.md` et ton agenda
>
> **Je ne vais nulle part ailleurs que dans Omnivox.**
> **Je ne te demanderai jamais ton mot de passe** — c'est toi qui te connectes,
> je lis ta session ouverte.
>
> ⏱️ Le tour complet prend quelques minutes et consomme pas mal de jetons.
> **Je te suggère de commencer par un seul cours**, pour que tu voies le résultat
> avant de tout faire.
>
> Quand tu es prêt : ouvre Omnivox dans Chrome et connecte-toi. Dis-moi quand
> c'est fait.

**Toi :**

```
ok c'est ouvert, commence par un cours
```

---

## 6. Le premier cours

*(il navigue, lit, télécharge)*

> J'ai lu **235-315-LI — Mesure du travail**
> Rémy Bédard · mercredi 9 h à 12 h · local **Q2183**
>
> Dans son plan de cours :
> - ✅ 4 évaluations, pondérations trouvées : 25 / 25 / 30 / 20
> - ⚠️ **Retard = zéro immédiatement**, pas de pénalité graduelle
> - ❌ **L'IA n'est pas permise pour les travaux notés**
>
> J'ai écrit le résumé à côté du PDF, classé le document dans
> `cours/235-315-LI-mesure-du-travail/documents/`, et ajouté le cours à ton
> calendrier « Cégep ».
>
> Je continue avec les autres ?

**Toi :**

```
oui vas-y
```

---

## 7. Le rapport final

> **C'est fait.**
>
> - **6 cours** lus au complet
> - **11 documents** résumés
> - **23 événements** ajoutés à ton calendrier « Cégep »
> - `_ETAT.md` rempli
>
> **Ce que je n'ai pas trouvé :**
> - Le plan de cours d'Écriture n'est pas encore publié sur Léa → à refaire quand
>   il sortira
> - 3 dates d'examen sont données en semaines (« semaine 6 »), pas en dates
>   → marquées ❓ dans `_ETAT.md`. **Je ne les mets pas dans ton agenda tant que ce
>   n'est pas confirmé** — mieux vaut pas de date qu'une mauvaise date
>
> ⚠️ **La politique d'IA de tes cours :**
>
> | Cours | IA |
> |---|---|
> | Mesure du travail | ❌ interdite pour les travaux notés |
> | Écriture | ❌ interdite |
> | Mathématiques | ⚠️ permise avec mention obligatoire |
> | Anglais, Psycho | ✅ permise |
> | Outils de la qualité | ❓ rien trouvé — je prends la position prudente |
>
> Pour les ❌ et les ❓, je ne t'aiderai pas à produire un travail noté. Je peux
> t'expliquer la matière.
>
> À partir de maintenant : **`/maj`** quand il y a du nouveau dans Omnivox.

---

## 8. Le lendemain, et tous les autres jours

**Toi :**

```
c'est quoi qui s'en vient cette semaine ?
```

> - **Mercredi** : Mesure du travail 9 h à 12 h, Q2183
> - **Jeudi** : remise du devoir 2 en maths, avant 23 h 59
> - **Vendredi** : quiz de psycho (10 %)
>
> ⚠️ Ton devoir de maths et ton quiz de psycho tombent la même semaine que ta
> sortie en entreprise du mercredi. Ça fait une grosse semaine.

**Toi :**

```
peux-tu m'aider avec mon devoir de math ?
```

> Ton plan de cours de maths permet l'IA **à condition de le mentionner** dans ton
> travail. Donc oui, je peux t'aider — mais n'oublie pas la mention, sinon ça
> compte comme du plagiat.
>
> C'est quelle question qui bloque ?

**Toi :**

```
pis pour mon travail de mesure du travail ?
```

> Non. Le plan de cours de Rémy Bédard dit que l'IA n'est pas permise pour les
> travaux notés.
>
> Je peux t'expliquer la matière si tu veux comprendre quelque chose — mais je ne
> ferai pas le travail.

---

## Quand il y a du nouveau

**Toi :**

```
/maj
```

> J'ai regardé ton Omnivox depuis mardi.
>
> **Un MIO de Rémy Bédard, hier 19 h 42** — le cours de mercredi est déplacé au
> local **Q2303**.
>
> 🔴 J'ai modifié l'événement dans ton agenda. Le local a changé, l'heure est
> pareille.
>
> **Rien d'autre de neuf.**

---

## Ce qu'il ne fera jamais

- Te demander ton mot de passe Omnivox — même si tu l'offres
- Aller ailleurs que là où tu lui dis d'aller
- Mettre une date incertaine dans ton agenda
- Recopier le nom d'un autre étudiant
- T'aider sur un travail quand le prof l'interdit
