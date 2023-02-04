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
        playPaper(computerPicks);
    } else if (playerPicks === "2") {
        playScissors(computerPicks);
    } else if (playerPicks === "3") {
        playLizard(computerPicks);
    } else {
        playSpock(computerPicks);
    }
}

// Player picks rock
function playRock(computerPicks) {
    if (computerPicks === 0) {
        draw();
    } else if (computerPicks === 1) {
        youLose();
    } else if (computerPicks === 2) {
        youWin();
    } else if (computerPicks === 3) {
        youWin();
    } else {
        youLose();
    }
}

// Player picks paper
function playPaper(computerPicks) {
    if (computerPicks === 0) {
        youWin();
    } else if (computerPicks === 1) {
        draw();
    } else if (computerPicks === 2) {
        youLose();
    } else if (computerPicks === 3) {
        youLose();
    } else {
        youWin();
    }
}

// Player picks scissors
function playScissors(computerPicks) {
    if (computerPicks === 0) {
        youLose();
    } else if (computerPicks === 1) {
        youWin();
    } else if (computerPicks === 2) {
        draw();
    } else if (computerPicks === 3) {
        youWin();
    } else {
        youLose();
    }
}

// Player picks lizard
function playLizard(computerPicks) {
    if (computerPicks === 0) {
        youLose();
    } else if (computerPicks === 1) {
        youWin();
    } else if (computerPicks === 2) {
        youLose();
    } else if (computerPicks === 3) {
        draw();
    } else {
        youWin();
    }
}

// Player picks spock
function playSpock(computerPicks) {
    if (computerPicks === 0) {
        youWin();
    } else if (computerPicks === 1) {
        youLose();
    } else if (computerPicks === 2) {
        youWin();
    } else if (computerPicks === 3) {
        youLose();
    } else {
        draw();
    }
}

// Draw function
function draw() {
    alert(`DRAW\nYou both chose ${select[playerPicks]}`);    
}

// Win function
function youWin() {
    alert(`You Win!\nYou chose ${select[playerPicks]}\nComputer chose ${select[computerPicks]}`);
    ++document.getElementById("player-score").innerText;
}

// Lose function
function youLose() {
    alert(`Computer Wins!\nYou chose ${select[playerPicks]}\nComputer chose ${select[computerPicks]}`);
    ++document.getElementById("computer-score").innerText;
}