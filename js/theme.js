/* =========================================
   THEME PERSISTENCE
========================================= */

const themeButton = document.getElementById("themeButton");

// Check local storage or system preference
const savedTheme = localStorage.getItem("clearpay-theme");
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply theme immediately on load
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

function updateThemeIcon() {
    if (!themeButton) return;

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeButton.textContent = "☾";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }
}

// Initial icon update
updateThemeIcon();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        localStorage.setItem("clearpay-theme", isDark ? "dark" : "light");

        updateThemeIcon();
    });
}