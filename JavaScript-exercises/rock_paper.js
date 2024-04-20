

function getComputerChoice(){
    const choices = ['Rock','Paper', 'Scissors']; 

    let choice = Math.floor((Math.random() * choices.length)); 

    return choices[choice]; 
}


    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            return 'Tie'; 
        }else if((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')){
            return `You win ${playerSelection} beats ${computerSelection}`; 
        }else {
            return `You lose! ${computerSelection} beats ${playerSelection}`; 
        }
    }


    let player = 'Rock'; 
    let computer = getComputerChoice(); 

    let result = playRound(player, computer); 
        console.log(result); 
