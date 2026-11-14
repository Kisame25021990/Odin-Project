#!/usr/bin/env python3
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB_META = ROOT / "content" / "web" / "_meta.json"
PYTHON_META = ROOT / "content" / "python" / "_meta.json"
WEB_SKIP = {"introduction/join-the-odin-community"}

BLOCK = re.compile(r"(?ms)^```([^\n]*)\n(.*?)^```[ \t]*$")


def blocks(text):
    return list(BLOCK.finditer(text))


def restore(target, source):
    target_text = target.read_text(encoding="utf-8")
    source_text = source.read_text(encoding="utf-8")
    target_blocks = blocks(target_text)
    source_blocks = blocks(source_text)
    if len(target_blocks) != len(source_blocks):
        return False, f"{len(target_blocks)}/{len(source_blocks)} blocs"
    if not target_blocks:
        return False, None
    parts = []
    cursor = 0
    for index, match in enumerate(target_blocks):
        parts.append(target_text[cursor:match.start()])
        parts.append(source_blocks[index].group(0))
        cursor = match.end()
    parts.append(target_text[cursor:])
    updated = "".join(parts)
    if updated != target_text:
        target.write_text(updated, encoding="utf-8")
        return True, None
    return False, None


def main():
    changed = 0
    skipped = []

    web = json.loads(WEB_META.read_text(encoding="utf-8"))
    for lesson in web["lessons"]:
        target = ROOT / lesson["file"]
        source = ROOT / lesson["source"]
        key = lesson["module"] + "/" + lesson["slug"]
        if key in WEB_SKIP:
            skipped.append(key)
            continue
        if not target.exists() or not source.exists():
            continue
        did_change, problem = restore(target, source)
        if problem:
            skipped.append(f"{key} ({problem})")
        elif did_change:
            changed += 1

    python = json.loads(PYTHON_META.read_text(encoding="utf-8"))
    for lesson in python:
        target = ROOT / lesson["file"]
        source = ROOT / lesson["sourceEn"]
        if not target.exists() or not source.exists():
            continue
        did_change, problem = restore(target, source)
        if problem:
            skipped.append(f'{lesson["file"]} ({problem})')
        elif did_change:
            changed += 1

    print(f"{changed} fichiers synchronisés avec les blocs de code sources")
    if skipped:
        print("Ignorés :")
        for item in skipped:
            print(" -", item)


if __name__ == "__main__":
    main()
