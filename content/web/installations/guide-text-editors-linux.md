## Guide : installer VSCode sur Linux

### Étape 1 : télécharger VSCode

Ouvre ton **terminal** puis exécute la commande suivante pour télécharger le dernier paquet `.deb` de **VSCode** (`-O` est un « o » majuscule, pas un zéro) :

```bash
wget -O code-latest.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'
```

### Étape 2 : installer VSCode

Saisis les commandes suivantes dans ton terminal pour installer le paquet `.deb` de **VSCode** :

```bash
sudo apt update
sudo apt upgrade
sudo apt install ./code-latest.deb
```

Ensuite, si on te le demande, saisis ton mot de passe.

:::tip

### Ajouter le dépôt VSCode de Microsoft (facultatif)

Si tu préfères que VSCode se mette à jour automatiquement avec tes autres mises à jour système, tu peux ajouter le dépôt VSCode officiel de Microsoft à tes sources apt. C'est tout à fait acceptable et sûr. Le dépôt permettra à VSCode d'être mis à jour chaque fois que tu exécutes `sudo apt update && sudo apt upgrade` avec tes autres paquets système.

:::

:::tip

### Saisir des mots de passe dans le terminal

Lorsque tu utilises une commande dans le terminal qui te demande de saisir ton mot de passe pour t'authentifier (comme `sudo`), tu remarqueras que les caractères ne sont pas visibles pendant que tu les tapes. Même si on pourrait croire que le terminal ne répond pas, ne t'inquiète pas !

Il s'agit d'une fonctionnalité de sécurité destinée à protéger les informations confidentielles, comme les champs de mot de passe des sites web qui utilisent des astérisques ou des points. En n'affichant pas les caractères que tu écris, le terminal garde ton mot de passe en sécurité.

Tu peux toujours saisir ton mot de passe normalement et appuyer sur Entrée pour le valider.

:::

:::tip

### Remarque sur le téléchargement sans bac à sable

Si tu vois quelque chose comme `N: Download is performed unsandboxed (...)`, tu n'as pas à t'en inquiéter, car [`N:` signifie simplement qu'il s'agit d'une notification et non d'un avertissement](https://www.reddit.com/r/linux4noobs/comments/ux6cwx/comment/i9x2twx/).

:::

### Étape 3 : supprimer le fichier d'installation

Exécute la commande suivante :

```bash
rm code-latest.deb
```

### Étape 4 : utiliser VSCode

Tu peux démarrer VSCode de deux façons :

- Clique sur **Visual Studio Code** dans le menu Applications
- Dans le terminal, exécute la commande suivante :

  ```bash
  code
  ```

[Retour à la leçon Les éditeurs de texte](https://www.theodinproject.com/lessons/foundations-text-editors#assignment)
