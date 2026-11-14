## Introduction

Les liens sont l'une des fonctionnalités clés du HTML. Ils nous permettent de relier d'autres pages HTML sur le web. C'est d'ailleurs pour cela qu'on parle du « web ».

Dans cette leçon, nous allons apprendre à créer des liens et à ajouter une touche visuelle à nos sites en y intégrant des images.

## Objectifs de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Comment créer des liens vers des pages d'autres sites web sur internet.
- Comment créer des liens vers d'autres pages de tes propres sites.
- La différence entre liens absolus et liens relatifs.
- Comment afficher une image sur une page web avec HTML.

## Préparation

Pour t'entraîner à utiliser des liens et des images tout au long de cette leçon, nous avons besoin d'un projet HTML avec lequel travailler.

1. Crée un nouveau dossier nommé `odin-links-and-images`.
1. Dans ce dossier, crée un nouveau fichier nommé `index.html`.
1. Ouvre le fichier dans VS Code et remplis le squelette HTML habituel.
1. Enfin, ajoute le `h1` suivant dans le body :

```html
<h1>Homepage</h1>
```

## Éléments d'ancrage (Anchor elements)

Pour créer un lien en HTML, nous utilisons l'**élément d'ancrage (anchor element)**. Un élément d'ancrage est défini en entourant d'une balise `<a>` le texte, ou un autre élément HTML, que l'on veut transformer en lien.

Ajoute ce qui suit dans le body de la page `index.html` que nous avons créée, puis ouvre-la dans le navigateur :

```html
<a>About The Odin Project</a>
```

Tu as peut-être remarqué que cliquer sur ce lien ne fait rien. C'est parce qu'une balise d'ancrage seule ne sait pas où nous voulons pointer. Nous devons lui indiquer une destination. Pour cela, nous utilisons un **attribut HTML (attribute)**.

Un attribut HTML donne des informations supplémentaires à un élément HTML et se place toujours dans la balise d'ouverture de l'élément. Un attribut est généralement composé de deux parties : un nom et une valeur ; cependant, tous les attributs n'exigent pas de valeur. Dans notre cas, nous devons ajouter un attribut `href` (**hypertext reference**) à la balise d'ancrage d'ouverture. La valeur de l'attribut `href` est la destination vers laquelle nous voulons que notre lien pointe.

Ajoute l'attribut `href` suivant à l'élément d'ancrage créé précédemment, puis essaie de cliquer à nouveau dessus ; n'oublie pas de rafraîchir le navigateur pour que les nouveaux changements soient appliqués.

```html
<a href="https://www.theodinproject.com/about">About The Odin Project</a>
```

Par défaut, tout texte entouré d'une balise d'ancrage sans attribut `href` ressemblera à du texte normal. Si l'attribut `href` est présent, le navigateur donnera au texte une couleur bleue et le soulignera pour signifier qu'il s'agit d'un lien.

Il est utile de noter que tu peux utiliser des balises d'ancrage pour pointer vers n'importe quel type de ressource sur internet, pas seulement d'autres documents HTML. Tu peux pointer vers des vidéos, des fichiers PDF, des images, etc., mais la plupart du temps, tu pointeras vers d'autres documents HTML.

## Ouvrir des liens dans un nouvel onglet

La méthode montrée ci-dessus ouvre les liens dans le même onglet que la page web qui les contient. C'est le comportement par défaut de la plupart des navigateurs, et il peut être modifié assez facilement. Il nous faut juste un autre attribut : l'attribut `target`.

Alors que `href` spécifie le lien de destination, `target` spécifie l'endroit où la ressource liée sera ouverte. S'il est absent, il prendra par défaut la valeur `_self`, qui ouvre le lien dans l'onglet courant. Pour ouvrir le lien dans un nouvel onglet ou une nouvelle fenêtre (selon les réglages du navigateur), tu peux lui donner la valeur `_blank` comme ceci :

```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noreferrer">About The Odin Project</a>
```

Tu as peut-être remarqué que nous avons glissé l'attribut `rel` ci-dessus. Cet attribut sert à décrire la relation entre la page actuelle et le document lié, et il peut prendre plusieurs valeurs. Les plus pertinentes à aborder maintenant sont :

