### Introduction

Félicitations, vous voici à l'une des dernières leçons du parcours Foundations ! Vous avez maintenant appris de nombreux fondamentaux de JavaScript. Dans cette leçon, vous découvrirez les objets, des collections de paires clé-valeur, ainsi que des méthodes de tableau puissantes et courantes.

Vous comprendrez bientôt à quel point les objets et les tableaux sont utiles et indispensables dans votre boîte à outils JavaScript.

### Aperçu de la leçon

- Créer des objets.
- Accéder aux propriétés d'un objet.
- Utiliser plusieurs opérateurs d'objet.
- Comprendre les différences entre les objets et les types primitifs.

### Les objets

Les objets sont une partie très importante de JavaScript. On peut réaliser des tâches simples, et même intermédiaires, sans trop s'en préoccuper, mais tout projet réel en utilisera. Les usages des objets peuvent rapidement devenir complexes ; nous allons donc nous limiter aux bases. Nous les étudierons plus en profondeur par la suite.

1. Commencez par cet article de JavaScript.info sur les [objets](https://javascript.info/object). Vous pouvez ignorer les exercices à la fin.
1. Suivez également le guide de MDN sur les [bases des objets JavaScript](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics). Ignorez la section « Introduction aux constructeurs », un sujet plus avancé qui sera abordé plus tard.

### Différences entre les objets et les valeurs primitives

Plus tôt dans le parcours, vous avez découvert les [types de données primitifs](https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals). Vous avez maintenant vu le type objet, qui comprend notamment les objets (`{key: value}`), les tableaux et les fonctions. La différence principale est qu'une valeur primitive ne contient qu'une seule valeur (une chaîne, un nombre, etc.), tandis que les objets servent à stocker des collections de données et des entités plus complexes.

Il existe aussi des différences techniques qui influencent leur utilisation. Quand on définit une variable primitive, elle contient une copie de la valeur qui lui est attribuée :

```javascript
let data = 42;
// dataCopy will store a copy of what data contains, so a copy of 42
let dataCopy = data;

// which means that making changes to dataCopy won't affect data
dataCopy = 43;

console.log(data); // 42
console.log(dataCopy); // 43
```

En revanche, une variable objet contient une **référence** vers l'objet qui lui est attribué :

```javascript
// obj contains a reference to the object we defined on the right side
const obj = { data: 42 };
// objCopy will contain a reference to the object referenced by obj
const objCopy = obj;

// making changes to objCopy will make changes to the object that it refers to
objCopy.data = 43;

console.log(obj); // { data: 43 }
console.log(objCopy); // { data: 43 }
```

Ce comportement ne vous est pas inconnu. Dans votre dernier projet, vous avez modifié les cellules de la grille Etch-A-Sketch au moyen de références. Prenons cet exemple :

```javascript
const element = document.querySelector("#container");
element.style.backgroundColor = "red";
```

Nous modifions la variable que nous avons déclarée (`element`), mais le nœud correspondant du DOM change lui aussi. Pourquoi ? Le nœud dans notre code est une **référence** vers le même nœud que celui utilisé par le DOM. Si `element` était une copie du nœud (comme c'est le cas des valeurs primitives), sa modification n'aurait aucun effet sur l'original.

Il faut aussi tenir compte de ce comportement quand on passe des arguments à une fonction. Considérez les fonctions suivantes :

```javascript
function increaseCounterObject(objectCounter) {
  objectCounter.counter += 1;
}

function increaseCounterPrimitive(primitiveCounter) {
  primitiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);
```

À votre avis, que deviennent `object` et `primitive` après ces appels ?

Si vous avez répondu que le compteur de l'objet augmente de 1 et que le compteur primitif ne change pas, vous avez raison. Le paramètre `objectCounter` contient une référence vers le même objet que la variable `object`, tandis que `primitiveCounter` ne contient qu'une copie de la valeur primitive.

<div class="lesson-note" markdown="1">

#### Réaffecter une variable de type objet

Quand plusieurs variables font référence à un même objet, une modification de cet objet est visible par toutes ces variables. En revanche, réaffecter l'une d'elles à un nouvel objet ne réaffecte pas les autres. Par exemple :

```javascript
let animal = { species: "dog" };
let dog = animal;

// reassigning animal variable with a completely new object
animal = { species: "cat" };

console.log(animal); // { species: "cat" }
console.log(dog); // { species: "dog" }
```

</div>

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Maintenant que vous avez découvert les objets, revenez aux exercices sur les [méthodes de tableau](https://javascript.info/array-methods#tasks) de JavaScript.info vus quelques leçons plus tôt. Faites uniquement les exercices suivants :
   - `Map to names`
   - `Map to objects`
   - `Sort users by age`
   - `Get average age`
   - `Create keyed object from array`
1. Pour pratiquer davantage les objets dans des tableaux, créez un fork et clonez le [dépôt JavaScript30 de Wes Bos](https://github.com/wesbos/JavaScript30). Pour suivre ces deux exercices vidéo, ouvrez le fichier `index-START.html` :
   - [04 - Array Cardio Day 1](https://www.youtube.com/watch?v=HB1ZC7czKRs)
   - [07 - Array Cardio Day 2](https://www.youtube.com/watch?v=QNmRfyNg1lw)
1. Allez dans le dossier [`foundations/object_basics` du dépôt d'exercices JavaScript](https://github.com/TheOdinProject/javascript-exercises/tree/main/foundations/object_basics). Lisez le README de chaque exercice avant de le faire. Consultez aussi le [README général du dépôt](https://github.com/TheOdinProject/javascript-exercises#how-to-use-these-exercises "README du dépôt d'exercices JavaScript") pour les consignes :
   - `01_calculator`
   - `02_palindromes`
   - `03_fibonacci`
   - `04_getTheTitles`
   - `05_findTheOldest`

   Remarque : les solutions se trouvent dans le dossier `solution` de chaque exercice.

Si vous vous sentez dépassé ou bloqué, n'hésitez pas à revoir les notions ou à demander de l'aide sur le [serveur Discord de TOP](https://discord.gg/fbFCkYabZB) !

</div>
