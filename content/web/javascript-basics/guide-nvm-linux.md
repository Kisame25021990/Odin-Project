## Guide : installer nvm sous Linux

#### Étape 0 : prérequis

Exécute d'abord cette commande dans le terminal pour mettre à jour les listes de paquets Ubuntu :

```bash
sudo apt update && sudo apt upgrade
```

Pour installer nvm correctement, tu as aussi besoin de curl. Installe-le avec la commande suivante :

```bash
sudo apt install curl
```

#### Étape 1 : télécharger et installer nvm

Exécute cette commande pour installer nvm :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

#### Étape 2 : initialiser nvm

Le terminal devrait afficher des instructions pour initialiser nvm. Si elles n'apparaissent pas, ou si tu préfères ne pas les copier depuis le terminal, exécute ces commandes :

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Vérifie que nvm est installé en exécutant :

```bash
command -v nvm
```

Si le résultat indique nvm: command not found, ferme le terminal et ouvre-le à nouveau.

[Retour à la leçon Installer Node.js](#/web/javascript-basics/installing-nodejs#assignment)
