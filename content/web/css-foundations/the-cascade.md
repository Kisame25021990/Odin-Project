### Introduction

Dans la leçon précédente, nous avons étudié la syntaxe de base du CSS et les sélecteurs. Il est temps de combiner ces connaissances avec le *C* de CSS : la cascade.

### Aperçu de la leçon

- Le rôle de la cascade.
- La spécificité et la combinaison de sélecteurs CSS.
- L'effet de l'héritage sur certaines propriétés.

### La cascade CSS

Il arrive que des règles se contredisent et produisent un résultat inattendu. « Je voulais que *ces* paragraphes soient bleus, pourquoi sont-ils rouges comme les autres ? » Même si cela peut être frustrant, le CSS ne fait rien contre notre volonté : il applique les instructions qu'on lui donne. Les styles par défaut du navigateur constituent une exception apparente. Ils varient d'un navigateur à l'autre et expliquent pourquoi certains éléments sont espacés ou pourquoi les boutons ont une certaine apparence, même sans règle CSS écrite pour eux.

Un comportement inattendu peut donc venir des styles par défaut, d'une propriété mal comprise ou de la cascade.

La cascade détermine quelles règles s'appliquent réellement à notre HTML. Elle prend plusieurs facteurs en compte. Nous allons en voir trois pour éviter quelques moments de frustration face au CSS.

#### Origine

Les navigateurs appliquent souvent leurs propres styles par défaut à de nombreux éléments : ils mettent les titres en gras ou ajoutent des bordures aux boutons, par exemple. Nous étudierons plus tard ces styles et la façon de gérer leurs différences entre navigateurs. Pour l'instant, retiens que **tes propres règles CSS ont priorité sur les styles par défaut du navigateur**. Si celui-ci donne plusieurs valeurs à `border` d'un bouton, ta règle remplacera celle du navigateur.

#### Spécificité

Même si tes règles ont priorité sur les styles par défaut du navigateur, plusieurs règles de ta feuille CSS peuvent cibler le même élément. Dans ce cas, les déclarations les plus spécifiques l'emportent. Les styles en ligne, vus dans la leçon précédente, ont la spécificité la plus élevée. Chaque type de sélecteur a ensuite son propre niveau de spécificité. Parmi ceux étudiés jusqu'ici, l'ordre est :

1. Les sélecteurs d'identifiant (les plus spécifiques).
1. Les sélecteurs de classe.
1. Les sélecteurs de type.

La spécificité n'entre en jeu que lorsqu'un élément reçoit plusieurs déclarations contradictoires ; elle sert en quelque sorte à départager les règles. Un sélecteur d'identifiant l'emporte sur n'importe quel nombre de sélecteurs de classe ; une classe l'emporte sur n'importe quel nombre de sélecteurs de type. Si la comparaison n'a pas permis de départager les règles, compare le nombre de sélecteurs dans chaque catégorie. La règle qui en contient le plus l'emporte.

Voyons quelques exemples.

```html
<!-- index.html -->

<div class="main">
  <div class="list subsection">Red text</div>
</div>
```

```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

Les deux règles utilisent uniquement des sélecteurs de classe, mais la règle 2 est plus spécifique, car elle en utilise davantage. La déclaration `color: red` l'emporte.

Modifions maintenant le HTML :

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Blue text</div>
</div>
```

```css
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

Même si la règle 2 utilise davantage de sélecteurs de classe que la règle 1 n'utilise de sélecteurs d'identifiant, la règle 1 est plus spécifique : un identifiant l'emporte sur une classe. La déclaration `color: blue` gagne.

Voici un exemple un peu plus complexe :

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Red text on yellow background</div>
</div>
```

```css
/* rule 1 */
#subsection {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
.main #subsection {
 color: red;
}
```

La première règle utilise un sélecteur d'identifiant et la seconde combine un sélecteur de classe et un sélecteur d'identifiant. Aucune n'est globalement plus spécifique que l'autre. La cascade compare alors le nombre de chaque type de sélecteur. Les deux règles ont un identifiant, mais la règle 2 a aussi une classe ; elle est donc plus spécifique.

