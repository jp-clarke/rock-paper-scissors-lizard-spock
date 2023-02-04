// Declare global variables
let playerPicks;
let computerPicks;
const select = ["rock", "paper", "scissors", "lizard", "spock"]

// Wait for DOM to load and add event listeners for buttons
// Code from Love Maths waklthrough project by Code Institute

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset-score") {
                console.log("Reset Scores");
            } else {
                playerPicks = this.getAttribute("data-type");
                playGame(playerPicks);
            }
        });
    }
});

// Player choice and computer choice
function playGame(playerPicks) {
    computerPicks = Math.floor(Math.random() * 5);
    
    if (playerPicks === "0") {
        playRock(computerPicks);
    } else if (playerPicks === "1") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else if (playerPicks === "2") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else if (playerPicks === "3") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else {
        console.log(playerPicks);
        console.log(computerPicks);
    }
}

// Player picks rock
function playRock(computerPicks) {
    if (computerPicks === 0) {
        console.log(playerPicks);
        alert("DRAW\nYou chose Rock\nCOM chose Rock");
    } else if (computerPicks === 1) {
        console.log(playerPicks);
        alert("LOSE\nYou chose Rock\nCOM chose Paper");
    } else if (computerPicks === 2) {
        console.log(playerPicks);
        alert("WIN\nYou chose Rock\nCOM chose Scissors");
    } else if (computerPicks === 3) {
        console.log(playerPicks);
        alert("WIN\nYou chose Rock\nCOM chose Lizard");
    } else {
        console.log(playerPicks);
        alert("LOSE\nYou chose Rock\nCOM chose Spock");
    }
}

// Player picks paper


// Player picks scissors


// Player picks lizard


// Player picks spock


// Draw function


// Win function


// Lose function