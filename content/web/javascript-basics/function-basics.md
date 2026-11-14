### Introduction

Les choses deviennent *vraiment* intéressantes. Jusqu'ici, tu as écrit beaucoup de code pour résoudre différents problèmes, mais il aurait pu être plus utile.

Imagine que tu puisses regrouper ton script dans un petit paquet réutilisable, sans devoir réécrire ou modifier le code. C'est la puissance des fonctions, que l'on utilise *constamment* en JavaScript.

### Aperçu de la leçon

- Définir et appeler différents types de fonctions.
- Utiliser la valeur renvoyée par une fonction.
- Comprendre la portée d'une fonction.

### Les fonctions

Examinons les paramètres et les arguments avec cet exemple :

```javascript
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

const message = favoriteAnimal('Goat')
console.log(message)
```

En JavaScript, les **paramètres** sont les éléments placés entre les parenthèses de la déclaration d'une fonction. Les **arguments** sont les valeurs que l'on transmet réellement à la fonction.

Dans l'exemple, la définition de la fonction se trouve sur la première ligne : function favoriteAnimal(animal). Le paramètre animal est entre les parenthèses. On aurait pu l'appeler pet, x ou blah, mais animal donne un contexte à la personne qui lit le code.

En plaçant animal entre les parenthèses de favoriteAnimal, on indique à JavaScript qu'une valeur sera transmise à la fonction. animal est donc un **espace réservé** pour cette valeur. Mais quelle valeur lui transmettre ?

À la cinquième ligne, on appelle la fonction avec favoriteAnimal('Goat') et on lui transmet 'Goat'. Cette valeur est l'argument. On demande à la fonction d'utiliser 'Goat' partout où figure l'espace réservé animal. Grâce au paramètre, on peut choisir n'importe quel animal.

![Transmission des paramètres à une fonction et retour de valeurs](https://cdn.statically.io/gh/TheOdinProject/curriculum/c53dd9a12f0c9afde0d9229f82a176170f12e120/foundations/javascript_basics/function_basics/imgs/00.png)

Dans l'exemple, le résultat de favoriteAnimal('Goat') est stocké dans message, puis transmis comme argument à log(). On peut aussi transmettre directement l'appel d'une fonction comme argument à une autre fonction :

```javascript
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))
```

Ici, on transmet favoriteAnimal('Goat') à log(). La valeur renvoyée par l'appel — la chaîne "Goat is my favorite animal!" — sert directement d'argument à log(), sans passer par une variable intermédiaire.

Tu transmettras souvent des appels de fonction comme arguments. Si tu appelles simplement favoriteAnimal('Goat') sans demander à console.log d'afficher sa valeur de retour, la fonction renverra quand même cette chaîne, mais elle n'ira nulle part : rien ne s'affichera dans la console et la chaîne ne sera pas stockée.

Essaie le code et remplace 'Goat' par ton animal préféré. Modifie aussi le nom animal dans la déclaration et dans le corps de la fonction. Que se passe-t-il ?

### Exercices

<div class="lesson-content__panel" markdown="1">

<div class="lesson-note lesson-note--warning" markdown="1">

#### Exercices MDN

Les articles MDN proposés contiennent aussi leurs propres exercices. Ne les fais pas : ils portent sur des notions qui n'ont pas encore été abordées.

</div>

1. Lis l'article de JavaScript.info sur les [bases des fonctions](http://javascript.info/function-basics). JavaScript a évolué au fil des ans et les fonctions ont reçu de nouvelles fonctionnalités, dont les paramètres par défaut. Dans la section « Functions == Comments » et dans le dernier exercice, il est question de boucles, qui seront abordées dans la leçon suivante. Tu peux ignorer ces notions pour le moment.
1. Lis l'[article MDN sur les fonctions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions). Certaines fonctions présentées dépassent peut-être le cadre de cette leçon ; concentre-toi sur la section concernant la portée des fonctions, un sujet souvent difficile pour les débutants comme pour les développeurs intermédiaires.
1. Lis l'article sur les [valeurs de retour](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values).
1. Lis les articles sur les [expressions de fonction](http://javascript.info/function-expressions) et les [fonctions fléchées](http://javascript.info/arrow-functions-basics). Les fonctions fléchées sont utiles mais pas indispensables pour l'instant. Tu en rencontreras probablement plus tard ; il est donc utile de savoir les reconnaître.
1. Enfin, découvre la [pile d'appels JavaScript](https://www.javascripttutorial.net/javascript-call-stack/). Cet article explique en détail la pile d'appels et le fonctionnement de return lorsque les appels de fonctions sont enchaînés. Tu n'as pas besoin de tout comprendre maintenant, mais garde à l'esprit où vont les valeurs renvoyées.

Écris maintenant quelques fonctions dans la balise script d'un fichier HTML. Si tu as oublié comment préparer le fichier, revois les instructions sur [l'exécution du code JavaScript](#/web/javascript-basics/variables-and-operators#exécuter-du-code-javascript). Pour le moment, affiche les résultats avec console.log.

1. Écris une fonction add7 qui reçoit un nombre et renvoie ce nombre augmenté de 7. add7(10) doit renvoyer 17.
1. Écris une fonction multiply qui reçoit deux nombres et renvoie leur produit. multiply(3, 2) doit renvoyer 6.
1. Écris une fonction capitalize qui reçoit une chaîne et renvoie cette chaîne avec uniquement sa première lettre en majuscule. Elle doit fonctionner avec une chaîne en minuscules, en majuscules ou avec une casse mélangée.
   - capitalize("abcd") doit renvoyer "Abcd".
   - capitalize("ABCD") doit renvoyer "Abcd".
   - capitalize("aBcD") doit renvoyer "Abcd".
1. Écris une fonction lastLetter qui reçoit une chaîne et renvoie sa dernière lettre. lastLetter("abcd") doit renvoyer "d".

</div>
