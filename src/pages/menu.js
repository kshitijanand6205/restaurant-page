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

    const pizzaCard = createMenuCard(
        'Margherita Pizza',
        'Fresh mozzarella, basil and tomato sauce.',
        '$5'
    );

    const burgerCard = createMenuCard(
        'Cheese Burger',
        'Juicy grilled beef with cheddar cheese.',
        '$4'
    );

    const pastaCard = createMenuCard(
        'Alfredo Pasta',
        'Creamy white sauce pasta',
        '$3'
    );

    menu.appendChild(heading);
    menu.appendChild(pizzaCard);
    menu.appendChild(burgerCard);
    menu.appendChild(pastaCard);

    content.appendChild(menu);
};

export default loadMenu;