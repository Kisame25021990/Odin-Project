### Introduction

L'une des capacités les plus utiles de JavaScript est de manipuler le DOM. Mais qu'est-ce que le DOM et comment le modifier ? Commençons.

### Aperçu de la leçon

- Expliquer ce qu'est le DOM par rapport à une page Web.
- Expliquer la différence entre un « nœud » et un « élément ».
- Expliquer comment cibler des nœuds avec des sélecteurs.
- Expliquer les méthodes de base pour rechercher, ajouter, supprimer et modifier des nœuds DOM.
- Expliquer la différence entre une `NodeList` et un tableau de nœuds.
- Expliquer la propagation des événements (*bubbling*) et son fonctionnement.

### Le modèle objet de document

Le DOM (modèle objet de document) est une représentation arborescente du contenu d'une page Web : un arbre de « nœuds » dont les relations dépendent de leur organisation dans le document HTML. Il existe de nombreux types de nœuds, dont la plupart sont rarement utilisés. Cette leçon se concentre sur les nœuds « élément », principalement utilisés pour manipuler le DOM.

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

Dans cet exemple, `<div class="display"></div>` est un enfant de `<div id="container"></div>` et un frère de `<div class="controls"></div>`. Pensez à un arbre généalogique : `<div id="container"></div>` est le **parent**, dont les **enfants** se trouvent au niveau suivant, chacun sur sa propre « branche ».

### Cibler des nœuds avec des sélecteurs

Pour travailler avec le DOM, on utilise des « sélecteurs » afin de cibler les nœuds souhaités. On peut combiner des sélecteurs CSS et des propriétés décrivant les relations entre les nœuds. Dans l'exemple précédent, les sélecteurs suivants désignent `<div class="display"></div>` :

- `div.display`
- `.display`
- `#container > .display`
- `div#container > div.display`

On peut aussi utiliser des sélecteurs relationnels (comme `firstElementChild` ou `lastElementChild`) avec les propriétés des nœuds :

```javascript
// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>
```

```javascript
// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display = controls.previousElementSibling;
console.log(display); // <div class="display"></div>
```

On identifie ainsi un nœud en fonction de ses relations avec les nœuds voisins.

<div class="lesson-note" markdown="1">

#### Les objets JavaScript

Vous vous demandez peut-être pourquoi un point (`.`) suit nos variables, comme dans `container.firstElementChild`.

C'est ainsi que l'on accède aux objets en JavaScript. Un objet est un type de données qui contient des propriétés. Une propriété est une paire « clé : valeur ». Par exemple, `container` contient de nombreuses propriétés. En accédant à la clé `firstElementChild`, on récupère sa valeur : ici, un élément `<div>` de classe `display`.

C'est tout ce qu'il faut savoir sur les objets pour le moment. La leçon sur les bases des objets vous en apprendra davantage !

</div>

### Méthodes du DOM

Le navigateur transforme le code HTML en DOM, comme indiqué plus haut. La principale différence est que les nœuds deviennent des objets JavaScript dotés de propriétés et de méthodes. Ce sont les outils qui nous permettront de manipuler la page avec JavaScript.

#### Sélecteurs de requête

- `element.querySelector(selector)` — renvoie une référence vers la première correspondance de `selector`.
- `element.querySelectorAll(selectors)` — renvoie une `NodeList` contenant des références vers toutes les correspondances de `selectors`.

<div class="lesson-note" markdown="1">

#### Performances

D'autres requêtes plus spécifiques peuvent offrir de légers gains de performance, mais nous ne les étudierons pas maintenant.

</div>

N'oubliez pas que `querySelectorAll` ne renvoie **pas** un tableau. Le résultat lui ressemble et se comporte en partie comme lui, mais c'est une `NodeList` à laquelle il manque plusieurs méthodes de tableau. Si nécessaire, convertissez-la avec `Array.from()` ou l'[opérateur de décomposition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

#### Créer des éléments

