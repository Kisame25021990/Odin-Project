### Introduction

Maintenant que tu connais les bases de la syntaxe HTML et CSS, passons aux choses sérieuses. Les compétences CSS les plus importantes concernent le *positionnement* et la *mise en page*. Modifier les polices et les couleurs est utile, mais savoir placer précisément les éléments sur une page l'est encore davantage. Après tout, combien de pages web se contentent d'empiler tous leurs éléments les uns sur les autres ?

Positionner les éléments d'une page n'est pas difficile quand on comprend quelques concepts clés. Beaucoup d'apprenants parcourent rapidement HTML et CSS pour passer à JavaScript et manquent ces notions fondamentales. Cela provoque frustration et difficultés ([et quelques GIF amusants](https://giphy.com/gifs/css-13FrpeVH09Zrb2)) : toutes les compétences JavaScript du monde ne servent à rien si tu ne peux pas placer les éléments où tu le souhaites. Commençons donc par ces bases.

### Aperçu de la leçon

- Comprendre le modèle de boîte.
- Ajuster la taille des éléments avec `margin`, `padding` et `border`.

### Le modèle de boîte

Pour réussir en CSS, il faut d'abord comprendre le modèle de boîte. Ce n'est pas compliqué, mais l'ignorer te causerait bien des difficultés par la suite.

Chaque élément d'une page web est une boîte rectangulaire. Ces boîtes peuvent contenir d'autres boîtes et être placées côte à côte. Pour visualiser le principe, tu peux ajouter un contour à chaque élément de la page :

```css
* {
  outline: 2px solid red;
}
```

![Boîtes](https://cdn.statically.io/gh/TheOdinProject/curriculum/c547923a86efaccb0fc71adf70fda2ea340b4cb1/foundations/html_css/css_foundations/the_box_model/imgs/boxes.png)

Tu peux ajouter ce CSS à cette page avec l'inspecteur du navigateur : clique sur le bouton `+` en haut à droite du panneau **Styles**, dans l'onglet **Elements**. Des boîtes dans des boîtes !

![Page encadrée](https://cdn.statically.io/gh/TheOdinProject/curriculum/c547923a86efaccb0fc71adf70fda2ea340b4cb1/foundations/html_css/css_foundations/the_box_model/imgs/odin-lined.png)

L'image ci-dessus contient peut-être quelques cercles, mais en mise en page, ils s'assemblent comme des boîtes rectangulaires. Mettre en page une page web et positionner ses éléments consiste à décider comment imbriquer et empiler ces boîtes.

La seule vraie difficulté vient des différentes façons de modifier la taille des boîtes et l'espace entre elles avec `padding`, `border` et `margin`. En résumé :

- `padding` augmente l'espace entre le bord de la boîte et son contenu.
- `border` ajoute une bordure entre la marge et le remplissage intérieur.
- `margin` augmente l'espace entre la bordure d'une boîte et celles des boîtes voisines.

Étudie attentivement les schémas.

![Modèle de boîte](https://cdn.statically.io/gh/TheOdinProject/curriculum/c547923a86efaccb0fc71adf70fda2ea340b4cb1/foundations/html_css/css_foundations/the_box_model/imgs/box-model.png)

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Regarde [Le modèle de boîte CSS en 8 minutes](https://www.youtube.com/watch?v=rIO5326FgPE), une présentation claire du modèle de boîte, du remplissage et des marges. Ces notions sont fondamentales pour la suite.
1. [box-sizing: border-box (EASY!)](https://www.youtube.com/watch?v=HdZHcFWcAd8) complète la vidéo précédente et explique plus clairement la propriété `box-sizing`.
1. Le modèle de boîte est si fondamental qu'il mérite une étude approfondie. Lis la [leçon MDN sur le modèle de boîte](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model). Elle reprend les vidéos et présente les boîtes en ligne, que nous explorerons dans la leçon suivante. Elle parle aussi des types d'affichage internes et externes.

   Tu n'as pas besoin de comprendre ou de mémoriser tous ces détails dès maintenant. Concentre-toi sur les exemples et prends le temps d'essayer l'éditeur intégré.
1. La page [CSS Tricks sur les marges](https://css-tricks.com/almanac/properties/m/margin/) fournit d'autres explications utiles sur `margin`. Les sections concernant `auto` et la fusion des marges sont particulièrement intéressantes.

</div>
