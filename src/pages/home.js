function loadHome() {
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    
    const heading = document.createElement('h1');

    heading.textContent = 'Kshitij Restaurant';

    home.appendChild(heading);
    
    content.appendChild(home);
};

export default loadHome;