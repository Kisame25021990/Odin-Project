#!/usr/bin/env python3
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "sources" / "python"
OUT = ROOT / "content" / "python"

DAYS = [
    {"day": 1, "fr": "French/README_fr.md", "en": "readme.md", "module": "demarrage", "slug": "introduction", "title": "Introduction à Python", "titleEn": "Introduction", "duration": "30 min"},
    {"day": 2, "fr": "French/02_variables_builtin_functions_fr.md", "module": "demarrage", "slug": "variables-et-fonctions-integrees", "title": "Variables et fonctions intégrées", "titleEn": "Variables, Built-in Functions", "duration": "40 min"},
    {"day": 3, "fr": "French/03_operators_fr.md", "module": "demarrage", "slug": "operateurs", "title": "Opérateurs", "titleEn": "Operators", "duration": "40 min"},
    {"day": 4, "fr": "French/04_strings_fr.md", "module": "structures-donnees", "slug": "chaines-de-caracteres", "title": "Chaînes de caractères", "titleEn": "Strings", "duration": "45 min"},
    {"day": 5, "fr": "French/05_lists_fr.md", "module": "structures-donnees", "slug": "listes", "title": "Listes", "titleEn": "Lists", "duration": "45 min"},
    {"day": 6, "fr": "French/06_tuples_fr.md", "module": "structures-donnees", "slug": "tuples", "title": "Tuples", "titleEn": "Tuples", "duration": "40 min"},
    {"day": 7, "fr": "French/07_sets_fr.md", "module": "structures-donnees", "slug": "ensembles", "title": "Ensembles", "titleEn": "Sets", "duration": "45 min"},
    {"day": 8, "fr": "French/08_dictionaries_fr.md", "module": "structures-donnees", "slug": "dictionnaires", "title": "Dictionnaires", "titleEn": "Dictionaries", "duration": "45 min"},
    {"day": 9, "fr": "French/09_conditionals_fr.md", "module": "controle-et-fonctions", "slug": "conditions", "title": "Conditions", "titleEn": "Conditionals", "duration": "45 min"},
    {"day": 10, "fr": "French/10_loops_fr.md", "module": "controle-et-fonctions", "slug": "boucles", "title": "Boucles", "titleEn": "Loops", "duration": "50 min"},
    {"day": 11, "fr": "French/11_functions_fr.md", "module": "controle-et-fonctions", "slug": "fonctions", "title": "Fonctions", "titleEn": "Functions", "duration": "60 min"},
    {"day": 12, "fr": "French/12_modules_fr.md", "module": "controle-et-fonctions", "slug": "modules", "title": "Modules", "titleEn": "Modules", "duration": "45 min"},
    {"day": 13, "fr": "French/13_list_comprehension_fr.md", "module": "controle-et-fonctions", "slug": "comprehension-de-listes", "title": "Compréhension de listes", "titleEn": "List Comprehension", "duration": "40 min"},
    {"day": 14, "fr": "French/14_higher_order_functions_fr.md", "module": "controle-et-fonctions", "slug": "fonctions-d-ordre-superieur", "title": "Fonctions d'ordre supérieur", "titleEn": "Higher Order Functions", "duration": "60 min"},
    {"day": 15, "fr": "French/15_python_type_errors_fr.md", "module": "erreurs-et-fichiers", "slug": "erreurs-de-type", "title": "Erreurs de type en Python", "titleEn": "Python Type Errors", "duration": "45 min"},
    {"day": 16, "fr": "French/16_python_datetime_fr.md", "module": "erreurs-et-fichiers", "slug": "date-et-heure", "title": "Date et heure", "titleEn": "Python Date time", "duration": "45 min"},
    {"day": 17, "fr": "French/17_exception_handling_fr.md", "module": "erreurs-et-fichiers", "slug": "gestion-des-exceptions", "title": "Gestion des exceptions", "titleEn": "Exception Handling", "duration": "50 min"},
    {"day": 18, "fr": "French/18_regular_expressions_fr.md", "module": "erreurs-et-fichiers", "slug": "expressions-regulieres", "title": "Expressions régulières", "titleEn": "Regular Expressions", "duration": "60 min"},
    {"day": 19, "fr": "French/19_file_handling_fr.md", "module": "erreurs-et-fichiers", "slug": "gestion-des-fichiers", "title": "Gestion des fichiers", "titleEn": "File Handling", "duration": "60 min"},
    {"day": 20, "fr": "French/20_python_package_manager_fr.md", "module": "modules-et-poo", "slug": "gestionnaire-de-paquets", "title": "Gestionnaire de paquets Python", "titleEn": "Python Package Manager", "duration": "60 min"},
    {"day": 21, "fr": "French/21_classes_and_objects_fr.md", "module": "modules-et-poo", "slug": "classes-et-objets", "title": "Classes et objets", "titleEn": "Classes and Objects", "duration": "70 min"},
    {"day": 22, "fr": "French/22_web_scraping_fr.md", "module": "modules-et-poo", "slug": "web-scraping", "title": "Web scraping", "titleEn": "Web Scraping", "duration": "50 min"},
    {"day": 23, "fr": "French/23_virtual_environment_fr.md", "module": "modules-et-poo", "slug": "environnements-virtuels", "title": "Environnements virtuels", "titleEn": "Virtual Environment", "duration": "40 min"},
    {"day": 24, "fr": "French/24_statistics_fr.md", "module": "data-et-web", "slug": "statistiques", "title": "Statistiques", "titleEn": "Statistics", "duration": "75 min"},
    {"day": 25, "fr": "French/25_pandas_fr.md", "module": "data-et-web", "slug": "pandas", "title": "Pandas", "titleEn": "Pandas", "duration": "90 min"},
    {"day": 26, "fr": "French/26_python_web_fr.md", "module": "data-et-web", "slug": "python-pour-le-web", "title": "Python pour le web", "titleEn": "Python web", "duration": "60 min"},
    {"day": 27, "fr": "French/27_python_with_mongodb_fr.md", "module": "data-et-web", "slug": "python-et-mongodb", "title": "Python et MongoDB", "titleEn": "Python with MongoDB", "duration": "75 min"},
    {"day": 28, "fr": "French/28_API_fr.md", "module": "data-et-web", "slug": "api", "title": "API", "titleEn": "API", "duration": "60 min"},
    {"day": 29, "fr": "French/29_building_API_fr.md", "module": "data-et-web", "slug": "construire-une-api", "title": "Construire une API", "titleEn": "Building API", "duration": "75 min"},
    {"day": 30, "fr": "French/30_conclusions_fr.md", "module": "conclusion", "slug": "conclusion", "title": "Conclusion", "titleEn": "Conclusions", "duration": "10 min"},
]

