const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});