


const rock = document.querySelector("#rock"); 
const paper = document.querySelector("#paper"); 
const scissors = document.querySelector("#scissors"); 

let result = document.querySelector("#result"); 

const you = document.querySelector("#your-score"); 
const computer = document.querySelector("#computer-score"); 

let yourScore = 0; 
let computerScore = 0; 



function getResult (playerChoice){
    r = playRound(playerChoice, getComputerChoice()); 

    result.textContent = r; 
    you.textContent = yourScore; 
    computer.textContent = computerScore; 
}





function getComputerChoice(){
    const choices = ['Rock','Paper', 'Scissors']; 

    let choice = Math.floor((Math.random() * choices.length)); 

    return choices[choice]; 
}
    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            return "It's a Tie"; 
        }else if((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')){
           yourScore++; 
            return `You win ${playerSelection} beats ${computerSelection}`; 
        }else {
            computerScore++; 
            return `You lose! ${computerSelection} beats ${playerSelection}`; 
        }
    }
