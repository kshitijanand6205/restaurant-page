import './style.css';
import loadHome from './pages/home.js';
import loadContact from './pages/contact.js';
import loadMenu from './pages/menu.js';

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

loadHome();

function clearContent() {
    const content = document.querySelector('#content');
    content.replaceChildren();
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

homeBtn.addEventListener('click', () => {
    clearContent();
    loadHome();
    setActiveButton(homeBtn);
});

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
    setActiveButton(menuBtn);
});

contactBtn.addEventListener('click', () => {
    clearContent();
    loadContact();
    setActiveButton(contactBtn);
});

export {setActiveButton, clearContent};

