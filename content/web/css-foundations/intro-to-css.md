## Introduction

Dans la leçon précédente, tu as appris à écrire le HTML qui détermine la structure d'une page web. L'étape suivante consiste à donner belle allure à cette structure grâce à un peu de *style*, et c'est exactement à cela que sert le CSS. Dans les prochaines leçons, nous allons nous concentrer sur ce que nous considérons comme des concepts CSS fondamentaux, des choses que tout le monde devrait connaître dès le départ — que l'on débute ou que l'on ait besoin d'un rafraîchissement.

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Ajouter des styles au HTML avec le CSS.
- Comment utiliser les attributs `class` et `id`.
- Comment fonctionnent les différents sélecteurs CSS.

## Ajouter du CSS au HTML

Avant d'apprendre à écrire des règles CSS, commençons par lier un fichier CSS à notre `index.html` afin que tu puisses expérimenter chaque exemple tout au long de cette leçon.

Il existe trois façons d'ajouter du CSS au HTML :

- CSS externe
- CSS interne
- CSS en ligne

Nous allons nous concentrer sur le CSS externe pour l'instant, car c'est la méthode que tu utiliseras le plus souvent. Les deux autres méthodes seront abordées plus loin dans cette leçon.

### CSS externe

Le CSS externe est la méthode la plus courante que tu rencontreras ; elle consiste à créer un fichier séparé pour le CSS et à le lier dans le HTML.

```html
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

D'abord, on ajoute un élément vide `<link>` entre les balises d'ouverture et de fermeture `<head>` du fichier HTML. L'attribut `href` est l'emplacement du fichier CSS, dans notre cas un chemin relatif à l'emplacement du fichier HTML (mais cela pourrait aussi être une URL vers une feuille de style hébergée ailleurs). Dans notre exemple ci-dessus, nous supposons que les deux fichiers se trouvent dans le même répertoire. L'attribut `rel` est requis, et il précise la relation entre le fichier HTML et le fichier lié.

Ensuite, on crée un fichier `styles.css` vide dans le même répertoire que ton fichier `index.html`. Nous commencerons à ajouter des règles CSS à ce fichier dans la section suivante.

:::note
### Noms des fichiers CSS

`styles.css` est simplement le nom de fichier que nous avons choisi ici. Tu peux nommer le fichier comme tu veux, tant que le type de fichier est `.css` ; « style » ou « styles » sont simplement les noms les plus couramment utilisés.
:::

Quelques avantages de cette méthode :

1. Elle sépare notre HTML et notre CSS, ce qui rend le fichier HTML plus petit et les choses plus propres.
1. Nous n'avons besoin de modifier le CSS qu'à *un seul* endroit, ce qui est particulièrement pratique pour les sites web comportant de nombreuses pages qui partagent des styles similaires.

Pour nous aider à apprendre à écrire des règles CSS, commençons par créer un fichier `index.html` (avec le boilerplate habituel) ainsi qu'un fichier `styles.css` dans le même répertoire, puis lions les deux fichiers ensemble comme décrit ci-dessus.

## Syntaxe de base

Au niveau le plus élémentaire, le CSS est constitué de diverses règles. Chaque règle se compose d'un sélecteur (nous y reviendrons dans un instant) et d'une liste de déclarations séparées par des points-virgules, chacune de ces déclarations étant constituée d'une paire propriété–valeur.

![Syntaxe CSS de base](https://cdn.statically.io/gh/TheOdinProject/curriculum/05ce472eabf8e04eeb2cc9139e66db884074fd7d/foundations/html_css/css-foundations/imgs/00.jpg)

:::note
### HTML sémantique

Un `<div>` est l'un des éléments HTML de base. C'est un conteneur vide. En général, il vaut mieux utiliser d'autres balises comme `<h1>` ou `<p>` pour le contenu de tes projets, mais à mesure que tu en apprendras davantage sur le CSS, tu découvriras qu'il existe de nombreux cas où ce dont tu as besoin n'est qu'un conteneur pour d'autres éléments. Bon nombre de nos exercices utilisent de simples `<div>` par souci de simplicité. Des leçons ultérieures approfondiront beaucoup plus quand il est approprié d'utiliser les différents éléments HTML.
:::

## Sélecteurs

Les sélecteurs désignent les éléments HTML auxquels les règles CSS s'appliquent ; ce sont eux qui sont réellement « sélectionnés » pour chaque règle. Les sous-sections suivantes ne couvrent pas tous les sélecteurs disponibles, mais elles présentent de loin les plus courants et ceux avec lesquels tu devrais d'abord te familiariser.

Au fil de chaque exemple, amuse-toi à les tester pour voir les résultats en ajoutant le HTML et le CSS dans leurs fichiers respectifs.

### Sélecteur universel

Le sélecteur universel sélectionne les éléments de tous les types (c'est-à-dire tout le document), d'où son nom « universel », et sa syntaxe est un simple astérisque. Dans l'exemple ci-dessous, chaque élément se verrait appliquer le style `color: purple;`.

```css
* {
  color: purple;
}
```

### Sélecteurs de type

Un sélecteur de type (ou sélecteur d'élément) sélectionne tous les éléments du type d'élément donné, et sa syntaxe est simplement le nom de l'élément :

```html
<!-- index.html -->

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>
```

```css
/* styles.css */