- `document.createElement(tagName, [options])` — crée un élément de type `tagName`. Le paramètre facultatif `[options]` peut recevoir des options supplémentaires, que nous n'avons pas besoin d'étudier pour l'instant.

```javascript
const div = document.createElement("div");
```

Cette fonction n'ajoute PAS l'élément au DOM : elle le crée en mémoire. On peut ainsi le modifier (styles, classes, identifiants, texte, etc.) avant de l'insérer dans la page. Les méthodes suivantes permettent de l'ajouter au DOM.

#### Ajouter des éléments

- `parentNode.appendChild(childNode)` — ajoute `childNode` comme dernier enfant de `parentNode`.
- `parentNode.insertBefore(newNode, referenceNode)` — insère `newNode` dans `parentNode` avant `referenceNode`.

#### Supprimer des éléments

- `parentNode.removeChild(child)` — supprime `child` du DOM de `parentNode` et renvoie une référence vers `child`.

#### Modifier des éléments

Une référence vers un élément permet de modifier ses propriétés : on peut notamment ajouter, supprimer ou changer des attributs et des classes, ou appliquer des styles en ligne.

```javascript
// creates a new div referenced in the variable 'div'
const div = document.createElement("div");
```

#### Ajouter des styles en ligne

```javascript
// sets the indicated style rule to the element in the div variable
div.style.color = "blue";

// set the entire inline style
div.setAttribute("style", "color: blue; background: white;");
```

Pour accéder à une propriété CSS écrite en kebab-case comme `background-color`, utilisez la notation camelCase avec un point, ou la notation entre crochets. Avec cette dernière, le nom peut être en camelCase ou en kebab-case, mais doit être une chaîne.

```javascript
// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];
```

#### Modifier des attributs

```javascript
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");
```

Consultez la section de MDN sur les [attributs HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) pour plus d'informations.

#### Gérer les classes

```javascript
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");
```

Il est généralement plus propre d'activer ou de désactiver un style CSS que d'ajouter et supprimer des styles en ligne.

#### Ajouter du texte

```javascript
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";
```

#### Ajouter du contenu HTML

```javascript
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";
```

<div class="lesson-note lesson-note--tip" markdown="1">

#### Risques liés à `innerHTML`

