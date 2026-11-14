### Introduction

Dans les sections précédentes, tu as appris à structurer des pages avec HTML et à les mettre en forme avec CSS. L'étape suivante consiste à rendre la page *interactive* : c'est le rôle de JavaScript.

Cette section porte sur les bases de JavaScript et sur la façon de gérer les interactions entre la page web et l'utilisateur.

### Aperçu de la leçon

- Exécuter du JavaScript à partir d'un fichier HTML.
- Déclarer des variables avec let et const.
- Effectuer des opérations sur les nombres et les chaînes de caractères.
- Utiliser des opérateurs logiques et mathématiques.

### Exécuter du code JavaScript

Dans la majeure partie du parcours Foundations, le navigateur exécutera le JavaScript que tu écris. Des leçons ultérieures de Foundations et le parcours NodeJS expliqueront comment exécuter JavaScript en dehors du navigateur. Pour le moment, sauf indication contraire, exécute toujours ton JavaScript dans le navigateur afin d'éviter des erreurs inattendues.

Pour commencer, crée un fichier HTML et insère-y du JavaScript. Dans VS Code, saisis le raccourci ! puis appuie sur Tab pour générer le squelette HTML. Ajoute une balise script :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>

</body>
</html>
```

Enregistre le fichier, ouvre-le dans un navigateur, puis ouvre la console du navigateur :

1. Fais un clic droit sur la page vide.
1. Clique sur « Inspecter » ou « Inspecter l'élément » pour ouvrir les outils de développement.
1. Ouvre l'onglet Console : tu devrais y voir le résultat de l'instruction console.log.

<div class="lesson-note lesson-note--tip" markdown="1">

#### Aperçu en direct

Tu peux utiliser l'extension [Live Preview pour Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) pour actualiser automatiquement la page lorsque tu enregistres le fichier, sans devoir recharger le navigateur manuellement. Essaie de modifier le texte !

</div>

console.log() affiche quelque chose dans la console de développement du navigateur. Tu peux l'utiliser pour afficher les résultats des exemples et des exercices ci-dessous. Nous t'encourageons à écrire le code en même temps que tu lis cette leçon et les suivantes.

Tu peux aussi inclure JavaScript dans une page avec un fichier de script externe, comme tu associes une feuille CSS externe :

```html
<script src="javascript.js"></script>
```

Les fichiers JavaScript ont l'extension .js, comme les feuilles de style ont l'extension .css. Les scripts externes sont utilisés pour les programmes plus complexes. Nous avons choisi le nom javascript.js, mais tu peux utiliser n'importe quel nom, par exemple mon-script.js ou j-aime-odin.js.

### Variables

Les variables sont les éléments de base d'un programme. Imagine des contenants qui stockent les données de ton code.

![Illustration d'une boîte contenant une variable](https://cdn.statically.io/gh/TheOdinProject/curriculum/d39eaf2ca95e80705f703bb218216c10508f5047/foundations/javascript_basics/fundamentals-1/imgs/00.png)

Le mot-clé let permet de déclarer une variable :

```javascript
let firstName = "John";
let lastName = "Doe";

console.log(firstName);
console.log(lastName);
```

Que va afficher console.log ? Essaie !

Tu peux réaffecter une variable :

```javascript
let age = 11;
console.log(age); // outputs 11 to the console

age = 54;

console.log(age); // what will be output now?
```

Remarque qu'il n'y a pas de let à la ligne 4 : la variable a déjà été déclarée, on ne fait que lui attribuer une nouvelle valeur.

Et si tu ne veux pas qu'une variable puisse changer ? La constante pi, par exemple, n'a pas besoin d'être réaffectée. Utilise le mot-clé const :

```javascript
const pi = 3.14;
pi = 10;

console.log(pi); // What will be output?
```

Tu pourrais penser que 3.14 sera affiché. Essaie ! Une erreur est déclenchée et le programme n'atteint même pas console.log. Les erreurs sont très utiles : elles indiquent ce qui ne va pas dans le code et où se trouve le problème.

En résumé, il y a deux façons principales de déclarer une variable :

- let : la variable peut être réaffectée.
- const : la variable ne peut pas être réaffectée ; une tentative déclenche une erreur.

Il existe aussi var, l'ancienne façon de déclarer une variable en JavaScript. Comme let, une variable var peut être réaffectée, mais ce mot-clé a d'autres particularités que let et const ont corrigées. On ne l'utilise presque plus, mais tu peux rencontrer du code qui en contient.

### Nombres

Les nombres sont à la base de la logique de programmation. Presque toutes les tâches utiles impliquent un peu de calcul ; il est donc important de comprendre leur fonctionnement. En JavaScript, c'est assez familier.

JavaScript suit l'ordre standard des opérations mathématiques, souvent résumé par PEMDAS ou BODMAS :

1. Les parenthèses sont évaluées en premier.
1. Les puissances sont calculées ensuite, de droite à gauche.
1. Les multiplications et divisions sont effectuées de gauche à droite.
1. Les additions et soustractions sont effectuées en dernier, de gauche à droite.

Par exemple, l'expression (3 + 2) - 76 * (1 + 1) est valide en JavaScript et donne le résultat attendu lorsqu'elle est passée à console.log.

### Exercices

<div class="lesson-content__panel" markdown="1">

Ajoute le code suivant dans la balise script de ton fichier HTML :

1. Additionne deux nombres avec console.log(23 + 97). La console doit afficher 120.
1. Fais la même chose en additionnant six nombres différents.
1. Affiche la valeur de (4 + 6 + 9) / 77. La console devrait afficher environ 0.24675.
1. Essaie avec des variables :
   1. Ajoute let a = 10 dans la balise script.
   1. En dessous, ajoute console.log(a). La console devrait afficher 10.
   1. Réaffecte à a une autre valeur numérique, puis affiche de nouveau a. La nouvelle valeur devrait apparaître ; le résultat précédent affichera toujours 10.
   1. Ajoute ensuite let b = 7 * a en bas du script.
   1. Affiche b : la console doit montrer le résultat de la multiplication de 7 par la nouvelle valeur de a.
1. Essaie ces opérations :
   1. Déclare une constante max de valeur 57.
   1. Déclare une constante actual et affecte-lui max - 13.
   1. Déclare une constante percentage et affecte-lui actual / max.
   1. Affiche percentage. La console devrait montrer une valeur proche de 0.7719.
1. Prends quelques minutes pour tester différentes choses dans la balise script. Nous verrons plus tard comment afficher ces résultats sur la page ; la logique restera la même. Assure-toi de bien la maîtriser avant de poursuivre.

Lis ensuite ces ressources pour approfondir :

1. L'article MDN [Qu'est-ce que JavaScript ?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) explique son rôle dans une page web.
1. Lis l'article de JavaScript.info sur les [variables en JavaScript](https://javascript.info/variables).
1. L'article MDN sur les [mathématiques en JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) présente les mêmes notions sous un autre angle et montre comment effectuer des calculs.
1. Lis et code en même temps que l'article de JavaScript.info sur les [opérateurs JavaScript](http://javascript.info/operators). N'oublie pas de faire les exercices à la fin.

</div>
