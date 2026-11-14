# ODIN — cursus en français

Lecteur web du cursus The Odin Project et du parcours Python, avec recherche, suivi de progression, thèmes clair/sombre et glossaire.

## Ouvrir le lecteur

Dans le dossier du projet, lancez :

```sh
sh serve.sh
```

Puis ouvrez [http://localhost:8000](http://localhost:8000) dans le navigateur du même appareil. Laissez le serveur actif pendant la consultation.

Dans Chrome sur Android, ouvrez le menu ⋮ puis **Installer l'application** ou **Ajouter à l'écran d'accueil**. Le lecteur est une application Web progressive et peut réouvrir hors ligne les pages et ressources déjà consultées.

Pour installer l'application depuis un autre appareil, publiez le dossier sur un hébergement Web HTTPS, puis ouvrez son adresse dans le navigateur. Le navigateur doit pouvoir accéder au site une première fois pour installer l'application et mettre ses fichiers en cache.


## Terminal Python hors ligne

Le terminal charge Pyodide à la demande depuis le dossier `/pyodide/`. Pour l'auto-héberger, téléchargez la distribution officielle Pyodide (fichiers `pyodide.js`, `pyodide.asm.wasm`, `python_stdlib.zip` et les fichiers de données/runtime associés) depuis une version de [Pyodide](https://github.com/pyodide/pyodide/releases), puis placez l'ensemble des fichiers dans le dossier `/pyodide/` à la racine du site. Le lecteur utilise ce dossier comme `indexURL`; un déploiement qui ne contient pas ces fichiers doit avoir accès au CDN correspondant ou le terminal affichera une erreur de chargement.
