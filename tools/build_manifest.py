#!/usr/bin/env python3
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"

PYTHON_MODULES = [
    ("demarrage", "Démarrage", "Getting Started", "Installation, syntaxe, variables et opérateurs."),
    ("structures-donnees", "Structures de données", "Data Structures", "Chaînes, listes, tuples, ensembles et dictionnaires."),
    ("controle-et-fonctions", "Contrôle et fonctions", "Control Flow and Functions", "Conditions, boucles, fonctions, modules et compréhension de listes."),
    ("erreurs-et-fichiers", "Erreurs et fichiers", "Errors and Files", "Exceptions, dates, expressions régulières et gestion de fichiers."),
    ("modules-et-poo", "Modules et POO", "Modules and OOP", "Paquets, classes, objets, scraping et environnements virtuels."),
    ("data-et-web", "Data, web et API", "Data, Web and APIs", "Statistiques, Pandas, Flask, MongoDB et construction d'API."),
    ("conclusion", "Conclusion", "Conclusion", "Bilan du défi et prochaines étapes."),
]


def load_web():
    meta = json.loads((CONTENT / "web" / "_meta.json").read_text(encoding="utf-8"))
    modules = []
    by_id = {}
    for item in meta["modules"]:
        module = {
            "id": item["id"],
            "title": item["title"],
            "titleEn": item["titleEn"],
            "description": "",
            "lessons": [],
        }
        modules.append(module)
        by_id[item["id"]] = module
    for lesson in meta["lessons"]:
        file_path = ROOT / lesson["file"]
        if not file_path.exists():
            continue
        by_id[lesson["module"]]["lessons"].append({
            "id": lesson["slug"],
            "title": lesson["title"],
            "titleEn": lesson["titleEn"],
            "type": lesson["type"],
            "duration": lesson["duration"],
            "file": lesson["file"],
            "source": lesson["source"],
        })
    descriptions = {
        "introduction": "Découvrir le développement web, la méthode de travail et la communauté.",
        "installations": "Installer et configurer l'environnement de développement sur Linux, macOS, Windows ou WSL2.",
        "html-foundations": "Structurer une page avec HTML : balises, texte, listes, liens, images et premier projet.",
        "css-foundations": "Mettre en forme une page avec CSS : cascade, inspecteur, modèle de boîte et affichage.",
        "flexbox": "Maîtriser les axes, l'alignement et le dimensionnement Flexbox, puis construire une page complète.",
        "javascript-basics": "Variables, fonctions, objets, DOM, erreurs et projets interactifs en JavaScript.",
        "git-foundations": "Versionner son code avec Git et rédiger des messages de commit utiles.",
        "conclusion": "Faire le point sur les acquis et préparer la suite du parcours.",
    }
    for module in modules:
        module["description"] = descriptions.get(module["id"], "")
    return modules


def load_python():
    meta = json.loads((CONTENT / "python" / "_meta.json").read_text(encoding="utf-8"))
    modules = []
    by_id = {}
    for module_id, title, title_en, description in PYTHON_MODULES:
        module = {
            "id": module_id,
            "title": title,
            "titleEn": title_en,
            "description": description,
            "lessons": [],
        }
        modules.append(module)
        by_id[module_id] = module
    for lesson in meta:
        module = by_id[lesson["module"]]
        module["lessons"].append({
            "id": lesson["slug"],
            "title": f'Jour {lesson["day"]} — {lesson["title"]}',
            "titleEn": lesson["titleEn"],
            "type": "lesson",
            "duration": lesson["duration"],
            "file": lesson["file"],
            "source": lesson["source"],
        })
    return modules


def main():
    manifest = {
        "appTitle": "ODIN — Cursus en français",
        "version": "2.0.0",
        "tracks": [
            {
                "id": "web",
                "title": "Développement Web",
                "titleEn": "Web Development",
                "shortTitle": "Web",
                "description": "Parcours Foundations de The Odin Project, traduit en français.",
                "source": "https://github.com/TheOdinProject/curriculum",
                "license": "CC BY-NC-SA 4.0",
                "modules": load_web(),
            },
            {
                "id": "python",
                "title": "Programmation Python",
                "titleEn": "Python Programming",
                "shortTitle": "Python",
                "description": "Défi 30 Jours de Python, traduit et adapté en français.",
                "source": "https://github.com/Asabeneh/30-Days-Of-Python",
                "license": "Traduction communautaire, licence non explicite",
                "modules": load_python(),
            },
        ],
    }
    total = 0
    for track in manifest["tracks"]:
        count = sum(len(module["lessons"]) for module in track["modules"])
        total += count
        print(f'{track["id"]}: {count} leçons')
    (CONTENT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"manifeste écrit : {total} leçons")


if __name__ == "__main__":
    main()
