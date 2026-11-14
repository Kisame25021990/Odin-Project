## Introduction

Jusqu'ici, tout ce que nous avons abordé avec flexbox a utilisé la règle `flex: 1` sur tous les éléments flex, ce qui fait que les éléments grandissent ou rétrécissent équitablement pour remplir tout l'espace disponible. Très souvent, cependant, ce n'est pas l'effet souhaité. Flex est aussi très utile pour organiser des éléments qui ont une taille spécifique.

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Tu apprendras à aligner des éléments à l'intérieur d'un conteneur flex, à la fois verticalement et horizontalement.

## Alignement

Regardons un exemple.

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="MWoyBzR" data-editable="true" data-user="TheOdinProjectExamples" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/MWoyBzR">
  flex-alignment example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Tu devrais maintenant pouvoir prédire ce qui se passe si tu appliques `flex: 1` à `.item`. Essaie avant de continuer !

Ajouter `flex: 1` à `.item` fait grandir chacun des éléments pour remplir l'espace disponible, mais que faire si nous voulions qu'ils conservent la même largeur tout en se répartissant différemment dans le conteneur ? C'est possible !

Retire `flex: 1` de `.item` et ajoute `justify-content: space-between` à `.container`. Tu devrais obtenir quelque chose comme ceci :

![espace entre](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/07.png)

`justify-content` aligne les éléments sur l'**axe principal**. Il existe quelques valeurs que tu peux utiliser ici. Tu découvriras les autres dans les lectures, mais pour l'instant essaie de la changer en `center`, ce qui devrait centrer les boîtes le long de l'axe principal.

Pour modifier le placement des éléments le long de l'**axe transversal**, utilise `align-items`. Essaie d'amener les boîtes au centre du conteneur en ajoutant `align-items: center` à `.container`. Le résultat souhaité ressemble à ceci :

![centré](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/08.png)

Comme `justify-content` et `align-items` reposent sur les axes principal et transversal de ton conteneur, leur comportement change lorsque tu modifies la flex-direction d'un conteneur flex. Par exemple, lorsque tu passes `flex-direction` à `column`, `justify-content` aligne verticalement et `align-items` aligne horizontalement. Le comportement le plus courant reste toutefois celui par défaut, c'est-à-dire que `justify-content` aligne les éléments horizontalement (car l'axe principal est horizontal par défaut) et `align-items` les aligne verticalement. L'un des principaux points de blocage des débutants avec flexbox est la confusion lorsque ce comportement change.

### L'espacement (gap)

Une fonctionnalité très utile de flex est la propriété `gap`. Définir `gap` sur un conteneur flex ajoute un espace spécifié entre les éléments flex, comme si tu ajoutais une marge aux éléments eux-mêmes. `gap` est une propriété *récente*, elle n'apparaît donc pas encore dans beaucoup de ressources, mais elle fonctionne de manière fiable dans tous les navigateurs modernes : elle est donc sûre à utiliser et très pratique ! Ajouter `gap: 8px` à l'exemple centré ci-dessus produit le résultat ci-dessous.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBjZyea" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/qBjZyea">
  flex-alignment example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Il te reste des choses à apprendre dans les lectures ci-dessous, mais à ce stade tu vois sûrement à quel point flexbox est extrêmement utile. Avec les seules propriétés que nous avons déjà abordées, tu pourrais déjà assembler des mises en page impressionnantes !

Prends ton temps pour parcourir les lectures. Il y aura quelques rappels des éléments que nous avons déjà abordés ici, mais elles vont plus en profondeur et touchent à quelques choses qui n'ont pas encore été mentionnées. Ne te stresse pas trop à essayer de mémoriser chaque petit détail pour l'instant ; code simplement en suivant les exemples et fais de ton mieux pour intérioriser tout ce qui est *possible* avec flexbox. Tu devras revenir à ces ressources une fois arrivé aux exercices pratiques, et c'est parfaitement normal. Plus tu utilises ces choses, mieux elles resteront dans ton esprit… et tu vas les utiliser *constamment*. Amuse-toi bien !

## Exercice

:::assignment
1. Ce magnifique [Guide interactif de Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) couvre tout ce que tu dois savoir. Il aidera à renforcer les concepts que nous avons déjà abordés avec des exemples vraiment amusants et créatifs. Passe un peu de temps dessus ; une partie devrait être du rappel à ce stade, mais les fondations présentées ici sont importantes !
1. Le [« Guide to Flexbox » de CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) est un classique. Les images et les exemples sont très utiles. Ce serait une bonne idée de revoir les parties 1 à 3 et la partie 5 (ne te soucie pas des parties sur les media queries, nous les aborderons plus tard dans le cours), puis de le mettre en favori comme excellente antisèche pour référence future (garde-le à portée de main pour les exercices pratiques).
1. Termine [Flexbox Froggy](https://flexboxfroggy.com/), un petit jeu amusant pour t'entraîner à déplacer des choses avec flexbox.
1. Fais les exercices du [dossier `foundations/flex` de notre dépôt d'exercices CSS](https://github.com/TheOdinProject/css-exercises/tree/main/foundations/flex) (rappelle-toi que les instructions se trouvent dans le README) dans l'ordre :
    - `01-flex-center`
    - `02-flex-header`
    - `03-flex-header-2`
    - `04-flex-information`
    - `05-flex-modal`
    - `06-flex-layout`
    - `07-flex-layout-2`

    Note : les solutions de ces exercices se trouvent dans le dossier `solution` de chaque exercice.
:::
