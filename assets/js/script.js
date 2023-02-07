// Declare global variables
let playerPicks;
let computerPicks;
let playerScore = 0;//document.getElementById("player-score").innerText;
let computerScore = 0;//document.getElementById("computer-score").innerText;
let scoreLimit = parseInt(document.getElementById("score-limit").innerText);
const select = ["rock", "paper", "scissors", "lizard", "spock"]

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

        /*button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset-score") {
                scoreReset();
            } else if (this.getAttribute("data-type") === "get-rules") {
                rules();
            } else {
                playerPicks = this.getAttribute("data-type");
                playGame(playerPicks);
            }
        });*/
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

// Reset scores
function scoreReset() {
    
    playerScore = 0;    
    document.getElementById("player-score").innerText = "0";
    
    computerScore = 0;
    document.getElementById("computer-score").innerText = "0";
    
}

function rules() {
    console.log("Rules")
}

// Result
function drawResult() {
    // https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
    // document.getElementById("reset").disabled = true;

    let result = document.getElementById("computer");

    result.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <figcaption>You chose ${select[playerPicks]}</figcaption>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <figcaption>Computer chose ${select[computerPicks]}</figcaption>
            </div>
        </div>
        <div class="progress-score">
            <p class="score-point">DRAW - you both chose ${select[playerPicks]}!</p>
            <p class="scoreboard">
                YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
        </div>`;

    /*
    let result = document.getElementById("game-area");

    result.innerHTML =
        `<h2 class="choice">YOU CHOSE</h2>
            <div id="player" class="gamer">
                <div class="choice">
                    <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                </div>
                <div class="outcome">
                    <p class="game-result">DRAW</p>
                    <p class="game-result">You both chose ${select[playerPicks]}</p>
                    
                </div>
            </div>
        <h2 class="choice">COMPUTER CHOSE</h2>
            <div id="computer" class="gamer">
                <div class="choice">
                    <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                </div>
                <div class="progress-score">
                    <p class="score-result">
                        YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
                    </p>
                    <button data-type="play-again" id="replay">PLAY AGAIN</button>
                </div>
            </div>`;

    // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
        document.getElementById("replay").addEventListener("click", function() {
            replayGame()
        });*/
}

function winResult() {
    // https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
    // document.getElementById("reset").disabled = true;

    
    let result = document.getElementById("computer");

    result.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <figcaption>You chose ${select[playerPicks]}</figcaption>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <figcaption>Computer chose ${select[computerPicks]}</figcaption>
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

    /*
    let result = document.getElementById("game-area");

    result.innerHTML =
        `<h2 class="choice">YOU CHOSE</h2>
            <div id="player" class="gamer">
                <div class="choice">
                    <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                </div>
                <div class="outcome">
                    <p class="game-result">YOU WIN!</p>
                    <p class="game-result">${select[playerPicks]} beats ${select[computerPicks]}</p>
                    
                </div>
            </div>
        <h2 class="choice">COMPUTER CHOSE</h2>
            <div id="computer" class="gamer">
                <div class="choice">
                    <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                </div>
                <div class="progress-score">
                    <p class="score-result">
                        YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
                    </p>
                    <button data-type="play-again" id="replay">PLAY AGAIN</button>
                </div>
            </div>`;

    // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
        document.getElementById("replay").addEventListener("click", function() {
            replayGame()
        }); */
}

function loseResult() {
    // https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
    // document.getElementById("reset").disabled = true;

    let result = document.getElementById("computer");

    result.innerHTML =
        `<div id="result">
            <div class="game">
                <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                <figcaption>You chose ${select[playerPicks]}</figcaption>
            </div>
            <div class="game">
                <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                <figcaption>Computer chose ${select[computerPicks]}</figcaption>
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

    /*
    let result = document.getElementById("game-area");

    result.innerHTML =
        `<h2 class="choice">YOU CHOSE</h2>
            <div id="player" class="gamer">
                <div class="choice">
                    <img src="/assets/images/${select[playerPicks]}.png" alt="${select[playerPicks]} hand gesture">
                </div>
                <div class="outcome">
                    <p class="game-result">COMPUTER WINS!</p>
                    <p class="game-result">${select[computerPicks]} beats ${select[playerPicks]}</p>
                    
                </div>
            </div>
        <h2 class="choice">COMPUTER CHOSE</h2>
            <div id="computer" class="gamer">
                <div class="choice">
                    <img src="/assets/images/${select[computerPicks]}.png" alt="${select[computerPicks]} hand gesture">
                </div>
                <div class="progress-score">
                    <p class="score-result">
                        YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
                    </p>
                    <button data-type="play-again" id="replay">PLAY AGAIN</button>                
                </div>
            </div>`;

    // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
        document.getElementById("replay").addEventListener("click", function() {
            replayGame()
        }); */
}

