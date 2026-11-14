## Introduction

La première étape pour construire n'importe quel site web est de disposer des bons outils. Pour nous, cela signifie configurer un environnement de développement pour écrire du bon code.

De nombreux cours de développement en ligne utilisent des éditeurs de code dans le navigateur ou des « sandbox », qui te donnent les outils et les programmes nécessaires pour accomplir la tâche en cours, et rien d'autre. Tu utiliseras certaines de ces sandbox pendant les premières étapes de The Odin Project, car elles sont idéales pour démarrer rapidement. Cependant, la meilleure façon de te préparer à réussir sur le long terme est de travailler dans un véritable environnement de développement.

Nous ne te mentirons pas : installer des paquets, des éditeurs et même des systèmes d'exploitation (OS) entiers peut être très frustrant. Cependant, l'expérience de configurer un environnement de développement pour exécuter le code que tu écriras est une compétence précieuse et concrète que tu conserveras tout au long de ta carrière.

**Si tu utilises déjà macOS, Ubuntu ou [une saveur officielle d'Ubuntu](https://ubuntu.com/desktop/flavours) comme système d'exploitation et que Google Chrome est installé comme navigateur, tu peux passer cette leçon. Sinon, suis les instructions d'installation ci-dessous pour configurer ton environnement de développement.**

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Comment configurer un environnement approprié pour suivre le cursus de The Odin Project.
- Installer Google Chrome dans ton environnement.

## Systèmes d'exploitation pris en charge

### macOS

Si tu utilises un Mac, tu es en bonne posture. Les instructions de The Odin Project supposent un système basé sur Unix. En installant seulement quelques programmes, tu seras opérationnel pour ta formation en un rien de temps !

### Linux (Ubuntu et saveurs officielles)

[Linux](https://en.wikipedia.org/wiki/Linux) est un système d'exploitation libre et open source qui fonctionne bien avec tous les langages de programmation. La plupart des outils de développement sont écrits pour fonctionner nativement avec Linux. Tes outils seront probablement mis à jour plus souvent, disposeront de plus d'informations disponibles pour le dépannage et fonctionneront tout simplement mieux sur Linux.

Afin d'améliorer la disponibilité de l'aide dans notre communauté, nous limitons nos distributions Linux prises en charge à Ubuntu et aux saveurs officielles d'Ubuntu uniquement. Cela signifie que nous ne fournissons pas de support pour d'autres distributions, y compris celles « basées sur Ubuntu ou Debian » (comme Mint, Pop!_OS, etc.).

Nous prenons en charge les méthodes suivantes pour exécuter Linux (les instructions correspondantes se trouvent dans la section exercice ci-dessous) :

- Une machine virtuelle VirtualBox
- Le double démarrage
- Windows Subsystem for Linux version 2 (WSL2)

### Chromebook

Pour les utilisateurs de Chromebook, tu pourras peut-être exécuter un terminal Linux sur ton appareil. Plus de détails seront fournis dans le guide ChromeOS Linux de la section exercice ci-dessous.

## Tu hésites à installer un nouveau système d'exploitation ?

« Wouah, wouah, wouah ! Tu ne prends pas en charge Windows ? Mais j'aime mon système d'exploitation tel qu'il est ! »

Si tu n'as pas d'ordinateur Apple, tu utilises probablement Windows. **Windows, en tant que tel, n'est pas pris en charge nativement par The Odin Project, ni sur notre serveur Discord.** Étant donné que beaucoup des outils que tu vas utiliser ont été écrits en pensant à un environnement basé sur Unix, tu devras en avoir un même si tu prévois d'utiliser Windows comme OS de développement à l'avenir.

Ne t'inquiète pas ! Les options ci-dessus ne signifient pas que tu dois te débarrasser de Windows, et nous ne te demandons pas non plus d'arrêter d'utiliser Windows pour quoi que ce soit en dehors de The Odin Project. Linux partagera volontiers le disque dur avec Windows. Nous savons que tu as probablement appris beaucoup d'astuces et de ficelles pour ton OS préféré et que tu ne veux pas perdre tout ce que tu as sur ton ordinateur. Cependant, la plupart des OS sont conçus en pensant à des personnes non techniques, ils cachent donc ou rendent difficile l'utilisation de nombreux langages et frameworks que nous devrons installer. Devoir contourner ces difficultés pousse beaucoup de nouveaux développeurs à abandonner avant même d'avoir commencé leur voyage vers le nirvana du full-stack.

Modifier ou configurer un double démarrage sur un ordinateur pour qu'il fonctionne avec les outils dont tu auras besoin rendra le début de la programmation beaucoup plus facile et t'aidera à créer un environnement sans distractions. Les utilisateurs de Windows peuvent utiliser l'une de nos options Linux prises en charge pour The Odin Project.

Toujours pas convaincu ? Voici quelques excellentes raisons d'installer Linux :

- **Testé** - Nous avons testé nos instructions avec macOS, Ubuntu (et les saveurs officielles d'Ubuntu) et WSL2. Nous avons fait les recherches pour que tu puisses installer les outils avec le moins de problèmes possible et te mettre à coder plus tôt. Le temps passé à te battre avec ton système d'exploitation est du temps pris sur l'apprentissage de la programmation.
- **Support communautaire** - Utiliser les outils que nous recommandons nous permet de t'aider plus facilement lorsque tu rencontres un problème.
- **Les outils de développement sont conçus pour Linux** - Ruby (on Rails) et Node.js, des technologies backend populaires couvertes par The Odin Project et largement utilisées dans la communauté du développement web, sont des projets open source qui *s'attendent* explicitement à fonctionner sur une plateforme open source (basée sur UNIX) comme Linux.
- **Travaille comme les pros** - De nombreux développeurs utilisent un système d'exploitation basé sur Unix.
- **Performance** - Tu t'inquiètes d'installer Linux parce que ta machine est lente ou ancienne et a un espace limité ? Lorsque la performance est une priorité, Linux est un excellent choix. Il utilise moins de ressources système que Windows et occupe moins d'espace sur le disque dur.

:::warning

### Support communautaire

**Nous ne pouvons prendre en charge que ce qui est fourni dans le cadre de notre cursus. Nous ne prenons pas en charge Windows natif comme environnement de développement.** L'utilisation de Windows a été discutée de nombreuses fois et elle n'est pas envisageable pour le moment. Ne nous demande pas de prendre en charge Windows, et **n'en parle pas sur le Discord**. Nous évaluons constamment notre cursus pour garder le contenu aussi frais et accessible que possible, et Windows ne s'est pas révélé être une voie de moindre résistance. Pour plus d'informations sur The Odin Project et Windows, nous avons une [liste des raisons pour lesquelles Windows n'est pas un OS pris en charge dans The Odin Project](https://github.com/TheOdinProject/blog/wiki/Why-We-Do-Not-Support-Windows).

Beaucoup d'apprenants viennent sur notre canal Discord pour demander si les instructions de cette page doivent être suivies. L'équipe, qui gère aussi notre serveur Discord, a écrit tout ce que tu viens de lire à propos du plan d'installation. Les personnes qui accompagnent les apprenants sur notre serveur Discord sont d'accord avec les conseils de cette page et feront les mêmes recommandations que celles que tu viens de lire.

:::

Cela étant dit, nous devons configurer un environnement de développement approprié !

## Choisir ta configuration

Si tu n'utilises pas déjà macOS, Ubuntu ou une saveur officielle d'Ubuntu, tu devras configurer un environnement de développement. Voici ce que propose chaque option :

### Machine virtuelle VirtualBox (recommandé)

Une [machine virtuelle](https://youtu.be/yIVXjl4SwVo) (VM) est une émulation d'un ordinateur qui s'exécute au sein de ton OS existant. Elle te permet d'utiliser un autre système d'exploitation à l'intérieur d'un programme sur ton système d'exploitation actuel (par exemple, exécuter Linux à l'intérieur de Windows). Les machines virtuelles sont aussi simples à installer que n'importe quel autre programme et ne présentent aucun risque. Si tu n'aimes pas Linux, tu peux facilement supprimer la machine virtuelle. Les machines virtuelles sont un excellent moyen pour les nouveaux développeurs de démarrer rapidement.

C'est pourquoi nous recommandons cette option aux débutants, surtout si tu n'es pas sûr de l'option à choisir après avoir lu tout ceci. Nous avons des instructions étape par étape très claires pour t'aider à configurer cela.

### Double démarrage

Le double démarrage consiste à installer deux systèmes d'exploitation sur ton ordinateur, ce qui te donne la possibilité de démarrer Linux ou Windows au lancement de l'ordinateur. L'avantage du double démarrage par rapport à une VM est que l'OS peut utiliser toutes les ressources de ton ordinateur, ce qui entraîne un fonctionnement beaucoup plus rapide. L'installation d'un système en double démarrage peut présenter un certain risque, car tu modifies les partitions de ton disque dur (sauf si tu disposes d'un disque dur séparé exclusivement pour Linux), mais tout ira parfaitement bien tant que tu prends ton temps et suis les instructions attentivement. N'essaie pas de mélanger les instructions provenant d'autres sources.

### ChromeOS/ChromeOS Flex

Il s'adresse aux utilisateurs qui possèdent un Chromebook ou qui souhaitent installer ChromeOS Flex sur du matériel plus ancien. De nombreux Chromebook intègrent une prise en charge native de Linux qui fonctionne bien pour le développement.

### WSL2 (avancé)

WSL2 est un type particulier de VM qui te permet d'exécuter Linux directement dans Windows. Puissant, il peut toutefois semer la confusion chez les nouveaux apprenants, car tu travailles simultanément dans deux systèmes d'exploitation sans grande séparation visuelle, ce qui signifie qu'il est plus facile d'interagir avec le mauvais OS qu'avec quelque chose de plus clairement séparé comme une VM avec VirtualBox ou un double démarrage. C'est pourquoi nous le marquons comme avancé et ne le recommandons pas aux débutants qui ne connaissent pas bien les OS. Une expérience Linux plus clairement séparée (comme une VM VirtualBox ou un double démarrage) est bien plus intuitive et moins susceptible de te faire interagir avec les mauvaises choses sans t'en rendre compte.

Note que WSL2 n'est pas identique à WSL1. Nous ne prenons en charge que WSL2 pour The Odin Project.

## Prise en charge des navigateurs

Nous ne prenons en charge que l'utilisation de Google Chrome pour The Odin Project. Nos leçons utilisent Google Chrome et il est massivement utilisé par les développeurs et les consommateurs ; les recommandations que nous faisons sont très intentionnelles. Regarde cette [part d'utilisation des navigateurs web](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables) et vois ce que les autres utilisent le plus.

Google Chrome inclut de puissants outils de développement que tu utiliseras tout au long de ce cursus pour inspecter, déboguer et tester tes applications web. Même si d'autres navigateurs proposent des outils similaires, nos instructions et nos captures d'écran supposeront que tu utilises Chrome. Comme pour notre prise en charge des OS, nous ne pouvons pas fournir d'assistance pour les problèmes ou les différences liés à l'utilisation d'autres navigateurs.

## Exercice

:::assignment

1. Si tu n'utilises pas déjà un environnement pris en charge, suis l'un des <span id="os-installation">guides d'installation</span> ci-dessous :
   - [Machine virtuelle (recommandé)](https://github.com/TheOdinProject/curriculum/blob/main/foundations/installations/installation_guides/linux/virtual_machine.md "Linux virtual machine installation instructions (recommended option)") - La façon la plus simple et la plus fiable de commencer. Une VM s'exécute dans ton OS actuel, comme Windows.
   - [Double démarrage Ubuntu/Windows](https://github.com/TheOdinProject/curriculum/blob/main/foundations/installations/installation_guides/linux/dual_boot.md "Ubuntu dual-boot instructions") - Installe Ubuntu comme un OS distinct aux côtés de Windows sur ton ordinateur. Idéal pour les systèmes moins puissants, car aucune virtualisation n'est nécessaire.
   - [ChromeOS/ChromeOS Flex](https://github.com/TheOdinProject/curriculum/blob/main/foundations/installations/installation_guides/linux/chromeos.md "Linux installation instructions for ChromeOS") - Instructions pour les utilisateurs de Chromebook.
   - [WSL2 (avancé)](https://github.com/TheOdinProject/curriculum/blob/main/foundations/installations/installation_guides/linux/wsl2.md "WSL2 installation instructions (advanced option)") - Exécute Linux depuis Windows. Peut semer la confusion chez les nouveaux apprenants en raison d'une séparation moins claire entre les systèmes d'exploitation.

   :::warning

   ### Matériel et logiciels non pris en charge

   Ce cursus ne prend en charge que l'utilisation d'un ordinateur portable, d'un ordinateur de bureau ou d'un Chromebook pris en charge. Nous ne pouvons pas t'aider à configurer un environnement de développement sur un RaspberryPi ou tout autre appareil. Tu n'as besoin de suivre l'un de ces ensembles d'instructions que si tu n'utilises **pas** déjà **macOS**, **Ubuntu** ou [une saveur officielle d'Ubuntu](https://ubuntu.com/desktop/flavours) comme système d'exploitation.

   Si tu utilises déjà un matériel et des logiciels pris en charge, tu peux passer directement à l'étape 2 ci-dessous.

   :::

1. Parce que nos leçons utilisent Google Chrome, et que Chrome/Chromium sont massivement utilisés par les développeurs et les consommateurs, les recommandations que nous faisons sont très intentionnelles. Regarde cette [part d'utilisation des navigateurs web](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables) et vois ce que les autres utilisent le plus.

   <span id="google-chrome-installation">Installe Google Chrome</span> pour ton système d'exploitation :
   - [Linux](https://github.com/TheOdinProject/curriculum/blob/main/foundations/installations/installation_guides/chrome/linux.md "Google Chrome installation for Linux") - Pour les utilisateurs de VM ou de double démarrage, **pas** les utilisateurs de WSL2.
   - [macOS](https://github.com/TheOdinProject/curriculum/blob/main/foundations/installations/installation_guides/chrome/macos.md "Google Chrome installation for macOS")
   - [WSL2](https://github.com/TheOdinProject/curriculum/blob/main/foundations/installations/installation_guides/chrome/wsl2.md "Google Chrome installation for WSL2")

   :::tip

   ### Raccourcis Chrome

   Google Chrome est l'un des outils les plus importants que tu utiliseras tout au long du cursus. Cette référence contient de nombreux [raccourcis courants qui pourront t'être utiles lorsque tu utilises Chrome](https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ctab-window-shortcuts).

   :::

:::
