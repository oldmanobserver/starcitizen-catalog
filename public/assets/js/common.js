// public/assets/js/common.js
// Shared client helpers: API fetch, auth check, footer rendering, simple markdown.

export async function api(path, opts = {}) {
  const init = { credentials: "same-origin", ...opts };
  init.headers = {
    "X-Requested-With": "fetch",
    ...(init.headers || {}),
  };
  if (init.body && typeof init.body !== "string") {
    init.body = JSON.stringify(init.body);
    init.headers["Content-Type"] = "application/json";
  }
  const res = await fetch(path, init);
  if (res.status === 401) {
    if (!location.pathname.startsWith("/index") && location.pathname !== "/") {
      location.href = "/?login_required=1";
    }
    throw new Error("unauthorized");
  }
  return res;
}

export async function apiJson(path, opts) {
  const res = await api(path, opts);
  const ct = res.headers.get("Content-Type") || "";
  if (!ct.includes("application/json")) {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return null;
  }
  const data = await res.json();
  if (!res.ok) {
    const err = new Error(data.error || `HTTP ${res.status}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

// Minimal, safe-ish markdown renderer. Output is inserted via innerHTML so we
// escape first, then upgrade a small set of patterns.
export function renderMarkdown(text) {
  let s = escapeHtml(text);

  // Fenced code blocks
  s = s.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_m, _lang, body) =>
    `<pre><code>${body}</code></pre>`
  );

  // Inline code
  s = s.replace(/`([^`\n]+)`/g, "<code>$1</code>");

  // Bold / italic
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|\W)\*([^\s*][^*]*)\*/g, "$1<em>$2</em>");

  // Links [text](url) — only http/https
  s = s.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Citation refs like [#3] -> linked span (filled in later)
  s = s.replace(/\[#(\d+)\]/g, '<span class="citation-ref" data-ref="$1">[#$1]</span>');

  // Paragraphs
  s = s
    .split(/\n{2,}/)
    .map((para) => {
      if (/^<pre>/.test(para)) return para;
      return `<p>${para.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
  return s;
}

export function renderFooter(target) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <div class="disclaimer">
      This site is an independent community project. <strong>Not affiliated with Cloud Imperium Games or Star Citizen.</strong>
      All Star Citizen content, names, and trademarks are property of their respective owners.
    </div>
    <div class="links">
      <a href="/terms.html">Terms</a>·
      <a href="/privacy.html">Privacy</a>·
      <a href="https://oldmanobservers.com" target="_blank" rel="noopener">OldManObservers.com</a>
    </div>
    <div class="small" style="margin-top:6px">© ${year} Old Man Observers</div>
  `;
}

export function showModal({ title, body, confirmLabel = "OK", danger = false, onConfirm }) {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <h3>${escapeHtml(title)}</h3>
        <div class="body"></div>
        <div class="actions">
          <button class="cancel">Cancel</button>
          <button class="confirm ${danger ? "danger" : "primary"}">${escapeHtml(confirmLabel)}</button>
        </div>
      </div>
    `;
    backdrop.querySelector(".body").textContent = body || "";
    function close(ok) {
      backdrop.remove();
      resolve(ok);
    }
    backdrop.querySelector(".cancel").addEventListener("click", () => close(false));
    backdrop.querySelector(".confirm").addEventListener("click", async () => {
      try {
        if (onConfirm) await onConfirm();
      } finally {
        close(true);
      }
    });
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close(false);
    });
    document.body.appendChild(backdrop);
  });
}
