### Introduction

Savoir lire et comprendre les messages d'erreur est indispensable pour un développeur. À première vue, beaucoup de débutants les trouvent intimidants et difficiles à comprendre, car ils contiennent des termes inconnus.

Pourtant, les messages d'erreur regorgent d'informations et indiquent comment résoudre un problème. Savoir les analyser sans crainte permet de déboguer ses applications, de demander de l'aide utile et d'avancer malgré une erreur.

### Aperçu de la leçon

- Nommer au moins trois types d'erreurs JavaScript.
- Repérer deux parties d'un message d'erreur qui indiquent son origine.
- Savoir rechercher et résoudre des erreurs.

### Anatomie d'une erreur

Une erreur est un objet intégré au langage JavaScript. Elle comprend un nom (ou type) et un message. Ces informations aident à localiser le code responsable, à comprendre la cause de l'erreur et à la résoudre.

Supposons que le fichier script.js, associé à une page HTML, contienne le code suivant :

```javascript
const a = "Hello";
const b = "World";

console.log(c);
```

Le code s'exécute, mais produit une erreur. On dit techniquement qu'il « déclenche » une erreur. La première partie du message en indique le type ; c'est un premier indice. Nous verrons les différents types plus loin. Dans cet exemple, il s'agit d'une ReferenceError.

![Exemple de ReferenceError](https://cdn.statically.io/gh/TheOdinProject/curriculum/175b5ef2a1b4758a7b75f4ef43d7e27203e5707b/foundations/javascript_basics/understanding_errors/imgs/00.png)

Une ReferenceError survient lorsqu'on fait référence à une variable qui n'a pas été déclarée ou initialisée dans la portée actuelle. Ici, le message indique que c is not defined.

Les ReferenceError affichent différents messages selon leur cause. Tu peux aussi rencontrer : ReferenceError: can't access lexical declaration 'X' before initialization. Cette erreur indique une cause différente. Il est essentiel de comprendre à la fois le type et le message de l'erreur.

La partie suivante indique le nom du fichier où se trouve l'erreur (ici, script.js) et le numéro de ligne. Tu peux ainsi accéder facilement à la ligne problématique. Dans cet exemple, l'erreur vient de la quatrième ligne de script.js, indiquée par le lien at script.js:4 sous le message. En cliquant dessus, la plupart des navigateurs affichent la ligne concernée et le reste du script dans l'onglet Sources des outils de développement.

La console peut aussi indiquer la colonne (ou le caractère) de la ligne où l'erreur se produit, par exemple at script.js:4:13.

Une autre partie importante est la **trace de pile** (*stack trace*). Elle indique à quel moment l'erreur s'est produite et quelles fonctions ont été appelées avant elle. Prenons ce code :

```javascript
const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();
```

La fonction print() appelle add(), qui renvoie une variable c non déclarée. La trace de pile correspondante nous apprend que :

1. c is not defined dans la portée de add(), déclarée à la ligne 5.
1. add() a été appelée par print(), déclarée à la ligne 9.
1. print() a été appelée à la ligne 12.

La trace permet donc de remonter le chemin de l'erreur jusqu'à son origine, ici la déclaration de add().

### Types d'erreurs courants

Voici quelques-unes des erreurs les plus fréquentes.

#### Erreur de syntaxe

Une erreur de syntaxe survient lorsque le code ne respecte pas les règles grammaticales de JavaScript. Par exemple, ce code :

```javascript
function helloWorld() {
  console.log "Hello World!"
}
```

déclenche une erreur, car les parenthèses de console.log() sont absentes.

![Exemple de SyntaxError](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/02.png)

#### Erreur de référence

Nous avons vu une ReferenceError au premier exemple. Elle survient lorsque la variable à laquelle tu fais référence n'existe pas dans la portée actuelle, ou lorsque son nom est mal orthographié.

#### Erreur de type

Ces erreurs peuvent avoir plusieurs causes. Selon MDN, une TypeError peut se produire :

- lorsqu'un opérande ou un argument transmis à une fonction est incompatible avec le type attendu par l'opérateur ou la fonction ;
- lorsqu'on tente de modifier une valeur qui ne peut pas l'être ;
- lorsqu'on tente d'utiliser une valeur de manière inappropriée.

Imaginons que nous voulions combiner deux chaînes pour former un message :

```javascript
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

![Exemple de TypeError](https://cdn.statically.io/gh/TheOdinProject/curriculum/4ed59981b4ce2c60b5b83bf7415d3127b61821f5/foundations/javascript_basics/understanding_errors/imgs/03.png)

Le message indique que str1.push is not a function. Cela peut dérouter : push() est bien une fonction, par exemple pour ajouter des éléments à un tableau.

Mais push() n'est pas une méthode des chaînes : c'est une méthode des tableaux. Elle ne peut donc pas être appelée comme une méthode de chaîne. En remplaçant push() par concat(), une méthode valide pour les chaînes, le code fonctionne.

Face à une TypeError, vérifie le type de la donnée sur laquelle tu essaies d'effectuer une opération ou d'appeler une méthode. Elle n'est probablement pas du type attendu, ou l'opération n'est pas compatible avec ce type.

### Conseils pour résoudre les erreurs

1. Considère le message d'erreur comme un allié. Il indique précisément le problème et les lignes à examiner. Sans message, déboguer serait un cauchemar : le code ne fonctionnerait toujours pas, mais tu ne saurais pas pourquoi.
1. Recherche ensuite le message sur le web. Tu trouveras peut-être une explication ou une solution sur Stack Overflow ou dans la documentation. À défaut, tu comprendras mieux la cause de l'erreur.
1. Utilise le débogueur. Pour examiner un problème complexe, tu peux placer des points d'arrêt, observer la valeur des variables pendant l'exécution et parcourir le code ligne par ligne. C'est un outil précieux que tout programmeur devrait savoir utiliser.
1. Utilise la console. console.log() permet de déboguer rapidement. Pour une analyse plus détaillée, le débogueur est parfois plus adapté, mais console.log() fournit un retour immédiat sans parcourir les fonctions pas à pas. D'autres méthodes utiles existent, comme console.table() et console.trace().

### Erreurs et avertissements

Enfin, beaucoup de personnes prennent les avertissements pour des erreurs. Une erreur interrompt l'exécution du programme ou de l'opération en cours. Un avertissement signale un problème potentiel qui ne fera pas nécessairement échouer le programme à l'exécution, ni même tout court.

Dans la mesure du possible, corrige rapidement les avertissements. Ils sont généralement moins graves que les erreurs et fournissent souvent une information. Les avertissements apparaissent habituellement en jaune et les erreurs en rouge. Ce n'est pas une règle absolue, mais les deux sont souvent visuellement différenciés.

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Consulte la documentation MDN sur les [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), les [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) et les [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError). Tu n'as pas besoin de tout comprendre ; familiarise-toi avec ces notions. Les exemples utilisent try...catch : le code du bloc try est exécuté, et si une erreur survient, elle est récupérée par le bloc catch. Cela permet de traiter l'erreur avant qu'elle interrompe le script. Retiens simplement que cette construction existe ; elle te sera utile plus tard.
1. Suis le tutoriel [Que s'est-il passé ? Déboguer JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong). Télécharge le code de départ qui contient volontairement des erreurs.

</div>
