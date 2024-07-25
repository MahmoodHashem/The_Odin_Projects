

const page = document;
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.overlay');

const menu = document.querySelector('#menu');
const close = document.querySelector('#close-menu')

const projectCardTemplate = document.getElementById('project-template'); 
const container = document.querySelector(".grid-container"); 


let live = 'https://mahmoodhashem.github.io/The_Odin_Projects/JavaScript-exercises/'
let repo = 'https://github.com/MahmoodHashem/The_Odin_Projects/tree/main/JavaScript-exercises/'


let projects = [
    {
        name: 'Rock Paper Scissors', 
        live: `${live}Rock_paper/index.html`,
        repo: `${repo}Rock_paper`
    },
    {
        name: 'Calculator', 
        live: `${live}Calculator/index.html`,
        repo: `${repo}Calculator`
    },
    {
        name: 'Form ', 
        live: `${live}form/index.html`,
        repo: `${repo}form`
    },
    {
        name: 'Dashboard', 
        live: `${live}Course-Dashbord/index.html`,
        repo: `${repo}Course-Dashbord`
    },
    {
        name: 'Library', 
        live: `${live}Library/index.html`,
        repo: `${repo}Library`
    },
    {
        name: 'Tic Tac Toe', 
        live: `${live}tictactoe/index.html`,
        repo: `${repo}tictactoe`
    },
    {
        name: 'Restuarant Page ', 
        live: `${live}Restaurant-page/index.html`,
        repo: `${repo}Restaurant-page`
    },
    {
        name: 'Todo List ', 
        live: `${live}todo-app/index.html`,
        repo: `${repo}todo-app`
    },

]


for (const project of projects) {
    const projectCard = document.importNode(projectCardTemplate.content, true);
    const liveLink = projectCard.querySelector('#live'); 
    const repoLink = projectCard.querySelector('#repo'); 
    const title = projectCard.querySelector('h1')

    liveLink.href = project.live; 
    repoLink.href = project.repo; 
    title.innerText = project.name; 


    container.appendChild(projectCard);

}



menu.addEventListener('click', () => {
  sidebar.style.right = '0'; 
})

close.addEventListener('click', () => {
    sidebar.style.right = '-500px';

})