FILE_ROUTES = {}
for entry in DAYS:
    FILE_ROUTES[Path(entry["fr"]).name] = f'#/python/{entry["module"]}/{entry["slug"]}'


def english_path(entry):
    if entry["day"] == 1:
        return SRC / entry["en"]
    prefix = f'{entry["day"]:02d}_Day_'
    for directory in sorted(SRC.iterdir()):
        if directory.is_dir() and directory.name.startswith(prefix):
            for file in directory.glob("*.md"):
                return file
    raise FileNotFoundError(f"Source anglaise introuvable pour le jour {entry['day']}")


def code_blocks(text):
    return re.findall(r"(?ms)^```([^\n]*)\n(.*?)^```[ \t]*$", text)


def raw_block(lang, body):
    if not body.endswith("\n"):
        body += "\n"
    return "```" + lang + "\n" + body + "```"


def replace_code_blocks(text, english_blocks, mapping=None):
    french_blocks = list(re.finditer(r"(?ms)^```([^\n]*)\n(.*?)^```[ \t]*$", text))
    if not french_blocks:
        return text
    if mapping is None:
        if len(french_blocks) != len(english_blocks):
            raise ValueError(f"{len(french_blocks)} blocs français contre {len(english_blocks)} blocs anglais")
        mapping = [[i] for i in range(len(english_blocks))]

    cursor = 0
    parts = []
    for index, match in enumerate(french_blocks):
        parts.append(text[cursor:match.start()])
        targets = mapping[index]
        parts.append("\n\n".join(raw_block(*english_blocks[target]) for target in targets))
        cursor = match.end()
    parts.append(text[cursor:])
    return "".join(parts)


