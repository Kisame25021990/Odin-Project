## Guide : installer VSCode sur WSL2

### Étape 1 : installer VSCode

Suis les instructions pour [installer Visual Studio Code sur Windows](https://code.visualstudio.com/docs/setup/windows).

**Remarque importante** : l'installateur Windows par défaut utilisé dans la page fournie suppose que tu utilises une machine x64. Si tu utilises une machine ARM64, tu devras cliquer sur le lien sous le tableau et choisir la version d'installateur appropriée pour ta machine.

### Étape 2 : supprimer le fichier d'installation

1. Ouvre l'**Explorateur de fichiers**.
1. Va dans le dossier **Téléchargements**.
1. Fais glisser `VSCodeUserSetup-{version}.exe` vers la corbeille.

### Étape 3 : installer l'extension WSL

1. Ouvre Visual Studio Code.
1. Accède à l'onglet des extensions.
1. Trouve et installe l'[extension WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl).

### Étape 4 : s'assurer que WSL2 peut ouvrir correctement VSCode

1. Ouvre un nouveau terminal WSL2.
1. Exécute la commande suivante pour ouvrir une nouvelle fenêtre VSCode dans WSL2 :

   ```bash
   code
   ```

Après quelques instants, une nouvelle fenêtre VSCode devrait s'ouvrir, et VSCode devrait afficher une notification indiquant qu'il s'ouvre dans WSL2.

Désormais, c'est ainsi que tu devras ouvrir VSCode pour t'assurer qu'il utilise WSL2 et non ton système d'exploitation ou ton système de fichiers Windows.

[Retour à la leçon Les éditeurs de texte](https://www.theodinproject.com/lessons/foundations-text-editors#assignment)
