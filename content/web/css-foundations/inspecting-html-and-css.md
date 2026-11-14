### Introduction

Savoir examiner et déboguer son HTML et son CSS est essentiel au développement front-end. Cette leçon présente les outils de développement Chrome, qui affichent des informations détaillées sur les éléments et les règles CSS, et aident à repérer et corriger les problèmes du code.

### Aperçu de la leçon

- Ouvrir l'inspecteur d'éléments.
- Sélectionner et examiner des éléments précis.
- Tester du HTML et du CSS dans l'inspecteur.

### L'inspecteur

Pour ouvrir l'inspecteur, fais un clic droit sur un élément d'une page web et choisis « Inspecter », ou appuie sur F12. Essaie maintenant pour voir le HTML et le CSS de cette page.

Ne te laisse pas impressionner par tous les outils affichés. Pour cette leçon, concentre-toi sur les panneaux **Elements** et **Styles**.

### Examiner des éléments

Le panneau **Elements** affiche toute la structure HTML de la page. Clique sur un élément pour le sélectionner. Tu peux aussi cliquer sur l'icône de sélection d'élément en haut à gauche, puis survoler un élément de la page.

![Icône de l'inspecteur](https://cdn.statically.io/gh/TheOdinProject/curriculum/e7ab90e044fba9f8ef9b5915c62221e2822b102b/foundations/html_css/css-foundations/inspecting-html-and-css/imgs/00.jpg)

Lorsqu'un élément est sélectionné, l'onglet **Styles** affiche les styles qui s'appliquent et ceux qui sont remplacés (leur texte est barré). Par exemple, avec l'inspecteur, clique sur le mot « Your » dans le titre « Your Career in Web Development Starts Here » de la [page d'accueil de TOP](https://www.theodinproject.com/home). À droite, tu verras les styles qui affectent cet élément, comme dans l'image ci-dessous. Ne t'inquiète pas pour la syntaxe `var()` : elle n'est pas utile pour le moment.

![Style remplacé](https://cdn.statically.io/gh/TheOdinProject/curriculum/e7ab90e044fba9f8ef9b5915c62221e2822b102b/foundations/html_css/css-foundations/inspecting-html-and-css/imgs/01.jpg)

### Tester des styles dans l'inspecteur

Le panneau **Styles** permet aussi de modifier les styles directement dans le navigateur. Clique dans un sélecteur pour ajouter une règle, ou sur un attribut ou une valeur existante pour la modifier. La page réagit immédiatement. Ces changements ne modifient pas le code source dans ton éditeur, mais ils sont très pratiques pour tester rapidement des attributs et des valeurs sans recharger la page.

### Exercices

<div class="lesson-content__panel" markdown="1">

1. Parcours les sections suivantes de la [documentation officielle de Chrome DevTools](https://developer.chrome.com/docs/devtools/) :
   - [Présentation des outils DevTools](https://developer.chrome.com/docs/devtools/overview/) : ne suis pas les liens vers d'autres pages. Découvre simplement les outils disponibles, sans chercher à tous les maîtriser.
   - [Ouvrir Chrome DevTools](https://developer.chrome.com/docs/devtools/open/) : tu retrouveras les méthodes présentées plus haut, ainsi que quelques options supplémentaires.
   - [Afficher et modifier le DOM](https://developer.chrome.com/docs/devtools/dom/) : passe les parties qui utilisent la console JavaScript.
   - [Afficher et modifier le CSS](https://developer.chrome.com/docs/devtools/css) : suis les instructions interactives.

</div>