Pour ajouter du texte, préférez `textContent` à `innerHTML`, qu'il faut utiliser avec parcimonie en raison des risques de sécurité. Pour comprendre les dangers de `innerHTML`, regardez cette [vidéo sur la prévention de l'attaque XSS la plus courante](https://youtube.com/watch?v=ns1LX6mEvyM).

</div>

Prenons un instant pour revoir ces notions et les pratiquer avant de continuer. Voici un exemple qui crée un élément DOM et l'ajoute à une page Web.

```html
<!-- your HTML file: -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container"></div>
</body>
```

```javascript
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
```

Dans le fichier JavaScript, nous récupérons d'abord une référence vers le `div` `container` déjà présent dans le HTML. Nous créons ensuite un `div` et le stockons dans `content`, lui ajoutons une classe et du texte, puis l'ajoutons à `container`. Après l'exécution du JavaScript, l'arbre DOM ressemble à ceci :

```html
<!-- The DOM -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container">
    <div class="content">This is the glorious text-content!</div>
  </div>
</body>
```

JavaScript ne modifie pas le fichier HTML, mais le DOM : le fichier reste identique, tandis que JavaScript change ce que le navigateur affiche.

<div id="important-note" class="lesson-note" markdown="1">

#### Quand JavaScript s'exécute

JavaScript s'exécute en général au chargement du fichier JS ou lorsque le navigateur rencontre la balise `script` dans le HTML. Si le script se trouve au début du fichier, plusieurs méthodes de manipulation du DOM ne fonctionneront pas, car le code s'exécute avant la création des nœuds. La solution la plus simple est de placer le script à la fin du fichier HTML, après l'analyse et la création des nœuds.

On peut aussi lier le fichier JavaScript dans le `<head>` avec une balise `<script>`, son attribut `src` et le mot-clé `defer`, afin de le charger après l'analyse du HTML :

```html
<head>
  <script src="js-file.js" defer></script>
</head>
```

Pour en savoir plus, consultez la documentation sur l'[attribut `defer` des balises script](https://javascript.info/script-async-defer#defer).

</div>

### Exercice

Copiez l'exemple précédent dans des fichiers sur votre ordinateur. Pour le faire fonctionner, ajoutez le reste de la structure HTML et liez le fichier JavaScript, ou placez le code JavaScript dans une balise `script` de la page. Vérifiez que tout fonctionne avant de continuer.

Ajoutez les éléments suivants au conteneur en utilisant **uniquement JavaScript et les méthodes DOM présentées ci-dessus** :

1. Un élément `<p>` en rouge contenant « Hey I'm red! ».
1. Un élément `<h3>` en bleu contenant « I'm a blue h3! ».
1. Un `div` avec une bordure noire et un arrière-plan rose, qui contient :
   - un élément `<h1>` contenant « I'm in a div » ;
   - un élément `<p>` contenant « ME TOO! ».

Indice pour le dernier élément : après avoir créé le `div` avec `createElement`, ajoutez-y le `<h1>` et le `<p>` avant d'ajouter le `div` au conteneur.

### Les événements

Maintenant que vous savez manipuler le DOM avec JavaScript, apprenons à le faire de façon dynamique ou à la demande ! Les événements rendent cela possible. Il s'agit d'actions sur une page, comme un clic de souris ou une pression de touche. Avec JavaScript, on peut écouter ces événements et y réagir.

Il existe trois façons principales de procéder :

- définir des attributs de fonction directement sur les éléments HTML ;
- définir en JavaScript des propriétés de la forme `on<eventType>`, comme `onclick` ou `onmousedown`, sur les nœuds DOM ;
- ajouter des écouteurs d'événements aux nœuds DOM en JavaScript.

Les écouteurs d'événements sont la méthode recommandée, mais les deux autres sont aussi souvent utilisées. Nous allons donc voir les trois.

Créons trois boutons qui affichent tous « Hello World » au clic. Essayez-les dans un fichier HTML ou sur un site comme [CodePen](https://codepen.io/).

#### Méthode 1

```html
<button onclick="alert('Hello World')">Click Me</button>
```

Cette solution n'est pas idéale : elle encombre le HTML avec du JavaScript. De plus, un élément DOM ne peut avoir qu'une propriété `onclick`, ce qui empêche d'exécuter plusieurs fonctions distinctes en réponse au clic avec cette méthode.

#### Méthode 2

```html
<!-- the HTML file -->
<button id="btn">Click Me</button>
```

```javascript
// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
```

C'est un peu mieux : nous avons déplacé le JavaScript du HTML vers un fichier JS, mais un élément DOM ne peut toujours avoir qu'une propriété `onclick`.

<div class="lesson-note lesson-note--tip" markdown="1">

#### Revoir la syntaxe des fonctions fléchées

Pour revoir la syntaxe fléchée `() =>`, consultez cet [article sur les fonctions fléchées](http://javascript.info/arrow-functions-basics).

</div>

#### Méthode 3

```html
<!-- the HTML file -->
<button id="btn">Click Me Too</button>
```

```javascript
// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
```

Cette méthode sépare les responsabilités et permet d'ajouter plusieurs écouteurs d'événements si nécessaire. Elle est beaucoup plus flexible et puissante, bien qu'un peu plus complexe à mettre en place.

Les trois méthodes acceptent aussi des fonctions nommées :

```html
<!-- the HTML file -->
<!-- METHOD 1 -->
<button onclick="alertFunction()">CLICK ME BABY</button>
```

```javascript
// the JavaScript file
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
```

```html
<!-- the HTML file -->
<!-- METHODS 2 & 3 -->
<button id="btn">CLICK ME BABY</button>
```

```javascript
// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);
```

Les fonctions nommées peuvent rendre le code bien plus lisible. C'est une excellente idée lorsqu'une fonction doit être utilisée à plusieurs endroits.

Avec ces trois méthodes, on peut obtenir plus d'informations sur l'événement en transmettant un paramètre à la fonction appelée. Essayez sur votre ordinateur :

```javascript
btn.addEventListener("click", function (e) {
  console.log(e);
});
```

<div class="lesson-note lesson-note--tip" markdown="1">

#### Comprendre les fonctions de rappel

Quand on transmet `alertFunction` ou `function (e) {...}` comme argument à `addEventListener`, on parle de **fonction de rappel** (*callback*). Une fonction de rappel est simplement une fonction passée en argument à une autre fonction.

</div>

Le paramètre `e` de cette fonction contient un objet qui référence l'**événement** lui-même. Cet objet offre des propriétés et méthodes utiles, par exemple le bouton de souris ou la touche utilisée, ou la **cible** de l'événement — le nœud DOM cliqué. Le nom `e` n'a rien de spécial. JavaScript sait qu'il s'agit d'un événement parce que la fonction de rappel d'un écouteur reçoit par définition un objet `Event`. Lors de l'appel, le gestionnaire transmet sa propre référence vers l'événement. Pour en savoir plus, consultez l'[introduction de MDN aux événements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_objects).

Essayez ceci :

```javascript
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
```

Puis ceci :

```javascript
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
```

Plutôt sympa, non ?

#### Ajouter des écouteurs à un groupe de nœuds

Ajouter de nombreux écouteurs similaires à plusieurs éléments peut représenter beaucoup de code. Il existe des façons plus efficaces de procéder. Comme nous l'avons vu, `querySelectorAll('selector')` renvoie une `NodeList` de tous les éléments correspondant au sélecteur. Pour ajouter un écouteur à chacun d'eux, parcourons la liste :

```html
<div id="container">
  <button id="one">Click Me</button>
  <button id="two">Click Me</button>
  <button id="three">Click Me</button>
</div>
```

```javascript
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
```

Ce n'est qu'un aperçu de la manipulation du DOM et de la gestion des événements, mais cela suffit pour commencer les exercices. Jusqu'ici, nous avons surtout utilisé l'événement `click`, mais il en existe bien d'autres.

Voici quelques événements utiles :

- `click`
- `dblclick`
- `keydown`
- `keyup`

Vous trouverez une liste plus complète et des explications sur la page de référence des [événements JavaScript de W3Schools](https://www.w3schools.com/jsref/dom_obj_event.asp).

### Exercices

<div class="lesson-content__panel" markdown="1">

Manipuler des pages Web est l'un des principaux avantages de JavaScript. En tant que développeur front-end, vous utiliserez probablement ces techniques tous les jours. Entraînons-nous !

1. Lisez les sections suivantes de la série de tutoriels JavaScript sur le DOM pour découvrir davantage de façons d'utiliser les événements dans vos pages.

   Les idées générales s'appliquent à tous les événements, pas seulement à ceux des exemples. Pour les détails propres à un type d'événement, consultez sa documentation. Le but n'est pas de maîtriser ces concepts immédiatement, mais de découvrir les outils liés aux événements dont vous disposez.

   - [Événements JavaScript](https://www.javascripttutorial.net/javascript-dom/javascript-events/)
   - [Événements de souris](https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/)
   - [Événements clavier](https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/)
   - [Délégation d'événements](https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/)
   - [La méthode dispatchEvent](https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/)
   - [Événements personnalisés](https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/)

1. Lisez [Comprendre les fonctions de rappel en JavaScript](https://dev.to/i3uckwheat/understanding-callbacks-2o9e) pour approfondir le sujet.
1. Faites les exercices suivants de MDN pour mettre vos compétences à l'épreuve :
   - [Manipuler simplement le DOM](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#doing_some_basic_dom_manipulation)
   - [Créer une liste de courses dynamique](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#creating_a_dynamic_shopping_list)

</div>
