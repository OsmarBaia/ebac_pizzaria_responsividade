const menu = document.querySelector('#menu');
const btOpenMenu = document.querySelector('#menu__open');
const btCloseMenu = document.querySelector('#menu__close');
const menuFade = document.querySelector('.fade');
const menuItens = document.querySelectorAll('.menu__item a');

function toogleMenuInactive() {
    menu.classList.toggle('inactive');
    menuFade.classList.toggle('inactive');
}

function closeMenuOnItemClick() {
    if (!menuFade.classList.contains('inactive')) {
        toogleMenuInactive();
    }
}

btOpenMenu.addEventListener('click', toogleMenuInactive);

btCloseMenu.addEventListener('click', toogleMenuInactive);

menuItens.forEach(function (item) {
    item.addEventListener('click', closeMenuOnItemClick);
});
