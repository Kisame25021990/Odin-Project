### Introduction

Node.js (ou simplement Node) est un environnement d'exécution qui permet d'exécuter JavaScript en dehors du navigateur. Nous en aurons besoin pour certains exercices à venir. Avant de pouvoir installer Node, quelques outils sont nécessaires.

Nous allons utiliser nvm (Node Version Manager), qui facilite l'installation, la mise à niveau et le changement de version de Node. Il existe aussi npm, un outil qui servira plus tard à installer les bibliothèques et outils utilisés dans les environnements JavaScript. Ne confonds pas ces deux outils : lis attentivement les étapes.

L'installation de Node avec nvm est simple et devrait être rapide.

### Aperçu de la leçon

- Installer et configurer nvm (Node Version Manager), Node et npm.
- Utiliser le REPL de Node.

### Exercices

<div class="lesson-content__panel" markdown="1">

#### Installer nvm

1. Installe nvm pour pouvoir installer et gérer facilement Node. Suis le guide correspondant à ton système d'exploitation :
   - [Linux](#/web/javascript-basics/guide-nvm-linux)
   - [macOS](#/web/javascript-basics/guide-nvm-macos)

#### Installer Node

nvm est maintenant installé ; tu peux l'utiliser pour installer Node.

1. Dans le terminal, exécute :

   ```bash
   nvm install --lts
   ```

Cette commande installe la version stable la plus récente de Node avec support à long terme (LTS). Le terminal affichera plusieurs lignes. Si l'installation a réussi, tu devrais voir un message semblable à celui-ci, où les X sont remplacés par des chiffres :

   ```text
   Downloading and installing Node vXX.xx.x...
   ```

Si ce message n'apparaît pas, ferme le terminal, ouvre-le à nouveau et réessaie la commande. Ensuite, node -v devrait afficher vXX.xx.x ou une version similaire. L'installation de Node inclut également npm. Exécute npm -v : tu devrais voir un numéro de version.

Si ces commandes affichent une version, Node et npm sont installés.

1. Enfin, configure une option ajoutée dans npm v11.10.0, qui retarde l'installation des dépendances récemment publiées. Exécute cette commande dans le terminal :

   ```bash
   npm config set min-release-age=3
   ```

Cette option empêche npm d'installer les dépendances publiées depuis moins de trois jours. Elle peut aider à éviter les problèmes liés à de nouveaux paquets compromis et à se protéger contre les attaques de la chaîne d'approvisionnement.

#### Utiliser le REPL de Node

Node fournit un REPL, une console interactive qui permet d'exécuter et de modifier du JavaScript directement dans le terminal. Comme la console du navigateur étudiée précédemment, il est pratique pour tester ou déboguer rapidement de petits extraits de code qui ne dépendent pas du navigateur.

Pour ouvrir le REPL, ouvre un terminal et saisis node. Saisis .exit pour le quitter.

</div>
