### Introduction

Avant d'aborder des notions JavaScript très intéressantes, commençons par parler de *résolution de problèmes*, la compétence la plus importante pour un développeur.

Résoudre des problèmes est au cœur du métier des développeurs logiciels. Les langages de programmation et les outils qu'ils utilisent sont secondaires par rapport à cette compétence fondamentale.

Dans son livre *Think Like a Programmer*, V. Anton Spraul définit la résolution de problèmes en programmation ainsi :

> Résoudre un problème, c'est écrire un programme original qui accomplit un ensemble de tâches précis tout en respectant toutes les contraintes énoncées.

Ces tâches peuvent aller de petits exercices de programmation à la création d'un réseau social comme Facebook ou d'un moteur de recherche comme Google. Chaque problème comporte ses propres contraintes. Les performances et la capacité à évoluer comptent peut-être peu pour un exercice, mais elles sont essentielles pour des applications comme Google, qui doivent traiter chaque jour des milliards de recherches.

Les débutants trouvent souvent que la résolution de problèmes est la compétence la plus difficile à développer. Il n'est pas rare de voir des personnes apprendre facilement la syntaxe et les concepts de programmation, puis rester devant leur éditeur de texte sans savoir par où commencer lorsqu'elles doivent coder quelque chose par elles-mêmes.

La meilleure façon de progresser est d'acquérir de l'expérience en créant beaucoup de programmes. Plus vous pratiquez, mieux vous serez préparé à résoudre des problèmes concrets.

Dans cette leçon, nous allons parcourir quelques techniques utiles pour résoudre des problèmes.

### Aperçu de la leçon

Voici les sujets abordés dans cette leçon :

- Expliquer les trois étapes du processus de résolution de problèmes.
- Expliquer ce qu'est le pseudocode et l'utiliser pour résoudre des problèmes.
- Décomposer un problème en sous-problèmes.

### Comprendre le problème

La première étape consiste à comprendre exactement le problème. Si vous ne le comprenez pas, vous ne saurez pas quand vous l'aurez résolu et risquez de perdre beaucoup de temps sur une mauvaise solution.

Pour clarifier le problème, écrivez-le sur papier, reformulez-le en français courant jusqu'à ce qu'il soit compréhensible et dessinez des schémas si cela vous aide. Si vous pouvez expliquer le problème à quelqu'un d'autre en termes simples, c'est que vous l'avez compris.

### Planifier

Maintenant que vous savez ce que vous cherchez à résoudre, ne vous précipitez pas encore dans le code. Commencez par planifier votre solution.

À cette étape, posez-vous notamment les questions suivantes :

- Votre programme comporte-t-il une interface utilisateur ? À quoi ressemblera-t-elle et quelles fonctions proposera-t-elle ? Dessinez-la sur papier.
- Quelles données seront fournies au programme ? L'utilisateur les saisira-t-il, ou viendront-elles d'une autre source ?
- Quel résultat souhaitez-vous obtenir ?
- À partir des données fournies, quelles étapes permettront d'obtenir ce résultat ?

Cette dernière question vous amène à écrire un algorithme. On peut voir un algorithme comme une recette pour résoudre un problème donné. Il décrit, en pseudocode, les étapes que l'ordinateur devra suivre.

### Pseudocode

Le pseudocode consiste à décrire la logique d'un programme en langage naturel plutôt qu'en code. Il vous aide à ralentir et à réfléchir aux étapes que le programme devra suivre pour résoudre le problème.

Voici un exemple de pseudocode pour un programme qui affiche tous les nombres jusqu'à celui saisi par l'utilisateur :

```text
When the user inputs a number
Initialize a counter variable and set its value to zero
While counter is smaller than user inputted number increment the counter by one
Print the value of the counter variable
```

Ce programme simple illustre la forme du pseudocode. Vous trouverez d'autres exemples dans les exercices.

### Diviser pour mieux résoudre

Votre plan devrait vous avoir permis de repérer les sous-problèmes qui composent le problème général. Chacune des étapes de l'algorithme écrit précédemment constitue un sous-problème. Choisissez le plus petit ou le plus simple et commencez à le coder.

Gardez à l'esprit que vous ne connaissez peut-être pas à l'avance toutes les étapes nécessaires : votre algorithme peut être incomplet, et ce n'est pas grave. Résoudre l'un des sous-problèmes repérés pendant la planification révèle souvent le suivant. Si vous savez déjà quelle est l'étape suivante, il sera peut-être plus facile de l'aborder une fois la première résolue.

Beaucoup de débutants tentent de résoudre le problème entier d'un seul coup. **Ne faites pas cela.** Si le problème est assez complexe, vous risquez de vous embrouiller et de vous compliquer la tâche. Il vaut bien mieux décomposer le problème en sous-problèmes plus petits et plus faciles à résoudre. La décomposition est le principal moyen de gérer la complexité : elle rend les problèmes plus abordables et plus faciles à comprendre.

En bref, décomposez le problème général et résolvez chaque sous-problème jusqu'à ce que le problème soit réglé.

### Résoudre Fizz Buzz

