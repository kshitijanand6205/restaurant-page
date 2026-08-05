import '../style/contact.css';

function createContactInfo(title, value) {
    const section = document.createElement("div");
    section.classList.add("contact-info");

    const heading = document.createElement('h2');
    heading.textContent = title;

    const text = document.createElement("p");
    text.textContent = value;

    section.appendChild(heading);
    section.appendChild(text);

    return section;
};

function loadContact() {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const phone = createContactInfo(
        "📞 Phone",
        "+91 6205805292"
    );

    const email = createContactInfo(
        "✉️ Email",
        "kshitijanand510@gmail.com"
    );

    const address = createContactInfo(
        "📍 Address",
        "Bhagalpur, Bihar"
    );

    const hours = createContactInfo(
        "🕒 Opening Hours",
        "Mon - Sun : 10 AM - 11 PM"
    );

    contact.appendChild(heading);
    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(address);
    contact.appendChild(hours);

    content.appendChild(contact);
};

export default loadContact;