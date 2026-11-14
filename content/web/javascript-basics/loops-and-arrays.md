### Introduction

La répétition est l'un des défis de la programmation. Répéter manuellement certaines instructions peut convenir, mais il est parfois préférable de simplifier les tâches répétitives pour rendre le code plus lisible. Un autre défi consiste à gérer de grandes quantités de données. Par exemple, comment stocker les noms de tous les élèves de votre classe ? Vous pourriez créer une variable pour chaque nom, mais ce serait fastidieux et inefficace, et il serait difficile de gérer ces variables ou de les mettre à jour.

Heureusement, il existe des solutions. Dans cette leçon, vous découvrirez les boucles, des structures de contrôle qui exécutent plusieurs fois un bloc de code, ainsi que les tableaux, des structures de données capables de stocker plusieurs valeurs dans une seule variable. Les tableaux sont très utiles pour organiser et manipuler de grandes quantités de données. Les boucles permettent souvent d'effectuer la même opération sur chaque élément d'un tableau. Enfin, vous découvrirez le développement piloté par les tests (TDD), une pratique qui consiste à écrire les tests avant le code.

### Aperçu de la leçon

Cette leçon aborde les sujets suivants :

- Utiliser des boucles.
- Utiliser des tableaux.
- Utiliser des méthodes de tableau comme `map`, `filter` et `reduce`.
- Pratiquer le TDD avec des exercices.

### Les boucles

Les ordinateurs ne se fatiguent pas et sont extrêmement rapides. Ils sont donc bien adaptés aux problèmes qui nécessitent de répéter des calculs. En quelques secondes, un ordinateur peut répéter une tâche des milliers, voire des millions de fois, alors qu'elle demanderait des heures à une personne. La vitesse dépend bien sûr de la complexité du calcul et de celle de l'ordinateur.

Pour répéter plusieurs fois un ensemble d'instructions, on utilise une **boucle**. Consultez les ressources suivantes. Certaines présentent des exemples avec des tableaux, que nous étudierons plus en détail dans la prochaine section. Pour le moment, retenez qu'un tableau est simplement une liste d'éléments.

1. Lisez l'article de MDN [Boucler sur du code](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/Looping_code). Il est assez long : pensez à faire les exercices vers la fin de la page.
1. Consultez également l'article de JavaScript.info [Les boucles : while et for](https://javascript.info/while-for), qui présente les mêmes notions sous un angle légèrement différent. Faites les exercices à la fin : c'est en pratiquant que l'on apprend le mieux.

### Les tableaux

Les chaînes de caractères et les nombres sont des éléments de base, mais à mesure que vos scripts deviennent plus complexes, vous aurez besoin de gérer de grandes quantités de données. JavaScript propose plusieurs types conçus à cette fin. Un tableau est une collection ordonnée d'éléments (chaînes de caractères, nombres ou autres valeurs). Certaines méthodes de tableau présentées dans les ressources ci-dessous accomplissent des tâches similaires aux boucles. Une boucle réelle offre parfois davantage de contrôle, tandis qu'une méthode de tableau appropriée peut suffire et rendre le code plus lisible.

