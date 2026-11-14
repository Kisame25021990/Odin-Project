## Introduction

Voyons comment l'orientation des éléments dans un conteneur flex peut être contrôlée à l'aide de la propriété `flex-direction`.

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Tu découvriras les 2 « axes » d'un conteneur flex.
- Tu apprendras à modifier ces axes pour organiser ton contenu en colonnes plutôt qu'en lignes.

## Les axes

Ce qui est le plus déroutant avec flexbox, c'est qu'il peut fonctionner soit horizontalement, soit verticalement, et certaines règles changent un peu selon la direction avec laquelle tu travailles.
La direction par défaut d'un conteneur flex est horizontale, ou `row`, mais tu peux passer la direction à verticale, ou `column`. La direction peut être spécifiée en CSS comme ceci :

```css
.flex-container {
  flex-direction: column;
}
```

Quelle que soit la direction que tu utilises, tu dois considérer que tes conteneurs flex ont 2 axes : l'axe principal et l'axe transversal. C'est la direction de ces axes qui change lorsque `flex-direction` est modifiée. Dans *la plupart* des cas, `flex-direction: row` place l'axe principal à l'horizontale (de gauche à droite), et `column` place l'axe principal à la verticale (de haut en bas).

Autrement dit, dans notre tout premier exemple, nous avons appliqué `display: flex` à une div et elle a disposé ses enfants horizontalement. C'est une démonstration de `flex-direction: row`, le réglage par défaut. L'exemple suivant est très similaire. Si tu décommentes la ligne qui indique `flex-direction: column`, ces divs s'empileront verticalement.

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="BaZKPdw" data-editable="true" data-user="TheOdinProjectExamples" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen [flex-direction example](https://codepen.io/TheOdinProjectExamples/pen/BaZKPdw) by TheOdinProject ([@TheOdinProjectExamples](https://codepen.io/TheOdinProjectExamples))
  on [CodePen](https://codepen.io).</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Il faut noter que dans cet exemple, `flex-direction: column` ne fonctionnerait pas comme prévu si nous utilisions le raccourci `flex: 1`. Essaie dès maintenant (c'est-à-dire va modifier la valeur flex sur la ligne `flex: 1 1 auto;`). Peux-tu comprendre pourquoi cela ne fonctionne pas si `flex: 1` est utilisé ? Les divs s'effondrent, même si elles ont *clairement* une `height` définie à cet endroit.

La raison est que le raccourci flex développe `flex-basis` à `0`, ce qui signifie que toute la croissance (`flex-grow`) et tout le rétrécissement (`flex-shrink`) commenceraient leurs calculs à partir de `0`. Les divs vides ont par défaut une hauteur de 0, donc pour que nos éléments flex remplissent la hauteur de leur conteneur, ils n'ont en réalité pas besoin d'avoir la moindre hauteur.

L'exemple ci-dessus a corrigé cela en spécifiant `flex: 1 1 auto`, ce qui indique aux éléments flex de se baser par défaut sur leur `height` donnée. Nous aurions aussi pu corriger cela en mettant une hauteur sur le parent `.flex-container`, ou en utilisant `flex-grow: 1` au lieu du raccourci.

Un autre détail à remarquer : lorsque nous avons changé la flex-direction en `column`, `flex-basis` fait référence à `height` plutôt qu'à `width`. Vu le contexte, cela peut sembler évident, mais il faut en être conscient.

Nous nous sommes un peu éloignés du sujet… Nous parlions de flex-direction et des axes. Pour y revenir, le comportement par défaut est `flex-direction: row`, qui dispose les choses horizontalement. La raison pour laquelle cela fonctionne souvent bien sans modifier d'autres détails du CSS est que les éléments de niveau bloc occupent par défaut toute la largeur de leur parent. Passer à la verticale avec `flex-direction: column` ajoute de la complexité, car les éléments de niveau bloc ont par défaut la hauteur de leur contenu, et dans ce cas il *n'y a* pas de contenu.

Il existe des situations où le comportement de `flex-direction` pourrait changer si tu utilises une langue qui s'écrit de droite à gauche, voire verticalement, mais tu ne devrais pas t'en soucier avant d'être prêt à créer un site web en arabe ou en mandchou.

## Exercice

:::assignment
1. Comme toujours, la documentation MDN sera ta référence, alors jette un œil à la [documentation MDN de `flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-direction) et à ses exemples.
:::
