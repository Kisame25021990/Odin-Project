"use strict";
let pyodidePromise;
function getPyodide() {
  if (!pyodidePromise) {
    const localBase = new URL("../pyodide/", self.location.href).href;
    pyodidePromise = fetch(localBase + "pyodide.js", { method: "HEAD" }).then(function (response) {
      return response.ok ? localBase : "https://cdn.jsdelivr.net/pyodide/v314.0.8/full/";
    }).catch(function () { return "https://cdn.jsdelivr.net/pyodide/v314.0.8/full/"; }).then(function (base) {
      importScripts(base + "pyodide.js");
      return loadPyodide({ indexURL: base });
    }).then(function (py) {
      return py;
    });
  }
  return pyodidePromise;
}
self.onmessage = async function (event) {
  if (event.data.type !== "run") return;
  try {
    const py=await getPyodide();
    await py.runPythonAsync("import sys\nfrom io import StringIO\n__odin_out = StringIO()\n__odin_err = StringIO()\nsys.stdout = __odin_out\nsys.stderr = __odin_err");
    await py.runPythonAsync(event.data.code);
    const result=await py.runPythonAsync("(__odin_out.getvalue(), __odin_err.getvalue())");
    self.postMessage({type:"result",text:result[0]+result[1],error:!!result[1]}); result.destroy();
  } catch(error) { self.postMessage({type:"result",text:String(error),error:true}); }
};
getPyodide().then(function(){self.postMessage({type:"ready"});}).catch(function(error){self.postMessage({type:"result",text:String(error),error:true});});
