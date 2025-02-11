
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


//  check
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');
const productContainer = document.getElementById('product-container');

gridViewBtn.addEventListener('click', () => {
  productContainer.classList.remove('list-view');
  productContainer.classList.add('grid-view');
});

listViewBtn.addEventListener('click', () => {
  productContainer.classList.remove('grid-view');
  productContainer.classList.add('list-view');
});
