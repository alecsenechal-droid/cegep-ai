# Récupérer sans paniquer

La première règle : **ne supprime pas `Documents\CegepAI` parce qu’un détail ne marche pas.** Le dossier contient tes documents et les règles de ton système. La plupart des problèmes se réparent en restaurant un fichier, en refaisant un résumé ou en demandant à l’agent d’expliquer.

## Un document est mal classé

Garde le document. Demande à ton agent :

```text
Ce document semble mal classé. Explique-moi où il est, où tu proposes de le mettre
et pourquoi. Attends mon OK avant tout déplacement.
```

## Un résumé est faux ou incomplet

L’original reste toujours la source. Demande :

```text
Le résumé de ce document est incomplet ou faux. Garde l’original, compare le
résumé au PDF et propose une version corrigée. Indique ce que tu as changé.
```

## Le dossier `.claude` manque

Retourne dans le ZIP téléchargé. Ouvre `dossier-type`, active les éléments masqués si nécessaire, puis copie seulement `.claude` vers `Documents\CegepAI`. Ne remplace pas tout ton dossier scolaire sans avoir compris ce qui serait écrasé.

## Tu ne sais plus ce que l’agent a changé

Demande :

```text
Liste les fichiers que tu as créés ou modifiés dans cette conversation. Ne modifie
rien. Dis-moi comment revenir en arrière pour chaque changement.
```

Si ton application montre une comparaison avant/après, lis-la avant d’accepter. Si elle ne montre pas les changements, demande une liste des fichiers et une explication en français simple.

## Une URL Omnivox complète est restée dans un fichier

Une URL de session peut contenir des paramètres temporaires. Demande à l’agent de retirer les paramètres après le `?` et de garder seulement le domaine et le chemin utile. Si tu n’es pas certain, retire complètement la ligne et garde une description de la source sans lien.

## L’extension Chrome ne fonctionne pas ou tu ne la veux plus

L’extension est optionnelle. Tu peux continuer en glissant manuellement un document dans `_inbox`. Si tu as créé le lien `Téléchargements\CegepAI` vers `_inbox`, supprimer **le lien** ne doit pas supprimer le vrai dossier `_inbox`. Vérifie le chemin avant toute suppression; le guide [`INSTALLATION.md`](INSTALLATION.md) explique le retrait du lien.

## Ton agenda ne semble pas correct

Ne fais pas confiance à une date incertaine. Vérifie-la dans le document source ou dans Omnivox. Si un calendrier séparé « Cégep » a été ajouté par un outil que tu as connecté, tu peux le masquer ou le supprimer sans toucher à ton agenda personnel. Les intégrations directes d’agenda dépendent de l’agent ou du connecteur utilisé; Cégep AI ne les garantit pas à lui seul.
