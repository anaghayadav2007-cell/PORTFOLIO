// Select the theme button
const themeButton = document.getElementById("theme");

// Check if dark mode was previously selected
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀";
}

// Change theme when button is clicked
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "☾";
        localStorage.setItem("theme", "light");
    }

});