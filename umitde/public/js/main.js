/*! personal_site v0.0.1 | (c) 2021 Ümit Demir | MIT License | http://link-to-your-git-repo.com */
let mobileMenuToggler = document.querySelector(".header_toggler");
let mobileMenu = document.querySelector(".mobile_menu");
let mobileMenuOverlay = document.querySelector(".mobile_menu--overlay");
let siteContent = document.querySelector(".content");
let mobileMenuCloser = document.querySelector(".mobile_menu--closer");

function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
        siteContent.style.transform = "translate(270px, 0)";
    }else {
       siteContent.style.transform = "translate(0, 0)"; 
    }
}



mobileMenuOverlay.addEventListener('click', () => toggleMobileMenu());

mobileMenuToggler.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMobileMenu();
});

mobileMenuCloser.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMobileMenu();
});