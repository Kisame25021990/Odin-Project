### Introduction

Vous pourriez penser que l'essentiel du travail d'un développeur consiste à écrire du code. En réalité, une part importante du temps est consacrée à *lire* du code : celui d'autres membres de l'équipe, celui de personnes qui n'en font plus partie, et même celui que vous avez écrit deux semaines plus tôt et dont vous ne vous souvenez peut-être plus très bien.

Ne pensez pas que vous devez maîtriser immédiatement les principes présentés ici. Tout le monde écrit parfois du code désordonné, même les professionnels. Nous voulons vous donner quelques repères pour améliorer progressivement la lisibilité de votre code. Plus vous en écrirez, meilleur il sera, autant sur le plan de la lisibilité que sur d'autres aspects.

Essayez ces idées et intégrez-les à votre façon de programmer, sans vous reprocher de ne pas produire un code élégant et limpide. Visez une amélioration régulière, pas la perfection.

Cela étant dit, commençons !

### Aperçu de la leçon

Voici les principaux sujets abordés dans cette leçon :

- Distinguer le code difficile à lire du code facile à lire.
- Appliquer des principes de programmation pour rendre votre code plus clair.
- Rédiger de bons commentaires.

### Qu'est-ce qu'un code clair ?

Considérez les exemples suivants.

Exemple A :

```javascript
const x= function (z){
   const w = "Hello ";
return w +  z

 }

x("John");
```

Exemple B :

```javascript
const generateUserGreeting = function (name) {
  const greeting = "Hello ";
  return greeting + name;
};

generateUserGreeting("John");
```

Lequel de ces exemples vous semble le plus facile à lire ? Le second est clairement plus parlant. Étonnamment, les deux fonctions accomplissent exactement la même tâche, de la même façon, et les deux sont valides. Pourquoi le second est-il beaucoup plus lisible ?

Dans le premier exemple, les variables n'ont qu'une seule lettre et l'indentation ainsi que les espaces sont incohérents. Le résultat est confus et désordonné.

Imaginez que vous collaboriez à un projet avec la personne qui a écrit cette première fonction. Combien de temps vous faudrait-il pour comprendre ce qu'elle fait et poursuivre votre travail ? Ou peut-être l'avez-vous écrite vous-même il y a quelque temps et avez-vous complètement oublié son existence. Dans les deux cas, vous finirez par comprendre, mais l'expérience ne sera pas agréable.

L'exemple B présente un code plus clair. Même sans connaître le rôle de chaque élément, il est plus facile de deviner ce qui se passe : les fonctions et les variables portent des noms explicites, et l'indentation et les espaces suivent un motif cohérent et logique.

Une seule lettre peut servir de nom de variable dans une boucle ou une fonction de rappel, mais évitez cet usage ailleurs.

#### La convention camelCase

camelCase est une convention de nommage qui permet d'écrire plusieurs mots à la suite, sans espace ni ponctuation. Dans un nom camelCase composé de plusieurs mots, comme `setTimeout`, le premier mot reste entièrement en minuscules, tandis que la première lettre du deuxième mot et des suivants est une majuscule.

Dans cette leçon, la plupart des variables et des fonctions suivent cette convention. Toutes les langues ne l'utilisent pas, mais elle est très courante en JavaScript et constitue donc un bon exemple à suivre.

<div class="lesson-note" markdown="1">

#### Une convention reste une convention

Cette leçon donne des exemples pour clarifier le code, mais chaque organisation peut avoir ses propres pratiques, parfois légèrement différentes de celles présentées ici. Rien n'est absolu.

L'essentiel est que ces pratiques servent le même objectif : rendre le code plus lisible et plus facile à maintenir. Tant que vous n'avez pas à suivre des conventions précises, choisissez-en une et appliquez-la de manière cohérente.

</div>

### Nommer les fonctions et les variables

Nous avons déjà vu l'importance de choisir des noms *qui ont du sens*. Voyons plus en détail ce qui fait un bon nom de variable ou de fonction.

#### Un bon nom est descriptif

Dans notre bon exemple, la variable `greeting` contient un texte auquel on concatène le paramètre `name`. La fonction s'appelle `generateUserGreeting` et fait ce que son nom annonce. C'est clair et compréhensible.

Imaginez maintenant une conversation à propos du mauvais exemple : la fonction s'appelle `x`, et ses variables `z` et `w`. Pas très parlant !

#### Employez un vocabulaire cohérent

Les variables de même nature devraient idéalement suivre un système de nommage cohérent. Voici quelques exemples tirés d'un jeu :

```javascript
// Consistent naming
function getPlayerScore();
function getPlayerName();
function getPlayerTag();
```

Ces fonctions suivent toutes le même modèle : « obtenir une donnée ». Comparez avec celles-ci :

