import restaurantImage from '../assets/restaurant.png';
import '../style/home.css';
import { clearContent, setActiveButton } from "../index.js";
import loadMenu from '../pages/menu.js';

function loadHome() {
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    home.classList.add('home');

    const heroContent = document.createElement("div");
    heroContent.classList.add("hero-content");
    
    const heading = document.createElement('h1');
    heading.textContent = 'Valhalla Restaurant';

    const tagline = document.createElement("h3");
    tagline.textContent = "Freshly Baked • Freshly Served";

    const description = document.createElement('p');
    description.textContent = 
    `Experience handcrafted pizzas,
     juicy burgers and refreshing drinks made from
    the freshest ingredients every single day.`;

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Restaurant';

    const menuButton = document.createElement('button');
    const menuBtn = document.querySelector('#menu-btn');
    menuButton.textContent = 'Explore Menu';
    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
        setActiveButton(menuBtn);
    });
   
    heroContent.appendChild(heading);
    heroContent.appendChild(tagline);
    heroContent.appendChild(description);
    heroContent.appendChild(menuButton);

    home.appendChild(heroContent);
    home.appendChild(image);

    content.appendChild(home);
};

export default loadHome;