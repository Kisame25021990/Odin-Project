(function () {
  "use strict";

  const PROGRESS_KEY = "odin-progress-v2";
  const LEGACY_PROGRESS_KEY = "odin-progress-v1";
  const THEME_KEY = "odin-theme";
  const TRACK_KEY = "odin-track";
  const COLLAPSED_KEY = "odin-collapsed-v2";
  const QUIZ_KEY = "odin-quiz-v1";

  const state = {
    manifest: null,
    trackMap: new Map(),
    currentTrack: null,
    lessons: [],
    current: null,
    progress: {},
    contentCache: new Map(),
    glossary: [],
    searchIndex: new Map(),
    collapsed: new Set()
    , quizzes: {}, quizScores: {}, pyodide: null, terminalWorker: null
  };

  const els = {};

  function $(id) {
    return document.getElementById(id);
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
      navigator.serviceWorker.register("service-worker.js").catch(function () {
        /* Le lecteur reste utilisable si le cache hors ligne est indisponible. */
      });
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function lessonKey(lesson) {
    return lesson.trackId + "/" + lesson.moduleId + "/" + lesson.id;
  }

  function moduleKey(trackId, moduleId) {
    return trackId + "/" + moduleId;
  }

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      /* stockage indisponible */
    }
  }

  function loadTheme() {
    let theme = readStorage(THEME_KEY);
    if (!theme) {
      theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    applyTheme(theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (els.themeBtn) {
      els.themeBtn.textContent = theme === "dark" ? "Mode clair" : "Mode sombre";
      els.themeBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
    writeStorage(THEME_KEY, theme);
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  function loadProgress() {
    state.progress = {};
    state.manifest.tracks.forEach(function (track) {
      state.progress[track.id] = new Set();
    });

    const raw = readStorage(PROGRESS_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        Object.keys(parsed).forEach(function (trackId) {
          if (state.progress[trackId] && Array.isArray(parsed[trackId])) {
            parsed[trackId].forEach(function (key) {
              state.progress[trackId].add(key);
            });
          }
        });
        return;
      } catch (error) {
        /* on retombe sur la migration */
      }
    }

    const legacy = readStorage(LEGACY_PROGRESS_KEY);
    if (!legacy) {
      return;
    }
    try {
      const parsed = JSON.parse(legacy);
      if (!Array.isArray(parsed)) {
        return;
      }
      parsed.forEach(function (key) {
        let target = "web/" + key;
        if (key === "html-foundations/commit-messages") {
          target = "web/git-foundations/commit-messages";
        }
        if (state.progress.web) {
          state.progress.web.add(target);
        }
      });
      saveProgress();
    } catch (error) {
      /* progression illisible */
    }
  }

  function saveProgress() {
    const payload = {};
    Object.keys(state.progress).forEach(function (trackId) {
      payload[trackId] = Array.from(state.progress[trackId]);
    });
    writeStorage(PROGRESS_KEY, JSON.stringify(payload));
  }

  function isDone(lesson) {
    const bucket = state.progress[lesson.trackId];
    return Boolean(bucket && bucket.has(lessonKey(lesson)));
  }

  function loadCollapsed() {
    state.collapsed = new Set();
    const raw = readStorage(COLLAPSED_KEY);
    if (!raw) {
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach(function (key) {
          state.collapsed.add(key);
        });
      }
    } catch (error) {
      /* état de repli illisible */
    }
  }

  function saveCollapsed() {
    writeStorage(COLLAPSED_KEY, JSON.stringify(Array.from(state.collapsed)));
  }

  function flattenLessons(track) {
    const flat = [];
    track.modules.forEach(function (module) {
      module.lessons.forEach(function (lesson) {
        flat.push(Object.assign({}, lesson, {
          trackId: track.id,
          moduleId: module.id,
          moduleTitle: module.title,
          moduleTitleEn: module.titleEn
        }));
      });
    });
    return flat;
  }

  function getTrack(trackId) {
    return state.trackMap.get(trackId) || null;
  }

  function firstLesson(track) {
    for (let index = 0; index < track.modules.length; index += 1) {
      if (track.modules[index].lessons.length > 0) {
        const lesson = track.modules[index].lessons[0];
        return Object.assign({}, lesson, {
          trackId: track.id,
          moduleId: track.modules[index].id,
          moduleTitle: track.modules[index].title,
          moduleTitleEn: track.modules[index].titleEn
        });
      }
    }
    return null;
  }

  function findLesson(track, moduleId, lessonId) {
    for (let index = 0; index < track.modules.length; index += 1) {
      const module = track.modules[index];
      if (module.id !== moduleId) {
        continue;
      }
      for (let item = 0; item < module.lessons.length; item += 1) {
        if (module.lessons[item].id === lessonId) {
          return Object.assign({}, module.lessons[item], {
            trackId: track.id,
            moduleId: module.id,
            moduleTitle: module.title,
            moduleTitleEn: module.titleEn
          });
        }
      }
    }
    return null;
  }

  function buildTrackTabs() {
    els.trackSwitch.innerHTML = "";
    state.manifest.tracks.forEach(function (track) {
      const count = track.modules.reduce(function (total, module) {
        return total + module.lessons.length;
      }, 0);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "track-tab";
      button.id = "track-tab-" + track.id;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "nav");
      button.dataset.track = track.id;
      button.innerHTML =
        '<span class="track-tab-title">' + escapeHtml(track.shortTitle || track.title) + "</span>" +
        '<span class="track-tab-meta">' + count + " leçon" + (count > 1 ? "s" : "") + "</span>";

      const selected = state.currentTrack && state.currentTrack.id === track.id;
      button.setAttribute("aria-selected", selected ? "true" : "false");
      button.tabIndex = selected ? 0 : -1;
      button.classList.toggle("is-active", selected);

      button.addEventListener("click", function () {
        switchTrack(track.id);
      });

      button.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }
        event.preventDefault();
        const tabs = Array.from(els.trackSwitch.querySelectorAll(".track-tab"));
        const index = tabs.indexOf(button);
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const next = tabs[(index + direction + tabs.length) % tabs.length];
        if (next) {
          next.focus();
          switchTrack(next.dataset.track);
        }
      });

      els.trackSwitch.appendChild(button);
    });
  }

  function switchTrack(trackId, options) {
    const track = getTrack(trackId);
    if (!track) {
      return;
    }
    const settings = options || {};
    if (!state.currentTrack || state.currentTrack.id !== trackId) {
      state.currentTrack = track;
      state.current = null;
      state.lessons = flattenLessons(track);
      document.documentElement.setAttribute("data-track", track.id);
      writeStorage(TRACK_KEY, track.id);
      buildTrackTabs();
      buildNav();
      updateProgressUI();
      updateSearchPlaceholder();
      applySearch();
      preloadContent();
      loadGlossary();
    }
    if (settings.navigate !== false) {
      const target = firstLesson(track);
      if (target) {
        window.location.hash = "#/" + track.id + "/" + target.moduleId + "/" + target.id;
      }
    }
  }

  function buildNav() {
    els.nav.innerHTML = "";

    if (!state.currentTrack) {
      return;
    }

    state.currentTrack.modules.forEach(function (module) {
      const group = document.createElement("section");
      group.className = "nav-group";
      group.dataset.module = module.id;

      const heading = document.createElement("button");
      heading.type = "button";
      heading.className = "nav-heading";
      const key = moduleKey(state.currentTrack.id, module.id);
      const activeModule = state.current && state.current.moduleId === module.id;
      const collapsed = state.collapsed.has(key) && !activeModule;
      heading.setAttribute("aria-expanded", collapsed ? "false" : "true");
      heading.innerHTML =
        '<span class="nav-heading-text"><span>' + escapeHtml(module.title) + "</span>" +
        "<small>" + escapeHtml(module.titleEn) + "</small></span>" +
        '<span class="nav-heading-meta">' + module.lessons.length + "</span>" +
        '<span class="nav-chevron" aria-hidden="true"></span>';

      const list = document.createElement("ul");
      list.className = "nav-list";
      list.hidden = collapsed;

      if (module.lessons.length === 0) {
        const empty = document.createElement("li");
        empty.className = "nav-empty";
        empty.textContent = "Leçons en préparation";
        list.appendChild(empty);
      }

      module.lessons.forEach(function (item) {
        const lesson = Object.assign({}, item, {
          trackId: state.currentTrack.id,
          moduleId: module.id,
          moduleTitle: module.title,
          moduleTitleEn: module.titleEn
        });
        const li = document.createElement("li");
        li.className = "nav-item";
        li.dataset.search = [lesson.title, lesson.titleEn, module.title, module.titleEn]
          .join(" ")
          .toLowerCase();

        const link = document.createElement("a");
        link.className = "nav-link";
        link.href = "#/" + state.currentTrack.id + "/" + module.id + "/" + lesson.id;
        link.dataset.key = lessonKey(lesson);

        const check = document.createElement("span");
        check.className = "nav-check";
        check.setAttribute("aria-hidden", "true");

        const label = document.createElement("span");
        label.className = "nav-label";

        const title = document.createElement("span");
        title.className = "nav-title";
        title.textContent = lesson.title;

        const meta = document.createElement("span");
        meta.className = "nav-meta";
        meta.textContent = (lesson.type === "project" ? "Projet" : "Leçon") + " · " + lesson.duration;

        label.appendChild(title);
        label.appendChild(meta);
        link.appendChild(check);
        link.appendChild(label);

        if (lesson.type === "project") {
          li.classList.add("nav-item--project");
        }

        li.appendChild(link);
        list.appendChild(li);
      });

      heading.addEventListener("click", function () {
        const isCollapsed = list.hidden;
        list.hidden = !isCollapsed;
        heading.setAttribute("aria-expanded", isCollapsed ? "true" : "false");
        if (isCollapsed) {
          state.collapsed.delete(key);
        } else {
          state.collapsed.add(key);
        }
        saveCollapsed();
      });

      group.appendChild(heading);
      group.appendChild(list);
      els.nav.appendChild(group);
    });

    updateNavState();
  }

  function expandModule(moduleId) {
    const group = els.nav.querySelector('.nav-group[data-module="' + moduleId + '"]');
    if (!group) {
      return;
    }
    const heading = group.querySelector(".nav-heading");
    const list = group.querySelector(".nav-list");
    if (list && list.hidden) {
      list.hidden = false;
      if (heading) {
        heading.setAttribute("aria-expanded", "true");
      }
      state.collapsed.delete(moduleKey(state.currentTrack.id, moduleId));
      saveCollapsed();
    }
  }

  function updateNavState() {
    const links = els.nav.querySelectorAll(".nav-link");
    links.forEach(function (link) {
      const key = link.dataset.key;
      const lesson = state.lessons.find(function (item) {
        return lessonKey(item) === key;
      });
      if (!lesson) {
        return;
      }
      const done = isDone(lesson);
      const passed = (state.quizScores[lesson.id] || {}).score >= 80;
      const active = state.current !== null && lessonKey(state.current) === key;
      link.classList.toggle("is-done", done);
      link.classList.toggle("is-active", active);
      let badge=link.querySelector(".quiz-badge");
      if(passed&&!badge){badge=document.createElement("span");badge.className="quiz-badge";badge.textContent="Quiz réussi";link.querySelector(".nav-label").appendChild(badge);}
      if(!passed&&badge)badge.remove();
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
      if (done) {
        link.setAttribute("aria-label", lesson.title + " (terminée)");
      } else {
        link.removeAttribute("aria-label");
      }
    });
  }

  function updateProgressUI() {
    if (!state.currentTrack) {
      return;
    }
    const total = state.lessons.length;
    let done = 0;
    state.lessons.forEach(function (lesson) {
      if (isDone(lesson)) {
        done += 1;
      }
    });
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    els.progressTitle.textContent = "Progression — " + (state.currentTrack.shortTitle || state.currentTrack.title);
    els.progressText.textContent = done + " / " + total;
    els.progressBar.style.width = percent + "%";
    els.progress.setAttribute("aria-valuenow", String(percent));
  }

  function updateSearchPlaceholder() {
    const label = state.currentTrack ? (state.currentTrack.shortTitle || state.currentTrack.title) : "le parcours";
    els.search.placeholder = "Rechercher dans " + label + "…";
    els.search.setAttribute("aria-label", "Rechercher une leçon dans " + label);
  }

  function parseHash() {
    const raw = window.location.hash.replace(/^#\/?/, "");
    if (!raw) {
      return null;
    }
    const parts = raw.split("/").filter(Boolean);
    if (parts.length === 0) {
      return null;
    }
    if (parts.length === 1) {
      if (state.trackMap.has(parts[0])) {
        return { trackId: parts[0], moduleId: null, lessonId: null };
      }
      return { trackId: "web", moduleId: parts[0], lessonId: null, legacy: true };
    }
    if (parts.length === 2) {
      if (state.trackMap.has(parts[0])) {
        return { trackId: parts[0], moduleId: parts[1], lessonId: null };
      }
      return { trackId: "web", moduleId: parts[0], lessonId: parts[1], legacy: true };
    }
    return { trackId: parts[0], moduleId: parts[1], lessonId: parts[2], legacy: false };
  }

  function route() {
    const target = parseHash();

    if (!target) {
      const saved = readStorage(TRACK_KEY);
      const track = getTrack(saved) || state.manifest.tracks[0];
      switchTrack(track.id, { navigate: false });
      const lesson = firstLesson(track);
      if (lesson) {
        window.history.replaceState(null, "", "#/" + track.id + "/" + lesson.moduleId + "/" + lesson.id);
        renderLesson(lesson);
      }
      return;
    }

    const track = getTrack(target.trackId);
    if (!track) {
      showNotFound();
      return;
    }

    switchTrack(track.id, { navigate: false });

    if (!target.lessonId) {
      let lesson = null;
      if (target.moduleId) {
        const module = track.modules.find(function (item) {
          return item.id === target.moduleId;
        });
        if (module && module.lessons.length > 0) {
          lesson = findLesson(track, module.id, module.lessons[0].id);
        }
      }
      if (!lesson) {
        lesson = firstLesson(track);
      }
      if (lesson) {
        window.history.replaceState(null, "", "#/" + track.id + "/" + lesson.moduleId + "/" + lesson.id);
        renderLesson(lesson);
      }
      return;
    }

    const lesson = findLesson(track, target.moduleId, target.lessonId);
    if (!lesson) {
      showNotFound();
      return;
    }

    if (target.legacy) {
      window.history.replaceState(null, "", "#/" + track.id + "/" + lesson.moduleId + "/" + lesson.id);
    }

    if (state.current && lessonKey(state.current) === lessonKey(lesson)) {
      return;
    }

    renderLesson(lesson);
  }

  function showNotFound() {
    const fallback = state.currentTrack ? firstLesson(state.currentTrack) : null;
    const link = fallback
      ? '<a href="#/' + fallback.trackId + "/" + fallback.moduleId + "/" + fallback.id + '">Revenir à la première leçon</a>'
      : "";
    els.lesson.innerHTML = '<div class="loading">Leçon introuvable. ' + link + "</div>";
  }

  async function fetchLessonText(lesson) {
    if (state.contentCache.has(lesson.file)) {
      return state.contentCache.get(lesson.file);
    }
    const response = await fetch(lesson.file, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error("Impossible de charger " + lesson.file + " (" + response.status + ")");
    }
    const text = await response.text();
    state.contentCache.set(lesson.file, text);
    state.searchIndex.set(lessonKey(lesson), stripMarkdown(text));
    return text;
  }

  function stripMarkdown(text) {
    return text
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`[^`]*`/g, " ")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[#>*_~\-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function loadQuizScores() {
    try { state.quizScores = JSON.parse(readStorage(QUIZ_KEY) || "{}"); } catch (error) { state.quizScores = {}; }
  }

  function appendQuiz(parent, lesson) {
    const quiz = state.quizzes[lesson.id];
    if (!quiz || !quiz.length) return;
    const section = document.createElement("section");
    section.className = "quiz-panel";
    section.innerHTML = '<h2>Vérification des acquis</h2><form class="quiz-form"></form><p class="quiz-result" aria-live="polite"></p><button type="button" class="quiz-restart">Recommencer</button>';
    const form = section.querySelector("form");
    const order = quiz.map(function (_, i) { return i; });
    function shuffle(items) { for (let i=items.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [items[i],items[j]]=[items[j],items[i]]; } return items; }
    shuffle(order).forEach(function (qi, number) {
      const q=quiz[qi], field=document.createElement("fieldset");
      field.dataset.quizIndex=String(qi);
      field.innerHTML='<legend>'+(number+1)+'. '+escapeHtml(q.question)+'</legend>';
      const opts=q.choices.map(function (choice,i) {return {choice:choice,index:i};}); shuffle(opts).forEach(function (item) {
        const label=document.createElement("label"), input=document.createElement("input"); input.type=q.type==="multiple"?"checkbox":"radio"; input.name="q"+qi; input.value=item.index;
        label.appendChild(input); label.appendChild(document.createTextNode(" "+item.choice)); field.appendChild(label);
      });
      const explain=document.createElement("p"); explain.className="quiz-explanation"; explain.hidden=true; explain.textContent=q.explication; field.appendChild(explain); form.appendChild(field);
    });
    const submit=document.createElement("button"); submit.type="submit"; submit.textContent="Vérifier mes réponses"; form.appendChild(submit);
    form.addEventListener("submit",function (event) { event.preventDefault(); let score=0; quiz.forEach(function(q,qi){const selected=Array.from(form.querySelectorAll('[name="q'+qi+'"]:checked')).map(function(x){return Number(x.value);}).sort();const expected=q.answer.slice().sort();const correct=selected.length===expected.length&&selected.every(function(x,i){return x===expected[i];}); if(correct)score++; const field=form.querySelector('[data-quiz-index="'+qi+'"]'), explanation=field.querySelector(".quiz-explanation"); explanation.hidden=false; explanation.classList.toggle("is-correct",correct); explanation.classList.toggle("is-wrong",!correct);});
      const percent=Math.round(score/quiz.length*100), saved=state.quizScores[lesson.id]||{score:0}; if(percent>saved.score){state.quizScores[lesson.id]={score:percent,date:new Date().toISOString()};writeStorage(QUIZ_KEY,JSON.stringify(state.quizScores));} section.querySelector(".quiz-result").textContent="Score : "+score+" / "+quiz.length+" ("+percent+" %)."; updateNavState(); });
    section.querySelector(".quiz-restart").addEventListener("click",function(){appendQuiz(parent,lesson);section.remove();}); parent.appendChild(section);
  }

  function appendTerminal(parent) {
    const details=document.createElement("details"); details.className="python-terminal"; details.id="python-panel";
    details.innerHTML='<summary>Ouvrir le terminal</summary><p class="terminal-status" aria-live="polite">Python se chargera au premier lancement.</p><textarea id="python-code" aria-label="Code Python" rows="8" spellcheck="false">print("Bonjour !")</textarea><div class="terminal-actions"><button type="button" class="terminal-run">Exécuter</button><button type="button" class="terminal-clear">Effacer</button></div><pre class="terminal-output" aria-live="polite"></pre>';
    parent.appendChild(details);
    const status=details.querySelector(".terminal-status"), output=details.querySelector(".terminal-output");
    details.querySelector(".terminal-clear").addEventListener("click",function(){document.getElementById("python-code").value="";output.textContent="";});
    details.querySelector(".terminal-run").addEventListener("click",async function(){
      const run=details.querySelector(".terminal-run"); run.disabled=true; output.textContent="";
      try {
        if(!state.terminalWorker){status.textContent="Chargement de Python… (~10 Mo)"; const worker=new Worker("assets/python-worker.js"); state.terminalWorker=worker; worker.onmessage=function(e){if(e.data.type==="ready"){status.textContent="Python est prêt.";}else if(e.data.type==="result"){output.textContent=e.data.text;output.classList.toggle("terminal-error",e.data.error);run.disabled=false;}else if(e.data.type==="input"){e.data.value=window.prompt(e.data.prompt||"Saisissez une valeur :")||"";worker.postMessage({type:"input",id:e.data.id,value:e.data.value});}}; worker.onerror=function(){status.textContent="Impossible de charger Python. Vérifiez votre connexion ou l'installation locale de Pyodide.";run.disabled=false;}; await new Promise(function(resolve,reject){const t=setTimeout(function(){reject(new Error("CDN inaccessible"));},20000);worker.addEventListener("message",function ready(e){if(e.data.type==="ready"){clearTimeout(t);worker.removeEventListener("message",ready);resolve();}},{once:false});}); }
        let code=document.getElementById("python-code").value;
        const inputs=Array.from(code.matchAll(/\binput\s*\((?:['"]([^'"]*)['"])?\)/g));
        if(inputs.length){const values=[];for(const item of inputs){values.push(window.prompt(item[1]||"Valeur pour input() :")||"");} code="__odin_inputs = "+JSON.stringify(values)+"\nimport builtins\n__odin_it = iter(__odin_inputs)\nbuiltins.input = lambda prompt='': next(__odin_it, '')\n"+code;}
        state.terminalWorker.postMessage({type:"run",code:code}); setTimeout(function(){if(run.disabled){state.terminalWorker.terminate();state.terminalWorker=null;output.textContent="Timeout : exécution interrompue après 10 secondes.";output.classList.add("terminal-error");run.disabled=false;}},10000);
      } catch(error){status.textContent="Pyodide inaccessible. Vérifiez votre connexion ou l'installation dans /pyodide/.";run.disabled=false;}
    });
  }

  async function renderLesson(lesson) {
    state.current = lesson;
    expandModule(lesson.moduleId);
    updateNavState();
    closeMobileMenu();

    document.documentElement.setAttribute("data-track", lesson.trackId);
    document.title = lesson.title + " — ODIN";
    els.crumbs.textContent = state.currentTrack.title + " / " + lesson.moduleTitle + " / " + lesson.title;
    els.lesson.innerHTML = '<div class="loading">Chargement de la leçon…</div>';
    updatePager(lesson);

    let markdown;
    try {
      markdown = await fetchLessonText(lesson);
    } catch (error) {
      els.lesson.innerHTML = '<div class="error">' +
        escapeHtml(error.message) +
        "<br>Vérifie que tu lances bien l'application depuis un serveur local (par ex. <code>python3 -m http.server</code>)." +
        "</div>";
      return;
    }

    if (state.current !== lesson) {
      return;
    }

    const done = isDone(lesson);
    const typeLabel = lesson.type === "project" ? "Projet" : "Leçon";
    const trackBadge = state.currentTrack.shortTitle || state.currentTrack.title;

    const header = document.createElement("header");
    header.className = "lesson-head";
    header.innerHTML =
      '<p class="lesson-kicker"><span class="track-badge">' + escapeHtml(trackBadge) + "</span> " +
      escapeHtml(lesson.moduleTitle) + " · " + escapeHtml(typeLabel) + " · " + escapeHtml(lesson.duration) + "</p>" +
      "<h1>" + escapeHtml(lesson.title) + "</h1>" +
      '<p class="lesson-subtitle">' + escapeHtml(lesson.titleEn) + "</p>" +
      '<label class="done-toggle"><input type="checkbox" id="done-checkbox"' +
      (done ? " checked" : "") + "> <span>Marquer comme terminée</span></label>";

    const body = document.createElement("div");
    body.className = "lesson-body";
    body.innerHTML = renderMarkdown(markdown);

    els.lesson.innerHTML = "";
    els.lesson.appendChild(header);
    els.lesson.appendChild(body);

    if (lesson.trackId === "python") appendTerminal(els.lesson);
    appendQuiz(els.lesson, lesson);

    const checkbox = $("done-checkbox");
    checkbox.addEventListener("change", function () {
      const bucket = state.progress[lesson.trackId];
      if (checkbox.checked) {
        bucket.add(lessonKey(lesson));
      } else {
        bucket.delete(lessonKey(lesson));
      }
      saveProgress();
      updateNavState();
      updateProgressUI();
    });

    enhanceContent(body);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function fenceMarker(line) {
    const match = line.match(/^\s*(```+|~~~+)/);
    return match ? match[1].slice(0, 3) : null;
  }

  function containerStart(line) {
    const colon = line.match(/^\s*:::(note|warning|tip|assignment)\s*$/);
    if (colon) {
      return { kind: "colon", type: colon[1] };
    }

    if (!/^\s*<div\b[^>]*markdown\s*=\s*(?:"1"|'1'|1)[^>]*>\s*$/i.test(line)) {
      return null;
    }

    const classMatch =
      line.match(/\bclass\s*=\s*"([^"]*)"/i) ||
      line.match(/\bclass\s*=\s*'([^']*)'/i);
    const classes = classMatch ? classMatch[1] : "";
    let type = "note";
    if (/lesson-note--warning/.test(classes)) {
      type = "warning";
    } else if (/lesson-note--tip/.test(classes)) {
      type = "tip";
    } else if (/lesson-content__panel/.test(classes)) {
      type = "assignment";
    }
    return { kind: "div", type: type };
  }

  function findContainerEnd(lines, start, kind) {
    let depth = 1;
    let fence = null;

    for (let index = start + 1; index < lines.length; index += 1) {
      const line = lines[index];

      if (fence) {
        if (line.trim().indexOf(fence) === 0) {
          fence = null;
        }
        continue;
      }

      const marker = fenceMarker(line);
      if (marker) {
        fence = marker;
        continue;
      }

      if (kind === "colon") {
        if (/^\s*:::\s*$/.test(line)) {
          depth -= 1;
        } else if (/^\s*:::(note|warning|tip|assignment)\s*$/.test(line)) {
          depth += 1;
        }
      } else {
        const openings = (line.match(/<div\b/gi) || []).length;
        const closings = (line.match(/<\/div\s*>/gi) || []).length;
        depth += openings - closings;
      }

      if (depth <= 0) {
        return index;
      }
    }

    return -1;
  }

  function replaceContainers(markdown, callouts) {
    const lines = markdown.split("\n");
    const output = [];
    let fence = null;

    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];

      if (fence) {
        output.push(line);
        if (line.trim().indexOf(fence) === 0) {
          fence = null;
        }
        continue;
      }

      const marker = fenceMarker(line);
      if (marker) {
        fence = marker;
        output.push(line);
        continue;
      }

      const start = containerStart(line);
      if (start) {
        const end = findContainerEnd(lines, index, start.kind);
        if (end !== -1) {
          const inner = lines.slice(index + 1, end).join("\n");
          const token = callouts.length;
          callouts.push({ type: start.type, html: renderMarkdown(inner) });
          output.push("", "@@CALLOUT" + token + "@@", "");
          index = end;
          continue;
        }
      }

      output.push(line);
    }

    return output.join("\n");
  }

  function renderMarkdown(markdown) {
    const callouts = [];
    const withTokens = replaceContainers(markdown, callouts);
    let html = marked.parse(withTokens);

    const labels = {
      note: "Note",
      warning: "Attention",
      tip: "Astuce",
      assignment: "Exercice"
    };

    function calloutHtml(callout) {
      return (
        '<div class="callout callout--' + callout.type + '">' +
        '<p class="callout-label">' + labels[callout.type] + "</p>" +
        callout.html +
        "</div>"
      );
    }

    html = html.replace(/<p>\s*@@CALLOUT(\d+)@@\s*<\/p>/g, function (match, index) {
      const callout = callouts[Number(index)];
      return callout ? calloutHtml(callout) : match;
    });

    html = html.replace(/@@CALLOUT(\d+)@@/g, function (match, index) {
      const callout = callouts[Number(index)];
      return callout ? calloutHtml(callout) : match;
    });

    return html;
  }

  function enhanceContent(container) {
    normalizeCodeLanguages(container);
    enhanceLinks(container);

    if (window.Prism && typeof window.Prism.highlightAllUnder === "function") {
      try {
        window.Prism.highlightAllUnder(container);
      } catch (error) {
        /* coloration optionnelle */
      }
    }

    enhanceCodeBlocks(container);
  }

  function normalizeCodeLanguages(container) {
    const aliases = {
      py: "python",
      python3: "python",
      js: "javascript",
      node: "javascript",
      sh: "bash",
      shell: "bash",
      console: "bash",
      zsh: "bash",
      md: "markdown",
      text: "plain",
      plaintext: "plain"
    };
    container.querySelectorAll("pre code").forEach(function (code) {
      const current = Array.from(code.classList).find(function (name) {
        return name.indexOf("language-") === 0;
      });
      if (!current) {
        return;
      }
      const language = current.slice("language-".length).toLowerCase();
      if (aliases[language]) {
        code.classList.remove(current);
        code.classList.add("language-" + aliases[language]);
      }
    });
  }

  function enhanceLinks(container) {
    container.querySelectorAll('a[href^="http"]').forEach(function (link) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  function enhanceCodeBlocks(container) {
    container.querySelectorAll("pre").forEach(function (pre) {
      if (pre.parentElement && pre.parentElement.classList.contains("code-block")) {
        return;
      }
      const code = pre.querySelector("code");
      if (!code) {
        return;
      }

      const match = code.className.match(/language-([\w-]+)/);
      const language = match ? match[1] : "code";

      const wrapper = document.createElement("div");
      wrapper.className = "code-block";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const bar = document.createElement("div");
      bar.className = "code-bar";

      const label = document.createElement("span");
      label.className = "code-lang";
      label.textContent = language;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-btn";
      button.textContent = "Copier";
      button.addEventListener("click", function () {
        copyText(code.textContent || "").then(function () {
          button.textContent = "Copié";
          window.setTimeout(function () {
            button.textContent = "Copier";
          }, 1500);
        });
      });

      bar.appendChild(label);
      bar.appendChild(button);
      if (state.current && state.current.trackId === "python" && language === "python") {
        const tryButton = document.createElement("button");
        tryButton.type = "button";
        tryButton.className = "copy-btn";
        tryButton.textContent = "Essayer";
        tryButton.addEventListener("click", function () {
          const terminal = document.getElementById("python-code");
          if (!terminal) return;
          terminal.value = code.textContent || "";
          document.getElementById("python-panel").open = true;
          document.getElementById("python-panel").scrollIntoView({ behavior: "smooth", block: "center" });
          terminal.focus();
        });
        bar.appendChild(tryButton);
      }
      wrapper.insertBefore(bar, pre);
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
      } catch (error) {
        /* échec silencieux */
      }
      area.remove();
      resolve();
    });
  }

  function updatePager(lesson) {
    const key = lessonKey(lesson);
    const index = state.lessons.findIndex(function (item) {
      return lessonKey(item) === key;
    });
    const prev = index > 0 ? state.lessons[index - 1] : null;
    const next = index >= 0 && index < state.lessons.length - 1 ? state.lessons[index + 1] : null;

    els.prevBtn.disabled = !prev;
    els.nextBtn.disabled = !next;

    els.prevBtn.onclick = prev
      ? function () {
          window.location.hash = "#/" + prev.trackId + "/" + prev.moduleId + "/" + prev.id;
        }
      : null;

    els.nextBtn.onclick = next
      ? function () {
          window.location.hash = "#/" + next.trackId + "/" + next.moduleId + "/" + next.id;
        }
      : null;
  }

  function preloadContent() {
    state.lessons.forEach(function (lesson) {
      if (state.contentCache.has(lesson.file)) {
        return;
      }
      fetch(lesson.file, { cache: "force-cache" })
        .then(function (response) {
          return response.ok ? response.text() : null;
        })
        .then(function (text) {
          if (text !== null) {
            state.contentCache.set(lesson.file, text);
            state.searchIndex.set(lessonKey(lesson), stripMarkdown(text));
          }
        })
        .catch(function () {
          /* préchargement facultatif */
        });
    });
  }

  function applySearch() {
    const query = els.search.value.trim().toLowerCase();
    const items = els.nav.querySelectorAll(".nav-item");
    let visible = 0;

    items.forEach(function (item) {
      const link = item.querySelector(".nav-link");
      const key = link ? link.dataset.key : "";
      const base = item.dataset.search || "";
      const content = state.searchIndex.get(key) || "";
      const matches = query === "" || base.indexOf(query) !== -1 || content.indexOf(query) !== -1;
      item.hidden = !matches;
      if (matches) {
        visible += 1;
      }
    });

    const groups = els.nav.querySelectorAll(".nav-group");
    groups.forEach(function (group) {
      const hasVisible = Array.prototype.some.call(
        group.querySelectorAll(".nav-item"),
        function (item) {
          return !item.hidden;
        }
      );
      group.hidden = !hasVisible;
      if (query !== "" && hasVisible) {
        const list = group.querySelector(".nav-list");
        const heading = group.querySelector(".nav-heading");
        if (list) {
          list.hidden = false;
        }
        if (heading) {
          heading.setAttribute("aria-expanded", "true");
        }
      }
    });

    let empty = els.nav.querySelector(".nav-empty-message");
    if (visible === 0 && items.length > 0) {
      if (!empty) {
        empty = document.createElement("p");
        empty.className = "nav-empty-message";
        els.nav.appendChild(empty);
      }
      empty.textContent = "Aucune leçon ne correspond à « " + els.search.value.trim() + " ».";
    } else if (empty) {
      empty.remove();
    }
  }

  function bindSearch() {
    els.search.addEventListener("input", applySearch);
  }

  function bindGlossary() {
    els.glossaryBtn.addEventListener("click", function () {
      if (typeof els.glossary.showModal === "function") {
        els.glossary.showModal();
        els.glossarySearch.focus();
      } else {
        els.glossary.setAttribute("open", "");
      }
    });

    els.glossaryClose.addEventListener("click", function () {
      els.glossary.close();
    });

    els.glossary.addEventListener("click", function (event) {
      if (event.target === els.glossary) {
        els.glossary.close();
      }
    });

    els.glossarySearch.addEventListener("input", function () {
      renderGlossary(els.glossarySearch.value);
    });
  }

  function renderGlossary(filter) {
    const query = (filter || "").trim().toLowerCase();
    const trackId = state.currentTrack ? state.currentTrack.id : null;
    const entries = state.glossary.filter(function (entry) {
      if (entry.track && trackId && entry.track !== trackId) {
        return false;
      }
      if (!query) {
        return true;
      }
      return (
        entry.fr.toLowerCase().indexOf(query) !== -1 ||
        entry.en.toLowerCase().indexOf(query) !== -1 ||
        entry.definition.toLowerCase().indexOf(query) !== -1
      );
    });

    els.glossaryList.innerHTML = "";

    if (entries.length === 0) {
      els.glossaryList.innerHTML = '<p class="glossary-empty">Aucun terme trouvé.</p>';
      return;
    }

    entries.forEach(function (entry) {
      const item = document.createElement("div");
      item.className = "glossary-item";
      item.innerHTML =
        '<div class="glossary-term"><strong>' + escapeHtml(entry.fr) + "</strong>" +
        "<span>" + escapeHtml(entry.en) + "</span></div>" +
        "<p>" + escapeHtml(entry.definition) + "</p>";
      els.glossaryList.appendChild(item);
    });
  }

  function loadGlossary() {
    fetch("glossaire.json", { cache: "no-cache" })
      .then(function (response) {
        return response.ok ? response.json() : [];
      })
      .then(function (data) {
        state.glossary = Array.isArray(data) ? data : [];
        renderGlossary(els.glossarySearch.value);
      })
      .catch(function () {
        state.glossary = [];
      });
  }

  function openMobileMenu() {
    document.body.classList.add("menu-open");
    els.overlay.hidden = false;
    els.menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    document.body.classList.remove("menu-open");
    els.overlay.hidden = true;
    els.menuBtn.setAttribute("aria-expanded", "false");
  }

  function bindMobileMenu() {
    els.menuBtn.addEventListener("click", function () {
      if (document.body.classList.contains("menu-open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
    els.overlay.addEventListener("click", closeMobileMenu);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  async function init() {
    registerServiceWorker();
    els.nav = $("nav");
    els.lesson = $("lesson");
    els.crumbs = $("crumbs");
    els.search = $("search");
    els.progressTitle = $("progress-title");
    els.progressText = $("progress-text");
    els.progressBar = $("progress-bar");
    els.progress = $("progress");
    els.themeBtn = $("theme-btn");
    els.menuBtn = $("menu-btn");
    els.overlay = $("overlay");
    els.prevBtn = $("prev-btn");
    els.nextBtn = $("next-btn");
    els.trackSwitch = $("track-switch");
    els.glossaryBtn = $("glossary-btn");
    els.glossary = $("glossary");
    els.glossaryClose = $("glossary-close");
    els.glossarySearch = $("glossary-search");
    els.glossaryList = $("glossary-list");

    loadTheme();
    loadCollapsed();
    bindMobileMenu();
    bindGlossary();
    bindSearch();
    els.themeBtn.addEventListener("click", toggleTheme);

    try {
      const response = await fetch("content/manifest.json", { cache: "no-cache" });
      if (!response.ok) {
        throw new Error("Manifeste introuvable (" + response.status + ")");
      }
      state.manifest = await response.json();
    } catch (error) {
      els.lesson.innerHTML = '<div class="error">Impossible de charger le cursus : ' +
        escapeHtml(error.message) +
        "</div>";
      return;
    }

    state.manifest.tracks.forEach(function (track) {
      state.trackMap.set(track.id, track);
    });

    loadProgress();
    loadQuizScores();
    loadGlossary();
    try { const qr=await fetch("quizzes.json"); if(qr.ok)state.quizzes=await qr.json(); } catch(error) { /* quiz facultatif si le fichier est indisponible */ }

    const saved = readStorage(TRACK_KEY);
    const initial = getTrack(saved) || state.manifest.tracks[0];
    state.currentTrack = initial;
    state.lessons = flattenLessons(initial);
    document.documentElement.setAttribute("data-track", initial.id);
    buildTrackTabs();
    buildNav();
    updateProgressUI();
    updateSearchPlaceholder();

    preloadContent();
    route();

    window.addEventListener("hashchange", route);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
