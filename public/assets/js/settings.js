// public/assets/js/settings.js

import { apiJson, renderFooter, escapeHtml, showModal } from "./common.js";

const state = {
  user: null,
  providers: [],
  keys: [],
};

document.addEventListener("DOMContentLoaded", async () => {
  renderFooter("#site-footer");
  document.querySelector("#logout-btn").addEventListener("click", logout);

  try {
    const [me, prov, keys] = await Promise.all([
      apiJson("/api/auth/me"),
      apiJson("/api/providers"),
      apiJson("/api/keys"),
    ]);
    state.user = me;
    state.providers = prov.providers || [];
    state.keys = keys.keys || [];
  } catch (e) {
    return;
  }
  renderUser();
  renderTheme();
  renderDefaults();
  renderKeys();
  document.querySelector("#delete-account-btn").addEventListener("click", confirmDeleteAccount);
});

function renderUser() {
  document.querySelector("#user-name").textContent = state.user.display_name;
  if (state.user.profile_image_url) {
    document.querySelector("#user-avatar").src = state.user.profile_image_url;
  }
}

function renderTheme() {
  const sel = document.querySelector("#theme-select");
  sel.value = (window.SCCTheme && window.SCCTheme.current()) || "system";
  sel.addEventListener("change", () => {
    window.SCCTheme.apply(sel.value);
    apiJson("/api/settings", { method: "PATCH", body: { theme: sel.value } }).catch(() => {});
  });
}

function renderDefaults() {
  const provSel = document.querySelector("#default-provider");
  const modelSel = document.querySelector("#default-model");

  provSel.innerHTML = '<option value="">(no default)</option>';
  for (const p of state.providers) {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.label;
    provSel.appendChild(opt);
  }
  provSel.value = state.user.default_provider || "";

  function refreshModels() {
    modelSel.innerHTML = '<option value="">(no default)</option>';
    const p = state.providers.find((x) => x.id === provSel.value);
    if (p) {
      for (const m of p.models) {
        const opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = m.label;
        modelSel.appendChild(opt);
      }
    }
    modelSel.value = state.user.default_model || "";
  }
  refreshModels();

  provSel.addEventListener("change", async () => {
    await apiJson("/api/settings", {
      method: "PATCH",
      body: { default_provider: provSel.value || null, default_model: null },
    });
    state.user.default_provider = provSel.value;
    state.user.default_model = null;
    refreshModels();
  });
  modelSel.addEventListener("change", async () => {
    await apiJson("/api/settings", {
      method: "PATCH",
      body: { default_model: modelSel.value || null },
    });
    state.user.default_model = modelSel.value;
  });
}

function renderKeys() {
  const container = document.querySelector("#keys-list");
  container.innerHTML = "";
  for (const p of state.providers) {
    const stored = state.keys.find((k) => k.provider === p.id);
    const row = document.createElement("div");
    row.className = "key-row";
    row.innerHTML = `
      <div><strong>${escapeHtml(p.label)}</strong></div>
      <div class="preview ${stored ? "" : "unset"}">${stored ? escapeHtml(stored.preview || "(stored)") : "not set"}</div>
      <div class="h-stack">
        <button class="btn small" data-act="edit">${stored ? "Replace" : "Add key"}</button>
        ${stored ? '<button class="btn small danger" data-act="del">Remove</button>' : ""}
      </div>
    `;
    row.querySelector('[data-act="edit"]').addEventListener("click", () => promptForKey(p));
    const delBtn = row.querySelector('[data-act="del"]');
    if (delBtn) delBtn.addEventListener("click", () => deleteKey(p));
    container.appendChild(row);
  }
}

