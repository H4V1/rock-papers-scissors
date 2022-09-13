function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4)
    let gameOptions = ['rock', 'paper', 'scissors'];

    let choise = gameOptions[randomNumber];
    return(choise);   
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();

    if(player == "ROCK" && computerSelection == "PAPER") {
        return("You Lose! Paper beats Rock")
    }
}

const playerSelection = "rock";
const computerSelection = "PAPER"

