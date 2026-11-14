## Introduction

Tous les documents HTML partagent la même structure de base, ou **squelette (boilerplate)**, qu'il faut mettre en place avant de pouvoir faire quoi que ce soit d'utile. Dans cette leçon, nous allons explorer les différentes parties de ce squelette et voir comment tout s'articule.

## Objectifs de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Comment écrire le squelette de base d'un document HTML.
- Comment ouvrir des documents HTML dans ton navigateur.

## Créer un fichier HTML

Pour démontrer un squelette HTML, il nous faut d'abord un fichier HTML avec lequel travailler.

Crée un nouveau dossier sur ton ordinateur et nomme-le `html-boilerplate`. Dans ce dossier, crée un nouveau fichier et nomme-le `index.html`.

Tu connais probablement déjà de nombreux types de fichiers, par exemple les fichiers doc, pdf et les fichiers image.

Pour indiquer à l'ordinateur que nous voulons créer un fichier HTML, nous devons ajouter l'extension `.html` au nom du fichier, comme nous l'avons fait pour créer le fichier `index.html`.

Il est utile de noter que nous avons nommé notre fichier HTML `index`. Nous devrions toujours nommer `index.html` le fichier HTML qui contiendra la page d'accueil de notre site. En effet, les serveurs web cherchent par défaut une page `index.html` lorsque les utilisateurs arrivent sur nos sites — et son absence causera de gros problèmes.

## Le DOCTYPE

Chaque page HTML commence par une déclaration de **doctype**. Le rôle du doctype est d'indiquer au navigateur quelle version de HTML il doit utiliser pour afficher le document. La dernière version de HTML est **HTML5**, et son doctype est `<!DOCTYPE html>`.

Les doctypes des versions plus anciennes de HTML étaient un peu plus compliqués. Par exemple, voici la déclaration de doctype pour HTML4 :

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

Cependant, nous ne voudrons probablement jamais utiliser une version plus ancienne de HTML, donc nous utiliserons toujours `<!DOCTYPE html>`.

Ouvre le fichier `index.html` créé plus tôt dans ton éditeur de texte et ajoute `<!DOCTYPE html>` à la toute première ligne.

## L'élément HTML

Après avoir déclaré le doctype, nous devons fournir un élément `<html>`. C'est ce qu'on appelle l'**élément racine (root element)** du document, ce qui signifie que tous les autres éléments du document seront ses descendants.

Cela deviendra plus important plus tard, lorsque nous apprendrons à manipuler le HTML avec JavaScript. Pour l'instant, retiens simplement que l'élément `<html>` doit être présent dans chaque document HTML.

Retour dans le fichier `index.html`, ajoutons l'élément `<html>` en écrivant ses balises d'ouverture et de fermeture, comme ceci :

```html
<!DOCTYPE html>
<html lang="en">
</html>
```

Tu as remarqué le mot `lang` ? Il représente un **attribut (attribute)** HTML associé à la balise HTML concernée, ici `<html>`. Ces attributs fournissent des informations supplémentaires sur les éléments HTML. (Nous reparlerons des `attributs HTML` dans la leçon suivante.)

### Qu'est-ce que l'attribut lang ?

`lang` spécifie la langue du contenu textuel de cet élément. Cet attribut sert principalement à améliorer l'**accessibilité (accessibility)** de la page web. Il permet aux technologies d'assistance, par exemple les lecteurs d'écran, de s'adapter à la langue et d'adopter la bonne prononciation.

## L'élément Head

L'élément `<head>` est l'endroit où nous plaçons les méta-informations importantes **à propos** de nos pages web, ainsi que ce qui est nécessaire pour que nos pages s'affichent correctement dans le navigateur. À l'intérieur du `<head>`, nous ne devons **pas** utiliser d'élément qui affiche du contenu sur la page web.

Retour dans notre fichier `index.html`, ajoutons un élément `<head>` contenant un élément `<meta>` et un titre. L'élément `<head>` se place à l'intérieur de l'élément `<html>` et doit toujours être le premier élément sous la balise d'ouverture `<html>` :

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>
```

### L'élément Meta

Nous devons toujours avoir dans l'élément `<head>` la balise `<meta>` avec l'encodage de caractères (**charset**) de la page web : `<meta charset="UTF-8">`.

Définir l'encodage est très important, car cela garantit que la page web affichera correctement dans le navigateur les symboles et caractères spéciaux des différentes langues.

### L'élément Title

Un autre élément que nous devrions toujours inclure dans le head d'un document HTML est l'élément `<title>` :

 `<title>My First Webpage</title>`

L'élément `<title>` sert à donner aux pages web un titre lisible par un humain, affiché dans l'onglet du navigateur. Par exemple, si tu regardes le nom de l'onglet actuel de ton navigateur, il indiquera « HTML Boilerplate &#124; The Odin Project » ; c'est le `<title>` du fichier `.html` actuel.

Si nous n'incluions pas d'élément `<title>`, le titre de la page web prendrait par défaut son nom de fichier. Dans notre cas, ce serait `index.html`, ce qui n'est pas très parlant pour les utilisateurs ; cela rendrait notre page très difficile à retrouver si l'utilisateur a de nombreux onglets ouverts.

Il existe beaucoup d'autres éléments qui peuvent aller dans le head d'un document HTML. Cependant, pour l'instant, il est seulement crucial de connaître les deux éléments que nous venons d'aborder. Nous introduirons d'autres éléments du head tout au long du reste du cursus.

## L'élément Body

Le dernier élément nécessaire pour compléter le squelette HTML est l'élément `<body>`. C'est là que va tout le contenu qui sera affiché aux utilisateurs : le texte, les images, les listes, les liens, etc.

Pour compléter le squelette, ajoute un élément `<body>` au fichier `index.html`. L'élément `<body>` se place aussi à l'intérieur de l'élément `<html>` et se trouve toujours sous l'élément `<head>`, comme ceci :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
  </body>
</html>
```

