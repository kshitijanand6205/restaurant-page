import restaurantImage from '../assets/restaurant.png';

function loadHome() {
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    home.classList.add('home');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Kshitij Restaurant';

    const description = document.createElement('p');
    description.textContent = 
    'Serving delicious food made with fresh ingredients everyday.';

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Restaurant';
   
    home.appendChild(heading);
    home.appendChild(description);
    home.appendChild(image);
    content.appendChild(home);
};

export default loadHome;