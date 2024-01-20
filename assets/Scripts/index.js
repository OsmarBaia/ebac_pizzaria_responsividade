const menu = document.querySelector('#menu');
const btOpenMenu = document.querySelector('#menu__open');
const btCloseMenu = document.querySelector('#menu__close');
const menuFade = document.querySelector('#menu__fade');

function toogleMenuInactive() {
    menu.classList.toggle('inactive');
}

btOpenMenu.addEventListener('click', toogleMenuInactive);

btCloseMenu.addEventListener('click', toogleMenuInactive);


// let nav = document.querySelector("nav");
// let hamburger = document.querySelector(".menu-icon");

// hamburger.addEventListener("click", function () {
//     nav.classList.toggle("active");
// });