async function promptForKey(provider) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal">
      <h3>Set API key for ${escapeHtml(provider.label)}</h3>
      <p class="muted small">Your key is encrypted at rest and only decrypted in-memory when forwarding your prompt to ${escapeHtml(provider.label)}.</p>
      <input type="password" id="key-input" placeholder="paste key here" autocomplete="off" spellcheck="false">
      <div class="actions">
        <button class="cancel">Cancel</button>
        <button class="confirm primary">Save</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  const input = backdrop.querySelector("#key-input");
  input.focus();
  return new Promise((resolve) => {
    backdrop.querySelector(".cancel").addEventListener("click", () => {
      backdrop.remove();
      resolve(false);
    });
    backdrop.querySelector(".confirm").addEventListener("click", async () => {
      const key = input.value.trim();
      if (!key) { input.focus(); return; }
      try {
        await apiJson("/api/keys", { method: "PUT", body: { provider: provider.id, key } });
        // Reload list
        const data = await apiJson("/api/keys");
        state.keys = data.keys || [];
        renderKeys();
      } catch (e) {
        alert("Failed to save key: " + (e.message || e));
      } finally {
        backdrop.remove();
        resolve(true);
      }
    });
  });
}

async function deleteKey(provider) {
  const ok = await showModal({
    title: `Remove ${provider.label} key?`,
    body: "The encrypted key will be deleted from our store. You can add a new one anytime.",
    confirmLabel: "Remove",
    danger: true,
  });
  if (!ok) return;
  await apiJson(`/api/keys?provider=${encodeURIComponent(provider.id)}`, { method: "DELETE" });
  const data = await apiJson("/api/keys");
  state.keys = data.keys || [];
  renderKeys();
}

async function logout() {
  await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" });
  location.href = "/";
}

async function confirmDeleteAccount() {
  const expected = String(state.user && state.user.login ? state.user.login : "").toLowerCase();
  if (!expected) {
    alert("Unable to determine your Twitch login. Please reload and try again.");
    return;
  }

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="del-acct-title">
      <h3 id="del-acct-title" style="color: var(--danger)">Delete your account?</h3>
      <p>This will permanently remove:</p>
      <ul style="margin: 6px 0 12px 22px; padding: 0">
        <li>Your account record</li>
        <li>All of your conversations and messages</li>
        <li>Every encrypted API key you've uploaded</li>
      </ul>
      <p class="muted small" style="margin-bottom: 12px">
        This cannot be undone. Your Twitch account itself is not affected.
      </p>
      <div class="field">
        <label for="del-confirm-input">
          To confirm, type your Twitch login: <code>${escapeHtml(expected)}</code>
        </label>
        <input id="del-confirm-input" type="text" autocomplete="off" autocapitalize="off"
               autocorrect="off" spellcheck="false" placeholder="${escapeHtml(expected)}">
        <span class="hint" id="del-confirm-hint">Login does not match.</span>
      </div>
      <div class="actions">
        <button class="cancel">Cancel</button>
        <button class="confirm danger" disabled>Delete my account permanently</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);

  const input = backdrop.querySelector("#del-confirm-input");
  const hint = backdrop.querySelector("#del-confirm-hint");
  const confirmBtn = backdrop.querySelector(".confirm");
  const cancelBtn = backdrop.querySelector(".cancel");

  function close() { backdrop.remove(); }

  function refresh() {
    const matches = input.value.trim().toLowerCase() === expected;
    confirmBtn.disabled = !matches;
    hint.style.visibility = (matches || input.value === "") ? "hidden" : "visible";
  }
  refresh();
  input.addEventListener("input", refresh);
  input.focus();

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });
  cancelBtn.addEventListener("click", close);

  confirmBtn.addEventListener("click", async () => {
    confirmBtn.disabled = true;
    cancelBtn.disabled = true;
    confirmBtn.textContent = "Deleting…";
    try {
      await apiJson("/api/account/delete", {
        method: "POST",
        body: { confirmation: input.value.trim() },
      });
      // Wipe local UI prefs so a re-signup feels clean.
      try { localStorage.removeItem("scc_theme"); } catch (e) { /* ignore */ }
      // Server already cleared the session cookie. Send them home with a flash.
      location.href = "/?account_deleted=1";
    } catch (e) {
      confirmBtn.disabled = false;
      cancelBtn.disabled = false;
      confirmBtn.textContent = "Delete my account permanently";
      alert("Account deletion failed: " + (e.message || e));
    }
  });
}
