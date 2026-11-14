### Introduction

La ligne de commande te fait un peu peur ? Tu n'es pas seul. On imagine souvent les développeurs fixant un écran noir couvert de texte vert, tapant des commandes incompréhensibles pour pirater un ordinateur central (tout en buvant du soda et en essuyant des miettes de chips sur leur clavier).

Cet écran ou cette fenêtre vide, avec une invite et un curseur clignotant, est l'interface en ligne de commande (CLI). Elle permet de saisir des instructions que l'ordinateur exécutera. Pas besoin de jouer les pirates : la ligne de commande est une compétence essentielle pour les développeurs. C'est notre base de travail, depuis laquelle nous lançons des programmes et interagissons avec eux. Elle a sa propre syntaxe, mais tu réutiliseras souvent les mêmes commandes et les apprendras rapidement.

Dans cette leçon d'introduction, tu apprendras à naviguer sur ton ordinateur et à manipuler des fichiers et des répertoires (aussi appelés dossiers) depuis la ligne de commande. Tu verras que c'est plus simple qu'il n'y paraît. Les commandes présentées sont directes : ne te laisse pas intimider si tu n'as jamais utilisé la ligne de commande.

### Aperçu de la leçon

- Décrire ce qu'est la ligne de commande.
- Ouvrir la ligne de commande sur ton ordinateur.
- Naviguer dans les répertoires et afficher leur contenu.
- Créer un répertoire et un fichier.
- Renommer ou supprimer un répertoire et un fichier.
- Ouvrir un fichier ou un dossier dans un programme.

### Essaie ton terminal

Ouvre un terminal sur ton ordinateur.

- **Linux** : ouvre le menu des applications et cherche « Terminal ». Tu peux aussi appuyer sur <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>.
- **macOS** : ouvre Applications > Utilitaires et lance Terminal. Tu peux aussi ouvrir Spotlight avec <kbd>Cmd</kbd> + <kbd>Espace</kbd>, chercher « Terminal », puis appuyer sur <kbd>Entrée</kbd>.

La fenêtre qui s'ouvre est presque vide, à l'exception de quelques caractères qui dépendent de ton système. Sous Linux et sur les anciens Mac, la ligne se termine par `$` ; sur les Mac récents, elle se termine par `%`. Ce symbole, appelé **invite de commande**, indique que le terminal attend une instruction. Tape `whoami`, puis appuie sur <kbd>Entrée</kbd>.

Le terminal affiche ton nom d'utilisateur. Pratique !

Les guides indiquent souvent les commandes en faisant précéder la commande du symbole de l'invite, par exemple `$ whoami`. Cela signifie qu'il faut saisir la commande dans le terminal, sans taper le `$`. Sur les Mac récents, `%` joue le même rôle.

#### Pourquoi apprendre cela maintenant ?

Tu utiliseras souvent la ligne de commande pendant ce cursus. Le projet d'installation à venir te demandera d'y installer plusieurs logiciels. Tu utiliseras aussi principalement Git depuis la ligne de commande. Dans ta carrière, tu pourrais t'en servir chaque jour : c'est un outil indispensable.

<div class="lesson-note lesson-note--tip" markdown="1">

#### Saisir un mot de passe dans le terminal

Quand une commande te demande un mot de passe pour t'authentifier (par exemple `sudo`), les caractères saisis ne s'affichent pas. Le terminal peut sembler ne pas répondre, mais c'est normal.

C'est une mesure de sécurité : comme les champs de mot de passe sur les sites web, le terminal ne révèle pas les caractères saisis. Tape ton mot de passe normalement, puis appuie sur Entrée.

</div>

### Utilise la ligne de commande efficacement

Les programmeurs aiment automatiser les tâches répétitives. Tu peux profiter des raccourcis qu'ils ont créés. Voici quelques astuces pour utiliser la ligne de commande plus efficacement.

Pour copier et coller dans le terminal, utilise <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> (Mac : <kbd>Cmd</kbd> + <kbd>C</kbd>) pour copier, puis <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> (Mac : <kbd>Cmd</kbd> + <kbd>V</kbd>) pour coller. Par exemple, copie une commande depuis ton navigateur avec <kbd>Ctrl</kbd> + <kbd>C</kbd>, puis colle-la dans le terminal avec <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>.

