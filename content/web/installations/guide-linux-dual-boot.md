## Guide : installer Ubuntu et Windows en double démarrage

Le double démarrage permet d'utiliser deux systèmes d'exploitation sur le même ordinateur et de passer de l'un à l'autre en redémarrant. Un système ne modifie pas l'autre, sauf si tu le lui demandes explicitement. Il existe plusieurs variantes d'Ubuntu. Le cursus prend en charge les variantes officielles, mais ce guide explique l'installation de la version officielle Ubuntu Desktop avec GNOME. Les étapes fonctionneront aussi pour une autre variante ; suis attentivement les indications de son programme d'installation.

Avant de continuer, sauvegarde les données importantes et assure-toi de pouvoir demander de l'aide. Si tu es perdu ou bloqué, nous pouvons t'aider dans le [salon Odin Tech Support](https://discordapp.com/channels/505093832157691914/514204667245363200). Viens nous dire bonjour !

### Étape 0 : BitLocker

Si tu utilises Windows Pro (ou une édition indiquée dans la [présentation officielle de BitLocker par Microsoft](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/#windows-edition-and-licensing-requirements)), le chiffrement [BitLocker](https://support.microsoft.com/en-us/windows/bitlocker-drive-encryption-76b92ac9-1040-48d6-9f5f-d14b3c5fa178) est peut-être activé sur ton disque principal. Si le disque où tu veux installer Ubuntu est chiffré avec BitLocker, tu ne pourras pas poursuivre l'installation dans l'immédiat.

Il existe plusieurs façons de résoudre ce problème. La plus simple consiste à désactiver BitLocker temporairement.

Le [guide officiel d'Ubuntu pour désactiver BitLocker sous Windows](https://ubuntu.com/desktop/docs/en/latest/how-to/turn-off-bitlocker-in-windows/#turn-off-bitlocker-in-windows) explique comment procéder sous Windows 11 et les versions antérieures.

Si tu installes Ubuntu sur un autre disque ou une autre partition où BitLocker n'est pas activé, le double démarrage devrait fonctionner sans problème et tu n'auras pas besoin de désactiver BitLocker.

### Étape 1 : télécharger Ubuntu

Télécharge la version d'Ubuntu à installer sur ton ordinateur. Ubuntu existe en plusieurs variantes ; nous recommandons la version standard [Ubuntu Desktop](https://releases.ubuntu.com/24.04/) en 64 bits. Si tu ne sais pas laquelle choisir, prends la version à support à long terme (LTS) 24.04, nom de code Noble Numbat. Une version plus récente pourrait être disponible, mais celle-ci a été éprouvée par la communauté Odin et constitue le choix le plus fiable pour ce cursus.

### Étape 2 : créer une clé USB amorçable

Suis l'[étape 3 du guide officiel d'installation d'Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#3-create-a-bootable-usb-stick) pour créer une clé USB amorçable qui servira à installer Ubuntu sur ton disque dur. Il te faut une clé USB disposant d'au moins 12 Go d'espace. Sauvegarde les données qui s'y trouvent : cette étape effacera tout son contenu.

### Étape 3 : installer Ubuntu

#### Étape 3.1 : démarrer depuis la clé USB

Démarre Ubuntu depuis la clé USB. Les étapes exactes varient selon l'ordinateur, mais en général :

1. Insère la clé USB dans l'ordinateur.
1. Redémarre l'ordinateur.
1. Sélectionne la clé USB comme périphérique de démarrage à la place du disque dur.

Par exemple, sur un ordinateur Dell, insère la clé, redémarre, puis appuie sur F12 pendant le démarrage pour ouvrir le menu de démarrage. Tu pourras alors choisir la clé USB. Ton ordinateur peut fonctionner différemment ; une recherche en ligne t'aidera à trouver la procédure adaptée.

#### Étape 3.2 : installer Ubuntu

Le programme d'installation d'Ubuntu te demandera de choisir la langue, les paramètres d'accessibilité, la disposition du clavier et la connexion Wi-Fi.

Pour essayer Ubuntu depuis la clé USB, clique sur **Try Ubuntu**. Quand tu es prêt à l'installer, double-clique sur l'icône **Install Ubuntu 24.04 LTS** du bureau.

L'installation entraîne des changements sur ton ordinateur. Les paramètres par défaut conviennent généralement, mais veille à choisir **Install Ubuntu alongside Windows** et à attribuer 30 Go d'espace disque (ou davantage si possible) à Ubuntu.

Pour suivre les étapes en détail, consulte l'[étape 6 du guide officiel d'installation d'Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#6-type-of-installation).

### Intel RST (Rapid Storage Technology)

Si un message te demande de désactiver **Intel RST** pendant l'installation d'Ubuntu, suis cette [procédure pour installer Ubuntu sur les systèmes Intel RST](https://askubuntu.com/questions/1233623/workaround-to-install-ubuntu-20-04-with-intel-rst-systems/1233644#1233644), en particulier la **Choice #2**. Elle force Windows à démarrer en mode sans échec après le changement du pilote de stockage de la carte mère pour le rendre compatible avec Ubuntu. Une fois Windows démarré, le mode sans échec forcé est désactivé ; tu peux alors réessayer d'installer Ubuntu.

[Retour à la leçon Installations](#/web/installations/installations#os-installation)
