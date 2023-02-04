// Wait for DOM to load and add event listeners for buttons
// Code from Love Maths waklthrough project by Code Institute

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset-score") {
                console.log("Reset Scores");
            } else {
                let playerPicks = this.getAttribute("data-type");
                playGame(playerPicks);
            }
        });
    }
});

// Player choice and computer choice
function playGame(playerPicks) {
    let computerPicks = Math.floor(Math.random() * 5);
    
    if (playerPicks === "player-rock") {
        playRock(computerPicks);
    } else if (playerPicks === "player-paper") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else if (playerPicks === "player-scissors") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else if (playerPicks === "player-lizard") {
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
        alert("DRAW\nYou chose Rock\nCOM chose Rock");
    } else if (computerPicks === 1) {
        alert("LOSE\nYou chose Rock\nCOM chose Paper");
    } else if (computerPicks === 2) {
        alert("WIN\nYou chose Rock\nCOM chose Scissors");
    } else if (computerPicks === 3) {
        alert("WIN\nYou chose Rock\nCOM chose Lizard");
    } else {
        alert("LOSE\nYou chose Rock\nCOM chose Spock");
    }
}