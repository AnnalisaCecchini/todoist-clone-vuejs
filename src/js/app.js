// TOGGLE MENU
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const navbg = document.querySelector('.nav--bg');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navbg.classList.add('open');
        navItems.forEach (item => item.classList.add('open'));

        showMenu = true;
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navbg.classList.remove('open');
        navItems.forEach (item => item.classList.remove('open'));

        showMenu = false;
    }

}

// ACTIVE
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.menu-nav__link');
const menuLength = menuItem.length;

for (let i = 0; i<menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add('active');
    }
}


