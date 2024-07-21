


export default function createHomePage(){

      // Create the section element
      const homeSection = document.createElement('section');
      homeSection.id = 'home';
  
      // Create the heading
      const heading = document.createElement('h1');
      heading.textContent = 'Welcome to Our Authentic Afghani Foods Resaurant';
      homeSection.appendChild(heading);
  
      // Create the paragraph
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Afghani Foods Restaurant is a popular Restaurant in Herat known for its delicious Afghan cuisine and welcoming ambience. It offers a variety of traditional dishes prepared with fresh ingredients, attracting locals and tourists alike.';
      homeSection.appendChild(paragraph);
  
      // Create the container
      const container = document.createElement('div');
      container.classList.add('container', 'flex');
      homeSection.appendChild(container);
  
      // Create the images
      const images = ['1000s.jpg', '300s.jpg', 'is.jpg'];
      images.forEach(image => {
        const col = document.createElement('div');
        col.classList.add('col');
        const img = document.createElement('img');
        img.src = `../src/images/${image}`;
        col.appendChild(img);
        container.appendChild(col);
      });
  
      // Append the section to the main element
      const main = document.querySelector('main');
      main.appendChild(homeSection);
}