const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const navbar = document.getElementById("navbar");

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-dark");
    toggleButton.classList.remove("btn-dark");
    toggleButton.classList.add("btn-light");
    toggleButton.textContent = "Light";
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Toggle Bootstrap Navbar theme
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        navbar.classList.remove("navbar-light", "bg-light");
        navbar.classList.add("navbar-dark", "bg-dark");
        toggleButton.classList.remove("btn-dark");
        toggleButton.classList.add("btn-light");
        toggleButton.textContent = "Light";
    } else {
        localStorage.setItem("theme", "light");
        navbar.classList.remove("navbar-dark", "bg-dark");
        navbar.classList.add("navbar-light", "bg-light");
        toggleButton.classList.remove("btn-light");
        toggleButton.classList.add("btn-dark");
        toggleButton.textContent = "Dark";
    }
});
