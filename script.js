function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3) + 1
    switch (compChoice) {
        case 1:
            return "paper"
        case 2:
            return "scissor"
        default:
            return "rock"
    }
}

let playerChoice = "rock"

function playRound(playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        return "Tie!"
    } else if (playerChoice == "rock" && compChoice == "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerChoice == "paper" && compChoice == "scissor") {
        return "You Lose! Scissor beats Paper"
    } else if (playerChoice == "scissor" && compChoice == "rock") {
        return "You Lose! Rock beats Scissor"
    } else {
        return `You Won! ${playerChoice} beats ${compChoice}`
    }
}

// console.log(playRound(playerChoice, getComputerChoice()))