div {
  color: white;
}
```

Ici, les trois éléments `<div>` seraient sélectionnés, tandis que l'élément `<p>` ne le serait pas.

### Sélecteurs de classe

Les sélecteurs de classe sélectionnent tous les éléments ayant la classe donnée, qui n'est qu'un attribut que tu places sur un élément HTML. Voici comment ajouter une classe à une balise HTML et la sélectionner en CSS :

```html
<!-- index.html -->

<div class="alert-text">Please agree to our terms of service.</div>
```

```css
/* styles.css */

.alert-text {
  color: red;
}
```

Remarque la syntaxe des sélecteurs de classe : un point immédiatement suivi de la valeur sensible à la casse de l'attribut class. Les classes ne sont pas obligées d'être spécifiques à un élément particulier, tu peux donc utiliser la même classe sur autant d'éléments que tu veux.

:::note
### Chiffres initiaux et classes

Les sélecteurs de classe ne fonctionnent pas si le nom de classe commence par un chiffre. Par exemple, si tu donnes à un élément le nom de classe `4lert-text`, utiliser `.4lert-text` comme sélecteur ne le ciblera pas.
:::

Autre chose que tu peux faire avec l'attribut class : ajouter plusieurs classes à un seul élément sous forme de liste séparée par des espaces, comme `class="alert-text severe-alert"`. Comme les espaces servent à séparer les noms de classe de cette manière, tu ne dois jamais utiliser d'espaces pour les noms composés de plusieurs mots et tu dois plutôt utiliser un trait d'union.

### Sélecteurs d'ID

Les sélecteurs d'ID sont similaires aux sélecteurs de classe. Ils sélectionnent un élément ayant l'ID donné, qui est un autre attribut que tu places sur un élément HTML. La différence majeure entre les classes et les ID est qu'un élément ne peut avoir qu'**un seul** ID. Il ne peut pas être répété sur une même page et ne doit contenir aucun espace :

```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#title {
  background-color: red;
}
```

Pour les ID, au lieu d'un point, on utilise un dièse immédiatement suivi de la valeur sensible à la casse de l'attribut ID. Un piège courant est de trop utiliser l'attribut ID alors qu'on n'en a pas nécessairement besoin et que les classes suffiraient. Bien qu'il existe des cas où utiliser un ID a du sens ou est nécessaire, par exemple pour tirer parti de la spécificité ou pour que des liens redirigent vers une section de la page actuelle, tu dois utiliser les ID **avec parcimonie** (voire pas du tout).

:::note
### Chiffres initiaux et ID

Tout comme les sélecteurs de classe, les sélecteurs d'ID ne peuvent pas commencer par un chiffre. Par exemple, si tu donnes à un élément l'ID `7itle`, le sélecteur `#7itle` ne fonctionnera pas — ce n'est pas un sélecteur CSS valide.
:::

