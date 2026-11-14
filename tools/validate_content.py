#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "content" / "manifest.json"
BLOCK = re.compile(r"(?ms)^```([^\n]*)\n(.*?)^```[ \t]*$")
IMAGE = re.compile(r"!\[[^\]]*\]\(([^)]+)\)")
LINK = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")
SKIP_CODE = {"web/introduction/join-the-odin-community"}


def blocks(text):
    return [match.group(0) for match in BLOCK.finditer(text)]


def load_python_sources():
    meta = json.loads((ROOT / "content" / "python" / "_meta.json").read_text(encoding="utf-8"))
    return {item["file"]: item["sourceEn"] for item in meta}


def check_images(lesson, errors):
    text = (ROOT / lesson["file"]).read_text(encoding="utf-8")
    for target in IMAGE.findall(text):
        target = target.strip().split(" ")[0]
        if target.startswith(("http://", "https://", "data:", "#")):
            continue
        relative = (ROOT / lesson["file"]).parent / target
        from_root = ROOT / target
        if not relative.exists() and not from_root.exists():
            errors.append(f'{lesson["file"]}: image introuvable {target}')


def check_links(lesson, route_index, errors):
    text = (ROOT / lesson["file"]).read_text(encoding="utf-8")
    for target in LINK.findall(text):
        target = target.strip().split(" ")[0]
        if target.startswith("#/python/") or target.startswith("#/web/"):
            route = target[1:].split("#", 1)[0]
            if route not in route_index:
                errors.append(f'{lesson["file"]}: lien interne cassé {target}')
        elif target.startswith("#"):
            continue


def check_code(lesson, source_path, errors):
    key = lesson["track"] + "/" + lesson["module"] + "/" + lesson["id"]
    if key in SKIP_CODE:
        return
    target = ROOT / lesson["file"]
    source = ROOT / source_path
    if not source.exists():
        errors.append(f'{lesson["file"]}: source absente {source_path}')
        return
    target_blocks = blocks(target.read_text(encoding="utf-8"))
    source_blocks = blocks(source.read_text(encoding="utf-8"))
    if len(target_blocks) != len(source_blocks):
        errors.append(f'{lesson["file"]}: {len(target_blocks)} blocs de code contre {len(source_blocks)} dans la source')
        return
    for index, (translated, original) in enumerate(zip(target_blocks, source_blocks)):
        if translated != original:
            errors.append(f'{lesson["file"]}: bloc de code {index + 1} modifié')


def main():
    errors = []
    warnings = []
    if not MANIFEST.exists():
        print("Manifeste absent.")
        return 1
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    python_sources = load_python_sources()
    route_index = set()
    lesson_count = 0

    for track in manifest.get("tracks", []):
        for module in track.get("modules", []):
            for lesson in module.get("lessons", []):
                lesson["track"] = track["id"]
                lesson["module"] = module["id"]
                route_index.add(f'/{track["id"]}/{module["id"]}/{lesson["id"]}')
                lesson_count += 1

    for track in manifest.get("tracks", []):
        for module in track.get("modules", []):
            for lesson in module.get("lessons", []):
                file_path = ROOT / lesson["file"]
                if not file_path.exists():
                    errors.append(f'{lesson["file"]}: fichier absent')
                    continue
                if not lesson.get("title") or not lesson.get("titleEn"):
                    warnings.append(f'{lesson["file"]}: métadonnées de titre incomplètes')
                check_images(lesson, errors)
                check_links(lesson, route_index, errors)
                source_path = python_sources.get(lesson["file"])
                if source_path is None:
                    source_path = lesson.get("source")
                if source_path:
                    check_code(lesson, source_path, errors)

    glossary_path = ROOT / "glossaire.json"
    if glossary_path.exists():
        try:
            glossary = json.loads(glossary_path.read_text(encoding="utf-8"))
            if not isinstance(glossary, list):
                errors.append("glossaire.json: tableau attendu")
            else:
                seen = set()
                for entry in glossary:
                    for field in ("fr", "en", "definition"):
                        if not entry.get(field):
                            errors.append(f'glossaire.json: champ {field} manquant')
                    key = entry.get("fr", "").lower()
                    if key in seen:
                        warnings.append(f'glossaire.json: doublon {entry.get("fr")}')
                    seen.add(key)
        except json.JSONDecodeError as error:
            errors.append(f"glossaire.json: JSON invalide ({error})")
    else:
        errors.append("glossaire.json absent")

    print(f"{lesson_count} leçons vérifiées")
    if warnings:
        print(f"{len(warnings)} avertissement(s)")
        for warning in warnings[:20]:
            print(" -", warning)
    if errors:
        print(f"{len(errors)} erreur(s)")
        for error in errors[:80]:
            print(" -", error)
        return 1
    print("Validation réussie")
    return 0


if __name__ == "__main__":
    sys.exit(main())
