import createContact from "./contact";
import createHomePage from "./createHomePage";
import createMenu from "./menu";

const main = document.querySelector('main'); 

export function navigateTo(pageName) {


  switch (pageName) {
    case 'home':
      createHomePage();
      break;
    case 'menu':
      createMenu(); 
      break;
    case 'contact':
      createContact()
      break;
    default:
      console.error('Invalid page name:', pageName);
  }
}