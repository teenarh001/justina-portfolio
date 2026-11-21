// SELECT THE THEME BUTTON

const themeToggle = document.getElementById("themeToggle");

// CHECK FOR A SAVED THEME

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀";
}

// CHANGE THEME WHEN BUTTON IS CLICKED

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀";
        localStorage.setItem("portfolioTheme", "dark");
    } else {
        themeToggle.textContent = "☾";
        localStorage.setItem("portfolioTheme", "light");
    }

});