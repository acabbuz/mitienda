document.addEventListener("DOMContentLoaded", function () {
    const toggleMenu = document.querySelector(".menu-toggle")

    toggleMenu.addEventListener("click", function () {
        const nav = document.getElementById('navLinks');
        nav.classList.toggle('show');

    })
})