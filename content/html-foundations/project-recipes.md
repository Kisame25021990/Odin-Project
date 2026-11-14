## Introduction

Il est temps de mettre en pratique toutes les connaissances HTML que tu as acquises. Dans ce projet, tu vas construire un site web de recettes basique.

Le site sera constitué d'une page d'accueil principale contenant des liens vers quelques recettes. Le site n'aura pas l'air très joli lorsque tu l'auras terminé, mais il est important de garder en tête que le but de ce projet est de développer tes compétences en HTML ; nous revisiterons ce projet plus tard pour le styliser avec le CSS.

## Configurer le dépôt GitHub de ton projet

Comme mentionné dans la [leçon Introduction to Git](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/introduction-to-git), tu voudras organiser tous tes projets comme un portfolio et les relier à GitHub pour qu'ils puissent être vus par d'autres.

:::warning
### Attention à la création de fichiers sur GitHub

GitHub nous permet de faire des changements directement sur son site. Si tu le fais après avoir cloné le dépôt sur ta machine, ton code local sera en retard d'une version par rapport au dépôt distant, ce qui créera des difficultés supplémentaires lors du `push` de ton travail. La plupart du temps, tu devrais créer les fichiers localement.

Au fil du cours, tu apprendras à gérer ces situations, mais pour l'instant, il est important de suivre attentivement les instructions pour rester sur la voie simple.
:::

Si tu ne sais pas comment configurer un dépôt, suis les étapes 1 et 2 de la leçon [Git Basics](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/git-basics) pour apprendre comment faire, avant de poursuivre avec ces étapes :

1. Crée un nouveau **dépôt (repo)** pour ce projet sur GitHub.com et appelle-le `odin-recipes`.

1. Clone ce dépôt sur ta machine locale, dans le dossier `repos` que tu as créé précédemment dans la leçon Git Basics. La commande devrait ressembler à `git clone git@github.com:username/odin-recipes.git` (utilise SSH).

1. Maintenant, fais `cd` dans le dossier du projet `odin-recipes` qui se trouve désormais sur ta machine locale.

1. Configure ton fichier `README.md` et écris une brève introduction décrivant ce qu'est le projet actuel et quelles compétences tu auras démontrées une fois que tu l'auras terminé. (Tu peux aussi le faire en auto-réflexion à la fin du projet, ce qui est une bonne façon de revoir ce que tu as appris.)

Si tu rencontres des difficultés :

- Toutes les commandes Git doivent être exécutées depuis le dossier de ton projet (as-tu oublié de faire `cd` dans le dossier `odin-recipes` ?).

- Assure-toi d'avoir suivi les étapes pour [créer une clé SSH](https://www.theodinproject.com/lessons/foundations-setting-up-git#step-2-configure-git-and-github:~:text=Step%202.3%3A%20Create%20an%20SSH%20key) afin de cloner depuis GitHub avec SSH.

- Reporte-toi au flux de travail de la leçon [Git Basics](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/git-basics).

### Conseils sur le moment de committer

N'oublie pas tout ce que nous avons vu dans la leçon [Commit Messages](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages) !

Pendant que tu construiras ton projet, tu finiras probablement par faire plusieurs cycles `git add` + `git commit` avant d'être prêt à le pousser sur GitHub avec `git push origin main`.

Lorsqu'on écrit du code, il est considéré comme une bonne pratique de committer tôt et souvent. Committe à chaque fois que tu as un changement significatif dans le code. Cela créera une chronologie de ta progression et montrera que ton code final n'est pas apparu de nulle part.

Après avoir saisi `git push origin main`, retourne dans ton navigateur et ouvre ton dépôt sur GitHub. Tu devrais maintenant voir tous les fichiers que tu viens de pousser.

Bon, c'en est assez pour Git pour le moment — il est temps de construire des choses !

## Attention à ne pas regarder le code fini des autres avant d'avoir terminé le tien

Mais avant de continuer : tous nos projets ont une section « Student Solutions » en bas, où les gens publient leur code terminé et le site en ligne de leurs projets. Ces solutions sont là pour que tu puisses comparer ton code terminé et voir quelles autres approches les gens ont choisies pour le code et le design de leur projet.

