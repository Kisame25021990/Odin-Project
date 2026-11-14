## Introduction

Le HTML (**HyperText Markup Language**, ou langage de balisage hypertexte) définit la structure et le contenu des pages web. Nous utilisons des **éléments (elements)** HTML pour créer tous les paragraphes, titres, listes, images et liens qui composent une page web typique. Dans cette leçon, nous allons explorer comment fonctionnent les éléments HTML.

## Objectifs de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Expliquer ce que sont les **balises (tags)** HTML.
- Expliquer ce que sont les **éléments (elements)** HTML.

## Éléments et balises

Presque tous les éléments d'une page HTML ne sont que des morceaux de contenu entourés d'une **balise d'ouverture (opening tag)** et d'une **balise de fermeture (closing tag)**.

Les balises HTML sont des briques essentielles qui définissent la structure et le contenu d'une page web.

Les balises d'ouverture indiquent au navigateur que c'est le début d'un élément HTML. Elles sont composées d'un mot-clé entouré de chevrons `<>`. Par exemple, une balise d'ouverture de paragraphe ressemble à ceci : `<p>`.

Les balises de fermeture indiquent au navigateur où se termine un élément. Elles sont presque identiques aux balises d'ouverture ; la seule différence est qu'elles contiennent une barre oblique avant le mot-clé. Par exemple, une balise de fermeture de paragraphe ressemble à ceci : `</p>`.

Un élément paragraphe complet ressemble à ceci :

```html
<p>some text content</p>
```

Décomposons cela :

- `<p>` est la balise d'ouverture.
- `some text content` représente le contenu enfermé entre les balises d'ouverture et de fermeture.
- `</p>` est la balise de fermeture.

Tu peux voir les éléments comme des conteneurs de contenu. Les balises d'ouverture et de fermeture indiquent au navigateur quel contenu l'élément contient. Le navigateur peut ensuite utiliser cette information pour déterminer comment interpréter et formater le contenu.

Le HTML possède une [vaste liste de balises prédéfinies](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) que tu peux utiliser pour créer toutes sortes d'éléments différents. Il est important d'utiliser les bonnes balises pour le bon contenu. Utiliser les bonnes balises peut avoir un impact important sur deux aspects de tes sites : leur classement dans les moteurs de recherche, et leur **accessibilité (accessibility)** pour les utilisateurs qui s'appuient sur des technologies d'assistance, comme les lecteurs d'écran, pour utiliser internet.

Utiliser les bons éléments pour le contenu s'appelle le **HTML sémantique (semantic HTML)**. Nous l'explorerons bien plus en détail plus tard dans le cursus.

## Éléments vides (Void Elements)

Certains éléments HTML n'ont pas de balise de fermeture. Ces éléments n'ont qu'une seule balise, comme : `<br>` ou `<img>`. On les appelle **éléments vides (void elements)** parce qu'ils sont vides de tout contenu : il n'y a rien à l'intérieur. Pas de balise de fermeture signifie qu'ils ne peuvent pas enfermer de contenu comme les autres balises.

Tu pourrais aussi les voir appelés **balises auto-fermantes (self-closing tags)**. Mais ce ne sont que des éléments vides avec une barre oblique (/) à la fin, comme : `<br />` ou `<img />`. Tu verras probablement souvent des balises auto-fermantes, pour des raisons historiques. Les navigateurs sauront les interpréter sans problème, mais la dernière version de la spécification HTML décourage leur utilisation et les considère comme invalides.

## Exercice

:::assignment
1. Regarde la vidéo de Kevin Powell [HTML & CSS for Absolute Beginners: What is HTML?](https://www.youtube.com/watch?v=X4sClFRMJ00).
:::