1. Cette [présentation rapide des tableaux JavaScript](https://www.youtube.com/watch?v=7W4pQQ20nJg) en donne un aperçu en environ six minutes.
1. Lisez cette [introduction aux tableaux](https://javascript.info/array) de JavaScript.info. Vous n'avez pas besoin de faire les exercices à la fin.
1. Pour approfondir les méthodes de tableau, lisez le [guide des méthodes de tableau](https://javascript.info/array-methods) de JavaScript.info. Là encore, vous pouvez ignorer les exercices pour le moment : nous y reviendrons plus tard.
1. Ajoutez aux favoris la [documentation des tableaux sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array). Il n'est pas nécessaire de tout mémoriser. Vous y trouverez les propriétés et méthodes intégrées des tableaux et leur documentation ; vous la consulterez probablement régulièrement.

### Quelques exemples de la puissance des tableaux

En plus de faciliter le stockage des données, les tableaux disposent de méthodes qui permettent de les manipuler de façon très efficace. Avec l'expérience, vous trouverez de nombreuses occasions de les utiliser. Il n'y en a que quelques-unes à connaître, mais elles offrent énormément de possibilités.

Prenons une fonction `sumOfTripledEvens` qui va :

1. Recevoir un tableau.
1. Multiplier par trois chaque nombre pair.
1. Additionner ces nombres transformés.

Comment pourriez-vous l'implémenter en pseudocode ?

1. Nous devons agir uniquement sur les nombres pairs.
1. Nous devons transformer ces nombres en les multipliant par 3.
1. Enfin, nous devons additionner les résultats de cette transformation.

Avec cette logique, vous pourriez écrire le code suivant :

```javascript
function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
```

Trois lignes importantes sont à remarquer :

- `if (array[i] % 2 === 0)` vérifie si un nombre donné est pair.
- `const tripleEvenNumber = array[i] * 3` multiplie ce nombre par trois.
- `sum += tripleEvenNumber` ajoute ce nombre à la somme.

Chaque partie résout un problème précis. On peut toutefois obtenir le même résultat avec des méthodes de tableau, parfois plus faciles à lire et à comprendre.

#### La méthode `map`

`map` est une méthode qui attend une fonction de rappel (*callback*) en argument. Autrement dit, on lui passe une autre fonction.

Imaginons une fonction `addOne` qui reçoit `num` et renvoie cette valeur augmentée de 1, ainsi qu'un tableau de nombres `[1, 2, 3, 4, 5]`. Pour augmenter chaque nombre de 1, plutôt que d'écrire une boucle `for`, nous pouvons utiliser la méthode `map`, qui parcourt automatiquement le tableau :

```javascript
function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
```

`map` renvoie un nouveau tableau et ne modifie pas le tableau d'origine :

```javascript
// The original array has not been changed!
console.log(arr); // Outputs [1, 2, 3, 4, 5]
```

Cette utilisation de `map` peut être plus élégante qu'une boucle `for`. On peut encore simplifier le code : comme `addOne` n'est utilisée nulle part ailleurs et qu'elle est simple, définissons-la directement sous forme de fonction fléchée :

```javascript
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
```

#### La méthode `filter`

`filter` ressemble à `map`. Elle parcourt le tableau et appelle la fonction de rappel sur chaque élément. Mais au lieu de transformer les valeurs, elle renvoie un nouveau tableau qui ne contient que les éléments pour lesquels la fonction renvoie `true`.

Imaginons une fonction `isOdd` qui renvoie `true` si un nombre est impair, et `false` dans le cas contraire. Pour retirer tous les nombres pairs du tableau `[1, 2, 3, 4, 5]`, on peut utiliser `.filter()` ainsi :

```javascript
function isOdd(num) {
  return num % 2 !== 0;
}
const arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums); // Outputs [1, 3, 5];
console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected
```

- `filter` parcourt `arr` et transmet chaque valeur, l'une après l'autre, à la fonction de rappel `isOdd`.
- `isOdd` renvoie `true` pour une valeur impaire, qui est alors incluse dans le résultat.
- Pour un nombre pair, `isOdd` renvoie `false` et la valeur n'est pas incluse.

#### La méthode `reduce`

Supposons maintenant que nous voulions multiplier tous les nombres de `arr`, soit `1 * 2 * 3 * 4 * 5`. Avec une boucle `for`, il faudrait déclarer une variable `total`, l'initialiser à 1, puis parcourir le tableau et la multiplier par chaque nombre.

La méthode `reduce` fait ce travail. Comme `.map()` et `.filter()`, elle attend une fonction de rappel, mais avec deux différences importantes :

- La fonction de rappel reçoit deux arguments. Le premier est l'**accumulateur**, c'est-à-dire le résultat courant au fil du parcours. À la première itération, il prend la valeur `initialValue` (décrite ci-dessous), ou celle du premier élément si aucune valeur initiale n'est fournie. Le second argument est la valeur courante, l'élément traité à cette itération.
- `reduce` accepte aussi une `initialValue` facultative comme deuxième argument, après la fonction de rappel. Elle permet de choisir une valeur de départ différente du premier élément. Par exemple, on peut additionner les éléments d'un tableau en omettant cette valeur, ou additionner les éléments et 10 en utilisant 10 comme valeur initiale.

```javascript
const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]
```

Ici, nous :

- Passons la fonction de rappel `(total, currentItem) => total * currentItem`.
- Initialisons `total` à `1` dans le deuxième argument.

`.reduce()` parcourt chaque élément de `arr` et lui applique la fonction de rappel. La valeur de `total` est mise à jour sans modifier le tableau. À la fin, la méthode renvoie `total`.

#### Récapitulatif

Vous avez découvert trois méthodes puissantes : `map`, `filter` et `reduce`. Elles peuvent rendre le code plus lisible et donc moins sujet aux erreurs.

Cette image illustre ces méthodes à l'aide de sandwichs :

![Exemple illustrant les méthodes filter, map et reduce avec la préparation d'un sandwich](https://cdn.statically.io/gh/TheOdinProject/curriculum/335ab97a10d66d0f07e81d01fc6b1c63d31dc5ae/foundations/javascript_basics/loops_and_arrays/imgs/00.jpg)

Voici une réécriture de `sumOfTripledEvens(array)` qui utilise ces trois méthodes :

```javascript
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0) // filter the array to only contain even numbers
    .map((num) => num * 3) // multiply each number in the array by 3
    .reduce((acc, curr) => acc + curr); // calculate the sum of all numbers in the array
}
```

### Développement piloté par les tests

Le développement piloté par les tests (TDD, *test-driven development*) consiste à écrire des tests automatisés qui décrivent le fonctionnement attendu du code avant de l'écrire. Par exemple, pour créer une fonction qui additionne deux nombres, on commencerait par écrire un test qui l'appelle et vérifie le résultat attendu. Le test échouera avant l'implémentation ; une fois qu'il réussit, vous savez que le code fonctionne comme prévu.

À bien des égards, le TDD est plus productif que l'écriture de code sans tests. Sans test pour la fonction d'addition, il faudrait exécuter le code encore et encore avec différents nombres pour vérifier son fonctionnement. Ce n'est pas très compliqué pour `add(2, 2)`, mais imaginez devoir vérifier une fonction plus complexe, comme celle qui détermine si quelqu'un a gagné une partie de morpion : `game_win(["o", null,"x",null,"x",null,"x", "o", "o"])`. Sans TDD, il faudrait peut-être jouer plusieurs parties contre vous-même pour vérifier le résultat !

Nous apprendrons à écrire ces tests plus tard dans le cours. Pour le moment, poursuivez les exercices JavaScript précédents.

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Faites uniquement les exercices suivants à la fin de l'article de JavaScript.info sur les [méthodes de tableau](https://javascript.info/array-methods#tasks) :
   - `Translate border-left-width to borderLeftWidth`
   - `Filter range`
   - `Filter range "in place"`
   - `Sort in decreasing order`
   - `Copy and sort array`
   - `Shuffle an array`
   - `Filter unique array members`
1. Rendez-vous dans le dossier [`foundations/loops_and_arrays` du dépôt d'exercices JavaScript](https://github.com/TheOdinProject/javascript-exercises/tree/main/foundations/loops_and_arrays). Lisez le fichier README de chaque exercice avant de le faire, et consultez si nécessaire le [README général du dépôt](https://github.com/TheOdinProject/javascript-exercises#how-to-use-these-exercises "README du dépôt d'exercices JavaScript") pour les consignes. Faites les exercices dans l'ordre :
   - `01_repeatString`
   - `02_reverseString`
   - `03_removeFromArray`
   - `04_sumAll`
   - `05_leapYears`
   - `06_tempConversion`

   Remarque : les solutions sont disponibles dans le dossier `solution` de chaque exercice.

</div>
