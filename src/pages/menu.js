import '../style/menu.css';
import menuItems from '../data/menuData.js';

function createMenuCard(name, description, price) {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const title = document.createElement("h2");
    title.textContent = name;

    const info = document.createElement("p");
    info.textContent = description;

    const cost = document.createElement('h3');
    cost.textContent = price;

    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(cost);

    return card;
}; 

function loadMenu() {
    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    menu.appendChild(heading);
   
    menuItems.forEach((item) => {
        const card = createMenuCard(
            item.name,
            item.description,
            item.price
        );
        menu.appendChild(card);
    });

    content.appendChild(menu);
};

export default loadMenu;