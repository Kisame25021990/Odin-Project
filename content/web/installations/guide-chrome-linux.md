## Guide : installer Chrome sur Linux

### Étape 1 : télécharger Google Chrome

1. Ouvre ton **terminal**
1. Exécute la commande suivante pour télécharger le dernier paquet `.deb` de **Google Chrome**

   ```bash
   wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
   ```

:::note

### Raccourcis clavier pour copier-coller

Tu as probablement remarqué que le raccourci clavier habituel <kbd>Ctrl</kbd> + <kbd>V</kbd> pour coller quelque chose ne fonctionne pas dans le terminal. Pour coller ton texte dans le terminal, tu peux utiliser à la place la combinaison de touches <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>. Il est aussi très utile de savoir que la combinaison <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> copie tout texte sélectionné dans ton terminal, que tu pourras ensuite coller plus tard.

:::

### Étape 2 : installer Google Chrome

1. Saisis la commande suivante dans ton terminal pour installer le paquet `.deb` de **Google Chrome**

   ```bash
   sudo apt install ./google-chrome-stable_current_amd64.deb
   ```

1. Saisis ton mot de passe, si nécessaire

:::tip

### Une remarque sur la saisie des mots de passe dans le terminal

Lorsque tu utilises une commande dans le terminal qui te demande de saisir ton mot de passe pour t'authentifier (comme `sudo`), tu remarqueras que les caractères ne sont pas visibles pendant que tu les tapes. Même si on pourrait croire que le terminal ne répond pas, ne t'inquiète pas !

Il s'agit d'une fonctionnalité de sécurité destinée à protéger les informations confidentielles, comme les champs de mot de passe des sites web qui utilisent des astérisques ou des points. En n'affichant pas les caractères que tu écris, le terminal garde ton mot de passe en sécurité.

Tu peux toujours saisir ton mot de passe normalement et appuyer sur <kbd>Entrée</kbd> pour le valider.

:::

:::tip

### Le téléchargement est effectué sans bac à sable

Tu peux [ignorer toute remarque indiquant `N: Download is performed unsandboxed (...)`](https://www.reddit.com/r/linux4noobs/comments/ux6cwx/comment/i9x2twx/).

:::

### Étape 3 : supprimer le fichier d'installation

```bash
rm google-chrome-stable_current_amd64.deb
```

### Étape 4 : utiliser Google Chrome

Tu peux démarrer Chrome de deux façons :

- Clique sur **Google Chrome** dans le menu Applications
- **Ou**, utilise la commande `google-chrome` depuis le terminal

  ```bash
  google-chrome
  ```

:::tip

### Google Chrome en tant que processus d'arrière-plan

Chrome va utiliser ce terminal pour afficher divers messages et ne te laissera pas exécuter d'autres commandes. Ne t'inquiète pas pour ces messages. Si tu veux utiliser le même terminal que celui dans lequel tu lances Chrome pour d'autres commandes, utilise plutôt `google-chrome &`.

:::

[Retour à la leçon Installations](https://www.theodinproject.com/lessons/foundations-installations#google-chrome-installation)
