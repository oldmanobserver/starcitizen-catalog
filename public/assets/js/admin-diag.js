// public/assets/js/admin-diag.js

import { apiJson } from "./common.js";
import { initAdminPage } from "./admin-shell.js";

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#diag-run").addEventListener("click", runDiag);
  document.querySelector("#diag-q").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); runDiag(); }
  });
  document.querySelector("#diag-probe").addEventListener("click", runProbe);
  document.querySelector("#diag-vid").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); runProbe(); }
  });

  await initAdminPage();
});

async function runDiag() {
  const q = document.querySelector("#diag-q").value.trim();
  const out = document.querySelector("#diag-output");
  if (!q) { out.textContent = "(enter a query)"; return; }
  out.textContent = "Running…";
  try {
    const data = await apiJson("/api/admin/diag?q=" + encodeURIComponent(q));
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = "Error: " + (e.message || e);
  }
}

async function runProbe() {
  const v = document.querySelector("#diag-vid").value.trim();
  const out = document.querySelector("#diag-output");
  if (!v) { out.textContent = "(enter a video_id, e.g. SsOtI2dtvBc)"; return; }
  out.textContent = "Probing…";
  try {
    const data = await apiJson("/api/admin/diag?video_id=" + encodeURIComponent(v));
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = "Error: " + (e.message || e);
  }
}