Pour illustrer cette méthode, résolvons le jeu [Fizz Buzz](https://en.wikipedia.org/wiki/Fizz_buzz).

#### Comprendre le problème

> Écrivez un programme qui demande une valeur à l'utilisateur et affiche les nombres de 1 jusqu'à cette valeur. Pour les multiples de 3, affichez `Fizz` à la place du nombre ; pour les multiples de 5, affichez `Buzz`. Pour les nombres qui sont à la fois des multiples de 3 et de 5, affichez `FizzBuzz`.

Voilà le problème général. Nous pouvons le clarifier en le reformulant ainsi :

Écrivez un programme qui demande un nombre à l'utilisateur, puis affiche chaque nombre de 1 jusqu'à ce nombre. Pour les nombres divisibles par 3 sans reste, affichez `Fizz`. Pour ceux divisibles par 5 sans reste, affichez `Buzz`. Enfin, pour ceux qui sont divisibles à la fois par 3 et par 5 sans reste, affichez `FizzBuzz`.

#### Planifier

Votre programme comporte-t-il une interface ? À quoi ressemblera-t-elle ?
Notre solution Fizz Buzz s'exécutera dans la console du navigateur : aucune interface particulière n'est nécessaire. La seule interaction avec l'utilisateur consiste à lui demander un nombre.

Quelles données le programme recevra-t-il ? L'utilisateur les saisira-t-il ou viendront-elles d'une autre source ?
L'utilisateur saisira un nombre dans une boîte de dialogue.

Quel résultat souhaitez-vous obtenir ?
Le résultat attendu est une liste des nombres de 1 jusqu'au nombre saisi. Chaque nombre divisible par 3 doit afficher `Fizz`, chaque nombre divisible par 5 doit afficher `Buzz`, et chaque nombre divisible par 3 et par 5 doit afficher `FizzBuzz`.

#### Écrire le pseudocode

Quelles étapes permettront d'obtenir le résultat souhaité ? Voici un algorithme en pseudocode :

```text
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number
```

#### Décomposer le problème

Selon notre algorithme, le premier sous-problème consiste à obtenir une valeur de l'utilisateur. Commençons par cela et vérifions que ça fonctionne en affichant la valeur saisie.

En JavaScript, nous allons utiliser la méthode `prompt` :

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
```

Ce code ouvre une petite boîte de dialogue qui demande un nombre. La saisie obtenue est enregistrée dans la variable `answer`.

<div class="lesson-note lesson-note--tip" markdown=1>

#### Utiliser la fonction parseInt

Nous avons placé l'appel à `prompt` dans une fonction `parseInt` afin de convertir la saisie de l'utilisateur en nombre.

</div>

Passons au sous-problème suivant : « Parcourir les nombres de 1 jusqu'au nombre saisi ». Il existe plusieurs façons de le faire en JavaScript. Une méthode courante, également utilisée dans des langages comme Java, C++ et Ruby, est la [boucle `for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) :

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  console.log(i);
}
```

Si cette syntaxe vous est inconnue et vous semble étrange, elle est en fait simple. Nous déclarons une variable `i` et lui attribuons la valeur 1 : c'est sa valeur initiale dans la boucle. La deuxième partie, `i <= answer`, est la condition. La boucle continue tant que `i` n'est pas supérieur à `answer`. La troisième partie, `i++`, demande d'augmenter `i` de 1 à chaque itération. Ainsi, si l'utilisateur saisit 10, la boucle affiche les nombres de 1 à 10 dans la console.

<div class="lesson-note lesson-note--tip" markdown=1>

#### Commencer la boucle à 1

Les programmeurs commencent souvent leurs boucles à 0. Pour les besoins de notre programme, nous commençons à 1.

</div>

Maintenant, traitons le sous-problème suivant : si le nombre courant est divisible par 3, afficher `Fizz`.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
```

Nous utilisons ici l'opérateur modulo (`%`) pour diviser le nombre courant par 3. Comme vous l'avez vu dans une leçon précédente, cet opérateur renvoie le reste d'une division. Si le reste obtenu est égal à 0, cela signifie que le nombre courant est divisible par 3.

Si l'utilisateur saisit 10, le programme affiche maintenant :

```bash
1
2
Fizz
4
5
Fizz
7
8
Fizz
10
```

Le programme prend forme. Les derniers sous-problèmes devraient être simples : la structure de base est en place et il s'agit de variantes de la condition déjà écrite. Traitons le suivant : si le nombre courant est divisible par 5, afficher `Buzz`.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Si l'utilisateur saisit 10, le programme affiche :

```bash
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```

Il reste un sous-problème pour terminer : si le nombre courant est divisible par 3 et par 5, afficher `FizzBuzz`.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Nous avons dû réorganiser un peu les conditions. La première vérifie maintenant si `i` est divisible par 3 *et* par 5, plutôt que seulement par 3. Sinon, la première condition `if (i % 3 === 0)` serait exécutée dès que `i` est divisible par 3, afficherait `Fizz` et passerait au nombre suivant, même si `i` était aussi divisible par 5.

En plaçant d'abord la condition `if (i % 3 === 0 && i % 5 === 0)`, nous vérifions que `i` est divisible par 3 et par 5 avant de vérifier séparément s'il est divisible par 3 ou par 5 dans les conditions `else if`.

Le programme est terminé ! Si l'utilisateur saisit 20, le résultat est :

```bash
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Lisez [Comment penser comme un programmeur : leçons de résolution de problèmes](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/) de Richard Reis.
1. Regardez [Comment commencer à penser comme un programmeur](https://www.youtube.com/watch?v=azcrPFhaY9k) de Coding Tech. La vidéo dure une heure, mais elle est riche en informations et vaut le temps qu'on y consacre.
1. Lisez cet article de Built In : [Le pseudocode : ce que c'est et comment en écrire](https://www.builtin.com/data-science/pseudocode).

</div>