### Le sélecteur de regroupement

Et si nous avons deux groupes d'éléments qui partagent certaines de leurs déclarations de style ?

```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```

Nos deux sélecteurs `.read` et `.unread` partagent les déclarations `color: white;` et `background-color: black;`, mais possèdent sinon plusieurs déclarations qui leur sont propres. Pour réduire la répétition, nous pouvons regrouper ces deux sélecteurs dans une liste séparée par des virgules :

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

Les deux exemples ci-dessus (avec et sans regroupement) produiront le même résultat, mais le second exemple réduit la répétition des déclarations et facilite la modification de la `color` ou de la `background-color` pour les deux classes à la fois.

### Chaîner les sélecteurs

Une autre façon d'utiliser les sélecteurs consiste à les chaîner dans une liste sans séparation. Imaginons que nous ayons le HTML suivant :

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

Nous avons deux éléments avec la classe `subsection` qui ont une sorte de styles uniques, mais que se passe-t-il si nous voulons appliquer une règle distincte uniquement à l'élément qui possède aussi `header` comme seconde classe ? Eh bien, nous pourrions chaîner les deux sélecteurs de classe ensemble dans notre CSS comme ceci :

```css
.subsection.header {
  color: red;
}
```

Ce que fait `.subsection.header`, c'est sélectionner tout élément qui possède à la fois les classes `subsection` *et* `header`. Remarque qu'il n'y a aucun espace entre les sélecteurs de classe `.subsection` et `.header`. Cette syntaxe fonctionne globalement pour chaîner n'importe quelle combinaison de sélecteurs, sauf pour le chaînage de plus d'un [sélecteur de type](#type-selectors).

Cela peut aussi servir à chaîner une classe et un ID, comme montré ci-dessous :

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
```

Tu peux prendre les deux éléments ci-dessus et les combiner avec ce qui suit :

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

En général, tu ne peux pas chaîner plus d'un sélecteur de type puisqu'un élément ne peut pas être de deux types différents à la fois. Par exemple, chaîner deux sélecteurs de type comme `div` et `p` donnerait le sélecteur `divp`, qui ne fonctionnerait pas puisque le sélecteur chercherait un élément littéral `<divp>`, qui n'existe pas.

### Combinateur descendant

Les combinateurs nous permettent de combiner plusieurs sélecteurs différemment du regroupement ou du chaînage, car ils expriment une relation entre les sélecteurs. Il existe quatre types de combinateurs au total, mais pour l'instant nous allons seulement te présenter le **combinateur descendant**, représenté en CSS par un simple espace entre les sélecteurs. Un combinateur descendant ne sélectionne les éléments correspondant au dernier sélecteur que s'ils ont aussi un ancêtre (parent, grand-parent, etc.) correspondant au sélecteur précédent.

Ainsi, quelque chose comme `.ancestor .child` sélectionnerait un élément ayant la classe `child` s'il a un ancêtre ayant la classe `ancestor`. Une autre façon de le voir : `child` ne sera sélectionné que s'il est imbriqué dans `ancestor`, quelle que soit la profondeur de cette imbrication. Jette un rapide coup d'œil à l'exemple ci-dessous et vois si tu peux dire quels éléments seraient sélectionnés selon la règle CSS fournie :

```html
<!-- index.html -->

<div class="ancestor">
  <div class="contents">
    <div class="contents"></div>
  </div>
</div>

