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
        console.log(playerPicks);
        console.log(computerPicks);
    } else if (playerPicks === "player-paper") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else if (playerPicks === "player-paper") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else if (playerPicks === "player-paper") {
        console.log(playerPicks);
        console.log(computerPicks);
    } else {
        console.log(playerPicks);
        console.log(computerPicks);
    }
}