```javascript
// Inconsistent naming
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();
```

Dans ce deuxième exemple, trois verbes différents sont employés. Ils ont un sens proche, mais on pourrait penser que cette différence est intentionnelle (par exemple, dans certains contextes, « obtenir » et « récupérer » ne désignent pas exactement la même opération). Quelle est aussi la différence entre `User`, `Player` et `Player1` ? S'il n'y en a pas, mieux vaut employer le même nom, par exemple `Player`. La cohérence rend le code prévisible.

Les noms de variables devraient de préférence commencer par un nom ou un adjectif (autrement dit, un groupe nominal), car elles représentent généralement des « choses », qu'il s'agisse d'une chaîne de caractères, d'un nombre, etc. Les fonctions représentent des actions : leur nom devrait donc idéalement commencer par un verbe.

```javascript
// Preferable
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Not preferable (these start with verbs, could be confused for functions)
const getCount = 10;
const showNorseGods = ["Odin", "Thor", "Loki"];

// Preferable
function getCount() {
  return numberOfThings;
}

// Not preferable (myName doesn't represent some kind of action)
function myName() {
  return "Thor";
}
```

### Choisissez des noms faciles à rechercher et à comprendre

Il peut être tentant d'utiliser des « valeurs magiques », c'est-à-dire des valeurs explicites comme des nombres ou des chaînes de caractères isolés. Prenons cet exemple :

```javascript
setTimeout(stopTimer, 3600000);
```

Le problème saute aux yeux. Que signifie le nombre magique `3600000` ? Combien de temps ce délai s'écoulera-t-il avant l'exécution de `stopTimer` ? Même si vous savez que JavaScript exprime les durées en millisecondes, vous devrez probablement utiliser une calculatrice ou Google pour convertir ce nombre en secondes ou en minutes.

Rendons ce code plus explicite en introduisant une variable descriptive :

```javascript
const ONE_HOUR = 3600000; // Can even write as 60 * 60 * 1000;

setTimeout(stopTimer, ONE_HOUR);
```

C'est beaucoup plus clair. La variable porte un nom descriptif : vous n'avez aucun calcul à faire en lisant le code.

Vous vous demandez peut-être pourquoi ce nom est entièrement en majuscules, alors que nous avons recommandé camelCase. Cette convention s'emploie lorsque le programmeur est certain que la variable est une constante, en particulier lorsqu'elle représente une notion précise, comme une durée. Le nombre de millisecondes dans une heure ne changera pas : cette convention convient donc ici. Rappelons qu'il s'agit seulement d'une convention et que tout le monde ne l'applique pas forcément.

### Indentation et longueur des lignes

