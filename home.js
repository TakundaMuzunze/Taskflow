// Hamburger navigation bar menu
const menuIcon = document.getElementById('menu-toggle');
const navigationMenu = document.querySelector('.main-nav');

menuIcon.addEventListener("click", function (){
    navigationMenu.classList.toggle('active');
});