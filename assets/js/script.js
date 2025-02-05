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

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const links = document.querySelectorAll("a");

if (localStorage.getItem("theme") === "dark") {
    applyDarkMode();
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        applyDarkMode();
    } else {
        localStorage.setItem("theme", "light");
        removeDarkMode();
    }
});

function applyDarkMode() {
    links.forEach(link => link.style.color = "white");
}

function removeDarkMode() {
    links.forEach(link => link.style.color = "black");
}
