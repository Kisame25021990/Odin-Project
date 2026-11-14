### Introduction

Vous y êtes ! Vous devriez maintenant bien maîtriser les fondamentaux de JavaScript. Il reste beaucoup à apprendre, mais vous êtes déjà capable de créer de nombreuses choses. Notre projet final combine tout ce que vous avez appris : créer une calculatrice à l'écran avec JavaScript, HTML et CSS.

Certaines étapes ne seront pas évidentes, mais si vous avez suivi le parcours, vous avez tout ce qu'il faut pour terminer le projet. Nous vous guiderons à travers les étapes ; la façon de les implémenter vous appartient.

<div class="lesson-note lesson-note--warning" markdown="1">

#### Mise en garde concernant `eval()` et `new Function()`

Avant de commencer, voici une mise en garde. En cherchant comment évaluer des expressions mathématiques complexes en JavaScript, vous rencontrerez probablement la fonction [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). Elle peut être très dangereuse. MDN explique pourquoi il ne faut [jamais utiliser eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!). Vous devrez créer vos propres fonctions pour évaluer les expressions de ce projet. En cherchant comment calculer des expressions, vous pourrez aussi trouver des solutions qui renvoient un `new Function()` chargé d'évaluer une chaîne. Comme `eval()`, cette approche est à éviter [en raison des risques liés à l'évaluation de données non fiables](https://stackoverflow.com/questions/4599857/are-eval-and-new-function-the-same-thing). Et puis, quel intérêt à laisser une solution faire tout le travail ? Au travail !

</div>

### Exercices

<div class="lesson-content__panel" markdown="1">

Pensez à enregistrer régulièrement vos changements avec des commits. Vous pouvez consulter la leçon sur les [messages de commit](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages).

Voici les fonctionnalités attendues :

1. Votre calculatrice doit proposer les opérations arithmétiques de base. Commencez par créer et tester dans la console du navigateur des fonctions pour :
   - additionner ;
   - soustraire ;
   - multiplier ;
   - diviser.
1. Une opération comprend un nombre, un opérateur et un autre nombre, par exemple `3 + 5`. Créez trois variables, une pour chaque partie. Vous les utiliserez ensuite pour mettre à jour l'affichage.
1. Créez une fonction `operate` qui reçoit un opérateur et deux nombres, puis appelle la fonction correspondante.
1. Créez une calculatrice HTML simple avec un bouton pour chaque chiffre et chaque opérateur, y compris `=`.
   - Les boutons n'ont pas encore besoin de fonctionner.
   - Ajoutez un écran et remplissez-le avec des nombres fictifs pour vérifier son apparence.
   - Ajoutez un bouton « Effacer ».
1. Créez les fonctions qui mettent à jour l'une de vos variables numériques au clic sur un chiffre. L'écran doit également refléter la valeur de cette variable.
1. Faites fonctionner la calculatrice ! Enregistrez les premier et deuxième nombres saisis, puis appelez `operate()` lorsqu'on appuie sur `=`, en utilisant l'opérateur choisi entre les deux nombres.
   - Vous savez déjà afficher le résultat : mettez l'écran à jour après l'appel à `operate`.
   - C'est la partie la plus difficile. Il faut déterminer comment stocker toutes les valeurs et appeler `operate` avec celles-ci. Prenez le temps de trouver la logique.
1. Points à surveiller : corrigez ces problèmes s'ils apparaissent dans votre code.
   - **La calculatrice ne doit traiter qu'une seule paire de nombres à la fois.** Par exemple : saisissez `12`, puis `+`, puis `7`, puis `-`. À ce moment, la calculatrice doit évaluer `12 + 7` et afficher `19`. Saisissez `1`, puis `=` : elle doit utiliser le résultat précédent (`19`), l'opérateur (`-`) et le nouveau nombre (`1`) pour calculer `19 - 1` et afficher `18`.
     - Pour voir le résultat attendu, essayez `12 + 7 - 1 =` dans cette [calculatrice en ligne](https://www.calculatorsoup.com/calculators/math/basic.php).
   - Arrondissez les résultats comportant beaucoup de décimales pour qu'ils ne débordent pas de l'écran.
   - Appuyer sur `=` avant d'avoir saisi tous les nombres ou un opérateur peut provoquer des problèmes.
   - Le bouton « Effacer » doit supprimer toutes les données afin de repartir de zéro.
   - Affichez un message d'erreur sarcastique si l'utilisateur tente de diviser par zéro, sans faire planter la calculatrice.
   - Ne lancez une opération que si l'utilisateur a fourni deux nombres et un opérateur. Si l'utilisateur saisit `2`, puis `+`, puis `+` à nouveau, ne calculez pas `2 + 2` et n'affichez pas `4`. En cas de pressions successives sur les opérateurs, ne lancez aucun calcul et gardez seulement le dernier opérateur pour l'opération suivante.
   - Après l'affichage d'un résultat, la saisie d'un chiffre doit effacer ce résultat et commencer un nouveau calcul, au lieu d'ajouter le chiffre à la suite. Vérifiez ce comportement.

#### Défi supplémentaire

- Les utilisateurs peuvent obtenir des nombres décimaux, mais ne peuvent pas encore en saisir. Ajoutez un bouton `.` pour permettre la saisie de décimales. Empêchez la saisie de plusieurs séparateurs, par exemple `12.3.56.5`, et désactivez le bouton s'il y a déjà un séparateur dans l'affichage.
- Ajoutez un bouton « Retour arrière » pour annuler la dernière saisie.
- Ajoutez la prise en charge du clavier.

</div>