// Final Scores
function finalScorePlayer() {
    let finalScore = document.getElementById("computer");

    finalScore.innerHTML =
        `<div class="progress-score">   
            <h2>CONGRATULATIONS!<br>YOU WIN THE GAME!<br>FINAL SCORES:</h2>
            <p class="final-score">
                    YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
            <button data-type="play-again" id="replay">PLAY AGAIN</button>
        </div>`;

        // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
        document.getElementById("replay").addEventListener("click", function() {
            replayGame()
        });
}

function finalScoreComputer() {
    let finalScore = document.getElementById("computer");

    finalScore.innerHTML =
        `<div class="progress-score">   
            <h2>COMMISERATIONS!<br>COMPUTER WINS THE GAME!<br>FINAL SCORES:</h2>
            <p class="final-score">
                    YOU  <span id="player-score">${playerScore}</span> - <span id="computer-score">${computerScore}</span>  COM
            </p>
            <button data-type="play-again" id="replay">PLAY AGAIN</button>
        </div>`;

        // https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking
        document.getElementById("replay").addEventListener("click", function() {
            replayGame()
        });
}

// Replay Game
function replayGame() {
    // https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
    // document.getElementById("reset").disabled = false;

    let replay = document.getElementById("game-area");

    replay.innerHTML =
        `<h2>PICK ONE!</h2>
            <div id="player" class="gamer">
                <button data-type="0" class="selection">
                    <img src="/assets/images/rock.png" alt="rock hand gesture">
                </button>
                <button data-type="1" class="selection">
                    <img src="/assets/images/paper.png" alt="paper hand gesture">
                </button>
                <button data-type="2" class="selection">
                    <img src="/assets/images/scissors.png" alt="scissors hand gesture">
                </button>
                <button data-type="3" class="selection">
                    <img src="/assets/images/lizard.png" alt="lizard hand gesture">
                </button>
                <button data-type="4" class="selection">
                    <img src="/assets/images/spock.png" alt="spock hand gesture">
                </button>
            </div>
        <h2>COMPUTER PICKS</h2>
            <div id="computer" class="gamer">            
                <div id="com-rock" class="selection">
                    <img src="/assets/images/rock.png" alt="rock hand gesture">
                </div>
                <div id="com-paper" class="selection">
                    <img src="/assets/images/paper.png" alt="paper hand gesture">
                </div>
                <div id="com-scissors" class="selection">
                    <img src="/assets/images/scissors.png" alt="scissors hand gesture">
                </div>
                <div id="com-lizard" class="selection">
                    <img src="/assets/images/lizard.png" alt="lizard hand gesture">
                </div>
                <div id="com-spock" class="selection">
                    <img src="/assets/images/spock.png" alt="spock hand gesture">
                </div>
            </div>`;
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset-score") {
                scoreReset();
            } else {
                playerPicks = this.getAttribute("data-type");
                playGame(playerPicks);
            }
        });
    }        

}