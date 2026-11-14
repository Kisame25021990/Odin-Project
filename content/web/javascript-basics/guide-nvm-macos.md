## Guide : installer nvm sur macOS

Depuis macOS 10.15, le shell par défaut est zsh. Pendant l'installation, nvm cherche le fichier .zshrc dans ton dossier personnel. Ce fichier n'existant pas par défaut, crée-le avec cette commande dans le terminal :

```bash
touch ~/.zshrc
```

Installe ensuite nvm avec cette commande :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

Redémarre le terminal, ou copie-colle les commandes suivantes dans le terminal et appuie sur <kbd>Entrée</kbd> :

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

Vérifie l'installation de nvm avec cette commande. Elle devrait afficher le numéro de la version installée :

```bash
nvm --version
```

Pour plus d'informations, consulte la page GitHub de nvm sur [l'installation et les mises à jour](https://github.com/nvm-sh/nvm#installation-and-update).

[Retour à la leçon Installer Node.js](#/web/javascript-basics/installing-nodejs#assignment)
