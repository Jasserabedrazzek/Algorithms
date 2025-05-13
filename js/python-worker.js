importScripts("https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js");

let pyodideReady = loadPyodide();

self.onmessage = async (e) => {
    const pyodide = await pyodideReady;
    pyodide.setStdout({ batched: (s) => self.postMessage(s) });
    pyodide.setStderr({ batched: (s) => self.postMessage(s) });

    try {
        await pyodide.runPythonAsync(e.data);
    } catch (err) {
        self.postMessage("\nError: " + err);
    }
};
