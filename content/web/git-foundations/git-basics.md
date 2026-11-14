## Introduction

Dans cette leçon, nous allons voir les commandes Git courantes utilisées pour gérer tes projets et envoyer ton travail sur GitHub. Nous appelons ces commandes le **flux de travail Git de base**. Quand tu utilises Git, ce sont les commandes que tu utiliseras 70 à 80 % du temps. Si tu les maîtrises, tu auras fait plus de la moitié du chemin pour maîtriser Git !

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Comment créer un dépôt sur GitHub.
- Comment envoyer et récupérer des fichiers depuis GitHub.
- Comment prendre des « instantanés » de ton code.

## Exercice

:::assignment
### Avant de commencer !

- GitHub a récemment modifié la façon dont il nomme la branche par défaut. Cela signifie que tu dois t'assurer d'utiliser une version récente de git (2.28 ou plus). Tu peux vérifier ta version en exécutant :
  `git --version`
- Si ce n'est pas déjà fait, définis ta branche Git par défaut locale sur `main`. Tu peux le faire en exécutant :
  `git config --global init.defaultBranch main`
- Pour plus d'informations sur le passage de `master` à `main`, consulte le [dépôt de renommage de GitHub](https://github.com/github/renaming).

### Créer le dépôt

1. Tu devrais déjà avoir créé un compte GitHub dans la leçon [Configuration de Git](https://www.theodinproject.com/lessons/foundations-setting-up-git).

1. Depuis la page d'accueil de GitHub, crée un nouveau dépôt en cliquant sur le bouton « + » dans le coin supérieur droit et en sélectionnant « New repository ». *Si tu utilises une fenêtre plus petite, ce bouton peut être masqué. Dans ce cas, clique sur ta photo de profil dans le coin supérieur droit et le bouton apparaîtra à côté de ton nom de profil.*

1. Donne à ton dépôt le nom « git_test » dans le champ de saisie du nom du dépôt. Active l'option « Add README » (cela crée automatiquement un fichier `README.md` dans ton nouveau dépôt). Crée ensuite le dépôt en cliquant sur le bouton « Create repository » en bas de la page.

1. Cela te redirigera vers ton nouveau dépôt sur GitHub. Pour te préparer à copier (cloner) ce dépôt sur ta machine locale, clique sur le bouton vert « Code », qui devrait se trouver à droite du bouton affichant la branche actuelle (il affiche généralement la branche *main*). Sélectionne ensuite l'option SSH dans la section « Clone », puis copie la ligne en dessous. **REMARQUE : tu DOIS cliquer sur l'option SSH pour obtenir la bonne URL.**

1. Utilisons la ligne de commande sur ta machine locale pour créer un nouveau répertoire pour tous tes projets Odin. Crée un répertoire appelé `repos` avec la commande `mkdir` dans ton dossier personnel. Ton dossier personnel est représenté par `~`. Note que selon ton système d'exploitation, il peut y avoir quelques [variations de dossier personnel](https://swcarpentry.github.io/shell-novice/02-filedir.html#home-directory-variation) - parfois `~` correspond à `/Users/ton_nom_d_utilisateur` et parfois à `/home/ton_nom_d_utilisateur`. Si tu n'es pas sûr d'être dans ton dossier personnel, tape simplement `cd ~`. Une fois créé, déplace-toi dedans avec la commande `cd`.

   ```bash
   mkdir repos
   cd repos/
   ```

1. Il est maintenant temps de cloner ton dépôt depuis GitHub dans le répertoire `repos` que tu viens de créer, avec `git clone` suivi de l'URL que tu as copiée à l'étape précédente. La commande complète devrait ressembler à `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`. Si ton URL ressemble à `https://github.com/USER-NAME/REPOSITORY-NAME.git`, tu as sélectionné l'option HTTPS, et non l'option SSH requise.

   ```bash
   git clone git@github.com:USER-NAME/REPOSITORY-NAME.git
   ```

1. C'est tout ! Tu as réussi à connecter le dépôt que tu as créé sur GitHub à ta machine locale. Pour tester cela, exécute `cd git_test` pour te déplacer dans le nouveau dossier **git_test** qui a été téléchargé, puis saisis `git remote -v` dans ta ligne de commande. Tu devrais voir une sortie semblable à la suivante, où `USER-NAME` est ton nom d'utilisateur GitHub :

   ```bash
   origin  git@github.com:USER-NAME/git_test.git (fetch)
   origin  git@github.com:USER-NAME/git_test.git (push)
   ```

   Cela affiche l'URL du dépôt que tu as créé sur GitHub, qui est le dépôt distant de ta copie locale. Tu as peut-être aussi remarqué le mot *origin* au début de la sortie de `git remote -v`, qui est le nom de ta connexion distante. Le nom « origin » est à la fois la valeur par défaut et la convention pour le dépôt distant, mais il aurait tout aussi bien pu s'appeler « party-parrot » ou « dancing-banana » (ne te préoccupe pas des détails d'« origin » pour l'instant ; il reviendra vers la fin de ce tutoriel).

### Utiliser le flux de travail Git

1. Crée un nouveau fichier dans le dossier `git_test` appelé « hello_world.txt » avec la commande `touch hello_world.txt`.

1. Tape `git status` dans ton terminal. Dans la sortie, ton fichier `hello_world.txt` devrait apparaître en rouge et être listé dans une section intitulée « Untracked files ». Cela signifie que le fichier n'est pas encore indexé.

1. Tape `git add hello_world.txt`. Cette commande ajoute ton fichier hello_world.txt à la zone de préparation (staging area) de Git. La zone de préparation fait partie du processus en deux étapes pour faire un commit dans Git. Considère la zone de préparation comme une « salle d'attente » pour tes changements jusqu'à ce que tu les committes. Maintenant, tape à nouveau `git status`. Dans la sortie, remarque que ton fichier apparaît désormais en vert et dans une section intitulée « Changes to be committed », ce qui signifie que ce fichier est maintenant dans la zone de préparation.

1. Tape `git commit -m "Add hello_world.txt"` puis tape `git status` une fois de plus. La sortie devrait maintenant indiquer : « *nothing to commit, working tree clean* », ce qui signifie que tes changements ont été committés. Ne t'inquiète pas si tu reçois un message disant « *upstream is gone* ». C'est normal et cela n'apparaît que lorsque ton dépôt cloné n'a actuellement aucune branche. Cela sera résolu une fois que tu auras suivi le reste des étapes de ce projet.

   Le message « *Your branch is ahead of 'origin/main' by 1 commit* » signifie simplement que tu as désormais des instantanés plus récents que ceux présents sur ton dépôt distant. Tu enverras tes instantanés plus loin dans cette leçon.

1. Tape `git log` et regarde la sortie. Tu devrais voir une entrée pour ton commit « *Add hello_world.txt* ». Tu verras aussi d'autres détails, notamment l'auteur qui a fait le commit ainsi que la date et l'heure auxquelles le commit a été effectué. Si ton terminal est bloqué sur un écran avec (END) en bas, appuie simplement sur « q » pour quitter. Tu pourras configurer cela plus tard, mais ne t'en préoccupe pas trop pour l'instant.

### Modifier un ou deux fichiers

1. Ouvre README.md dans l'éditeur de texte de ton choix. Dans cet exemple, nous ouvrirons le répertoire dans Visual Studio Code en utilisant la commande `code .` à l'intérieur de ton dépôt.

   Utilisateurs de macOS : si ton terminal affiche *« command not found: code »*, tu dois retourner à [Command Line Basics](https://www.theodinproject.com/lessons/foundations-command-line-basics#opening-files-in-vscode-from-the-command-line) et suivre les instructions fournies pour que cette commande fonctionne.

1. Ajoute « Hello Odin! » sur une nouvelle ligne dans `README.md` et enregistre le fichier avec <kbd>Ctrl</kbd> + <kbd>S</kbd> (Mac : <kbd>Cmd</kbd> + <kbd>S</kbd>) si ton VS Code n'enregistre pas automatiquement les changements.

1. Retourne à ton terminal, ou si tu utilises Visual Studio Code, ouvre le terminal intégré en appuyant sur <kbd>Ctrl</kbd> + <kbd>&#96;</kbd> (backtick). Tape ensuite `git status`. Remarque que la sortie est semblable à celle obtenue lorsque nous avons créé notre fichier `hello_world.txt` avant de l'ajouter à la zone de préparation, sauf que le fichier `README.md` est listé dans une section intitulée « Changes not staged for commit ». La signification est similaire à celle de la section « Untracked files » : le fichier n'est pas encore ajouté à la zone de préparation.

1. Ajoute README.md à la zone de préparation avec `git add README.md`.

1. Peux-tu deviner ce que `git status` va afficher maintenant ? `README.md` sera affiché en vert dans la section intitulée « Changes to be committed ». Cela signifie que `README.md` a été ajouté à la zone de préparation. Le fichier `hello_world.txt` n'apparaîtra pas, car il n'a pas été modifié depuis son commit.

1. Ouvre hello_world.txt, ajoute-y du texte, enregistre-le et indexe-le. Tu peux utiliser `git add .` pour ajouter tous les fichiers du répertoire courant et de tous les sous-répertoires à la zone de préparation. Ensuite, tape `git status` une fois de plus, et tout devrait maintenant être dans la zone de préparation.

1. Enfin, committons tous les fichiers présents dans la zone de préparation et ajoutons un message de commit descriptif. `git commit -m "Edit README.md and hello_world.txt"`. Ensuite, tape `git status` une fois de plus, ce qui affichera le même message « *nothing to commit* » que lors de notre précédent commit.

1. Jette un dernier coup d'œil à ton historique de commits en tapant `git log`. Tu devrais maintenant voir trois entrées.

### Pousser ton travail vers GitHub

Enfin, envoyons ton travail vers le dépôt GitHub que tu as créé au début de ce tutoriel.

1. Tape `git push`. Pour être plus précis, tape `git push origin main`. Comme tu ne travailles pas avec une autre branche (autre que *main*) ni avec un autre dépôt distant (comme mentionné plus haut), tu peux laisser `git push` pour économiser quelques frappes. **REMARQUE : si à ce stade tu reçois un message disant « Support for password authentication was removed on August 13, 2021. Please use a personal access token instead. », tu n'as pas suivi les étapes correctement et tu as cloné avec HTTPS, et non SSH. Suis les étapes pour [passer les URL distantes de HTTPS à SSH](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories?platform=linux#switching-remote-urls-from-https-to-ssh) afin de changer ton dépôt distant en SSH, puis réessaie de pousser vers Github.**

1. Tape `git status` une dernière fois. Cela devrait afficher « *Your branch is up to date with 'origin/main'. nothing to commit, working tree clean* ».

1. Lorsque tu rafraîchis la page de ton dépôt sur GitHub, tu devrais voir les fichiers README.md et hello_world.txt que tu viens d'y pousser depuis ta machine locale.
:::

:::warning
### Évite de modifier directement sur GitHub

Lorsque tu essaies de faire des modifications rapides aux fichiers de ton dépôt, par exemple pour corriger une faute de frappe dans ton README.md, tu pourrais être tenté de faire cette modification directement via GitHub. Cependant, il vaut mieux l'éviter, car cela causera des problèmes qui nécessitent des connaissances Git plus avancées que ce que nous voulons aborder à ce stade (c'est couvert dans une prochaine leçon). Pour l'instant, il est conseillé de faire toutes les modifications via tes fichiers locaux, puis de les committer et de les pousser à l'aide des commandes Git dans ton terminal une fois prêt.
:::

### Aide-mémoire

Voici une liste de référence des commandes Git les plus couramment utilisées. (Tu pourrais envisager de mettre cette page pratique dans tes favoris.) Essaie de te familiariser avec ces commandes pour finir par les mémoriser toutes :

- Commandes liées à un dépôt distant :
  - `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`
  - `git push` ou `git push origin main` (les deux atteignent le même objectif dans ce contexte)
- Commandes liées au flux de travail :
  - `git add .`
  - `git commit -m "A message describing what you have done to make this snapshot different"`
- Commandes liées à la vérification du statut ou de l'historique
  - `git status`
  - `git log`

La syntaxe Git de base est `program | action | destination`.

Par exemple,

- `git add .` se lit `git | add | .`, où le point représente tout ce qui se trouve dans le répertoire courant ;
- `git commit -m "message"` se lit `git | commit -m | "message"` ; et
- `git status` se lit `git | status | (pas de destination)`.

### Bonnes pratiques Git

Il y a beaucoup à apprendre sur l'utilisation de Git. Mais cela vaut la peine de prendre le temps de mettre en avant quelques bonnes pratiques pour que tu puisses être un meilleur collaborateur. Git n'est pas seulement utile lorsqu'on collabore avec d'autres. Il est aussi utile quand on travaille seul. À l'avenir, tu t'appuieras de plus en plus sur ton propre historique de commits lorsque tu revisiteras du vieux code.

Deux bonnes pratiques utiles à considérer sont les **commits atomiques** et l'exploitation de ces commits atomiques pour rendre tes messages de commit plus utiles à tes futurs collaborateurs.

Un commit atomique est un commit qui ne contient que des changements liés à une seule fonctionnalité ou tâche de ton programme. Il y a deux raisons principales à cela : d'abord, si un de tes changements finit par causer des problèmes, il est facile d'annuler ce changement précis sans perdre les autres ; ensuite, cela te permet d'écrire de meilleurs messages de commit. Tu en apprendras davantage sur ce à quoi ressemble un bon message de commit dans une prochaine leçon !

### Changer l'éditeur de message de commit de Git

Si tu utilises *Visual Studio Code* (et tu devrais, si tu suis ce cursus), il existe un moyen de t'assurer que si tu utilises `git commit` sans l'option de message (`-m`), tu ne resteras pas coincé à écrire ton message de commit dans [Vim](<https://en.wikipedia.org/wiki/Vim_(text_editor)>).

Changer l'éditeur de message par défaut est une bonne idée au cas où tu omettrais accidentellement l'option, à moins que tu ne préfères utiliser Vim. Cela ne présente aucun inconvénient, car tu auras la possibilité d'écrire tes messages de commit dans le terminal ou dans le confort de VS Code.

La commande suivante définira cette configuration. Tape (ou copie-colle) cette commande dans ton terminal et appuie sur <kbd>Entrée</kbd>.

```bash
git config --global core.editor "code --wait"
```

Il n'y aura aucune confirmation ni aucune sortie dans le terminal après avoir saisi cette commande.

Une fois cela fait, tu peux maintenant choisir d'utiliser soit `git commit -m "your message here"`, soit `git commit` pour saisir ton message avec Visual Studio Code !

Pour faire un commit avec Visual Studio Code comme éditeur de texte, tape simplement `git commit`. Après avoir appuyé sur <kbd>Entrée</kbd>, un nouvel onglet s'ouvrira dans VS Code pour que tu écrives ton message de commit. Tu peux fournir plus de détails sur plusieurs lignes dans ton message de commit. Après avoir saisi ton message de commit, enregistre-le avec <kbd>Ctrl</kbd> + <kbd>S</kbd> (Mac : <kbd>Cmd</kbd> + <kbd>S</kbd>) et ferme l'onglet. Si tu reviens à la ligne de commande, tu verras ton message de commit et un résumé de tes changements.
