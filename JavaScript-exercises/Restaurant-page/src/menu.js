

export default function createMenu(){

    // Create the section element
const menuSection = document.createElement('section');
menuSection.id = 'menu';

// Create the h2 element
const menuTitle = document.createElement('h2');
menuTitle.textContent = 'Discover Our Menus';

// Create the paragraph element
const menuDescription = document.createElement('p');
menuDescription.innerHTML = "Our menu at <strong>Afghani Foods</strong> celebrates the vibrant and flavorful cuisine of Afghanistan. From the national dish of Qabili Palau to the savory Mantu dumplings, we've carefully curated a selection of traditional Afghani favorites that will transport your taste buds on a delightful culinary journey.";

// Create the container div
const menuContainer = document.createElement('div');
menuContainer.classList.add('container', 'menue-conatiner');

// Create the menu items
const menuItems = [
  {
    image: 'plau.jpeg',
    name: 'Qabili Palau',
    price: 120,
    description: 'This is considered the national dish of Afghanistan. It consists of basmati rice cooked with carrots, raisins, pistachios, and tender pieces of lamb or chicken.'
  },
  {
    image: 'Aushak-plated-scaled.jpg',
    name: 'Aushak',
    price: 150,
    description: 'These are Afghan dumplings filled with scallions and served with a yogurt-based sauce, ground meat, and dried mint.'
  },
  {
    image: 'manto.jpg',
    name: 'Mantu',
    price: 100,
    description: 'These are filled with ground meat and onions, then topped with a yogurt-based sauce, ground meat, and dried mint.'
  },
  {
    image: 'kofta.jpg',
    name: 'Kofta Chalau',
    price: 170,
    description: 'Spiced meatballs made with ground beef or lamb, cooked in a tomato-based sauce and served with rice.'
  },
  {
    image: 'kebab.jpeg',
    name: 'Kebabs',
    price: 220,
    description: 'Afghanistan is known for its variety of kebabs, such as Shish Kebab (grilled meat and vegetables on skewers), Seekh Kebab (minced meat kebabs), and Jujeh Kebab (chicken kebabs).'
  },
  {
    image: 'banjan.jpg',
    name: 'Borani Banjan',
    price: 80,
    description: 'A delicious eggplant dish made by frying eggplant slices and serving them in a yogurt-based sauce.'
  }
];

// Create the menu items and append them to the container
for (const item of menuItems) {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menues');

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image');
  const image = document.createElement('img');
  image.src = `../src/images/foods/${item.image}`;
  image.alt = item.name;
  imageDiv.appendChild(image);

  const ingredientsDiv = document.createElement('div');
  ingredientsDiv.classList.add('ingredients');
  const nameDiv = document.createElement('h3');
  nameDiv.classList.add('name');
  nameDiv.innerHTML = `${item.name} <span>${item.price}</span>`;
  const descriptionP = document.createElement('p');
  descriptionP.textContent = item.description;

  ingredientsDiv.appendChild(nameDiv);
  ingredientsDiv.appendChild(descriptionP);

  menuDiv.appendChild(imageDiv);
  menuDiv.appendChild(ingredientsDiv);

  menuContainer.appendChild(menuDiv);
}

// Append the elements to the section
menuSection.appendChild(menuTitle);
menuSection.appendChild(menuDescription);
menuSection.appendChild(menuContainer);

// Append the section to the DOM
const main = document.querySelector('main'); 
main.appendChild(menuSection);
}