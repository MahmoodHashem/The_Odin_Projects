
import { BST } from "./bst-logic.js";



const bst = new BST();

const form = document.querySelector('form')

const addButton = document.getElementById('add');
const balanceButton = document.getElementById('balanceButton');
const isBalance = document.getElementById("isBalance")
const inOrderButton = document.getElementById('inOrderButton');
const preOrderButton = document.getElementById('preOrderButton');
const input = document.getElementById('numberInput');
const postOrderButton = document.getElementById('postOrderButton');
const remove = document.getElementById('remove');
const maxH = document.getElementById('maxHeight');
const minH = document.getElementById('minHeight');
const clearAll = document.getElementById('clear'); 

const levelOrder = document.querySelector('#levelOrderButton'); 


const defaultArray = [2, 5, 3, 7, 10, 12, 25, 30, 29, 45];

addButton.addEventListener('click', () => {
    const value = parseInt(input.value);
    if (!isNaN(value)) {
        bst.add(value);
        input.value = ''; // Clear input field
    } else {
        alert('Please enter a valid number');
    }
});

form.addEventListener('submit', () => {
    event.preventDefault()
    const value = parseInt(input.value);
    if (!isNaN(value)) {
        bst.add(value);
        input.value = ''; // Clear input field
    } else {
        alert('Please enter a valid number');
    }
})


defaultArray.forEach(value => {
    bst.add(value)
})

const inOrderTra = bst.inOrder()
document.getElementById('traversalDisplay').textContent = `In-Order: ${inOrderTra}`;

remove.addEventListener('click', () => {
    const value = parseInt(input.value);
    bst.remove(value)
})


clearAll.addEventListener('click', ()=>{
    bst.clearAll()
})

balanceButton.addEventListener('click', () => {
    bst.balance();
});

inOrderButton.addEventListener('click', () => {
    const inOrderResult = bst.inOrder();
    document.getElementById('traversalDisplay').textContent = `In-Order: ${inOrderResult}`;
});

preOrderButton.addEventListener('click', () => {
    const preOrderResult = bst.preOrder();
    document.getElementById('traversalDisplay').textContent = `Pre-Order: ${preOrderResult}`;
});

postOrderButton.addEventListener('click', () => {
    const postOrderResult = bst.postOrder();
    document.getElementById('traversalDisplay').textContent = `Post-Order: ${postOrderResult}`;
});


levelOrder.addEventListener('click', ()=>{
    let levelOrderResult = bst.levelOrderTraversal(); 
    document.getElementById('traversalDisplay').textContent = `Level-Order: ${levelOrderResult}`;

} 
)


isBalance.addEventListener('click', () => {

    let balance = bst.isBalanced()

    alert(balance ? "Tree is Balanced" : "Tree is NOT balanced")
});


maxH.addEventListener("click", () => {
   
    let max = bst.findMaxHeight()

    alert("Max height is " + max)
})

minH.addEventListener("click", ()=>{
    let min = bst.findMinHeight(); 
    alert("Min height is " + min); 
})
