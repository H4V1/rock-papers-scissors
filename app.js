const playerSelection = prompt("Rock, paper or scissors");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let gameOptions = ['rock', 'paper', 'scissors'];

    let choise = gameOptions[randomNumber];
    return(choise);   
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase()
    if(player == "rock" && computer == "paper") {
        return("You Lose! Paper beats Rock")
    }
}

function game(playRound) {
    let playerScore = 0
    let computerScore = 0


}

