## Introduction

Comme tu vas l'apprendre, il existe *de nombreuses* façons de déplacer des éléments sur une page web. De nouvelles méthodes ont été développées au fil des années et les anciennes sont passées de mode. Flexbox n'a pas toujours été disponible en CSS — ses débuts ont été *révolutionnaires*.

De nombreuses ressources le placent vers la fin de leur programme parce que c'est une technologie relativement récente. Mais aujourd'hui, c'est devenu la façon par défaut de positionner les éléments pour de nombreux développeurs. Flexbox sera l'un des outils les plus utilisés de ta boîte à outils, alors pourquoi ne pas l'apprendre en premier ?

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Tu apprendras à positionner des éléments avec flexbox.
- Tu découvriras les conteneurs flex et les éléments flex.
- Tu apprendras à créer des composants et des mises en page utiles qui vont au-delà du simple empilement et centrage des éléments.

## Avant de commencer

Les mises en page Flexbox peuvent devenir un peu compliquées. Dans une leçon précédente, tu as appris à inspecter et déboguer des choses avec les outils de développement de ton navigateur. Ces outils seront *essentiels* pour toi dans les leçons suivantes. Si quelque chose ne se comporte pas comme prévu, l'inspecter dans les outils de développement devrait être ta première étape *à chaque fois*.

Flexbox n'est pas nécessairement plus difficile que les autres concepts que nous avons abordés jusqu'ici, mais il *comporte* un peu plus de pièces mobiles. Il sera un peu difficile d'utiliser quoi que ce soit de ce que tu apprends dans ces premières leçons avant d'arriver à la fin et de pouvoir tout assembler. Au fil de ta progression, rends-toi service et **joue avec tous les exemples de code.**

Tu auras très probablement besoin de revenir consulter ces leçons (ou quelques-unes des ressources que nous partageons avec toi) lorsque tu arriveras aux exercices à la fin de la section, mais si tu prends ton temps et expérimentes tous les exemples de code que nous fournissons, tu sauras mieux où chercher le moment venu.

## C'est parti pour flex !

Flexbox est une façon d'organiser des éléments en lignes ou en colonnes. Ces éléments vont s'étirer (c'est-à-dire grandir ou rétrécir) selon certaines règles que tu peux définir. Pour commencer, regardons une démonstration.

:::note
### CodePens interactifs

Nous avons intégré beaucoup d'exemples interactifs dans ces leçons. Prends ton temps pour les expérimenter au fil de ta progression afin d'ancrer les concepts dans ton esprit !
:::

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="QWgNxrp" data-editable="true" data-user="TheOdinProjectExamples" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/QWgNxrp">
  first flex example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Nous verrons bientôt exactement ce qui se passe ici. Mais pour l'instant, décommente les deux déclarations CSS liées à flex dans le CodePen ci-dessus en supprimant les balises `/*` et `*/` qui les entourent, puis observe le résultat.

:::note
### Commentaires

Les commentaires empêchent le navigateur d'interpréter des lignes comme du code et sont encadrés par des balises spécifiques. Le CSS utilise `/*`comme balise d'ouverture de commentaire et `*/` comme balise de fermeture, tandis que le HTML et le JavaScript ont leur propre syntaxe. Les lignes de code mises en commentaire peuvent être « réactivées » en supprimant les balises de commentaire qui entourent le code.
:::

Les 3 divs devraient maintenant être disposées horizontalement. Si tu redimensionnes le cadre de résultats avec les boutons « 1x », « .5x » et « .25x », tu verras aussi que les divs vont s'étirer. Elles rempliront l'espace disponible et auront chacune une largeur égale.

Si tu ajoutes une autre div au HTML, à l'intérieur de `.flex-container`, elle apparaîtra à côté des autres, et tout s'étirera pour tenir dans l'espace disponible.

:::note
### Ouvrir les CodePens à l'extérieur

S'il est difficile de voir ce qui se passe dans le petit CodePen intégré, n'hésite pas à cliquer sur le bouton « Edit on CodePen » ou « Fork on CodePen ». Cela ouvrira l'exemple dans un environnement pleine taille. Certains des exemples suivants pourraient particulièrement bénéficier de cette manipulation.
:::

### Conteneurs flex et éléments flex

Comme tu l'as vu, flexbox n'est pas une simple propriété CSS mais toute une boîte à outils de propriétés que tu peux utiliser pour placer les choses là où tu en as besoin. Certaines de ces propriétés s'appliquent au *conteneur flex*, tandis que d'autres s'appliquent aux *éléments flex*. C'est un concept important.

Un conteneur flex est tout élément sur lequel est appliqué `display: flex`. Un élément flex est tout élément qui se trouve directement à l'intérieur d'un conteneur flex.

![Élément avec 'display: flex' appliqué, qui est un conteneur flex et dont les éléments enfants sont ses éléments flex](https://cdn.statically.io/gh/TheOdinProject/curriculum/b2a53579fcbec1cfde47646cc5a2b109cd7772cc/foundations/html_css/flexbox/imgs/03.png)

De façon un peu déroutante, tout élément peut être à la fois un conteneur flex *et* un élément flex. Autrement dit, tu peux aussi appliquer `display: flex` à un élément flex, puis utiliser flexbox pour organiser *ses* enfants.

![Élément conteneur flex avec trois éléments flex enfants à l'intérieur, dont l'un est aussi un conteneur flex avec ses propres éléments flex enfants](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/04.png)

Créer et imbriquer plusieurs conteneurs et éléments flex est la principale façon dont nous construirons des mises en page complexes. L'image suivante a été obtenue en utilisant *uniquement* flexbox pour organiser, dimensionner et placer les différents éléments. Flexbox est un outil *très* puissant.

![De nombreux conteneurs flex séparés et imbriqués, avec des tailles et des espacements variés des éléments flex, et des directions flex variées](https://cdn.statically.io/gh/TheOdinProject/curriculum/1c08f76bfc94871a3e01bcc2488c82519335b5cd/foundations/html_css/flexbox/imgs/05.png)

## Exercice

:::assignment
1. Surprise ! Pas d'exercice ! Tu vas apprendre beaucoup plus tout au long des prochaines leçons, alors continue.
:::