- `noopener` : empêche le nouvel onglet d'accéder à la page d'origine, ce qui aurait ouvert la possibilité d'attaques de **phishing (hameçonnage)** comme le [tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing). Les navigateurs modernes définissent tous cet attribut automatiquement pour tout lien ayant `target="_blank"`, mais tu le verras souvent encore défini manuellement pour des raisons de compatibilité historique.
- `noreferrer` : identique à `noopener`, mais empêche aussi certains détails de la page d'origine d'être transmis à la nouvelle page ; [les informations de référent (referrer) ne sont pas toujours souhaitables à partager](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns#the_referrer_problem).

## Liens absolus et relatifs

De manière générale, nous créerons deux types de liens :

- Des liens vers des pages d'autres sites web sur internet.
- Des liens vers des pages situées sur nos propres sites.

### Liens absolus

Les liens vers des pages d'autres sites web sur internet sont appelés **liens absolus (absolute links)**. Un lien absolu typique est composé des parties suivantes : `scheme://domain/path`. Un lien absolu contient toujours le [schéma et le domaine](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#basics_anatomy_of_a_url) de la destination.

Nous avons déjà vu un lien absolu en action. Le lien que nous avons créé plus tôt vers la page About de The Odin Project était un lien absolu, car il contient le schéma et le domaine.

`https://www.theodinproject.com/about`

### Liens relatifs

Les liens vers d'autres pages de notre propre site sont appelés **liens relatifs (relative links)**. Les liens relatifs n'incluent pas le nom de domaine : comme il s'agit d'une autre page du même site, ils supposent que le nom de domaine sera le même que celui de la page sur laquelle le lien est créé.

Les liens relatifs incluent seulement le chemin du fichier vers l'autre page, *relativement* à la page sur laquelle tu crées le lien. C'est assez abstrait ; voyons cela en action avec un exemple.

Dans le dossier `odin-links-and-images`, crée un autre fichier HTML nommé `about.html` et colle le code suivant dedans :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Odin Links and Images</title>
  </head>

  <body>
    <h1>About Page</h1>
  </body>
</html>
```

Retourne dans la page index et ajoute l'élément d'ancrage suivant pour créer un lien vers la page about :

```html
<body>
  <h1>Homepage</h1>
  <a href="https://www.theodinproject.com/about">About The Odin Project</a>

  <a href="./about.html">About</a>
</body>
```

Ouvre le fichier index dans un navigateur et clique sur le lien « About » pour vérifier que tout est correctement relié. Cliquer sur le lien devrait te mener à la page about que nous venons de créer.

Cela fonctionne parce que les pages index et about sont dans le même dossier. Le `./` au début signifie « le dossier courant », donc le chemin se traduit en gros par « dans le dossier courant, va vers `about.html` ».

Cependant, nous voudrons généralement mieux organiser les dossiers de notre site. Normalement, nous n'aurions que le fichier `index.html` à la racine, et tous les autres fichiers HTML dans leur propre dossier.

Crée un dossier nommé `pages` dans le dossier `odin-links-and-images` et déplace le fichier `about.html` dans ce nouveau dossier.

Rafraîchis la page index dans le navigateur puis clique sur le lien « About ». Il sera maintenant cassé. C'est parce que l'emplacement du fichier about a changé ; désormais, quand le lien cherche « dans le dossier courant `about.html` », il ne trouve rien.

Pour corriger cela, il suffit de mettre à jour la valeur `href` du lien About pour inclure le dossier `pages`, puisque c'est désormais le nouvel emplacement du fichier `about.html` *relativement* au fichier `index.html`.

```html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
```

Rafraîchis la page index dans le navigateur et essaie de cliquer à nouveau sur le lien About : il devrait de nouveau fonctionner.

:::note
### Liens relatifs avec et sans ./

Pour les chemins relatifs partant du dossier courant, dans certains cas tu n'as pas réellement besoin d'inclure `./` au début. Les liens HTML en sont un exemple. Les deux liens suivants fonctionneront de la même manière, car le `./` manquant dans le second est implicitement ajouté :

```html
<a href="./pages/about.html">About</a>
<a href="pages/about.html">About</a>
```

D'autres choses permettent aussi d'omettre `./` lorsqu'on utilise un chemin relatif partant du dossier courant. Mais tout ne fonctionne pas de cette manière. Pour certaines choses, comme les modules JavaScript (que tu rencontreras plus tard dans le cursus), si tu veux utiliser un chemin relatif partant du dossier courant, tu *dois* inclure `./` au début (ainsi `a/b` et `./a/b` ne seraient *pas* traités de la même façon).

Donc, même si tu peux techniquement omettre `./` au début en HTML sans problème, et que tu verras immanquablement cela dans la nature, tu peux personnellement préférer toujours commencer par `./` lorsque tu pars du dossier courant. Ainsi, tu ne seras pas pris au dépourvu face à quelque chose qui exige réellement ce préfixe.
:::

### Une métaphore

Les liens absolus et relatifs sont un concept délicat pour se construire un bon modèle mental ; une métaphore peut aider :

Considère ton nom de domaine (`town.com`) comme une ville, le dossier dans lequel se trouve ton site (`/museum`) comme un musée, et chaque page de ton site comme une salle du musée (`/museum/movie_room.html` et `/museum/shops/coffee_shop.html`). Les liens relatifs comme `./shops/coffee_shop.html` sont des indications depuis la salle courante (la salle de cinéma du musée `/museum/movie_room.html`) vers une autre salle (la boutique du musée). Les liens absolus, en revanche, sont des indications complètes incluant le protocole (`https`), le nom de domaine (`town.com`) et le chemin depuis ce nom de domaine (`/museum/shops/coffee_shop.html`) : `https://town.com/museum/shops/coffee_shop.html`.

## Images

Les sites web seraient plutôt ennuyeux s'ils ne pouvaient afficher que du texte. Heureusement, le HTML fournit une grande variété d'éléments pour afficher toutes sortes de médias. Le plus largement utilisé est l'**élément image (image element)**.

Pour afficher une image en HTML, nous utilisons l'élément `<img>`. Contrairement aux autres éléments que nous avons rencontrés, l'élément `<img>` est un **élément vide (void element)**. Comme nous l'avons vu plus tôt dans le cours, les éléments vides n'ont pas besoin de balise de fermeture, car ils sont naturellement vides et ne contiennent aucun contenu.

Au lieu d'entourer du contenu avec une balise d'ouverture et une balise de fermeture, il intègre une image à la page grâce à un attribut `src` qui indique au navigateur où se trouve le fichier image. L'attribut `src` fonctionne un peu comme l'attribut `href` des balises d'ancrage. Il peut intégrer une image en utilisant des chemins absolus ou relatifs.

Par exemple, avec un chemin absolu, nous pouvons afficher une image située sur le site de The Odin Project :

> Exemple interactif (CodePen) : [absolute-path-image](https://codepen.io/TheOdinProjectExamples/pen/gORbExZ)

Pour afficher sur ton site des images hébergées sur ton propre serveur web, tu peux utiliser un chemin relatif.

### Linux, macOS, ChromeOS

1. Crée un nouveau dossier nommé `images` dans le projet `odin-links-and-images`.
1. Ensuite, [télécharge notre image d'entraînement](https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640) et déplace-la dans le dossier images que nous venons de créer.
1. Renomme l'image en `dog.jpg`.

### WSL2

Lorsque tu télécharges un fichier depuis internet, Windows possède une fonctionnalité de sécurité qui crée un fichier caché `Zone.Identifier` portant le même nom que ton fichier téléchargé, et qui ressemble à `mypicture.jpg:Zone.Identifier`. Ce fichier est inoffensif, mais nous préférons éviter de le copier et d'encombrer nos dossiers.

1. Crée un nouveau dossier nommé `images` dans le projet `odin-links-and-images`.

1. Ensuite, [télécharge l'image de chien](https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640).

1. Fais un clic droit sur le nouveau téléchargement en bas de la fenêtre Chrome et sélectionne « Afficher dans le dossier ».

   1. Sinon, si tu ne vois rien en bas de la fenêtre Chrome, ouvre le menu kebab « Personnaliser et contrôler Google Chrome » et sélectionne l'élément « Téléchargements ». Cela affichera tous tes téléchargements, chacun avec son propre bouton « Afficher dans le dossier ».

1. Renomme l'image en `dog.jpg`.

1. Glisse le fichier depuis ton dossier de téléchargements vers l'explorateur de fichiers de VSCode, dans ton nouveau dossier `images`.

   1. Sinon, avec ton terminal Ubuntu, place-toi dans le dossier où tu veux copier l'image (`cd ~/odin-links-and-images` par exemple)

   1. Tape `cp <espace>`

   1. Glisse l'image `dog.jpg` depuis une fenêtre de l'Explorateur Windows et dépose-la sur la fenêtre du terminal ; elle devrait apparaître sous la forme `"/mnt/c/users/username/Downloads/dog.jpg"`

   1. Tape `<espace> .` pour indiquer à `cp` que tu veux copier le fichier dans ton dossier de travail courant. La commande complète ressemblera à quelque chose comme :

   ```bash
   cp "/mnt/c/users/username/Downloads/dog.jpg" .
   ```

   1. Appuie sur <kbd>Entrée</kbd> pour exécuter la commande, puis utilise `ls` pour confirmer que le fichier existe désormais.

Glisser des fichiers depuis Windows vers l'explorateur de fichiers de VSCode empêche la copie des fichiers `Zone.Identifier`. Désormais, chaque fois que tu devras copier des images ou d'autres fichiers téléchargés de cette manière dans WSL2, tu pourras le faire ainsi. Si tu copies accidentellement ces fichiers `Zone.Identifier` dans WSL2, tu peux les supprimer sans problème.

### Ajouter une image à un fichier HTML

Enfin, ajoute l'image au fichier `index.html` :

```html
<body>
  <h1>Homepage</h1>
  <a href="https://www.theodinproject.com/about">About The Odin Project</a>

  <a href="./pages/about.html">About</a>

  <img src="./images/dog.jpg">
</body>
```

Enregistre le fichier `index.html` et ouvre-le dans un navigateur pour voir Charles dans toute sa splendeur.

:::warning
### Les images que tu utilises doivent être libres pour l'usage prévu

Il existe de nombreuses images gratuites, mais assure-toi de créditer le créateur de l'image dans ton projet.

Un moyen simple de fournir ce crédit est d'inclure le nom et les coordonnées du créateur dans un fichier README de ton dépôt, ou de fournir une [attribution](https://support.freepik.com/s/article/Attribution-How-when-and-where?language=en_US).

Pour les trouver : Google Images, dans les résultats d'image → Outils → Droits d'usage → « Creative Commons ». Choisis et clique sur une image, puis clique sur les détails de la licence.

Nous te recommandons de toujours vérifier les exigences de licence de toute image que tu souhaites utiliser.
:::

## Dossiers parents

Et si nous voulions utiliser l'image du chien dans la page about ? Nous devrions d'abord remonter d'un niveau, hors du dossier `pages`, vers son dossier parent, pour pouvoir ensuite accéder au dossier `images`.

Pour aller dans le dossier parent, nous devons utiliser deux points dans le chemin relatif, comme ceci : `../`. Voyons cela en action : dans le body du fichier `about.html`, ajoute l'image suivante sous le titre que nous avons ajouté plus tôt :

```html
<img src="../images/dog.jpg">
```

Décomposons cela :

1. D'abord, nous allons dans le dossier parent du dossier `pages`, qui est `odin-links-and-images`.
1. Ensuite, depuis le dossier parent, nous pouvons entrer dans le dossier `images`.
1. Enfin, nous pouvons accéder au fichier `dog.jpg`.

En reprenant la métaphore utilisée plus tôt, utiliser `../` dans un chemin de fichier revient en quelque sorte à sortir de la pièce où tu te trouves pour rejoindre le couloir principal, afin de pouvoir aller dans une autre pièce.

## Attribut Alt

En plus de l'attribut `src`, chaque élément image devrait aussi avoir un attribut `alt` (**alternative text**, ou texte alternatif).

L'attribut `alt` sert à décrire une image. Il sera utilisé à la place de l'image si celle-ci ne peut pas être chargée. Il est aussi utilisé avec les lecteurs d'écran pour décrire l'image aux utilisateurs malvoyants.

Voici à quoi ressemble l'exemple du logo de The Odin Project utilisé plus tôt, avec un attribut `alt` inclus :

> Exemple interactif (CodePen) : [image-alt-attribute](https://codepen.io/TheOdinProjectExamples/pen/ExXjoEp)

Pour t'entraîner un peu, ajoute un attribut `alt` à l'image du chien que nous avons ajoutée au projet `odin-links-and-images`.

## Attributs de taille d'image

Bien que ce ne soit pas strictement obligatoire, préciser les attributs `height` et `width` dans les balises image aide le navigateur à disposer la page sans provoquer de sauts et de clignotements.

C'est une bonne habitude de toujours préciser ces attributs sur chaque image, même lorsque l'image est à la bonne taille ou que tu utilises le CSS pour la modifier. Cela évite que le contenu saute pendant le chargement des images. Utilise les dimensions réelles de l'image lorsque tu spécifies la taille.

Voici notre exemple de logo The Odin Project avec les attributs `height` et `width` inclus :

> Exemple interactif (CodePen) : [Image Height and Width Attributes](https://codepen.io/TheOdinProjectExamples/pen/PogmYGp)

Mets à jour le projet `odin-links-and-images` en ajoutant les attributs `width` et `height` à l'image du chien.

## Exercice

:::assignment
1. Regarde les vidéos de Kevin Powell :
   - [HTML Links](https://www.youtube.com/watch?v=tsEQgGjSmkM).
   - [HTML Images](https://www.youtube.com/watch?v=0xoztJCHpbQ).
   - [File Structure](https://www.youtube.com/watch?v=ta3Oxx7Yqbo).
1. Lis et code en suivant l'article d'Internetting is Hard sur [Links and Images](https://internetingishard.netlify.app/html-and-css/links-and-images). Fais particulièrement attention à la section qui couvre les quatre principaux formats d'image. Cet article suggère qu'il est préférable de définir les dimensions des images avec le CSS. Nous recommandons tout de même de définir les attributs `width` et `height` sur toutes les images, comme mentionné plus tôt dans cette leçon.
:::