Apprends aussi la [complétion par tabulation](https://en.wikipedia.org/wiki/Command-line_completion). Elle te fera gagner du temps et t'évitera des erreurs de saisie. Lorsque tu appuies sur <kbd>Tab</kbd>, le terminal complète automatiquement une commande ou un chemin s'il n'y a qu'une possibilité. Par exemple, si ton dossier personnel contient `Documents` et `Downloads`, la commande `cd D` suivie de <kbd>Tab</kbd> affiche les choix possibles :

```bash
$ cd D
Documents/ Downloads/
$ cd D
```

Après avoir saisi quelques caractères supplémentaires, le terminal peut compléter le nom. Tu pourrais ainsi écrire le chemin `~/Documents/Odin-Project/foundations/javascript/calculator/` en tapant quelque chose comme `cd Doc[tab]O[tab]f[tab]j[tab]cal[tab]`, selon les dossiers présents sur ton ordinateur. Essaie et familiarise-toi avec cette fonction.

Enfin, le point `.` est un raccourci pratique qui désigne le répertoire courant. Une fois ton éditeur installé, tu peux ouvrir tout un projet avec ses fichiers. Git utilise aussi ce raccourci : `git add .` ajoute tous les fichiers du répertoire à la zone de préparation. Avec VS Code, place-toi dans le dossier du projet avec `cd`, puis saisis `code .` pour ouvrir le dossier dans l'éditeur.

### Ouvrir des fichiers dans VS Code depuis le terminal

- **Linux** : saisis `code`. Pour ouvrir un dossier ou un fichier précis, ajoute son chemin, par exemple `code mon_projet/`.
- **macOS** : une configuration est nécessaire. Après avoir lancé VS Code, ouvre la palette de commandes avec <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>. Saisis `shell command`, puis choisis `Shell Command: Install 'code' command in PATH`. Si le terminal était ouvert, redémarre-le.
- **WSL2** : comme sous Linux, saisis `code` dans le terminal WSL2 pour ouvrir VS Code.

### Exercices

<div class="lesson-content__panel" markdown="1">

<div class="lesson-note lesson-note--warning" markdown="1">

#### Créer un dossier Desktop

Certaines ressources ci-dessous supposent que tu as un dossier `Desktop`. Si tu n'en as pas, ouvre le terminal et place-toi dans ton dossier personnel avec `cd ~`. Saisis ensuite `mkdir Desktop`, puis Entrée. Pour vérifier, saisis `ls` et repère `Desktop` dans la liste.

</div>

<div class="lesson-note lesson-note--warning" markdown="1">

#### Utiliser le bon système d'exploitation

Plusieurs ressources supposent que tu utilises macOS ou Linux. Si tu as suivi la leçon précédente, Linux devrait déjà être installé en double démarrage ou dans une machine virtuelle. Tu peux aussi utiliser macOS. Si tu n'as ni macOS ni une variante officielle d'Ubuntu, retourne à la [leçon Installations](#/web/installations/installations).

</div>

1. Suis le cours [The Unix Shell](https://swcarpentry.github.io/shell-novice/) de la Software Carpentry Foundation. Pour le moment, concentre-toi sur ces leçons :

   <div class="lesson-note" markdown="1">

   #### Suivre le cours SWCarpentry sous WSL2

   Utilise `wget` avec le lien de la section « Download files » pour télécharger l'archive dans WSL2 : `wget https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip`. Installe ensuite unzip avec `sudo apt install unzip`, puis décompresse l'archive avec `unzip shell-lesson-data.zip`. L'affichage de ton terminal peut différer de celui des leçons. Quand le cours demande d'ouvrir Desktop, place-toi dans le dossier personnel avec `cd ~`.

   </div>

   - [Télécharger les fichiers](https://swcarpentry.github.io/shell-novice/#download-files) — suis uniquement les instructions de cette section ; aucun logiciel n'est à installer.
   - [Introduction au shell](https://swcarpentry.github.io/shell-novice/01-intro.html)
   - [Naviguer dans les fichiers et répertoires](https://swcarpentry.github.io/shell-novice/02-filedir.html)
   - [Manipuler les fichiers et répertoires](https://swcarpentry.github.io/shell-novice/03-create.html)

1. Entraîne-toi à créer un dossier et quelques fichiers avec les commandes `mkdir`, `touch` et `cd`. Un site web simple pourrait contenir un fichier `index.html`, une feuille de style `style.css` et un dossier `images`. Réfléchis aux commandes qui te permettront de créer cette structure, puis essaie.

1. Entraîne-toi à créer et supprimer des fichiers et des répertoires dans le terminal :
   1. Crée un répertoire `test` dans ton dossier personnel.
   1. Place-toi dans le répertoire `test`.
   1. Crée un fichier `test.txt` avec la commande `touch`.
   1. Ouvre le fichier dans VS Code, modifie-le, enregistre-le et ferme-le.
   1. Reviens au répertoire parent.
   1. Supprime le répertoire `test`.

C'est terminé ! Si tu effectues régulièrement tes tâches depuis le terminal, ces commandes deviendront vite familières. Déplacer et copier des fichiers y est souvent plus efficace, même si cela paraît moins simple au début.

</div>
