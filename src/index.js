import './style.css';
import loadHome from './pages/home.js';
import loadMenu from './pages/menu.js';

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');

loadHome();

function clearContent() {
    const content = document.querySelector('#content');
    content.replaceChildren();
}

homeBtn.addEventListener('click', () => {
    clearContent();
    loadHome();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
});


