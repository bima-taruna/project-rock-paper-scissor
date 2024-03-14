const playerScore = document.querySelector(".player-point");
const compScore = document.querySelector(".comp-point");
const command = document.querySelector(".command");
const buttons = document.querySelectorAll("button")
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

let playerChoice = ""


buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        playerChoice = item.className
        playRound(playerChoice, getComputerChoice())
        if (playerScore.textContent == 5) {
            h1.textContent = "YOU WIN!"
            command.remove()
        } else if (compScore.textContent == 5) {
            h1.textContent = "YOU LOSE!"
            command.remove()
        }
    })
})


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

function playRound(playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        alert("Tie!")
    } else if (playerChoice == "rock" && compChoice == "paper") {
        alert("You Lose! Paper beats Rock")
        compScore.textContent++
    } else if (playerChoice == "paper" && compChoice == "scissor") {
        alert("You Lose! Scissor beats Paper")
        compScore.textContent++
    } else if (playerChoice == "scissor" && compChoice == "rock") {
        alert("You Lose! Rock beats Scissor")
        compScore.textContent++
    } else {
        alert(`You Won! ${playerChoice} beats ${compChoice}`)
        playerScore.textContent++
    }
}