<div class="contents"></div>
```

```css
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
```

Dans l'exemple ci-dessus, les deux premiers éléments avec la classe `contents` (aux lignes 4 et 5) seraient sélectionnés, mais le dernier élément (à la ligne 9) ne le serait pas. Ta supposition était-elle correcte ?

Il n'y a vraiment aucune limite au nombre de combinateurs que tu peux ajouter à une règle, donc `.one .two .three .four` serait totalement valide. Cela sélectionnerait simplement un élément ayant une classe `four` s'il a un ancêtre ayant une classe `three`, et si cet ancêtre a lui-même un ancêtre ayant une classe `two`, et ainsi de suite. En général, tu veux éviter d'essayer de sélectionner des éléments qui nécessitent ce niveau d'imbrication, car cela peut devenir assez confus et long, et cela peut poser des problèmes de spécificité.

## Propriétés pour commencer

Certaines propriétés CSS que tu vas utiliser tout le temps, ou du moins le plus souvent. Nous allons te présenter plusieurs de ces propriétés, mais ce n'est en aucun cas une liste complète. Apprendre les propriétés suivantes suffira pour te lancer. Note que toutes les propriétés ont une valeur initiale par défaut, qui sera utilisée si ni toi ni le navigateur n'avez défini une autre valeur (la documentation MDN de chaque propriété CSS détaille ces valeurs).

### Color et background-color

La propriété `color` définit la couleur du texte d'un élément, tandis que `background-color` définit, eh bien, la couleur d'arrière-plan d'un élément. Je suppose que nous avons terminé ?

Presque. Ces deux propriétés peuvent accepter l'une de plusieurs sortes de valeurs. Une valeur courante est un mot-clé, comme un nom de couleur réel tel que `red` ou le mot-clé `transparent`. Elles acceptent aussi les valeurs HEX, RGB et HSL, que tu connais peut-être si tu as déjà utilisé un logiciel de retouche photo ou un site où tu pouvais personnaliser les couleurs de ton profil.

```css
p {
  /* hex example: */
  color: #1100ff;
}