Abordons maintenant des sujets un peu plus controversés. Il existe même une plaisanterie sur la [guerre entre les personnes qui indentent avec des espaces et celles qui utilisent des tabulations](https://www.reddit.com/r/programming/comments/p1j1c/tabs_vs_spaces_vs_both/).

Ce qui compte vraiment, c'est la *cohérence*. Choisissez une méthode d'indentation et tenez-vous-y. Les guides de style JavaScript recommandent différentes options, sans qu'une soit réellement supérieure aux autres. Nous étudierons plus en détail les guides de style et les outils associés plus loin dans le cursus.

#### Longueur des lignes

Les guides de style ne s'accordent pas toujours sur ce point, mais presque tous recommandent de limiter la longueur des lignes de code.

En général, votre code sera plus facile à lire si vous coupez manuellement les lignes qui dépassent environ 80 caractères. De nombreux éditeurs affichent un repère pour signaler ce seuil. Lorsque vous coupez une ligne, essayez de le faire juste *après* un opérateur ou une virgule.

Il existe plusieurs façons de mettre en forme les lignes de continuation. Par exemple :

```javascript
// This line is a bit too long
let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// You could format it like this
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// Or maybe like this
let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                  howManyTacos + oneMoreReallyLongThing;
```

Aucun de ces formats n'est nécessairement meilleur ou pire ; chacun peut avoir ses préférences. Choisissez une mise en forme qui vous semble logique et restez cohérent.

### Points-virgules

Les points-virgules sont *généralement* facultatifs en JavaScript, car l'interpréteur les insère automatiquement lorsqu'ils sont omis. Cette fonctionnalité peut toutefois échouer dans certaines situations et provoquer des bogues. Nous vous conseillons donc de prendre l'habitude d'ajouter des points-virgules.

Que vous en mettiez ou non, la cohérence reste essentielle.

### Les commentaires

Les commentaires sont utiles, mais comme tout outil, on peut en faire mauvais usage. Quand on débute, on peut être tenté d'expliquer *tout* ce que fait le code. Ce n'est généralement pas une bonne pratique. Voyons quelques erreurs courantes et pourquoi les éviter.

#### N'utilisez pas des commentaires à la place de Git

Vous pourriez être tenté de consigner dans des commentaires les changements et ajouts que vous avez effectués. Par exemple :

```javascript
/**
 * 2023-01-10: Removed unnecessary code that was causing confusion (RM)
 * 2023-03-05: Simplified the code (JP)
 * 2023-05-15: Removed functions that were causing bugs in production (LI)
 * 2023-06-22: Added a new function to combine values (JR)
 */
```

Le problème, c'est que vous avez déjà un outil pour suivre les changements : Git ! Tenir ces commentaires à jour devient vite une corvée, et ils ne donnent qu'un aperçu incomplet de l'historique. Ils encombrent aussi les fichiers.

Avec Git, toutes ces informations sont bien organisées dans le dépôt et consultables avec `git log`.

Le même principe s'applique au code qui n'est plus utilisé. Si vous en avez besoin plus tard, consultez l'historique des commits. Vous pouvez bien sûr commenter temporairement du code pendant un test, mais supprimez-le dès qu'il ne sert plus. Ne laissez pas traîner ce genre de lignes dans vos fichiers :

```javascript
theFunctionInUse();
// oldFunction();
// evenOlderUselessFunction();
// whyAmIEvenHereImAncient();
```

#### Expliquez pourquoi, pas comment

Dans l'idéal, les commentaires ne devraient pas fournir du pseudocode qui répète ce que fait votre code. Les bons commentaires expliquent *pourquoi* une partie du code est nécessaire. Parfois, aucun commentaire n'est utile !

Imaginons qu'une chaîne contienne du texte entre crochets et que nous voulions extraire ce texte :

```javascript
// Function to extract text
function extractText(s) {
  // Return the string starting after the "[" and ending at "]"
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}
```

Ces commentaires ne font que décrire ce que le code nous indique déjà. Des commentaires légèrement plus utiles pourraient expliquer le but de cette fonction :

```javascript
// Extracts text inside square brackets (excluding the brackets)
function extractText(s) {
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}
```

Mais souvent, nous pouvons rendre le code suffisamment explicite pour nous passer de commentaires :

```javascript
function extractTextWithinBrackets(text) {
  const bracketTextStart = text.indexOf("[") + 1;
  const bracketTextEnd = text.indexOf("]");
  return text.substring(bracketTextStart, bracketTextEnd);
}
```

Dans le premier exemple, les commentaires répètent deux fois ce que fait le code. Il suffit de le lire : ils sont redondants.

Dans le deuxième exemple, le commentaire précise que la fonction extrait le texte entre crochets, et pas seulement du « texte ». C'est utile, mais on peut faire encore mieux.

Dans le dernier exemple, aucun commentaire n'est nécessaire. Des noms de fonction et de variable descriptifs rendent les explications supplémentaires superflues. Pratique, non ?

**Cela ne signifie pas qu'un bon code doit être dépourvu de commentaires.** Voici un cas où un commentaire est utile :

```javascript
function calculateBMI(height, weight) {
  // The formula for BMI is weight in kilograms divided by height in meters squared
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}
```

Ce commentaire rappelle simplement comment se calcule l'IMC. Il permet de comprendre pourquoi la taille doit être convertie et ce que fait le calcul qui suit. Les noms sont déjà assez clairs, mais le commentaire apporte une précision supplémentaire.

Dans bien des situations, des commentaires bien placés sont précieux. Ils peuvent expliquer pourquoi un morceau de code peu intuitif est nécessaire ou donner le contexte général qui explique pourquoi une fonction doit absolument être appelée ici plutôt qu'ailleurs. L'article indiqué dans la section des exercices approfondit ce sujet.

### Conclusion

Après avoir étudié ces idées, rappelons ce que nous disions au début : ne cherchez pas à écrire un code parfaitement clair, au risque de vous frustrer. Il est inévitable d'écrire parfois du code « spaghetti » ; tout le monde le fait. Gardez ces principes à l'esprit et, avec le temps et la patience, votre code deviendra plus lisible.

Apprendre à écrire du code clair est un processus d'amélioration continue qui se poursuivra même après avoir terminé The Odin Project. Cette leçon est une première introduction et un point de départ pour ce cheminement.

> Un bon code vient de l'expérience. L'expérience vient du code imparfait.

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Lisez [10 principes pour garder un code de programmation propre](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/) pour découvrir de bons conseils.
1. Pour mieux comprendre les bonnes pratiques en matière de commentaires, lisez ces articles sur les [commentaires qui expliquent pourquoi le code fonctionne](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/) et sur [la programmation sans commentaires](https://blog.codinghorror.com/coding-without-comments/).

</div>
