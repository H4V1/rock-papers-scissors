function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let gameOptions = ['rock', 'paper', 'scissors'];
    
    let choise = gameOptions[randomNumber];
    return(choise);   
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = getComputerChoice();
    
    if(player === computer) {
        return("It's a tie")
    } else if (player == "paper" && computer == "rock") {
        return("You Win! Paper beats rock");
    } else if (player == "rock" && computer == "paper") {
        return("You Lose! Paper beats rock");
    } else if (player == "rock" && computer == "scissors") {
        return("You Win! Rock beats Scissors");
    } else if (player == "scissors" && computer == "rock") {
        return("You Lose! Rock beats Scissors");
    } else if (player == "scissors" && computer == "paper") {
        return("You Win! Scissors beats Paper");
    } else if (player == "paper" && computer == "scissors") {
        return("You Lose! Scissors beats Paper")
    } else {
        
    }
}

function game() {
    let playerSelection = prompt("Rock, paper or scissors");
    const computerSelection = getComputerChoice();
    
    playRound();
    
    


}

