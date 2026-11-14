:::note
Cette application est une **traduction française non officielle**, réalisée pour faciliter l'apprentissage. Le cursus original est publié en anglais par The Odin Project sous licence **CC BY-NC-SA 4.0**. Les liens renvoient vers les ressources originales.
:::

## Introduction

The Odin Project est une communauté **open source** (*open source*) consacrée à fournir les meilleures sources d'information pour te faire passer de zéro à développeur **full-stack** (*full-stack developer*).

Dans cette unité, nous allons découvrir comment fonctionne le web et commencer à réfléchir aux bases de la programmation informatique et web.

Chacune des sections et leçons suivantes couvre un socle essentiel. Même si tu n'as aucune intention de devenir développeur web, ce contenu devrait t'aider à comprendre utilement les rouages de la création et de la diffusion de contenu sur le web.

Nous commencerons par nous familiariser avec internet et ton propre ordinateur. Ensuite, nous mettrons en place un environnement de développement et découvrirons **Git** et **GitHub**. Puis nous aborderons les bases des technologies **front-end** comme le HTML, le CSS et le JavaScript, avant de faire une brève incursion du côté **back-end** pour couvrir les concepts de base de ces technologies.

À la fin de cette unité, tu ne devrais pas seulement comprendre comment fonctionne le web : tu devrais aussi être capable d'identifier et de différencier toutes les technologies que tu utiliseras pour construire tes propres applications web. Tu sauras créer une page web basique, la styliser et ajouter de petits éléments d'interactivité, tout en travaillant confortablement depuis la ligne de commande.

Cette section couvre volontairement un très large éventail de sujets. Il serait absurde de plonger directement dans la programmation côté serveur sans avoir le contexte de ce que c'est, de son utilité et des raisons de l'apprendre.

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Comprendre le fonctionnement du cursus de The Odin Project.
- Comprendre le fonctionnement du cours Foundations.

## Comment ça marche

Ce cursus fonctionne en rassemblant le meilleur contenu disponible sur internet pour enseigner un sujet précis. Dans chaque leçon, nous introduisons le sujet et essayons de fournir un contexte utile avant de te diriger vers des ressources externes créées par d'autres.

Certaines leçons comprennent des exercices à réaliser. Nous proposons également plusieurs projets tout au long du cursus pour t'aider à approfondir ta compréhension en construisant réellement des choses.

Essaie de ne pas considérer The Odin Project, ni la programmation, comme un cours scolaire. Ce n'est pas un contenu que tu apprends d'un coup pour passer un examen, puis réussir ou échouer. Tu peux voir cela comme une **boule de neige** (*snowball*). Tu es toi-même cette boule de neige. Tu dévales une pente enneigée : plus tu roules, plus la neige s'accroche à toi. Bien sûr, de la neige va aussi tomber, et tu oublieras souvent des choses, mais cela fait partie du processus. Ne t'inquiète pas si, en arrivant à un projet, tu as l'impression de n'avoir rien retenu ni mémorisé. C'est naturel et cela arrive à tout le monde. **Les projets ne sont pas des tests de ce que tu as mémorisé jusqu'ici.** Ce sont des occasions de pratiquer, où les informations te reviendront au fur et à mesure que tu résous tes problèmes un par un, en t'appuyant sur Google et sur la communauté Odin.

## À propos des outils

On nous demande souvent pourquoi ce cours ne couvre pas tel langage ou tel outil.

La vérité, c'est qu'une fois ce cursus terminé, tu n'auras **pas besoin** d'un cours comme celui-ci ni d'un quelconque « tutoriel ». L'objectif de The Odin Project n'est pas de t'enseigner des compétences isolées, et ce n'est pas un tutoriel. L'idée principale est de t'enseigner le *pourquoi* et de changer ta façon de penser.

L'un des aspects les plus difficiles de ce cours est d'adopter le bon **état d'esprit** (*mindset*). Un défi encore plus grand est d'apprendre les idées fondamentales de la programmation. Il ne s'agit pas seulement de coder, mais de résoudre des problèmes, de poser les bonnes questions et de faire suffisamment de recherches. Parvenir à un niveau où tu es à l'aise avec ces compétences signifie que tu seras aussi à l'aise pour élargir ton arsenal. Une fois que tu as une **base** solide, il devient plus simple de l'étendre. C'est exactement le but de The Odin Project : développer ces *compétences*.

