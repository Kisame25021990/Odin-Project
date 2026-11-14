## Introduction

La majeure partie du contenu sur le web est textuelle, tu vas donc régulièrement devoir manipuler des éléments de texte HTML.

Dans cette leçon, nous allons découvrir les éléments textuels que tu utiliseras le plus souvent.

## Objectifs de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Comment créer des paragraphes.
- Comment créer des titres.
- Comment créer du texte en gras.
- Comment créer du texte en italique.
- Les relations entre éléments imbriqués.
- Comment créer des commentaires HTML.

## Paragraphes

À ton avis, que devrait afficher le texte suivant sur une page HTML ?

```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

Cela ressemble à deux paragraphes de texte, tu pourrais donc t'attendre à ce qu'ils s'affichent ainsi. Ce n'est pourtant pas le cas, comme tu peux le voir dans l'exemple ci-dessous :

> Exemple interactif (CodePen) : [no-paragraphs-example](https://codepen.io/TheOdinProjectExamples/pen/xxrKqeV)

Lorsque le navigateur rencontre de nouvelles lignes comme celles-ci dans ton HTML, il les compresse en un seul espace. Résultat : tout le texte est regroupé sur une seule longue ligne.

Si nous voulons créer des paragraphes en HTML, nous devons utiliser l'élément paragraphe, qui ajoute une nouvelle ligne après chacun de nos paragraphes. Un élément paragraphe est défini en entourant le contenu textuel d'une balise `<p>`.

Remplacer notre exemple précédent par des éléments paragraphe corrige le problème :

> Exemple interactif (CodePen) : [paragraph-example](https://codepen.io/TheOdinProjectExamples/pen/mdwbmdp)

## Titres

Les titres diffèrent des autres éléments de texte HTML : ils sont affichés plus grands et plus gras que le reste du texte pour signifier qu'il s'agit de titres.

Il existe 6 niveaux de titres différents, de `<h1>` à `<h6>`. Le nombre dans une balise de titre représente son niveau. Le titre le plus grand et le plus important est `h1`, tandis que `h6` est le plus petit titre, au niveau le plus bas.

Les titres se définissent de la même manière que les paragraphes. Par exemple, pour créer un titre `h1`, on entoure le texte du titre d'une balise `<h1>`.

> Exemple interactif (CodePen) : [HTML-headings-example](https://codepen.io/TheOdinProjectExamples/pen/LYLPLbg)

Utiliser le bon niveau de titre est important, car les niveaux créent une **hiérarchie** du contenu. Un titre `h1` doit toujours servir de titre à la page dans son ensemble, et les titres de niveau inférieur doivent servir de titres aux contenus des sections plus petites de la page.

## L'élément Strong

L'élément `<strong>` met le texte en gras. Il marque aussi sémantiquement le texte comme important ; cela influence des outils comme les lecteurs d'écran, sur lesquels s'appuient les utilisateurs malvoyants pour utiliser ton site. Le ton de la voix de certains lecteurs d'écran change pour communiquer l'importance du texte contenu dans un élément `strong`. Pour définir un élément `strong`, on entoure le contenu textuel d'une balise `<strong>`.

Tu peux utiliser `strong` seul :

> Exemple interactif (CodePen) : [HTML-single-strong-example](https://codepen.io/TheOdinProjectExamples/pen/qBjWXrB)

Mais tu utiliseras probablement bien plus souvent l'élément `strong` en combinaison avec d'autres éléments de texte, comme ceci :

> Exemple interactif (CodePen) : [HTML-strong-with-paragraph-example](https://codepen.io/TheOdinProjectExamples/pen/wvewqJr)

Parfois, tu voudras mettre du texte en gras sans lui donner un sens important. Tu apprendras comment faire dans les leçons CSS plus tard dans le cursus.

## L'élément Em

L'élément `<em>` met le texte en italique. Il place aussi sémantiquement l'accent sur le texte, ce qui peut là encore influencer des outils comme les lecteurs d'écran. Pour définir un élément mis en emphase, on entoure le contenu textuel d'une balise `<em>`.

Pour utiliser `<em>` seul :

> Exemple interactif (CodePen) : [HTML-single-em-example](https://codepen.io/TheOdinProjectExamples/pen/wvewqpp)

Encore une fois, comme pour l'élément `strong`, tu utiliseras surtout l'élément `<em>` avec d'autres éléments de texte :

> Exemple interactif (CodePen) : [HTML-em-with-paragraph-example](https://codepen.io/TheOdinProjectExamples/pen/VwWZzyj)

## Imbrication et indentation

Tu as peut-être remarqué que, dans tous les exemples de cette leçon, nous indentons les éléments qui se trouvent à l'intérieur d'autres éléments. C'est ce qu'on appelle l'**imbrication (nesting)** des éléments.

Lorsque nous imbriquons des éléments dans d'autres éléments, nous créons entre eux une relation **parent/enfant (parent and child)**. Les éléments imbriqués sont les enfants, et l'élément qui les contient est le parent.

Dans l'exemple suivant, l'élément `body` est le parent et le paragraphe est l'enfant :

> Exemple interactif (CodePen) : [HTML-nesting-parent-child](https://codepen.io/TheOdinProjectExamples/pen/oNwjEvO)

Tout comme dans les relations humaines, un élément parent HTML peut avoir plusieurs enfants. Les éléments situés au même niveau d'imbrication sont considérés comme des **frères et sœurs (siblings)**.

Par exemple, les deux paragraphes du code suivant sont frères et sœurs, puisqu'ils sont tous deux enfants de l'élément `body` et au même niveau d'imbrication l'un que l'autre :

> Exemple interactif (CodePen) : [HTML-nesting-siblings](https://codepen.io/TheOdinProjectExamples/pen/ZEybrYx)

Nous utilisons l'indentation pour rendre le niveau d'imbrication clair et lisible, pour nous-mêmes comme pour les autres développeurs qui travailleront sur notre HTML à l'avenir. Dans nos exemples, nous avons indenté chaque élément enfant de deux espaces par niveau d'imbrication.

Les relations parent, enfant et frère/sœur entre éléments deviendront bien plus importantes plus tard, lorsque nous commencerons à styliser notre HTML avec CSS et à ajouter des comportements avec JavaScript. Pour l'instant, il suffit de connaître la distinction entre la façon dont les éléments sont reliés et la terminologie utilisée pour décrire leurs relations.

## Commentaires HTML

Les commentaires HTML ne sont pas visibles par le navigateur ; ils nous permettent de *commenter* notre code afin que d'autres développeurs, ou nous-mêmes plus tard, puissent les lire et comprendre le contexte d'une partie du code qui pourrait ne pas être évidente.

Pour écrire un commentaire HTML, il suffit d'entourer le commentaire des balises `<!--` et `-->`. Par exemple :

> Exemple interactif (CodePen) : [HTML-comments-example](https://codepen.io/TheOdinProjectExamples/pen/abwoyBg)

:::note
### Raccourci clavier VSCode

Si taper la syntaxe des commentaires te fatigue, le raccourci suivant t'aidera à créer rapidement un nouveau commentaire, à transformer n'importe quelle ligne en commentaire, ou à décommenter n'importe quelle ligne :

- Utilisateurs Mac : <kbd>Cmd</kbd> + <kbd>/</kbd>
- Utilisateurs Windows et Linux : <kbd>Ctrl</kbd> + <kbd>/</kbd>

Il est important de savoir que ces raccourcis concernent la disposition de clavier anglaise et ne fonctionneront pas nécessairement avec d'autres dispositions non anglaises. Nous sommes convaincus que tu sauras trouver les équivalents de ces raccourcis pour ta disposition de clavier.
:::

## Exercice

:::assignment
1. Regarde la vidéo de Kevin Powell [HTML Paragraph and Headings](https://www.youtube.com/watch?v=yqcd-XkxZNM&t=35s).
1. Regarde la vidéo de Kevin Powell [HTML Bold and Italic Text](https://www.youtube.com/watch?v=gW6cBZLUk6M&t=5s).
1. Pour t'entraîner à manipuler du texte en HTML, crée une page d'article de blog simple qui utilise différents titres, des paragraphes, et du texte en gras et en italique dans les paragraphes. Tu peux utiliser [Lorem Ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) pour générer du texte factice à la place d'un vrai texte pendant que tu construis tes sites. VS Code inclut un raccourci pour générer du lorem ipsum. Pour déclencher le raccourci, tape `lorem` sur la ligne où tu veux le texte factice, puis appuie sur la touche <kbd>Entrée</kbd>, et voilà : tu as généré du texte factice sans problème.
:::