La déclaration `color: red` l'emporte, mais `background-color: yellow` s'applique toujours, puisqu'aucune règle contradictoire ne définit cette propriété.

#### Tout n'augmente pas la spécificité

En comparant des sélecteurs, tu rencontreras des symboles comme le sélecteur universel (`*`) et les combinateurs (`+`, `~`, `>` et l'espace). Nous les étudierons plus tard. Pour l'instant, retiens que ces symboles n'ajoutent pas de spécificité en eux-mêmes.

```css
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
```

Les règles 1 et 2 ont la même spécificité. La première utilise un sélecteur combiné (sans espace), la seconde un combinateur descendant (l'espace), mais toutes deux ont deux classes. Le combinateur ne change pas leur spécificité.

```css
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class > .second-class {
  font-size: 24px;
}
```

C'est le même principe ici. Le combinateur enfant (`>`) de la règle 2 ne change pas sa spécificité. Les deux règles contiennent deux classes et ont donc la même spécificité.

```css
/* rule 1 */
* {
  color: black;
}

/* rule 2 */
h1 {
  color: orange;
}
```

La règle 2 a la spécificité la plus élevée et la valeur `orange` l'emporte. Elle utilise un sélecteur de type, qui a la spécificité la plus faible parmi les sélecteurs vus jusqu'ici, mais le sélecteur universel (`*`) de la règle 1 n'a aucune spécificité.

#### Ordre des règles

Supposons qu'après avoir évalué tous les autres facteurs, plusieurs règles contradictoires ciblent encore le même élément. Comment la cascade les départage-t-elle ?

La dernière règle déclarée l'emporte.

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

Pour un élément qui possède les classes `alert` et `warning`, les deux règles ont la même spécificité. Comme `.warning` est définie en dernier et qu'aucun autre facteur n'a permis de trancher, c'est elle qui s'applique.

#### Héritage

Certaines propriétés CSS sont héritées de l'élément parent si elles ne sont pas directement définies sur l'élément (par notre CSS ou par le navigateur). Les propriétés typographiques (`color`, `font-size`, `font-family`, etc.) sont généralement héritées ; la plupart des autres ne le sont pas. Pour savoir si une propriété est héritée, consulte la section **Formal Definition** de sa documentation MDN. Par exemple, la définition formelle de [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition) indique que cette propriété est héritée, alors que celle de [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display#formal_definition) précise qu'elle ne l'est pas.

L'héritage n'intervient que si aucune valeur n'a été directement définie pour l'élément. Prenons cet exemple :

```html
<div id="parent">
  <div class="has-own-color"></div>
  <div class="no-own-color"></div>
</div>
```

```css
#parent {
  color: red;
}

.has-own-color {
  color: blue;
}
```

Le `div` de classe `has-own-color` reçoit `color: blue`, car la règle `.has-own-color` le cible directement. L'héritage n'intervient pas, quelle que soit la spécificité des sélecteurs visant ses ancêtres (comme `#parent`).

En revanche, aucune règle ne définit directement `color` pour le `div` de classe `no-own-color`. Comme cette propriété est héritée, l'élément utilise la valeur de son parent au lieu de sa valeur initiale. Ici, son parent, l'élément d'identifiant `parent`, a reçu `color: red` grâce à la règle `#parent`. Le texte du `div` `no-own-color` est donc rouge, même si aucune règle ne lui a attribué directement cette couleur.

### Exercices

<div class="lesson-content__panel" markdown="1">

1. [La cascade CSS](https://2019.wattenberger.com/blog/css-cascade) est une ressource interactive qui explique plus en détail d'autres facteurs déterminant quelles règles CSS sont appliquées.
1. Fais l'exercice `01-cascade-fix` du répertoire `foundations/cascade` dans notre [dépôt d'exercices CSS](https://github.com/TheOdinProject/css-exercises/tree/main/foundations/cascade). Les consignes se trouvent dans le README. La solution est disponible dans le dossier `solution` de l'exercice.

</div>
