// const toggleButton = document.getElementById("theme-toggle");
// const body = document.body;

// // Check for saved theme in localStorage
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
//     toggleButton.textContent = "Light";
// }

// // Toggle theme on button click
// toggleButton.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");

//     // Save preference in localStorage
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//         toggleButton.textContent = "Light";
//     } else {
//         localStorage.setItem("theme", "light");
//         toggleButton.textContent = "Dark";
//     }
// });

// second

//----------------------------------- Dark Mode ---------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        // Save theme preference
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});

//----------------------------------- Dark Mode End ---------------------------------------------------