Nous savons qu'il peut être tentant de regarder les solutions quand tu bloques ou que tu ne sais pas par où commencer, mais **ne le fais pas** ! Voici quelques raisons :

- Tous les projets soumis sont les solutions *d'autres apprenants*. Cela signifie qu'ils sont écrits par d'autres personnes qui apprennent encore et ne représentent pas nécessairement les « bonnes pratiques » ni un code de haute qualité.
- Regarder les solutions te prive de la possibilité de développer tes compétences en résolution de problèmes et en recherche. Dans le monde réel, il n'y aura pas toujours de « solutions » à consulter, et tu devras trouver les tiennes.
- Il existe de nombreuses façons d'atteindre le même résultat — ce n'est pas du « taille unique ».
- Une analogie : « Apprendre à coder en regardant du code terminé, c'est comme apprendre à faire de la pâte à pizza en regardant une pizza cuite. » Il y a bien plus de choses en jeu que ce que tu pourrais supposer en ne voyant que le produit final et non le processus qui y a mené.

Une fois ton projet terminé, n'hésite pas à regarder les autres solutions pour voir des façons alternatives de le réaliser.

**NE JETTE PAS UN COUP D'ŒIL. Viens plutôt demander de l'aide sur notre [serveur Discord](https://discord.com/channels/505093832157691914/516751477306294273) *(tu dois d'abord [rejoindre le serveur Discord](https://discord.gg/fbFCkYabZB) pour voir le canal)*.**

## Exercice

:::assignment
### Itération 1 : structure initiale

1. Dans le dossier `odin-recipes`, crée un fichier `index.html`.
1. Remplis-le avec le squelette HTML habituel et ajoute un titre `h1` « Odin Recipes » dans le body.

### Itération 2 : page de recette

1. Crée un nouveau dossier dans le dossier `odin-recipes` et nomme-le `recipes`.
1. Crée un nouveau fichier HTML dans le dossier `recipes` et nomme-le d'après la recette qu'il contiendra. Par exemple `lasagna.html`. Tu peux utiliser le nom de ton plat préféré ou, si tu as besoin d'inspiration, tu peux trouver une recette à utiliser sur [Allrecipes](https://www.allrecipes.com/). Assure-toi d'inclure le squelette HTML habituel. Ce code de squelette devrait être présent dans chaque fichier `.html` que tu crées.
1. Pour l'instant, inclue simplement un titre `h1` contenant le nom de la recette.
1. De retour dans le fichier `index.html`, ajoute un lien vers la page de recette que tu viens de créer. Exemple : sous le titre `<h1>Odin Recipes</h1>`, écris le lien comme ceci : `<a href="recipes/recipename.html">Recipe Title</a>`. Le texte du lien doit là encore être le nom de la recette.
1. **Ajoute un lien de retour vers la page index** sur ta page de recette pour faciliter la navigation. Tu peux placer ce lien en haut ou en bas de ta page de recette (par ex. `lasagna.html`). Voici un exemple :

   ```html
   <a href="../index.html">Home</a>
   ```

   Cela permet aux utilisateurs de revenir rapidement à la page d'accueil après avoir consulté la recette.

### Itération 3 : contenu de la page de recette

Ta nouvelle page de recette doit contenir le contenu suivant :

1. Une image libre du plat terminé sous le titre `h1` que tu as ajouté plus tôt.

1. Sous l'image, un titre « Description » de taille appropriée, suivi d'un ou deux paragraphes décrivant la recette.

1. Sous la description, un titre « Ingredients » suivi d'une **liste non ordonnée (unordered list)** des ingrédients nécessaires à la recette.

1. Enfin, sous la liste des ingrédients, un titre « Steps » suivi d'une **liste ordonnée (ordered list)** des étapes nécessaires à la préparation du plat.

### Itération 4 : ajouter d'autres recettes

1. Crée deux autres pages de recette. Assure-toi qu'elles ont exactement la même mise en page que ta première page de recette.
1. N'oublie pas de créer des liens vers les nouvelles recettes sur la page index. Pense aussi à mettre tous les liens dans une liste non ordonnée pour qu'ils ne soient pas tous sur une seule ligne.

Exemple :

```html
 <ul>
    <li><a href="recipes/yourrecipe.html">Recipe Title 1</a></li>
    <li><a href="recipes/yourrecipe.html">Recipe Title 2</a></li>
    <li><a href="recipes/yourrecipe.html">Recipe Title 3</a></li>
  </ul>
```

Tes liens ne seront pas très esthétiques, mais pour l'instant, concentre-toi simplement sur leur création.
:::

## Voir ton projet sur le web

Si tu veux montrer ton travail (le projet) à d'autres, ou soumettre une solution ci-dessous, tu devras publier ton site pour que d'autres puissent y accéder depuis le web, et pas seulement depuis ta machine locale. La bonne nouvelle, c'est que si ton projet est sur GitHub (comme décrit ci-dessus), c'est simple à faire.

GitHub permet de publier des projets web directement depuis un dépôt GitHub. Cela te permettra d'accéder à ton projet à l'adresse `ton-nom-utilisateur-github.github.io/nom-de-ton-depot-github`.

:::note
### Publication depuis des dépôts publics et privés

Tu peux publier des projets web depuis des dépôts publics avec un compte GitHub gratuit. Pour publier depuis un dépôt privé, tu as besoin d'un compte GitHub payant.
:::

Il existe plusieurs façons de procéder, mais la plus simple est celle-ci :

1. Assure-toi que ton fichier HTML principal s'appelle `index.html` **et** qu'il se trouve à la racine (premier niveau) de ton dépôt.
1. Va sur ton dépôt GitHub sur le web et clique sur le bouton **Settings** comme indiqué dans la capture d'écran ci-dessous.
    ![Capture d'écran pointant vers Settings dans un dépôt d'exemple](assets/imgs/github-pages-settings.png)
1. Clique sur **Pages** dans la barre latérale de gauche.
1. Change la **Branch** de *none* à *main branch* et clique sur **Save**.
1. Cela peut prendre quelques minutes (le site de GitHub annonce jusqu'à 10, mais nous avons vu cela prendre jusqu'à une heure. N'ajoute pas de « thème » à ton projet, sinon tu risques d'avoir des conflits Git ; sois patient.) mais ton projet devrait être accessible sur le web à l'adresse `ton-nom-utilisateur-github.github.io/nom-de-ton-depot-github` (en remplaçant évidemment par tes propres informations dans le lien).
1. Si ton projet n'est pas publié après 1 heure, vérifie que tu as bien un fichier nommé `index.html` à la racine de ton dépôt et que tous les réglages sont corrects. Va sur ton dépôt GitHub et clique sur Actions ; s'il n'y a aucune entrée, retourne dans les réglages, change la **Branch** de *main branch* à *none* et clique sur **Save**, puis change la **Branch** de *none* à *main branch* et clique sur **Save**.

## Soumissions de la communauté

:::note
### Beaucoup de soumissions de la communauté auront du style

Dans les leçons suivantes, tu apprendras le CSS et ajouteras du style à ce projet. En regardant les soumissions de la communauté, tu remarqueras que beaucoup ont déjà ajouté ce style.
:::

Lorsque tu consultes les solutions de la communauté (après avoir terminé ton projet), garde quelques points en tête :

- Les apprenants revisitent souvent d'anciens projets pour les améliorer en vue de leur portfolio.
- Certaines personnes commencent le cursus avec une expérience préalable de la programmation.
- Les exigences des projets changent parfois au fil du temps.

**Concentre-toi sur le respect des exigences du projet plutôt que de te comparer aux autres.** Les soumissions de la communauté sont utiles pour voir différentes approches, mais elles ne représentent pas ce à quoi ton projet « devrait » ressembler à ce stade.

Cela vaut aussi pour les futurs projets. Pour plus d'informations, lis [« Learning Code » dans « Becoming a TOP Success Story »](https://dev.to/theodinproject/learning-code-f56).
