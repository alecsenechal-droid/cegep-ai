# Commence ici : parle à Cégep AI

Tu n’as pas besoin de connaître Git, les agents ou des commandes. Cégep AI doit d’abord se présenter, t’expliquer ce qu’il peut faire et te laisser décider du rythme.

> **Tu es en contrôle.** Tu peux poser toutes tes questions scolaires, changer la façon dont il te répond, lui demander ses sources, corriger son classement ou refuser ce qu’il propose.

## Le parcours le plus simple

Le chemin guidé est : **Claude in Chrome → Omnivox que tu ouvres toi-même → Google Calendar si tu le veux.** Il est pratique parce que tu restes dans les outils que tu connais déjà.

1. Ouvre Cégep AI dans Claude Desktop et laisse-le créer ou ouvrir `Documents\CegepAI` avec ton accord.
2. Quand il te propose Claude in Chrome, réponds oui si tu veux le parcours guidé.
3. Dans Claude Desktop : **tes initiales → Réglages → Connecteurs → Claude in Chrome → Configurer**. Active le connecteur et installe l’extension si elle est proposée.
4. Ouvre Omnivox dans Chrome et connecte-toi **toi-même**. Ne donne jamais ton mot de passe à Cégep AI.
5. Dis-lui ce que tu veux regarder, par exemple :

```text
Regarde avec moi ce qui est nouveau dans Omnivox. Commence par m’expliquer ce que tu vas lire et attends mon OK avant de télécharger ou modifier quelque chose.
```

6. S’il trouve une date ou une échéance, demande une source. S’il te propose Google Calendar, il doit te montrer les dates avant l’ajout.

## Si tu veux connecter ton calendrier

Tu peux répondre :

```text
Oui, je veux connecter mon Google Calendar. Montre-moi d’abord les dates, leurs sources et ce que tu veux ajouter. Attends mon OK avant de modifier mon calendrier.
```

Ton agent peut seulement proposer des dates; c’est toi qui les acceptes, les refuses ou les corriges. Les connecteurs et permissions varient selon ton agent et ton compte.

## Si tu veux commencer plus tranquillement

Tu peux commencer sans navigateur. Dépose un plan de cours dans `Documents\CegepAI\_inbox`, puis écris :

```text
Je découvre Cégep AI. Avant de modifier quoi que ce soit, explique-moi en 5 lignes
ce que tu vois dans mon dossier et ce que tu proposes de faire avec le PDF dans
_inbox. Attends mon OK.
```

Puis, si son plan est clair :

```text
OK. Lis le PDF dans _inbox. Garde l’original. Crée un résumé -resume.md à côté.
Dis-moi ce qui vient directement du PDF et ce qui reste à confirmer.
```

## Les bonnes questions à poser

Tu peux dire : « parle-moi plus simplement », « pourquoi tu as choisi ça? », « montre-moi deux options », « je ne suis pas d’accord avec ce classement » ou « qu’est-ce que je peux changer moi-même? ». Un système scolaire utile évolue avec toi.

Pour plus de messages prêts à copier, lis [`PROMPTS-DEPART.md`](PROMPTS-DEPART.md). Si quelque chose va mal, lis [`RECUPERER.md`](RECUPERER.md).
