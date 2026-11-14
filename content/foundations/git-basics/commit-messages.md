## Introduction

Cette leçon va expliquer l'importance des bons messages de **commit**, comment les écrire, quand committer, et pourquoi un historique de bons commits est si important ! Nous apprenons cela maintenant parce que tu vas bientôt commencer ton premier projet où tu utiliseras Git dans ton flux de travail.

## Objectifs de la leçon

Cette section contient un aperçu général des sujets que tu vas apprendre dans cette leçon.

- Comment écrire un message de commit significatif.
- Pourquoi les messages de commit significatifs sont importants.
- Quand committer.

## Les messages de commit méritent-ils vraiment leur propre leçon ?

Oui ! Voici une rapide liste de raisons :

- Lorsque tu postules à des emplois, les employeurs parcourront tes projets sur GitHub et examineront ton historique de commits. Avoir de bons commits en tant que développeur débutant t'aidera à te démarquer.

- Un bon historique de messages de commit te permettra (à toi ou à d'autres développeurs travaillant sur ton code) de voir rapidement quels changements ont été faits et pourquoi. C'est utile si un bug est découvert dans le code et doit être corrigé !

- Un bon historique de messages de commit sera aussi utile si tu reviens sur un projet après t'en être éloigné un moment. Tu ne te souviendras probablement pas de ton raisonnement ni des changements effectués lors de l'écriture initiale du code.

## Mauvais vs bons commits

Quand il s'agit d'écrire des commits, il est crucial de savoir les écrire efficacement. Voici un exemple de mauvais message de commit :

```text
fix a bug
```

Même s'il décrit ce que tu as fait, le message est trop vague, ce qui laisse les autres développeurs de ton équipe perplexes. Un bon message de commit expliquera le **pourquoi** derrière tes changements. Autrement dit, un message de commit décrit quel problème tes changements résolvent et comment ils le résolvent.

Les commits efficaces se composent de deux parties distinctes : un **sujet (subject)** et un **corps (body)** :

### Sujet (Subject)

Un bref résumé du changement que tu as apporté au projet.

```text
This is the change I made to the codebase
```

:::tip
### Limite de caractères du sujet de commit

GitHub impose une limite de 72 caractères, nous te recommandons donc de garder le sujet de tes commits dans cette limite.
:::

### Corps (Body)

Une description concise mais claire de ce que tu as fait.

```text
Describe the problem your commit solves and how.
```

Maintenant que nous avons appris le secret d'un bon message de commit, essayons de corriger le message de commit de tout à l'heure :

```git
Add missing link and alt text to the company's logo

Screen readers won't read the images to users with disabilities without this information.
```

Ah, c'est mieux ! :) Désormais, les développeurs comprennent mieux ce message de commit, car il fait ce qui suit :

- Il fournit un sujet qui précise l'action de ton code (par ex. « Add missing link and alt text to the company's logo »).
- Il contient un corps qui donne une description concise mais claire de la raison pour laquelle le commit a dû être fait (par ex. « Screen readers won't read the images to users with disabilities without this information. »).
- Il sépare le sujet du corps par une nouvelle ligne / ligne vide. C'est une bonne pratique que nous recommandons fortement de suivre. Cela rend les messages de commit plus faciles à lire pour les autres développeurs.

Certaines équipes de développeurs peuvent avoir leur propre convention de messages de commit dans des formats spécifiques. Cependant, elles suivent toujours les mêmes principes que ceux exposés dans cette leçon.

## Comment committer avec un sujet et un corps dans le message

Jusqu'à présent, on t'a dit de committer avec `git commit -m <message>`. Pour faire un commit avec un sujet et un corps dans le message, le plus simple est de taper `git commit` sans l'option `-m` ni l'argument du message.

Cela ouvrira un nouvel onglet Visual Studio Code si tu avais [défini Visual Studio Code comme éditeur Git](https://www.theodinproject.com/lessons/foundations-git-basics#changing-the-git-commit-message-editor). Tu peux supprimer les commentaires et saisir tes messages multilignes. Lorsque tu enregistres et fermes l'onglet, ton commit est créé.

## Quand committer

Une bonne façon de voir un commit est de le considérer comme un « instantané » (**snapshot**) de ton code au moment où il a été fait. Cette version de ton code jusqu'à ce point sera sauvegardée pour que tu puisses y revenir ou la consulter.

Lorsque tu écris du code, il est considéré comme une bonne pratique de committer chaque fois que tu as un changement significatif dans le code. Cela créera une chronologie de ta progression et montrera que ton code final n'est pas apparu de nulle part.

Autrement dit, fais un commit si tu arrives à faire fonctionner un morceau de code comme tu le souhaites, si tu corriges une faute de frappe, ou si tu corriges un bug. Avec l'expérience, tu développeras une meilleure intuition de ce qui mérite d'être commité !

Il arrivera un moment où, en travaillant sur un projet, tu obtiendras ENFIN quelque chose de juste (ce serait un bon moment pour committer), puis peut-être 30 secondes ou quelques jours plus tard, ça casse. Tu n'as aucune idée de ce que tu as changé, tout *semble* identique et tu ne te souviens pas d'avoir édité cette ligne, mais hélas, ça ne fonctionne plus comme tu veux. Tu pourrais alors parcourir ton historique de commits et soit revenir au dernier commit où cette partie fonctionnait, soit regarder à quoi ressemblait ton code à ce moment-là.

## Conseils et choses à retenir

- Utiliser VSCode comme éditeur de texte (tu devrais l'avoir configuré dans la section Git Basics) te permettra de créer facilement des messages de commit multilignes, de voir facilement la longueur en caractères de chaque ligne, et d'utiliser des [extensions de vérification orthographique VSCode](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) pour t'assurer que ton orthographe est correcte.
- Utilise la voix active : « Fix card generator ».
- Évite les messages de commit vagues comme « saved » ou « updated ».
- Committe tôt et souvent !

## Exercice

:::assignment
1. Cet article, [How to Write a Git Commit Message](https://cbea.ms/git-commit), couvre tous les points principaux pour écrire de bons messages de commit. L'article entier est excellent et instructif, mais le cœur de l'article est « The seven rules of a great commit message ».
:::
