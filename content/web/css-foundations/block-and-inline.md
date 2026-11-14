### Introduction

Dans la leçon précédente, nous avons vu que les différents types d'affichage ont des modèles de boîte particuliers et que la propriété `box-sizing` permet de modifier le calcul des dimensions. En CSS, les boîtes sont de deux types : `block` et `inline`. Elles déterminent le comportement des éléments et leurs interactions. La propriété `display` contrôle leur apparence sur la page ; nous allons explorer ses différentes valeurs dans cette leçon.

### Aperçu de la leçon

- Comprendre le « flux normal » (*normal flow*).
- Distinguer les éléments `block` et `inline`.
- Savoir quels éléments sont `block` ou `inline` par défaut.
- Comprendre les éléments `div` et `span`.

### Bloc et en ligne

La plupart des éléments étudiés jusqu'ici sont des éléments de bloc : leur style par défaut est `display: block`. Par défaut, ils s'empilent sur la page et chaque nouvel élément commence sur une nouvelle ligne.

Les éléments en ligne ne commencent pas une nouvelle ligne. Ils s'insèrent parmi les éléments voisins. Un lien, ou élément `<a>`, en est un bon exemple. Placé au milieu d'un paragraphe, [le lien se comporte comme une partie de ce paragraphe](https://www.youtube.com/watch?v=dQw4w9WgXcQ). Le remplissage et les marges se comportent aussi différemment sur les éléments en ligne. En général, évite de leur ajouter du remplissage ou des marges.

#### Le compromis `inline-block`

Les éléments `inline-block` se comportent comme des éléments en ligne, mais acceptent le remplissage et les marges comme des éléments de bloc. `display: inline-block` est utile à connaître, mais pour aligner plusieurs boîtes, tu auras probablement plus souvent recours à Flexbox, qui sera étudié en détail dans la prochaine leçon.

### Les éléments `div` et `span`

Dans une page web, tout contenu ne dispose pas d'une balise sémantique dédiée. Il faut parfois simplement un conteneur à styliser ou à positionner. C'est le rôle de `div` et `span`.

Un `div` est un conteneur générique de niveau bloc. Par défaut, il s'étend sur toute la largeur de son parent et commence sur une nouvelle ligne. On utilise souvent un `div` pour regrouper des éléments liés dans les composants d'une page, par exemple des cartes, des sections, des barres latérales ou des barres de navigation.

En plaçant du contenu dans un `div` et en lui attribuant une classe ou un identifiant (`class` ou `id`), tu crées un point d'ancrage pratique pour la mise en page et le style CSS.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="KKXXbwR" data-preview="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/KKXXbwR">
  block-inline-lesson-div-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Un `span` est un conteneur générique en ligne. Il s'insère dans une ligne de texte et n'occupe que l'espace nécessaire à son contenu. Contrairement à `div`, il ne commence pas une nouvelle ligne. Utilise `span` pour cibler ou styliser une partie d'une phrase, par exemple pour mettre un mot en évidence ou ajouter une infobulle. Ajoute-lui une classe ou un identifiant pour que le CSS puisse le sélectionner et le modifier.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="abLLPor" data-preview="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/abLLPor">
  block-inline-lesson-span-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Ni `div` ni `span` n'ajoutent de sens au contenu comme le font les balises sémantiques : ce sont des « briques » flexibles. Leur différence principale tient à leur comportement dans la mise en page : `div` participe au flux comme élément de bloc, tandis que `span` se comporte comme un élément en ligne. Utilise `div` pour regrouper et positionner de grands blocs, et `span` pour styliser ou manipuler de petites portions de texte.

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Le concept de « flux normal » est évoqué dans les ressources sur le modèle de boîte, mais il n'y est pas expliqué en détail. Lis la page MDN sur le [flux normal](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) pour comprendre comment les éléments se placent par défaut.
1. La page [Éléments HTML de bloc et en ligne](https://www.w3schools.com/html/html_blocks.asp) de W3Schools décrit ces éléments et en donne la liste.
1. Le tutoriel de DigitalOcean [Affichage inline et inline-block en CSS](https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block) contient des exemples utiles pour distinguer `inline` et `inline-block`.
1. Fais les exercices du répertoire `foundations/block-and-inline` dans notre [dépôt d'exercices CSS](https://github.com/TheOdinProject/css-exercises/tree/main/foundations/block-and-inline). Les consignes se trouvent dans le README. Suis cet ordre :
   - `01-margin-and-padding-1`
   - `02-margin-and-padding-2`

   Les solutions se trouvent dans le dossier `solution` de chaque exercice.
1. Tu te souviens de la page de recettes créée dans la section Fondations HTML ? Elle est assez *simple*, n'est-ce pas ? Ajoute-lui du CSS !
   - Le style est libre, mais utilise la méthode de la feuille CSS externe et plusieurs propriétés évoquées dans la leçon précédente (couleur, couleur d'arrière-plan, typographie, etc.). Essaie différentes propriétés pour comprendre leur effet. Ne cherche pas encore à obtenir un résultat parfait : l'objectif est de pratiquer et de te familiariser avec le CSS.
   - Nous n'avons pas encore vu comment utiliser une police personnalisée avec `font-family`. Consulte la liste des [familles génériques de polices CSS](https://www.w3schools.com/Css/css_font.asp) et les [polices web sécurisées](https://www.w3schools.com/cssref/css_websafe_fonts.asp). Ces dernières sont installées sur presque tous les appareils ; ajoute tout de même une famille générique de secours.

</div>
