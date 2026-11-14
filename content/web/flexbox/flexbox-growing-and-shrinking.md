## Introduction

Regardons d'un peu plus près ce qui s'est réellement passé lorsque tu as appliqué `flex: 1` aux éléments flex de la leçon précédente.

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Tu découvriras les 3 propriétés définies par le raccourci `flex`, et comment les utiliser individuellement.

## Le raccourci flex

La déclaration `flex` est en réalité un raccourci pour 3 propriétés que tu peux définir sur un élément flex. Ces propriétés influent sur la façon dont les éléments flex se dimensionnent dans leur conteneur. Tu as déjà vu des propriétés raccourcies auparavant, mais nous ne les avons pas encore définies officiellement.

> Les propriétés raccourcies sont des propriétés CSS qui te permettent de définir simultanément les valeurs de plusieurs autres propriétés CSS. En utilisant une propriété raccourcie, tu peux écrire des feuilles de style plus concises (et souvent plus lisibles), en gagnant du temps et de l'énergie.
>
> Source : [Propriétés raccourcies sur MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

Dans ce cas, `flex` est en réalité un raccourci pour `flex-grow`, `flex-shrink` et `flex-basis`.

![raccourci flex](https://cdn.statically.io/gh/TheOdinProject/curriculum/0cc6b26bb0c4b94524369d327c97a8fb11e83b6b/foundations/html_css/flexbox/imgs/10.png)

Dans la capture d'écran ci-dessus, `flex: 1` équivaut à : `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0`.

### Flex-grow

`flex-grow` attend un seul nombre comme valeur, et ce nombre est utilisé comme « facteur de croissance » de l'élément flex. Lorsque nous avons appliqué `flex: 1` à chaque div de notre conteneur, nous demandions à chaque div de grandir de la même quantité. Il en résulte que chaque div finit exactement à la même taille. Si nous ajoutions plutôt `flex: 2` à une seule des divs, alors cette div grandirait jusqu'à 2 fois la taille des autres.

Dans l'exemple suivant, le raccourci `flex` a des valeurs pour `flex-shrink` et `flex-basis` spécifiées avec leurs valeurs par défaut.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YzQqvgK" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/YzQqvgK">
  flex-grow example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Flex-shrink

`flex-shrink` est similaire à `flex-grow`, mais définit le « facteur de rétrécissement » d'un élément flex. `flex-shrink` ne s'applique finalement que si la taille de tous les éléments flex est supérieure à celle de leur conteneur parent. Par exemple, si nos 3 divs de tout à l'heure avaient une déclaration de largeur comme `width: 100px`, et que `.flex-container` était plus petit que `300px`, nos divs devraient rétrécir pour tenir.

Le facteur de rétrécissement par défaut est `flex-shrink: 1`, ce qui signifie que tous les éléments rétrécissent uniformément. Si tu ne veux *pas* qu'un élément rétrécisse, tu peux spécifier `flex-shrink: 0;`. Tu peux aussi spécifier des nombres plus élevés pour que certains éléments rétrécissent à un rythme supérieur à la normale.

Voici un exemple. Note que nous avons aussi modifié `flex-basis`, pour des raisons qui seront expliquées bientôt. Si tu réduis la fenêtre de ton navigateur, tu remarqueras que `.two` ne devient jamais plus petit que la largeur donnée de 250px, même si la règle `flex-grow` indiquerait sinon que chaque élément devrait avoir la même taille.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="JjJXZVz" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/JjJXZVz">
  flex-shrink example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Une implication importante à remarquer ici est que lorsque tu spécifies `flex-grow` ou `flex-shrink`, les éléments flex ne respectent pas nécessairement les valeurs que tu as données pour `width`. Dans l'exemple ci-dessus, les 3 divs reçoivent une largeur de 250px, mais lorsque leur parent est assez grand, elles grandissent pour le remplir. De même, lorsque le parent est trop petit, le comportement par défaut est qu'elles rétrécissent pour tenir. Ce n'est pas un bug, mais cela peut être déroutant si tu ne t'y attends pas.

### Flex-basis

`flex-basis` définit la taille initiale d'un élément flex, de sorte que toute croissance (`flex-grow`) ou tout rétrécissement (`flex-shrink`) part de cette taille de référence. La valeur du raccourci est par défaut `flex-basis: 0%`. La raison pour laquelle nous avons dû la changer en `auto` dans l'exemple `flex-shrink` est qu'avec une base fixée à `0`, ces éléments ignoreraient la largeur de l'élément, et tout rétrécirait uniformément. Utiliser `auto` comme flex-basis indique à l'élément de vérifier s'il existe une déclaration de largeur (`width: 250px`).

:::note
### Remarque importante sur flex-basis

Il y a une différence entre la valeur par défaut de `flex-basis` et la façon dont le raccourci `flex` la définit lorsqu'aucune `flex-basis` n'est donnée. La valeur par défaut réelle de `flex-basis` est `auto`, mais lorsque tu spécifies `flex: 1` sur un élément, il l'interprète comme `flex: 1 1 0`. Si tu veux *uniquement* ajuster le `flex-grow` d'un élément, tu peux le faire directement, sans le raccourci. Ou tu peux être plus explicite et utiliser le raccourci complet à 3 valeurs `flex: 1 1 auto`, ce qui équivaut aussi à utiliser `flex: auto`.
:::

### Qu'est-ce que flex auto ?

Si tu l'as remarqué, nous avons mentionné un nouveau raccourci flex `flex: auto` dans la remarque précédente. Cependant, nous ne l'avons pas vraiment présenté. `flex: auto` est l'un des raccourcis de flex. Lorsque `auto` est défini comme mot-clé flex, il équivaut aux valeurs `flex-grow: 1`, `flex-shrink: 1` et `flex-basis: auto`, ou à `flex: 1 1 auto` avec le raccourci flex. Note que `flex: auto` n'est pas la valeur par défaut lorsqu'on utilise le raccourci flex, malgré le nom « auto » qui peut être un peu déroutant au début. Tu rencontreras et découvriras davantage `flex: auto` et ses cas d'utilisation potentiels en lisant la section des exercices.

### En pratique

En pratique, tu n'utiliseras probablement pas de valeurs complexes pour `flex-grow`, `flex-shrink` ou `flex-basis`. En général, tu seras surtout amené à utiliser des déclarations comme `flex: 1;` pour faire grandir les divs uniformément et `flex-shrink: 0` pour empêcher certaines divs de rétrécir.

Il *est* possible de faire plus sophistiqué et de créer des mises en page où certaines colonnes sont liées entre elles selon un ratio spécifique ; il est donc utile de savoir que tu peux utiliser d'autres valeurs, mais celles-ci sont relativement rares.

## Exercice

:::assignment
1. Lis [« 7.1.1 Basic Values of 'flex' » du W3C](https://www.w3.org/TR/css-flexbox-1/#flex-common) pour comprendre les valeurs de base des valeurs courantes du raccourci flex.
1. [La documentation de MDN sur flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) résume toutes les valeurs du raccourci flex, et présente aussi une nouvelle syntaxe qui n'a pas été abordée dans l'article précédent.
:::
