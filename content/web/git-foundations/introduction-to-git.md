## Introduction

Git est comme un **bouton de sauvegarde vraiment épique** pour tes fichiers et tes dossiers (officiellement, c'est un « système de contrôle de version »). Dans cette leçon, nous allons explorer brièvement l'histoire de Git, ce que c'est et à quoi cela sert, puis dans la prochaine leçon nous verrons le flux de travail de base pour utiliser Git (un flux avec lequel tu vas devenir grand ami tout au long de ce cursus, et même au-delà).

Pour la suite, nous partons du principe que tu as déjà suivi notre leçon [Configuration de Git](https://www.theodinproject.com/lessons/foundations-setting-up-git) pour installer Git et configurer SSH.

## Aperçu de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Ce que sont Git et GitHub, et en quoi ils diffèrent l'un de l'autre.
- Les différences entre Git et un éditeur de texte quant à ce qu'ils « sauvegardent ».
- Pourquoi Git est utile aussi bien aux développeurs individuels qu'aux équipes.

## Le contrôle de version

Une *sauvegarde* dans un éditeur de texte enregistre tous les mots d'un document dans un seul fichier. Tu n'as jamais qu'un seul exemplaire du fichier, comme `essay.doc`, à moins de faire des copies comme `essay-draft1.doc`, `essay-draft2.doc` et `essay-final.doc` (ce qui est difficile à penser à faire et à suivre).

Cependant, une « sauvegarde » (appelée « commit ») dans Git enregistre un instantané des fichiers et des dossiers à un moment précis. En même temps, Git conserve un historique de chaque instantané. Cette fonctionnalité change la donne. En tant que développeur individuel, Git te permet de suivre l'évolution de ton projet et de consulter ou restaurer facilement l'état de fichiers du passé. Une fois connecté à un réseau, Git te permet de pousser ton projet vers un espace de stockage distant comme GitHub (ou d'autres alternatives comme Bitbucket, Beanstalk ou GitLab), comme « sauvegarder dans le cloud ». Cela aide bien sûr au partage et à la collaboration avec d'autres développeurs.

:::warning
### Prise en charge des plateformes distantes Git

The Odin Project utilise GitHub pour le stockage distant. Nous ne pourrons pas prendre en charge l'utilisation d'alternatives comme GitLab ou Bitbucket, que ce soit pour fournir des instructions alternatives ou pour résoudre des problèmes.
:::

## Git vs GitHub

Alors que Git fonctionne sur ta machine *locale*, GitHub est un espace de stockage *distant* sur le web pour tous tes projets de code. Cela signifie qu'en apprenant Git, tu pourras présenter ton portfolio sur GitHub ! C'est vraiment important, car presque toutes les entreprises de développement logiciel considèrent l'utilisation d'un système de contrôle de version comme Git comme une **compétence essentielle** pour les développeurs web modernes. Avoir un portfolio GitHub apportera la preuve à tes futurs employeurs potentiels de ce dont tu es capable.

Git et GitHub fonctionnent ensemble. L'idée générale est que tu fais ton travail sur ta machine locale en utilisant Git pour gérer tes « sauvegardes », puis que tu stockes le tout à distance en « poussant » vers GitHub. Si besoin, tu peux « tirer » (pull) depuis GitHub pour télécharger et synchroniser ta machine locale avec le dépôt distant. C'est particulièrement utile pour le travail collaboratif, car cela permet à chacun de rester synchronisé avec des changements venant de partout. Les gens peuvent aussi examiner le travail sur GitHub et gérer la façon dont les changements de différents endroits se rejoignent.

Pour l'instant, apprenons-en davantage sur ce qu'est Git et pourquoi il est si puissant !

## Exercice

:::assignment
1. Lis les chapitres 1.1 à 1.3 de la [section « Getting Started » de Pro Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) pour apprendre les différences entre les systèmes de contrôle de version locaux, centralisés et distribués.
1. Regarde la vidéo [« What is Git? » expliquée en 2 minutes](https://www.youtube.com/watch?v=2ReR1YJrNOM) - une vidéo sur ce qu'est Git et comment il peut améliorer le flux de travail d'un développeur individuel comme d'une équipe.
1. Jette un œil au [dépôt `curriculum` de The Odin Project sur GitHub](https://github.com/TheOdinProject/curriculum). C'est là que toutes les leçons sont stockées, mais aussi où les propositions sont discutées et où les mises à jour sont révisées et fusionnées ! Pendant que tu y es, regarde tous [nos contributeurs au curriculum](https://github.com/TheOdinProject/curriculum/graphs/contributors?all=1) pour apprécier comment Git enregistre tous les efforts collaboratifs et comment GitHub les représente visuellement.
:::
