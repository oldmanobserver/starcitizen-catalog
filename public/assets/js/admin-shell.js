// public/assets/js/admin-shell.js
// Shared auth + topbar wiring for every /admin*.html page.
//
// Each admin page expects:
//   - <img id="user-avatar"> and <span id="user-name"> in the topbar
//   - <button id="logout-btn"> in the topbar
//   - a <main> element to replace if the signed-in user is not an admin
//   - <footer id="site-footer"> for the shared footer

import { apiJson, renderFooter, escapeHtml } from "./common.js";

export async function initAdminPage() {
  renderFooter("#site-footer");
  const logoutBtn = document.querySelector("#logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);

  let me;
  try {
    me = await apiJson("/api/auth/me");
  } catch {
    return null; // common.js already redirected to /
  }

  if (!me.is_admin) {
    const main = document.querySelector("main");
    if (main) {
      main.innerHTML =
        `<h1>Admin</h1><p class="flash">You are signed in as <strong>${escapeHtml(me.display_name)}</strong>, but this account is not an admin.</p>`;
    }
    return null;
  }

  const nameEl = document.querySelector("#user-name");
  if (nameEl) nameEl.textContent = me.display_name;
  const avatarEl = document.querySelector("#user-avatar");
  if (avatarEl && me.profile_image_url) avatarEl.src = me.profile_image_url;

  return me;
}

async function logout() {
  await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" });
  location.href = "/";
}
