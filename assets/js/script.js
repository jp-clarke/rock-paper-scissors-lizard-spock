// Declare global variables
let playerPicks;
let computerPicks;
let playerScore = document.getElementById("player-score").innerText;
let computerScore = document.getElementById("computer-score").innerText;
const scoreLimit = parseInt(document.getElementById("score-limit").innerText);
const select = ["rock", "paper", "scissors", "lizard", "spock"];

// Wait for DOM to load and add event listeners for buttons
// Code from Love Maths waklthrough project by Code Institute

document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "get-rules") {
                rules();
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
    drawResult();  
}

// Win function
function youWin() {
    ++playerScore;
    document.getElementById("player-score").innerText = playerScore;
    winResult();    
}

// Lose function
function youLose() {
    ++computerScore;
    document.getElementById("computer-score").innerText = computerScore;
    loseResult();
}

function rules() {
    window.open("https://en.wikipedia.org/wiki/Rock_paper_scissors");    
}

// Result
function drawResult() {
    let result = document.getElementById("computer");

    result.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <span class="caption">You chose ${select[playerPicks]}</span>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <span class="caption">Computer chose ${select[computerPicks]}</span>
            </div>
        </div>
        <div class="progress-score">
            <p class="score-point">DRAW - you both chose ${select[playerPicks]}!</p>
            <p class="scoreboard">
                YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
        </div>`;
}

function winResult() {    
    let result = document.getElementById("computer");

    result.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <span class="caption">You chose ${select[playerPicks]}</span>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <span class="caption">Computer chose ${select[computerPicks]}</span>
            </div>
        </div>
        <div class="progress-score">
            <p class="score-point">${select[playerPicks]} beats ${select[computerPicks]} - you score a point!</p>
            <p class="scoreboard">
                YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
        </div>`;

    if (playerScore === scoreLimit) {
        finalScorePlayer();
    }
}

function loseResult() {
    let result = document.getElementById("computer");

    result.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <span class="caption">You chose ${select[playerPicks]}</span>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <span class="caption">Computer chose ${select[computerPicks]}</span>
            </div>
        </div>
        <div class="progress-score">
            <p class="score-point">${select[computerPicks]} beats ${select[playerPicks]} - computer scores a point!</p>
            <p class="scoreboard">
                YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
        </div>`;

    if (computerScore === scoreLimit) {
        finalScoreComputer();
    }
}

// Final Scores
function finalScorePlayer() {    
    let finalScore = document.getElementById("computer");

    finalScore.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <span class="caption">You chose ${select[playerPicks]}</span>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <span class="caption">Computer chose ${select[computerPicks]}</span>
            </div>
        </div>
        <div class="progress-score">
            <p class="final-score">YOU WIN!<br>FINAL SCORE:</p>
            <p class="scoreboard">
                YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
            <button data-type="play-again" id="replay">PLAY AGAIN</button>
        </div>`;    
    
    let choice = document.getElementsByClassName("selection");

    for (let i = 0; i < choice.length; i++) {            
        choice[i].disabled = true; // https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp        
    }
    
    // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
    document.getElementById("replay").addEventListener("click", function() {
        replayGame();
    });
}

function finalScoreComputer() {
    let finalScore = document.getElementById("computer");

    finalScore.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <span class="caption">You chose ${select[playerPicks]}</span>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <span class="caption">Computer chose ${select[computerPicks]}</span>
            </div>
        </div>
        <div class="progress-score">
            <p class="final-score">COMPUTER WINS!<br>FINAL SCORE:</p>
            <p class="scoreboard">
                YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
            <button data-type="play-again" id="replay">PLAY AGAIN</button>
        </div>`;

    let choice = document.getElementsByClassName("selection");
    
    for (let i = 0; i < choice.length; i++) {            
        choice[i].disabled = true; // https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp        
    }

    // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
    document.getElementById("replay").addEventListener("click", function() {
        replayGame();
    });
}

// Replay Game
function replayGame() {
    playerScore = 0;
    computerScore = 0;

    let replay = document.getElementById("game-area");

    replay.innerHTML =
        `<h2>PICK ONE</h2>
        <button data-type="get-rules" id="rules">RULES</button>
        <h3>FIRST TO <span id="score-limit">${scoreLimit}</span> WINS</h3>
            
            <div id="player" class="gamer">
                <button data-type="0" class="selection">
                    <img src="/assets/images/rock.png" alt="rock hand gesture">
                    <span class="caption">Rock</span>
                </button>
                <button data-type="1" class="selection">
                    <img src="/assets/images/paper.png" alt="paper hand gesture">
                    <span class="caption">Paper</span>
                </button>
                <button data-type="2" class="selection">
                    <img src="/assets/images/scissors.png" alt="scissors hand gesture">
                    <span class="caption">Scissors</span>
                </button>
                <button data-type="3" class="selection">
                    <img src="/assets/images/lizard.png" alt="lizard hand gesture">
                    <span class="caption">Lizard</span>
                </button>
                <button data-type="4" class="selection">
                    <img src="/assets/images/spock.png" alt="spock hand gesture">
                    <span class="caption">Spock</span>
                </button>
            </div>

            <div id="computer">
                <div id="result">
                    <div class="scenarios">
                        <img src="/assets/images/rpsls.png" alt="all hand gestures">
                    </div>
                </div>
                <div class="start-score">
                    <p class="scoreboard">
                        YOU  <span id="player-score">0</span> - <span id="computer-score">0</span>  COM
                    </p>
                </div>
            </div>`;
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "get-rules") {
                rules();
            } else {
                playerPicks = this.getAttribute("data-type");
                playGame(playerPicks);
            }
        });
    }
}