## Afficher les fichiers HTML dans le navigateur

Le squelette HTML du fichier `index.html` est maintenant complet, mais comment l'afficher dans le navigateur ? Il existe plusieurs options :

- Tu peux glisser-déposer un fichier HTML depuis ton éditeur de texte vers la barre d'adresse de ton navigateur.
- Tu peux ouvrir le fichier directement via le navigateur en appuyant sur <kbd>Ctrl + O</kbd> (<kbd>Cmd + O</kbd> sur macOS), puis en naviguant jusqu'à ton fichier HTML.
- Tu peux trouver le fichier HTML dans ton système de fichiers puis double-cliquer dessus. Cela ouvrira le fichier dans le navigateur par défaut de ton système.
- Tu peux utiliser le terminal pour ouvrir le fichier dans ton navigateur :
  - Ubuntu : place-toi dans le dossier contenant le fichier et tape `google-chrome index.html`
  - macOS : place-toi dans le dossier contenant le fichier et tape `open ./index.html`
  - WSL : place-toi dans le dossier contenant le fichier et tape `explorer.exe index.html`. Cela ouvrira le fichier dans le navigateur par défaut de ton système. Attention : tu dois utiliser uniquement le nom du fichier. Utiliser un chemin (par ex. `./index.html` ou un chemin absolu) ouvrira l'Explorateur de fichiers Windows à la place.

:::warning
### Utilise Google Chrome

Pour éviter de diviser les instructions de nos leçons afin de tenir compte de toutes les différences entre navigateurs, nous allons utiliser Google Chrome comme navigateur principal pour le reste de ce cours. Toutes les références au navigateur concerneront spécifiquement Google Chrome. Nous te **recommandons fortement** d'utiliser Google Chrome pour tous tes tests à partir de maintenant.
:::

En utilisant l'une des méthodes ci-dessus, ouvre le fichier `index.html` sur lequel nous travaillons. Tu remarqueras que l'écran est vide. C'est parce que nous n'avons rien dans notre body à afficher.

Retour dans le fichier `index.html`, ajoutons un titre (nous y reviendrons plus tard) au body, puis enregistrons le fichier :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

Maintenant, si tu rafraîchis la page dans le navigateur, tu devrais voir les changements prendre effet, et le titre « Hello World! » s'afficher.

## Raccourci VSCode

VSCode possède un raccourci intégré que tu peux utiliser pour générer tout le squelette d'un coup. Note que ce raccourci ne fonctionne que pendant l'édition d'un fichier avec l'extension `.html` ou d'un fichier texte dont le langage HTML est déjà sélectionné. Pour déclencher le raccourci, supprime tout le contenu du fichier `index.html` et saisis simplement `!` sur la première ligne. Cela fera apparaître plusieurs options. Appuie sur la touche <kbd>Entrée</kbd> pour choisir la première, et voilà : tout le squelette devrait être généré pour toi.

Tu remarqueras peut-être que le squelette produit par ce raccourci contient une ligne que nous n'avons pas encore mentionnée :

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Ce n'est pas quelque chose que nous avons besoin de connaître avant d'aborder le **design responsive (responsive design)**, un sujet avancé impliquant différentes tailles d'écran que nous couvrirons bien plus tard dans le cursus. Pour l'instant, tu peux laisser cette ligne telle quelle.

## Exercice

:::assignment
1. Regarde et suis la brillante vidéo de Kevin Powell [Building Your First Web Page](https://www.youtube.com/watch?v=V8UAEoOvqFg&t=93s).

1. Passe ton squelette dans le [validateur HTML](https://validator.w3.org/#validate_by_input) du W3. Les validateurs vérifient que ton balisage est correct et constituent un excellent outil d'apprentissage : ils te donnent un retour sur les erreurs de syntaxe que tu pourrais commettre souvent sans le savoir, comme des balises de fermeture manquantes ou des espaces superflus dans ton HTML.
:::
