## Guide : configurer Git sur Linux

### Étape 1 : mettre à jour le système

Exécute ces commandes dans le terminal pour mettre à jour le système Linux :

```bash
sudo apt update
sudo apt upgrade
```

:::tip

### Saisir des mots de passe dans le terminal

Lorsque tu utilises une commande dans le terminal qui te demande de saisir ton mot de passe pour t'authentifier (comme `sudo`), tu remarqueras que les caractères ne sont pas visibles pendant que tu les tapes. Même si on pourrait croire que le terminal ne répond pas, ne t'inquiète pas !

Il s'agit d'une fonctionnalité de sécurité destinée à protéger les informations confidentielles, comme les champs de mot de passe des sites web qui utilisent des astérisques ou des points. En n'affichant pas les caractères que tu écris, le terminal garde ton mot de passe en sécurité.

Tu peux toujours saisir ton mot de passe normalement et appuyer sur <kbd>Entrée</kbd> pour le valider.

:::

### Étape 2 : installer Git

Il est probable que Git soit déjà installé, mais pour nous assurer de disposer de la version la plus à jour, exécute les commandes suivantes :

```bash
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

### Étape 3 : vérifier la version de Git

Assure-toi que ta version de Git est **au moins** 2.28 en exécutant cette commande :

```bash
git --version
```

Si le numéro de version est inférieur à 2.28, suis à nouveau les instructions depuis le début.

[Retour à la leçon Configurer Git](https://www.theodinproject.com/lessons/foundations-setting-up-git#assignment)
