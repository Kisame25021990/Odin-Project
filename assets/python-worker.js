"use strict";
let pyodidePromise;
async function loadFrom(base) {
  const module = await import(base + "pyodide.mjs");
  return module.loadPyodide({ indexURL: base });
}
async function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = (async function () {
      const localBase = new URL("../pyodide/", self.location.href).href;
      const candidates = [];
      try {
        const local = await fetch(localBase + "pyodide.mjs", { method: "HEAD" });
        if (local.ok) candidates.push(localBase);
      } catch (error) { /* le répertoire local est facultatif */ }
      candidates.push(
        "https://cdn.jsdelivr.net/pyodide/v314.0.8/full/",
        "https://unpkg.com/pyodide@0.27.7/"
      );
      let lastError;
      for (const base of candidates) {
        try { return await loadFrom(base); }
        catch (error) { lastError = error; }
      }
      throw lastError || new Error("Aucune source Pyodide accessible.");
    })();
  }
  return pyodidePromise;
}
self.onmessage = async function (event) {
  if (event.data.type !== "run") return;
  try {
    const py = await getPyodide();
    await py.runPythonAsync("import sys\nfrom io import StringIO\n__odin_out = StringIO()\n__odin_err = StringIO()\nsys.stdout = __odin_out\nsys.stderr = __odin_err");
    await py.runPythonAsync(event.data.code);
    const result = await py.runPythonAsync("__odin_out.getvalue() + __odin_err.getvalue()");
    const hasError = await py.runPythonAsync("bool(__odin_err.getvalue())");
    self.postMessage({ type: "result", text: result, error: hasError });
  } catch (error) {
    self.postMessage({ type: "result", text: String(error), error: true });
  }
};
getPyodide().then(function () {
  self.postMessage({ type: "ready" });
}).catch(function (error) {
  self.postMessage({ type: "load-error", message: String(error) });
});