p {
  /* rgb example: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}
```

Jette un rapide coup d'œil à [CSS Legal Color Values](https://www.w3schools.com/cssref/css_colors_legal.asp) pour voir comment ajuster l'opacité de ces couleurs en ajoutant une valeur alpha.

### Bases de typographie et text-align

`font-family` peut être une valeur unique ou une liste de valeurs séparées par des virgules qui déterminent la police utilisée par un élément. Chaque police appartient à l'une de deux catégories : soit un « nom de famille de police » comme `"Times New Roman"` (on utilise des guillemets à cause de l'espace entre les mots), soit un « nom de famille générique » comme `serif` (les noms de famille génériques n'utilisent jamais de guillemets).

Si un navigateur ne trouve pas ou ne prend pas en charge la première police d'une liste, il utilisera la suivante, puis la suivante, et ainsi de suite jusqu'à trouver une police prise en charge et valide. C'est pourquoi il est de bonne pratique d'inclure une liste de valeurs pour cette propriété, en commençant par la police que tu veux voir utilisée en priorité et en terminant par une famille de polices générique comme solution de repli, par exemple `font-family: "Times New Roman", serif;`

`font-size` va, comme son nom l'indique, définir la taille de la police. Lorsque tu donnes une valeur à cette propriété, la valeur ne doit contenir aucun espace, par exemple `font-size: 22px` n'a pas d'espace entre « 22 » et « px ».

`font-weight` affecte le gras du texte, à condition que la police prenne en charge le poids spécifié. Cette valeur peut être un mot-clé, par exemple `font-weight: bold`, ou un nombre entre 1 et 1000, par exemple `font-weight: 700` (l'équivalent de `bold`). Généralement, les valeurs numériques sont par incréments de 100 jusqu'à 900, mais cela dépend de la police.

`text-align` aligne le texte horizontalement dans un élément, et tu peux utiliser les mots-clés courants que tu as peut-être rencontrés dans des traitements de texte comme valeur de cette propriété, par exemple `text-align: center`.

### Hauteur et largeur des images

Les images ne sont pas les seuls éléments dont on peut ajuster la hauteur et la largeur, mais nous voulons nous concentrer spécifiquement sur elles dans ce cas.

Par défaut, les valeurs `height` et `width` d'un élément `<img>` seront identiques à la hauteur et à la largeur réelles du fichier image. Si tu voulais ajuster la taille de l'image sans lui faire perdre ses proportions, tu définirais la propriété `height` ou `width` à une valeur spécifique et l'autre propriété à `auto`. Par exemple :

```css
img {
  height: auto;
  width: 500px;
}
```

Par exemple, si la taille d'origine d'une image était de 500 px de hauteur et 1000 px de largeur, l'utilisation du CSS ci-dessus donnerait une hauteur de 250 px.

Ces propriétés fonctionnent conjointement avec les attributs height et width du HTML. Il est préférable d'inclure à la fois ces propriétés et les attributs HTML pour les éléments image, même si tu ne comptes pas modifier les valeurs par rapport à celles d'origine du fichier image. Lorsque ces valeurs ne sont pas incluses, si une image met plus de temps à charger que le reste du contenu de la page, elle n'occupera d'abord aucun espace sur la page, mais provoquera soudainement un décalage brutal du reste du contenu une fois chargée. Indiquer explicitement une `height` et une `width` empêche cela, car l'espace sera « réservé » sur la page et apparaîtra vide jusqu'au chargement de l'image.

## Autres méthodes pour ajouter du CSS au HTML

Maintenant que nous avons appris une syntaxe de base, il existe deux méthodes supplémentaires pour ajouter du CSS au HTML (en plus de la méthode externe vue plus tôt dans cette leçon).

### CSS interne

Le CSS interne (ou CSS intégré) consiste à ajouter le CSS dans le fichier HTML lui-même au lieu de créer un fichier complètement séparé. Avec la méthode interne, tu places toutes les règles à l'intérieur d'une paire de balises `<style>` d'ouverture et de fermeture, elles-mêmes placées à l'intérieur des balises `<head>` d'ouverture et de fermeture de ton fichier HTML. Comme les styles sont placés directement dans les balises `<head>`, nous n'avons plus besoin d'un élément `<link>` comme l'exige la méthode externe.

À part ces différences, la syntaxe est exactement la même que celle de la méthode externe (sélecteur, accolades, déclarations) :

```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ...
</body>
```

Cette méthode peut être utile pour ajouter des styles uniques à une *seule page* d'un site web, mais elle ne garde pas les choses séparées comme la méthode externe et, selon le nombre de règles et de déclarations, elle peut faire grossir considérablement le fichier HTML.

### CSS en ligne

Le CSS en ligne permet d'ajouter des styles directement aux éléments HTML, bien que cette méthode ne soit pas aussi recommandée :

```html
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```

La première chose à remarquer est que nous n'utilisons pas réellement de sélecteurs ici, puisque les styles sont ajoutés directement à la balise d'ouverture `<div>` elle-même. Ensuite, nous avons l'attribut `style`, dont la valeur entre la paire de guillemets correspond aux déclarations.

Si tu as besoin d'ajouter un style *unique* pour un *seul* élément, cette méthode peut très bien fonctionner. En général, cependant, ce n'est pas vraiment une façon recommandée d'ajouter du CSS au HTML, pour quelques raisons :

- Cela peut rapidement devenir assez désordonné dès que tu commences à ajouter *beaucoup* de déclarations à un seul élément, ce qui rend ton fichier HTML inutilement gonflé.
- Si tu veux que de nombreux éléments aient le même style, tu devrais copier-coller le même style sur chaque élément individuel, ce qui provoque beaucoup de répétitions inutiles et encore plus de gonflement.
- Tout CSS en ligne prendra le dessus sur les deux autres méthodes, ce qui peut produire des résultats inattendus. (Même si nous n'entrerons pas dans les détails ici, cela peut en fait être exploité.)

## Exercice

:::assignment
1. Rends-toi sur notre [dépôt d'exercices CSS](https://github.com/TheOdinProject/css-exercises) et lis le fichier README.
1. Ensuite, une fois que tu sais utiliser les exercices, rends-toi dans le [répertoire `foundations/intro-to-css` du dépôt d'exercices CSS](https://github.com/TheOdinProject/css-exercises/tree/main/foundations/intro-to-css). Consulte chaque fichier README avant de réaliser les exercices suivants dans l'ordre :

    - `01-css-methods`
    - `02-class-id-selectors`
    - `03-grouping-selectors`
    - `04-chaining-selectors`
    - `05-descendant-combinator`

    Remarque : les solutions de ces exercices se trouvent dans le dossier `solution` de chaque exercice.
:::
