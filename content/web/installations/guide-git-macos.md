## Guide : configurer Git sur macOS

### Étape 1 : installer Homebrew

Tout d'abord, tu devras installer Homebrew. Pour l'installer, tu dois d'abord t'assurer de satisfaire aux [exigences de Homebrew pour macOS](https://docs.brew.sh/Installation#macos-requirements). Une fois ces exigences remplies, copie et colle ce qui suit dans ton terminal :

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

:::warning

### « Prochaines étapes » potentielles après l'installation de Homebrew

Si tu regardes la sortie du terminal après avoir installé Homebrew, tu verras « Installation Successful! ». Plus bas dans le terminal, tu pourras aussi voir une section intitulée « Next steps ».

Lire le terminal peut sembler un peu intimidant, mais c'est une excellente occasion de surmonter ces impressions. Si tu vois bien cette section, suis les prochaines étapes telles qu'elles sont indiquées dans ton terminal (copie et colle les commandes fournies) pour ajouter Homebrew à ton `PATH`, ce qui te permet d'utiliser le préfixe de commande `brew`.

:::

### Étape 2 : mettre à jour Git

macOS est déjà livré avec une version de Git, mais tu devrais passer à la dernière version. Dans le terminal, tape

```bash
brew install git
```

Cela installera la dernière version de Git. Facile, non ?

### Étape 3 : vérifier la version

Si tu viens d'installer et/ou de mettre à jour Git à l'étape précédente, commence par fermer cette fenêtre de terminal.

**Ouvre une nouvelle fenêtre de terminal**, puis assure-toi que ta version de Git est **au moins** 2.28 en exécutant cette commande :

```bash
git --version
```

Si le numéro de version est inférieur à 2.28, suis à nouveau les instructions. Si tu rencontres une erreur `no formulae found in taps` :

1. Exécute `brew doctor`.
1. Tu verras une sortie semblable à celle ci-dessous. REMARQUE : la sortie réelle de `brew doctor` peut varier selon la version de macOS que tu utilises et selon tout autre problème que tu pourrais rencontrer avec ta propre installation. En fin de compte, tu dois exécuter chaque extrait de ligne de commande que Homebrew fournit après avoir lancé `brew doctor` pour réparer ton installation de Homebrew, y compris `brew cleanup` à la fin.
![Exemple de sortie de Brew Doctor](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/installations/setting_up_git/imgs/00.png)
1. Exécute `brew install git`, **ouvre une nouvelle fenêtre de terminal**, puis vérifie ta version de Git, qui devrait maintenant être la plus récente.

[Retour à la leçon Configurer Git](https://www.theodinproject.com/lessons/foundations-setting-up-git#assignment)
