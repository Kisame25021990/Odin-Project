### Introduction

Maintenant que vous savez manipuler le DOM, revenons au jeu [Pierre-feuille-ciseaux](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors) pour lui ajouter une interface.

Avant de modifier votre projet, vous devez apprendre une notion de Git appelée **branche**. Elle vous permettra de faire des changements sans risquer de casser la version actuelle.

Les branches permettent à un dépôt de contenir plusieurs versions alternatives de vos fichiers. Vous les utilisez déjà, en quelque sorte, depuis votre premier commit, même si vous ne le saviez peut-être pas ! Dans la leçon [Configurer Git](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git), la commande `git config --global init.defaultBranch main` a défini le nom de la branche par défaut de vos dépôts. C'est la branche créée lors du premier commit d'un projet ; aujourd'hui, son nom standard est `main`.

Comme les branches d'un arbre, les branches d'un projet partent d'un tronc (la branche `main`) ou d'autres branches.

Les commits effectués sur une branche ne modifient que cette branche. Les autres restent tels qu'ils étaient au moment où vous avez créé la nouvelle branche.

Vous pouvez ainsi réserver `main` aux fonctionnalités terminées et fonctionnelles, puis développer chacune d'elles sur une branche dédiée appelée *branche de fonctionnalité*.

### Aperçu de la leçon

- Créer une branche.
- Fusionner des branches.
- Découvrir les bonnes pratiques et les cas d'utilisation des branches.

### Utiliser des branches

Créez une branche avec `git branch <branch_name>`, puis passez dessus avec `git checkout <branch_name>`. Vous pouvez créer une branche et basculer dessus en une seule commande en ajoutant l'option `-b` : `git checkout -b <branch_name>`.

Pour afficher toutes les branches actuelles, exécutez `git branch` sans argument. Un astérisque indique la branche active. Pour revenir à `main`, utilisez `git checkout main`, comme pour passer à n'importe quelle autre branche.

Une fois votre fonctionnalité terminée et prête à être intégrée à `main`, vous devrez effectuer une **fusion** (*merge*).

La commande `git merge <branch_name>` récupère les changements validés sur `branch_name` et les ajoute à la branche active. Le diagramme ci-dessous illustre la création de la branche `develop`, des commits effectués dessus, puis sa fusion dans `main`.

<pre class="mermaid">

---
title: Exemple de branches Git
---
gitGraph
   commit id: "commit1"
   commit id: "commit2"
   branch develop
   checkout develop
   commit id: "commit1a"
   commit id: "commit2a"
   checkout main
   merge develop id: "merge to main"

</pre>

Il arrive que deux branches modifient les mêmes lignes d'un fichier. Une **conflit de fusion** survient alors quand vous essayez de les fusionner. Pour terminer la fusion, vous devrez d'abord résoudre le conflit ; cela sera expliqué dans une prochaine leçon.

Quand une branche ne vous est plus utile, vous pouvez la supprimer avec `git branch -d <branch_name>` si elle a déjà été fusionnée dans `main`, ou avec `git branch -D <branch_name>` dans le cas contraire. En général, supprimez les branches terminées : sinon elles s'accumulent et rendent plus difficile de trouver celle dont vous avez besoin.

### Partager du code

Les branches permettent également de partager du code que vous ne souhaitez pas encore intégrer à `main` (ou à une autre branche de fonctionnalité).

Par exemple, si une nouvelle fonctionnalité contient un bogue que vous n'arrivez pas à corriger et qui casse le code, vous ne voudrez pas enregistrer ce code cassé dans l'historique permanent du projet. Vous pouvez créer une branche temporaire, y basculer et y enregistrer vos changements. Si vous envoyez ensuite cette branche temporaire sur GitHub, d'autres personnes pourront vous aider à résoudre le problème. Les exercices ci-dessous vous permettront de créer des branches.

### Exercices

<div class="lesson-content__panel" markdown="1">

#### Mise en route

1. Commençons par pratiquer un peu. Le [visualiseur interactif de branches Git](https://learngitbranching.js.org/) de Peter Cottle est excellent. Faites uniquement les niveaux 1 à 3 de la séquence « Introduction ».

#### Ajouter une interface à Pierre-feuille-ciseaux

1. Créez une branche dans le dépôt de votre projet Pierre-feuille-ciseaux.
   1. Pour créer une interface au jeu, créez une branche et basculez dessus avec `git checkout -b rps-ui`.
   1. Vous travaillez maintenant en local sur la branche `rps-ui`, mais elle n'existe pas encore dans le dépôt distant. Sur la page GitHub du dépôt, vous ne verrez donc que `main`. Envoyez la nouvelle branche sur le dépôt distant avec `git push origin rps-ui`. Vous verrez alors deux branches dans votre dépôt GitHub et pourrez choisir la nouvelle avec le menu déroulant illustré ci-dessous.

      ![Menu déroulant des branches sur GitHub](https://cdn.statically.io/gh/TheOdinProject/curriculum/46c18d8445051e016b1e415fe0227a0fa33cc825/foundations/javascript_basics/revisiting_rock_paper_scissors/imgs/00.png)

   1. Vérifiez que vous êtes bien sur la branche `rps-ui` avec `git branch` : un astérisque apparaît à côté de la branche active. Si vous êtes sur une autre branche, passez sur `rps-ui` avec `git checkout rps-ui`. Vous pouvez maintenant travailler sur votre fonctionnalité. Vous pouvez ajouter des fichiers, créer des commits et envoyer des changements comme sur `main`. Seule la commande d'envoi change : utilisez `git push origin rps-ui` au lieu de `git push origin main`.
1. Dans l'interface, le joueur doit pouvoir jouer en cliquant sur des boutons au lieu de saisir son choix dans une boîte de dialogue.
   1. Pour le moment, retirez la logique qui limite le jeu à cinq tours.
   1. Créez trois boutons, un par choix. Ajoutez à chacun un écouteur d'événement qui appelle `playRound` avec le bon `playerSelection` à chaque clic. Vous pouvez conserver les `console.log` à cette étape.
   1. Ajoutez un `div` pour afficher les résultats et remplacez tous les `console.log` par des méthodes du DOM.
   1. Affichez les scores et annoncez le gagnant dès qu'un joueur atteint cinq points.
   1. Vous devrez probablement remanier (réécrire ou modifier) votre code initial. C'est normal : remanier du code existant fait partie du métier.
1. Quand l'interface est terminée et vous convient, vérifiez avec `git status` que tous vos changements ont été enregistrés sur la branche `rps-ui` avant de continuer.
1. Fusionnez les changements de `rps-ui` dans `main`.
   1. Passez sur la branche cible avec `git checkout main`.
   1. Fusionnez `rps-ui` dans la branche active `main` avec `git merge rps-ui`.
   1. Si tout se passe bien, la branche `rps-ui` est fusionnée dans `main`. Avec `git log`, vous verrez les commits de la branche de fonctionnalité après ceux de `main`. Il ne reste qu'à envoyer la branche `main` sur le dépôt distant avec `git push origin main`. Sur GitHub, `main` contiendra alors les changements et les commits de `rps-ui`. Vous venez de publier votre première fonctionnalité sur la branche de production !
   1. Vous n'avez plus besoin de `rps-ui`. Supprimez-la du dépôt local avec `git branch -d rps-ui` et du dépôt distant avec `git push origin --delete rps-ui`. Le nettoyage est terminé !
1. Publiez le projet sur GitHub Pages et ajoutez un lien vers la version en ligne dans la [leçon du projet](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors).

</div>
