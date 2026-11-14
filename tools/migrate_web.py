#!/usr/bin/env python3
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OLD = ROOT / "content"
OUT = ROOT / "content" / "web"
SRC = ROOT / "sources" / "odin"

MODULES = [
    ("introduction", "Introduction", "Introduction"),
    ("installations", "Installations", "Installations"),
    ("html-foundations", "Fondations HTML", "HTML Foundations"),
    ("css-foundations", "Fondations CSS", "CSS Foundations"),
    ("flexbox", "Flexbox", "Flexbox"),
    ("javascript-basics", "Bases de JavaScript", "JavaScript Basics"),
    ("git-foundations", "Fondations Git", "Git Foundations"),
    ("conclusion", "Conclusion", "Conclusion"),
]

LESSONS = [
    ("introduction", "introduction-to-web-development", "Introduction au développement web", "Introduction to Web Development", "lesson", "15 min", "foundations/introduction/introduction_to_web_development.md", "foundations/introduction/introduction-to-web-development.md"),
    ("introduction", "how-this-course-will-work", "Comment fonctionne ce cours", "How This Course Will Work", "lesson", "10 min", "foundations/introduction/how_this_course_will_work.md", "foundations/introduction/how-this-course-will-work.md"),
    ("introduction", "motivation-and-mindset", "Motivation et état d'esprit", "Motivation and Mindset", "lesson", "15 min", "foundations/introduction/motivation_and_mindset.md", "foundations/introduction/motivation-and-mindset.md"),
    ("introduction", "asking-for-help", "Demander de l'aide", "Asking For Help", "lesson", "10 min", "foundations/introduction/asking_for_help.md", "foundations/introduction/asking-for-help.md"),
    ("introduction", "join-the-odin-community", "Rejoindre la communauté ODIN", "Join the Odin Community", "lesson", "10 min", "foundations/introduction/join_the_odin_community.md", "foundations/introduction/join-the-odin-community.md"),

    ("installations", "installations", "Installations", "Installations", "lesson", "10 min", "foundations/installations/installations.md", None),
    ("installations", "how-does-the-web-work", "Comment fonctionne le web", "How Does the Web Work?", "lesson", "15 min", "foundations/installations/how_does_the_web_work.md", None),
    ("installations", "command-line-basics", "Les bases de la ligne de commande", "Command Line Basics", "lesson", "20 min", "foundations/installations/command_line_basics.md", None),
    ("installations", "text-editors", "Les éditeurs de texte", "Text Editors", "lesson", "15 min", "foundations/installations/text_editors.md", None),
    ("installations", "setting-up-git", "Configurer Git", "Setting Up Git", "lesson", "20 min", "foundations/installations/setting_up_git.md", None),
    ("installations", "guide-chrome-linux", "Guide : installer Chrome sur Linux", "Guide: Install Chrome on Linux", "lesson", "10 min", "foundations/installations/installation_guides/chrome/linux.md", None),
    ("installations", "guide-chrome-macos", "Guide : installer Chrome sur macOS", "Guide: Install Chrome on macOS", "lesson", "10 min", "foundations/installations/installation_guides/chrome/macos.md", None),
    ("installations", "guide-chrome-wsl2", "Guide : installer Chrome pour WSL2", "Guide: Install Chrome for WSL2", "lesson", "10 min", "foundations/installations/installation_guides/chrome/wsl2.md", None),
    ("installations", "guide-git-chromeos", "Guide : configurer Git sur ChromeOS", "Guide: Setting up Git in ChromeOS", "lesson", "15 min", "foundations/installations/installation_guides/git/chromeos.md", None),
    ("installations", "guide-git-linux", "Guide : configurer Git sur Linux", "Guide: Setting up Git in Linux", "lesson", "15 min", "foundations/installations/installation_guides/git/linux.md", None),
    ("installations", "guide-git-macos", "Guide : configurer Git sur macOS", "Guide: Setting up Git in macOS", "lesson", "15 min", "foundations/installations/installation_guides/git/macos.md", None),
    ("installations", "guide-linux-chromeos", "Guide : configuration ChromeOS", "Guide: ChromeOS setup", "lesson", "20 min", "foundations/installations/installation_guides/linux/chromeos.md", None),
    ("installations", "guide-linux-dual-boot", "Guide : double démarrage Ubuntu et Windows", "Guide: Dual-boot Ubuntu and Windows", "lesson", "25 min", "foundations/installations/installation_guides/linux/dual_boot.md", None),
    ("installations", "guide-linux-virtual-machine", "Guide : installer une machine virtuelle", "Guide: Virtual Machine installation", "lesson", "25 min", "foundations/installations/installation_guides/linux/virtual_machine.md", None),
    ("installations", "guide-linux-wsl2", "Guide : configuration WSL2", "Guide: WSL2 setup", "lesson", "20 min", "foundations/installations/installation_guides/linux/wsl2.md", None),
    ("installations", "guide-text-editors-linux", "Guide : installer VSCode sur Linux", "Guide: Install VSCode on Linux", "lesson", "10 min", "foundations/installations/installation_guides/text_editors/linux.md", None),
    ("installations", "guide-text-editors-macos", "Guide : installer VSCode sur macOS", "Guide: Install VSCode on macOS", "lesson", "10 min", "foundations/installations/installation_guides/text_editors/macos.md", None),
    ("installations", "guide-text-editors-wsl2", "Guide : installer VSCode sur WSL2", "Guide: Install VSCode on WSL2", "lesson", "10 min", "foundations/installations/installation_guides/text_editors/wsl2.md", None),

    ("html-foundations", "intro-to-html-css", "Introduction au HTML et au CSS", "Introduction to HTML and CSS", "lesson", "5 min", "foundations/html_css/html_foundations/intro_to_html_css.md", "html-foundations/introduction-to-html-and-css.md"),
    ("html-foundations", "elements-and-tags", "Éléments et balises", "Elements and Tags", "lesson", "10 min", "foundations/html_css/html_foundations/elements_and_tags.md", "html-foundations/elements-and-tags.md"),
    ("html-foundations", "html-boilerplate", "Le squelette HTML", "HTML Boilerplate", "lesson", "15 min", "foundations/html_css/html_foundations/html_boilerplate.md", "html-foundations/html-boilerplate.md"),
    ("html-foundations", "working-with-text", "Travailler avec le texte", "Working with Text", "lesson", "15 min", "foundations/html_css/html_foundations/working_with_text.md", "html-foundations/working-with-text.md"),
    ("html-foundations", "lists", "Les listes", "Lists", "lesson", "10 min", "foundations/html_css/html_foundations/lists.md", "html-foundations/lists.md"),
    ("html-foundations", "links-and-images", "Liens et images", "Links and Images", "lesson", "25 min", "foundations/html_css/html_foundations/links_and_images.md", "html-foundations/links-and-images.md"),
    ("html-foundations", "project-recipes", "Projet : Recettes", "Project: Recipes", "project", "1–2 h", "foundations/html_css/html_foundations/project_recipes.md", "html-foundations/project-recipes.md"),

    ("css-foundations", "intro-to-css", "Introduction au CSS", "Intro to CSS", "lesson", "15 min", "foundations/html_css/css_foundations/intro_to_css.md", None),
    ("css-foundations", "the-cascade", "La cascade", "The Cascade", "lesson", "20 min", "foundations/html_css/css_foundations/the_cascade.md", None),
    ("css-foundations", "inspecting-html-and-css", "Inspecter le HTML et le CSS", "Inspecting HTML and CSS", "lesson", "15 min", "foundations/html_css/css_foundations/inspecting_html_and_css.md", None),
    ("css-foundations", "the-box-model", "Le modèle de boîte", "The Box Model", "lesson", "20 min", "foundations/html_css/css_foundations/the_box_model.md", None),
    ("css-foundations", "block-and-inline", "Blocs et éléments en ligne", "Block and Inline", "lesson", "15 min", "foundations/html_css/css_foundations/block_and_inline.md", None),

    ("flexbox", "flexbox-intro", "Introduction à Flexbox", "Flexbox Intro", "lesson", "15 min", "foundations/html_css/flexbox/flexbox_intro.md", None),
    ("flexbox", "flexbox-axes", "Les axes Flexbox", "Flexbox Axes", "lesson", "15 min", "foundations/html_css/flexbox/flexbox_axes.md", None),
    ("flexbox", "flexbox-alignment", "L'alignement Flexbox", "Flexbox Alignment", "lesson", "20 min", "foundations/html_css/flexbox/flexbox_alignment.md", None),
    ("flexbox", "flexbox-growing-and-shrinking", "Croissance et rétrécissement Flexbox", "Flexbox Growing and Shrinking", "lesson", "20 min", "foundations/html_css/flexbox/flexbox_growing_and_shrinking.md", None),
    ("flexbox", "project-landing-page", "Projet : page d'atterrissage", "Project: Landing Page", "project", "2–4 h", "foundations/html_css/flexbox/project_landing_page.md", None),

    ("javascript-basics", "variables-and-operators", "Variables et opérateurs", "Variables and Operators", "lesson", "20 min", "foundations/javascript_basics/variables_and_operators.md", None),
    ("javascript-basics", "data-types-and-conditionals", "Types de données et conditions", "Data Types and Conditionals", "lesson", "25 min", "foundations/javascript_basics/data_types_and_conditionals.md", None),
    ("javascript-basics", "function-basics", "Les bases des fonctions", "Function Basics", "lesson", "20 min", "foundations/javascript_basics/function_basics.md", None),
    ("javascript-basics", "understanding-errors", "Comprendre les erreurs", "Understanding Errors", "lesson", "15 min", "foundations/javascript_basics/understanding_errors.md", None),
    ("javascript-basics", "clean-code", "Code propre", "Clean Code", "lesson", "15 min", "foundations/javascript_basics/clean_code.md", None),
    ("javascript-basics", "problem-solving", "Résolution de problèmes", "Problem Solving", "lesson", "30 min", "foundations/javascript_basics/problem_solving.md", None),
    ("javascript-basics", "loops-and-arrays", "Boucles et tableaux", "Loops and Arrays", "lesson", "25 min", "foundations/javascript_basics/loops_and_arrays.md", None),
    ("javascript-basics", "object-basics", "Les bases des objets", "Object Basics", "lesson", "20 min", "foundations/javascript_basics/object_basics.md", None),
    ("javascript-basics", "DOM-manipulation-and-events", "Manipulation du DOM et événements", "DOM Manipulation and Events", "lesson", "30 min", "foundations/javascript_basics/DOM_manipulation_and_events.md", None),
    ("javascript-basics", "installing-nodejs", "Installer Node.js", "Installing Node.js", "lesson", "15 min", "foundations/javascript_basics/installing_nodejs.md", None),
    ("javascript-basics", "javascript-developer-tools", "Les outils du développeur JavaScript", "JavaScript Developer Tools", "lesson", "15 min", "foundations/javascript_basics/javascript_developer_tools.md", None),
    ("javascript-basics", "guide-nvm-linux", "Guide : installer nvm sur Linux", "Guide: Install nvm on Linux", "lesson", "10 min", "foundations/javascript_basics/installation_guides/linux.md", None),
    ("javascript-basics", "guide-nvm-macos", "Guide : installer nvm sur macOS", "Guide: Install nvm on macOS", "lesson", "10 min", "foundations/javascript_basics/installation_guides/macos.md", None),
    ("javascript-basics", "project-rock-paper-scissors", "Projet : pierre-papier-ciseaux", "Project: Rock Paper Scissors", "project", "1–2 h", "foundations/javascript_basics/project_rock_paper_scissors.md", None),
    ("javascript-basics", "revisiting-rock-paper-scissors", "Revoir pierre-papier-ciseaux", "Revisiting Rock Paper Scissors", "lesson", "30 min", "foundations/javascript_basics/revisiting_rock_paper_scissors.md", None),
    ("javascript-basics", "project-calculator", "Projet : calculatrice", "Project: Calculator", "project", "2–4 h", "foundations/javascript_basics/project_calculator.md", None),
    ("javascript-basics", "project-etch-a-sketch", "Projet : Etch-a-Sketch", "Project: Etch-a-Sketch", "project", "2–4 h", "foundations/javascript_basics/project_etch_a_sketch.md", None),

    ("git-foundations", "introduction-to-git", "Introduction à Git", "Introduction to Git", "lesson", "20 min", "git/foundations_git/introduction_to_git.md", None),
    ("git-foundations", "git-basics", "Les bases de Git", "Git Basics", "lesson", "25 min", "git/foundations_git/git_basics.md", None),
    ("git-foundations", "commit-messages", "Les messages de commit", "Commit Messages", "lesson", "10 min", "git/foundations_git/commit_messages.md", "foundations/git-basics/commit-messages.md"),

    ("conclusion", "conclusion", "Conclusion", "Conclusion", "lesson", "10 min", "foundations/tying_it_all_together/conclusion.md", None),
]


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    metadata = []
    missing = []
    for module, slug, title, title_en, lesson_type, duration, source, old_file in LESSONS:
        target = OUT / module / f"{slug}.md"
        target.parent.mkdir(parents=True, exist_ok=True)
        if old_file:
            source_file = OLD / old_file
            if source_file.exists():
                shutil.copy2(source_file, target)
        if not target.exists():
            missing.append(f"{module}/{slug}")
        metadata.append({
            "module": module,
            "slug": slug,
            "title": title,
            "titleEn": title_en,
            "type": lesson_type,
            "duration": duration,
            "source": f"sources/odin/{source}",
            "file": str(target.relative_to(ROOT)).replace("\\", "/"),
        })
    modules = [{"id": mid, "title": title, "titleEn": title_en} for mid, title, title_en in MODULES]
    payload = {"modules": modules, "lessons": metadata}
    (OUT / "_meta.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(metadata)} leçons Web planifiées, {len(metadata) - len(missing)} déjà présentes")
    if missing:
        print("À traduire :")
        for item in missing:
            print(" -", item)


if __name__ == "__main__":
    main()
