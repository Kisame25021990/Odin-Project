### Introduction

Dans ce projet, vous allez créer un petit outil pour mettre en pratique vos compétences en manipulation du DOM. Vous construirez une version navigateur d'un objet entre le bloc à dessin et l'Etch-A-Sketch.

Ce projet ne sera pas facile. Vous devrez probablement chercher régulièrement les méthodes JavaScript et les propriétés CSS appropriées : c'est justement le but ! Vous pouvez le réaliser avec les outils déjà appris. De nombreuses ressources en ligne couvrent les notions qui ne sont pas encore au programme. Nous vous guiderons pour les étapes de base, mais l'implémentation vous appartient.

Si vous êtes complètement bloqué, demandez de l'aide sur notre [serveur Discord](https://discord.gg/fbFCkYabZB).

### Exercices

<div class="lesson-content__panel" markdown="1">

Pensez à enregistrer souvent vos changements avec des commits. Consultez la leçon sur les [messages de commit](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages).

1. Suivez les instructions pour [configurer le dépôt GitHub de votre projet](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/recipes#setting-up-your-projects-github-repository).
1. Créez une page Web contenant une grille de 16 × 16 carrés, chacun représenté par un élément `div`.
   - Créez les éléments avec JavaScript. Ne les copiez pas à la main dans le fichier HTML !
   - Il est préférable de placer les carrés de la grille dans un `div` conteneur, que vous pouvez écrire dans le fichier HTML.
   - Utilisez Flexbox pour afficher les carrés en grille plutôt qu'en une seule colonne. Malgré son nom, ne cherchez pas à utiliser CSS Grid, qui sera enseigné plus tard. Ce projet sert précisément à pratiquer Flexbox.
   - Attention : les bordures et les marges peuvent modifier la taille des carrés.
   - « Pourquoi ma grille n'apparaît-elle pas ? »
     - Avez-vous lié votre feuille de style CSS ?
     - Ouvrez les outils de développement du navigateur.
     - Vérifiez la présence d'erreurs dans la console JavaScript.
     - Consultez le panneau des éléments pour vérifier si les éléments sont présents mais masqués.
     - Ajoutez des appels à `console.log` dans votre JavaScript pour vérifier qu'il est bien chargé.
1. Ajoutez un effet de survol : les `div` de la grille changent de couleur quand la souris passe dessus, comme un crayon qui laisse une trace pixelisée.
   - **Indice** : le survol commence quand la souris entre dans un `div` et s'arrête lorsqu'elle en sort. Vous pouvez commencer par écouter l'un ou l'autre de ces événements.
   - Il existe plusieurs façons de changer la couleur des `div` :
     - ajouter une classe ;
     - modifier la couleur d'arrière-plan avec JavaScript.
1. Ajoutez un bouton en haut de la page qui demande le nombre de carrés par côté de la nouvelle grille. Une fois ce nombre saisi, supprimez la grille existante et créez-en une nouvelle dans le même espace total qu'auparavant (par exemple, 960 px de large).
   - **Conseil** : limitez la saisie à 100. Une grille plus grande utilise davantage de ressources et peut ralentir, bloquer ou faire planter l'ordinateur.
   - Consultez la fonction `prompt`.
   - Vous devriez pouvoir saisir `64` et obtenir une grille 64 × 64 sans modifier la surface totale.
1. Envoyez votre projet sur GitHub !

#### Défi supplémentaire

Modifiez le comportement des carrés au passage de la souris :

1. Au lieu d'utiliser partout la même couleur, attribuez des valeurs RVB aléatoires à chaque interaction.
1. Ajoutez aussi un assombrissement progressif de 10 % à chaque interaction. Le carré devrait devenir complètement noir (ou entièrement coloré) après dix interactions.
   - **Indice** : la propriété CSS `opacity` peut être utile. Consultez la documentation MDN sur la [propriété CSS opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity).

Vous pouvez réaliser l'un ou l'autre de ces défis, ou les deux.

</div>
