const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const links = document.querySelectorAll('#mobile-menu a');


menuBtn.addEventListener('click', ()  => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});


links.forEach(lien => {
    lien.addEventListener('click', () => {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    });
});

document.addEventListener('click', (e) => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === "true";

    if (isExpanded && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
});

