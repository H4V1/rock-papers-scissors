function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let gameOptions = ['rock', 'paper', 'scissors'];
    
    let choise = gameOptions[randomNumber];
    return(choise);   
}
let playerScore = 0;
let computerScore = 0;
let playerSelection = document.querySelectorAll('button');
console.log(playerSelection);

playerSelection.forEach(playerSelection => playerSelection.addEventListener('click', function(e) {
    let player = e.target.textContent;
    console.log(playRound(player, getComputerChoice()))
}));

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection === computerSelection) {
        return("It's a tie")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return("You Win! Paper beats rock");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return("You Lose! Paper beats rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
        return("You Win! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        return("You Lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        return("You Win! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        return("You Lose! Scissors beats Paper")
    } else {
        
    }
}



function game() {
    let playerSelection = "";
    let computerSelection = "";

    if (playerScore > computerScore) {
        return("Congrats! You win")
    } else if (computerScore > playerScore) {
        return("You Lose! :(")
    } else {

    }
}

