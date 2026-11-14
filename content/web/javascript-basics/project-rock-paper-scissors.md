### Introduction

Dans ce projet, vous allez créer le jeu [Pierre-feuille-ciseaux](https://www.wikihow.com/Play-Rock,-Paper,-Scissors). Il se jouera entièrement dans la console.

<div class="lesson-note" markdown="1">

#### Pas encore d'interface graphique

Certaines solutions d'élèves ci-dessous comprennent des boutons, du texte et d'autres éléments. Ils font partie d'une interface graphique (GUI), que vous créerez dans une prochaine leçon. Pour le moment, pensez à enregistrer votre code sur GitHub avec des commits.

</div>

### Méthode de résolution

Comme il s'agit de votre premier projet JavaScript construit à partir de zéro, souvenez-vous des conseils de la leçon sur la [résolution de problèmes](https://www.theodinproject.com/lessons/foundations-problem-solving). À chaque étape du projet :

1. Planifiez votre solution ou écrivez du pseudocode.
1. Écrivez le code.
1. Testez-le pour vérifier qu'il fonctionne.

### Exercices

<div class="lesson-content__panel" markdown="1">

<div class="lesson-note" markdown="1">

#### Concentrez-vous sur la tâche

Pour un projet interactif comme celui-ci, vous pourriez être tenté d'ajouter des fonctionnalités, d'améliorer l'interactivité, l'expérience utilisateur, le design ou le style de votre site. Nous vous recommandons de garder ces efforts pour vos projets de portfolio. Pour en savoir plus, lisez [« Strategically building your portfolio » dans « Becoming a TOP Success Story »](https://dev.to/theodinproject/strategically-building-your-portfolio-1km4).

</div>

Pensez à créer des commits régulièrement. Pour vous rafraîchir la mémoire, consultez la leçon sur les [messages de commit](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages).

#### Étape 1 : préparer la structure du projet

1. Créez un dépôt Git pour votre projet.
1. Créez un document HTML vide contenant une balise `script`.
1. Vérifiez que JavaScript est bien lié :
   - écrivez `console.log("Hello World")` en JavaScript ;
   - ouvrez votre page Web et vérifiez que « Hello World » apparaît dans la console du navigateur.

Il est recommandé de lier dans cette balise `script` un fichier JavaScript externe. Cela permet de garder le fichier HTML propre et organisé.

Vous n'avez pas besoin d'ajouter d'autre code au fichier HTML : le jeu se joue entièrement dans la console.

#### Étape 2 : obtenir le choix de l'ordinateur

Vous jouerez contre l'ordinateur. Écrivez une fonction qui renvoie aléatoirement « rock », « paper » ou « scissors ».

1. Créez une fonction appelée `getComputerChoice`.
1. Faites en sorte qu'elle renvoie aléatoirement l'une des chaînes suivantes : `"rock"`, `"paper"` ou `"scissors"`.
   - **Indice** : la méthode [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) renvoie un nombre aléatoire supérieur ou égal à 0 et inférieur à 1. Réfléchissez à la façon de l'utiliser pour renvoyer l'un des choix.
   - **Remarque** : les tableaux ne sont pas nécessaires pour ce problème. Si vous ne les connaissez pas encore, pas d'inquiétude : ils seront abordés plus tard.
1. Avant de continuer, vérifiez que la fonction renvoie le résultat attendu avec `console.log` ou les [outils de développement du navigateur](https://www.theodinproject.com/lessons/foundations-javascript-developer-tools).

#### Étape 3 : obtenir le choix du joueur

Le joueur humain choisira une option. Écrivez une fonction qui reçoit le choix de l'utilisateur et le renvoie.

1. Créez une fonction appelée `getHumanChoice`.
1. Faites en sorte qu'elle renvoie l'un des choix valides en fonction de la saisie de l'utilisateur.
   - **Indice** : utilisez la méthode [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) pour demander une saisie.
   - Vous n'avez pas besoin de redemander une valeur si la saisie est incorrecte : cela nécessiterait des notions qui seront enseignées plus tard. Pour le moment, supposez que le choix saisi est toujours valide.
1. Vérifiez la valeur renvoyée par la fonction avec `console.log`.

#### Étape 4 : déclarer les scores des joueurs

Le jeu doit suivre les scores des joueurs. Déclarez deux variables globales appelées `humanScore` et `computerScore`, puis initialisez-les à `0`.

#### Étape 5 : jouer un seul tour

Écrivez une fonction qui reçoit les choix des deux joueurs, joue un tour, augmente le score du gagnant et affiche un message annonçant le résultat.

1. Créez une fonction appelée `playRound`.
1. Définissez ses deux paramètres : `humanChoice` et `computerChoice`.
1. Rendez le paramètre `humanChoice` insensible à la casse, afin que les joueurs puissent saisir `rock`, `ROCK`, `RocK` ou d'autres variantes.
1. Faites en sorte que `playRound` affiche avec `console.log` une chaîne annonçant le gagnant du tour, par exemple : `"You lose! Paper beats Rock"`.
1. Augmentez `humanScore` ou `computerScore` selon le résultat.

Exemple de code :

```javascript
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

#### Étape 6 : jouer une partie complète

La partie se joue en cinq tours. Écrivez une fonction `playGame` qui appelle `playRound` cinq fois, suit les scores et annonce le gagnant à la fin.

1. Créez une fonction appelée `playGame`.
1. Déplacez la fonction `playRound` et les variables de score à l'intérieur de `playGame`.
1. Jouez cinq tours en appelant `playRound` cinq fois.
   - **Indice** : si vous affectez l'appel d'une fonction à une variable, cette variable reçoit la valeur renvoyée. La consulter ensuite ne rappelle pas la fonction. Il faut rappeler les fonctions de choix pour obtenir de nouveaux choix à chaque tour.
   - Modifiez vos fonctions précédentes ou créez des fonctions auxiliaires si nécessaire. Vous pourriez notamment vouloir renvoyer des valeurs plus utiles.
   - Si vous connaissez déjà les boucles, vous pouvez les utiliser. Sinon, elles seront abordées dans la prochaine leçon.

</div>
