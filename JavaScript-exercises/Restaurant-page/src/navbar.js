export default function createNavbar(){

    // const header = document.createElement('header');

    // Create the nav element
    const nav = document.createElement('nav');

    // Create the buttons
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('home-btn');

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menue';
    menuBtn.classList.add('menu-btn');

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.classList.add('contact-btn');

    // Append the buttons to the nav
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);



    document.querySelector('header').appendChild(nav); 

}