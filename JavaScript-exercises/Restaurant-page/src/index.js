import createContact from './contact';
import createHomePage from './createHomePage';
import initLoad from './initload';
import createMenu from './menu';
import { navigateTo } from './navigateTo';

import './style.css'

initLoad();

const main = document.querySelector("main"); 


 const home = document.querySelector('#home');
 const menu = document.querySelector('#menu');
 const contact = document.querySelector('#contact');

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn"); 


function clearDom(){
    const section = document.querySelector('section')
        main.removeChild(section); 
   
}


homeBtn.addEventListener('click', function(){
    clearDom()
    navigateTo('home'); 
})

menuBtn.addEventListener('click', function(){
    clearDom()
    navigateTo('menu'); 
});

contactBtn.addEventListener('click', function(){
    clearDom()
    navigateTo('contact'); 
})