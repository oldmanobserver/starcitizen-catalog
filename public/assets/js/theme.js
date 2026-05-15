// public/assets/js/theme.js
// Applies the saved theme as early as possible to avoid a flash of unstyled content.

(function () {
  function apply(theme) {
    var html = document.documentElement;
    if (theme === "light" || theme === "dark") {
      html.setAttribute("data-theme", theme);
    } else {
      html.removeAttribute("data-theme"); // fall back to system
    }
  }
  try {
    var saved = localStorage.getItem("scc_theme");
    apply(saved || "system");
  } catch (e) {
    /* localStorage unavailable */
  }

  window.SCCTheme = {
    apply: function (theme) {
      try { localStorage.setItem("scc_theme", theme || "system"); } catch (e) {}
      apply(theme);
    },
    current: function () {
      try { return localStorage.getItem("scc_theme") || "system"; } catch (e) { return "system"; }
    },
  };
})();