Après avoir terminé le cours, tu seras capable de plonger directement dans la documentation de tout ce que tu cherches à apprendre. Lire la documentation est la meilleure façon d'apprendre n'importe quel outil. Mais cela demande de la pratique pour être maîtrisé. Beaucoup de personnes se sentent intimidées par le jargon technique, ce qui est compréhensible. Les personnes qui écrivent la documentation supposent généralement un bagage en programmation. C'est précisément pour cela que nous te fournissons beaucoup de contenu à lire par toi-même.

Les compétences que tu acquerras en terminant The Odin Project seront la fondation sur laquelle tu construiras pendant des années et des décennies. Si tu sors du cours en pensant avoir besoin d'un autre cours comme celui-ci pour apprendre Python, alors soit tu ne crois pas en toi, soit tu n'as pas retenu les idées importantes qui y sont abordées.

Les compétences apprises ici sont transférables à de nombreux contextes. Une fois que tu connais l'*idée* et que tu sais qu'il est *possible* de faire quelque chose, découvrir concrètement comment le faire devient beaucoup plus facile et se trouve souvent à une simple recherche Google.

## À propos de la langue

The Odin Project attire des personnes du monde entier qui aspirent à devenir développeurs. Sache que ce cursus est écrit en anglais et maintenu par des anglophones qui ne sont ni en mesure ni tenus de le traduire pour toi. En devenant programmeur, tu découvriras que le monde dans lequel tu entres est profondément ancré dans la langue anglaise. Cela signifie que la syntaxe de ton langage de programmation, la documentation qui t'apprend à l'utiliser et la majorité des membres de la communauté s'attendent à communiquer avec toi en anglais.

Si tu ne parles pas anglais, ou si l'anglais n'est pas ta langue maternelle, ce constat n'est pas destiné à te décourager, mais à te préparer.

Dans le cadre de cette préparation, nous te recommandons *vivement* de consacrer du temps supplémentaire aux sujets et aux termes que tu ne comprends pas immédiatement. Nous t'encourageons aussi à chercher des ressources complémentaires dans ta langue maternelle pour mieux les comprendre.

Tu peux également utiliser un dictionnaire de traduction dans ta langue en parallèle du cursus, afin de pouvoir le consulter facilement. Nous n'avons pas de recommandation particulière, car il existe une très grande variété de langues dans le monde ; en trouver un pourrait être un bon premier pas pour apprendre à chercher des outils utiles en ligne. C'est une compétence que tu utiliseras et amélioreras tout au long de ton apprentissage.

## La suite

Une fois ce cours terminé, tu devrais être à l'aise avec les briques de base de la programmation web, mais impatient d'aller plus loin. Même si nous consacrons un bon moment à chacun des grands sujets, ce n'est qu'un aperçu de la suite, et de tout ce que tu pourras faire avec.

La dernière leçon de ce cours te permettra de choisir entre un parcours **Full Stack JavaScript** et un parcours **Full Stack Rails**, tous deux conçus pour approfondir la fondation établie ici. Chaque parcours vise à transformer ces briques de base en un ensemble de compétences hautement fonctionnel.

The Odin Project est maintenu par des professionnels. Nous avons sélectionné certaines des meilleures ressources disponibles et rédigé un guide pour les parcourir. Lorsqu'il n'existe pas de bonne ressource, nous écrivons la nôtre. Cela dit, sache que **tout** ce qui figure dans le cursus est inclus intentionnellement et est essentiel pour devenir un programmeur accompli.

Au fil du cursus, chaque partie s'appuie sur tout ce qui précède ; sauter des éléments créerait donc des lacunes dans tes connaissances, qui finiraient par affecter ta capacité à résoudre des problèmes et à comprendre la tâche en cours.

Les ressources complémentaires sont la seule chose considérée comme facultative, sauf mention explicite. Elles sont là au cas où tu souhaiterais approfondir un sujet pour mieux le comprendre.

**NE SAUTE RIEN !**

## Exercice

:::assignment
1. Apprends-en davantage sur The Odin Project en lisant sa [page À propos](https://www.theodinproject.com/about).
2. Consulte la section [Questions fréquentes](https://www.theodinproject.com/faq).
:::
