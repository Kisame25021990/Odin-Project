### Introduction

[Git](https://git-scm.com/) est un système de gestion de versions très répandu. Tu l'utiliseras souvent dans The Odin Project (TOP), mais tu n'as pas besoin de tout comprendre immédiatement : plusieurs leçons du cursus sont consacrées à Git.

[GitHub](https://github.com/) est un service qui permet d'envoyer, d'héberger et de gérer du code avec Git depuis une interface web.

Git et GitHub ont des noms proches, mais ce sont deux choses différentes et ils n'ont pas été créés par la même entreprise.

### Aperçu de la leçon

- Ce qu'est Git.
- Ce qu'est GitHub.
- Installer et configurer Git.
- Créer un compte GitHub.
- Relier Git à ton compte GitHub.

### Exercices

<div class="lesson-content__panel" markdown="1">

#### Installer Git

1. Selon ton système, suis le guide d'installation correspondant :
   - [Linux](#/web/installations/guide-git-linux)
   - [macOS](#/web/installations/guide-git-macos)
   - [ChromeOS](#/web/installations/guide-git-chromeos)

#### Configurer Git et GitHub

1. Crée un compte sur [GitHub.com](https://github.com/). Pendant l'inscription, tu devras fournir une véritable adresse e-mail ; elle servira par défaut à identifier tes contributions. Si tu tiens à préserver ta confidentialité ou ne souhaites pas rendre cette adresse publique, coche les deux options de la page [Paramètres des e-mails](https://github.com/settings/emails) après t'être connecté.

   ![Paramètres de confidentialité de l'adresse e-mail GitHub](https://cdn.statically.io/gh/TheOdinProject/curriculum/725b80d126105d2f717697f97e7eaefb5f886c7b/foundations/installations/setting_up_git/imgs/01.png)

   Ces options empêchent d'exposer accidentellement ton adresse personnelle dans tes activités Git et GitHub. L'option **Keep my email addresses private** affiche aussi une adresse GitHub privée. **Si tu comptes l'utiliser, note-la : tu en auras besoin pour configurer Git à l'étape suivante.**

   1. (Facultatif) Active l'authentification à deux facteurs (2FA) de GitHub. Cette protection ajoute un second moyen de vérifier ton identité lors de la connexion : en plus de ton nom d'utilisateur et de ton mot de passe, il faut fournir une information à laquelle toi seul as accès.

      Consulte la [documentation GitHub sur la configuration de la 2FA avec une application TOTP](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-totp-app), puis suis les étapes. Pour la première étape, nous recommandons Google Authenticator. Consulte l'[aide des comptes Google](https://support.google.com/accounts/answer/1066447), choisis `Android` ou `iPhone & iPad`, puis suis les instructions d'installation.

      <div class="lesson-note lesson-note--warning" markdown="1">

      #### Perte des moyens d'accès à la 2FA

      Pour des raisons de sécurité, l'assistance GitHub ne pourra pas rétablir l'accès à un compte protégé par la 2FA si tu perds tes identifiants 2FA et tes moyens de récupération.

      </div>

   1. (Facultatif) Relie ton compte GitHub à ton profil Discord : dans Discord, clique sur l'engrenage à côté de ton nom pour ouvrir `User Settings`. Dans la barre latérale, choisis `Connected Apps` > `Connections`, puis clique sur l'icône GitHub. Dans le nouvel onglet, clique sur « Allow Access ». De retour dans Discord, active « Display on profile ». Les autres pourront voir sur quoi tu travailles, et tu pourras voir leurs projets.

1. Pour que Git fonctionne correctement, indique-lui qui tu es afin qu'il associe ton compte Git local à GitHub. Dans une équipe, cela permet de savoir qui a créé chaque commit.

   Les commandes suivantes configurent Git. Remplace les valeurs entre guillemets par tes informations et conserve les guillemets. Si tu as choisi de masquer ton adresse e-mail sur GitHub, utilise l'adresse privée fournie par GitHub.

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email yourname@example.com
   ```

   Si tu utilises l'adresse privée de GitHub, la seconde commande ressemblera à ceci (utilise ta propre adresse) :

   ```bash
   git config --global user.email 123456789+odin@users.noreply.github.com # Remember to use your own private GitHub email here.
   ```

   GitHub utilise désormais `main` comme branche par défaut des nouveaux dépôts, à la place de `master`. Configure aussi cette valeur :

   ```bash
   git config --global init.defaultBranch main
   ```

   Vérifie que ton nom et ton adresse sont enregistrés :

   ```bash
   git config --get user.name
   git config --get user.email
   ```

   <div class="lesson-note" markdown="1">

   #### Pour les utilisateurs de macOS

   Exécute ces deux commandes pour demander à Git d'ignorer les fichiers `.DS_Store`, créés automatiquement par le Finder lorsqu'il affiche un dossier. Ces fichiers invisibles contiennent des réglages d'affichage, comme les vignettes. Sans cette configuration, ils risquent d'apparaître dans tes commits. Copie-colle chaque commande dans le terminal :

   ```bash
   echo .DS_Store >> ~/.gitignore_global
   git config --global core.excludesfile ~/.gitignore_global
   ```

   </div>

1. Crée une clé SSH, un identifiant chiffré qui ressemble à un très long mot de passe et permet d'identifier ton ordinateur. GitHub s'en sert pour autoriser l'envoi de code sans te demander ton nom d'utilisateur et ton mot de passe à chaque fois.

   <div class="lesson-note" markdown="1">

   #### Plusieurs clés SSH

   Si tu as déjà configuré une paire de clés SSH avec GitHub sur un autre ordinateur, tu peux en associer plusieurs à ton compte. Suis de nouveau ces instructions pour créer une autre paire et l'enregistrer sur GitHub.

   </div>

   Vérifie d'abord si une clé SSH utilisant l'algorithme Ed25519 existe déjà. Saisis cette commande dans le terminal et observe le résultat :

   ```bash
   ls ~/.ssh/id_ed25519.pub
   ```

   Si le terminal affiche « No such file or directory », tu n'as pas encore de clé Ed25519 et dois en créer une. Si ce message n'apparaît pas, passe à l'étape suivante.

   Pour créer une clé, exécute :

   ```bash
   ssh-keygen -t ed25519
   ```

   Quand le terminal demande où enregistrer la clé, appuie sur <kbd>Entrée</kbd>.

   Il te demandera ensuite une phrase secrète. Elle chiffre la clé privée enregistrée sur ton ordinateur ; tu devras la saisir chaque fois que tu utiliseras SSH avec ces clés. Sans phrase secrète, toute personne ayant accès à ton ordinateur pourra lire la clé privée et modifier tes dépôts GitHub. Tu peux en choisir une, mais ce n'est pas obligatoire. Pour ne pas en définir, appuie sur <kbd>Entrée</kbd> sans rien saisir.

1. Indique ensuite à GitHub quelle est ta clé SSH afin de pouvoir envoyer du code sans saisir de mot de passe à chaque fois.

   Connecte-toi à GitHub et clique sur ta photo de profil en haut à droite, puis sur `Settings`. Dans la barre latérale, choisis `SSH and GPG keys`, puis clique sur le bouton vert `New SSH Key`. Donne à la clé un nom qui identifie l'appareil, par exemple `linux-ubuntu`. Laisse cette fenêtre ouverte.

   Affiche ta clé publique dans le terminal à l'aide de la commande [`cat`](http://www.linfo.org/cat.html). L'extension `.pub` est importante :

   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

   Sélectionne et copie toute la sortie. Elle commence probablement par `ssh-ed25519` et se termine par `username@hostname`. Reviens dans GitHub et colle la clé dans le champ prévu. Garde le type `Authentication Key`, puis clique sur `Add SSH key`. Ta clé SSH est enregistrée.

1. Teste la clé en suivant les [instructions GitHub pour tester une connexion SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection?platform=linux). Vérifie que l'empreinte affichée dans le terminal correspond à l'une des [quatre empreintes publiques de GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints).

   Le terminal devrait afficher : `Hi username! You've successfully authenticated, but GitHub does not provide shell access.` La mention concernant l'accès au shell n'indique pas un problème. Si tu vois ce message, ta clé SSH est correctement ajoutée et tu peux continuer. Si le résultat est différent, reprends ces étapes ou demande de l'aide sur [notre serveur Discord](https://discord.gg/fbFCkYabZB).

#### C'est terminé !

Fais-nous savoir comment cela s'est passé ! Tu as terminé la section des installations de base, bravo. D'autres outils seront à installer au fil du cursus ; reste attentif.

Tu as peut-être eu l'impression d'être dépassé ou de ne pas comprendre tout ce que tu faisais. C'est tout à fait normal. Accroche-toi : tu peux y arriver, et nous sommes là pour t'aider.

</div>