def day_one_mapping(english_count):
    if english_count != 13:
        raise ValueError(f"Jour 1 : {english_count} blocs anglais au lieu de 13")
    return [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10, 11], [12]]


def find_day_heading(text, day):
    pattern = re.compile(rf"(?m)^#{{1,2}}\s+.*(?:Jour|Day)\s*{day}\b.*$")
    match = pattern.search(text)
    if not match:
        raise ValueError(f"Titre du jour {day} introuvable")
    return match.start()


def normalize(text, entry):
    text = text.replace("\r\n", "\n")
    text = text[find_day_heading(text, entry["day"]):]
    text = re.sub(r"(?m)^#{1,2}\s+.*(?:Jour|Day)\s*\d+\b.*\n?", "", text, count=1)
    lines = []
    for line in text.split("\n"):
        if re.match(r"^!\[30DaysOfPython\]", line):
            continue
        if re.match(r"^\[<<\s*Jour", line) or re.match(r"^\[Jour.*>>\]", line):
            continue
        if re.match(r"^\[.*\]\([^)]*\)\s*\|\s*\[.*>>\]\([^)]*\)\s*$", line):
            continue
        if re.match(r"^\[<<.*\]\([^)]*\)\s*\|\s*\[.*>>\]\([^)]*\)\s*$", line):
            continue
        lines.append(line)
    text = "\n".join(lines)
    text = text.replace(".././images/", "../assets/images/")
    text = text.replace("../images/", "../assets/images/")
    text = text.replace("./images/", "../assets/images/")
    for filename, route in FILE_ROUTES.items():
        text = text.replace(f"./{filename}", route)
    text = re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"
    return text


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    (OUT / "assets").mkdir()
    shutil.copytree(SRC / "images", OUT / "assets" / "images", dirs_exist_ok=True)

    metadata = []
    problems = []
    for entry in DAYS:
        french_text = (SRC / entry["fr"]).read_text(encoding="utf-8")
        english_text = english_path(entry).read_text(encoding="utf-8")
        english_blocks = code_blocks(english_text)
        mapping = day_one_mapping(len(english_blocks)) if entry["day"] == 1 else None
        try:
            french_text = replace_code_blocks(french_text, english_blocks, mapping)
        except ValueError as error:
            problems.append(f'Jour {entry["day"]}: {error}')
        content = normalize(french_text, entry)
        target_dir = OUT / entry["module"]
        target_dir.mkdir(parents=True, exist_ok=True)
        target = target_dir / f'{entry["slug"]}.md'
        target.write_text(content, encoding="utf-8")
        metadata.append({
            "day": entry["day"],
            "module": entry["module"],
            "slug": entry["slug"],
            "title": entry["title"],
            "titleEn": entry["titleEn"],
            "duration": entry["duration"],
            "file": str(target.relative_to(ROOT)).replace("\\", "/"),
            "source": str((SRC / entry["fr"]).relative_to(ROOT)).replace("\\", "/"),
            "sourceEn": str(english_path(entry).relative_to(ROOT)).replace("\\", "/"),
        })

    (OUT / "_meta.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(metadata)} leçons Python importées dans {OUT}")
    if problems:
        print("Problèmes :")
        for problem in problems:
            print(" -", problem)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
