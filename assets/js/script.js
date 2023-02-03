// Wait for DOM to load and add event listeners for buttons
// Code from Love Maths waklthrough project by Code Institute

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset-score") {
                console.log("Reset Scores");
            } else {
                console.log("Play Game");
            }
        });
    }
});