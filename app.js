function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let gameOptions = ['rock', 'paper', 'scissors'];
    
    let choise = gameOptions[randomNumber];
    return(choise);   
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    
    if(playerSelection === computer) {
        return("It's a tie")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return("You Win! Paper beats rock");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return("You Lose! Paper beats rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return("You Win! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return("You Lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return("You Win! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return("You Lose! Scissors beats Paper")
    } else {
        
    }
}

function game() {
    let playerSelection = "";
    let computerSelection = "";
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors");
        computerSelection = 
        playRound(playerSelection, );

    }


}

