const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('fullmenu');
})