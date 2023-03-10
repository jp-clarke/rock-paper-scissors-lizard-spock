# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a variation on the classic Rock Paper Scissors game. This site is fully responsive and makes use of JavaScript to allow the user to play Rock Paper Scissors Lizard Spock against the computer in a best of five series (first to three wins). It is intended to demonstrate the capabilities of JavaScript in a fun and relaxed environment.

![Am I Responsive screenshot](docs/screenshots/amiresponsive.PNG)

## Design

### Wireframe

The wireframes below were created to conceptualise the layout for the initial game panel as well as the final result. As the project progressed, the layout did change somewhat to suit, but the basic concept can still be seen in these initial wireframes.

![Game start wireframe](docs/balsamiq/wireframe1.PNG)
![Game result wireframe](docs/balsamiq/wireframe2.PNG)

### Typography

The fonts selected for the heading and body are "Bubblegum Sans" and "Varela Round" respectively. Both come from Google Fonts.

Bubblegum Sans is described in the Google Fonts About section as "upbeat, flavor-loaded, brushalicious letters for the sunny side of the street". This font was selected to give the user an immediate sense of fun and play.

Similarly, Varela Round was selected to provide the user with a relaxed, soft feel, as well as being easy to read.

### Colour Scheme

Each of the five options has a different colour - red for rock, yellow for paper, purple for scissors, green for lizard, and blue for Spock, all with a white hand gesture. To ensure a good contrast between all of these colours and black text, a neutral grey background was selected for the game panel.

![Selection](docs/screenshots/selection.PNG)

## Features

This is a single page site with a simple game panel which allows the user to play a game of Rock Paper Scissors Lizard Spock against a computer opponent.

### Heading

- In addition to projecting a sense of fun, the heading is bold and is intended to draw the user's attention and establish the game they are about to play.

![Heading](docs/screenshots/heading.PNG)

### Game Area

- This section is where the game will be played, and consists of player's selection, results area and scoring. The user is invited to pick one of the five options, and is informed that the first to score 3 points will win the game. A Rules button directs the user to the Rock Paper Scissors wikipedia page, which also details variations such as Rock Paper Scissors Lizard Spock.

![Game Area](docs/screenshots/game-area.PNG)

### Player's Selection

- The user makes a selection by clicking on one of the five options, which will in turn start the game between the user and the computer.

![Selection](docs/screenshots/selection.PNG)

### Scenarios

- Prior to the game beginning, the user is shown a graphic which illustrates the win/loss outcomes of the game.

![Scenarios](docs/screenshots/scenarios.PNG)

### Scoreboard

- At the bottom of the game area, a scoreboard will keep a points tally between the user and computer.

![Scoreboard](docs/screenshots/scoreboard.PNG)

### Result

- Making a selection will start the game, and the scenarios graphic will be replaced with the user's and computer's selections respectively. Depending on the selections, the user will be informed of the outcome, and a point will be given to either the user or the computer. In the event of a draw, the points tally will not change. The user can then make another selection to continue the game.

![User scores](docs/screenshots/win.PNG)
![Computer scores](docs/screenshots/loss.PNG)
![Draw](docs/screenshots/draw.PNG)

### Final Score

- When either the user or computer's score reaches three, the final result and score is displayed. The user selection buttons are disabled, and a "Play Again" button appears to invite the user to play another game. When this is clicked, the Game Area will return to its initial state.

![Final Score](docs/screenshots/final-score.PNG)

### Features to be implemented

- Allow the user to choose how many points will end the game.
- Add functionality to keep tally of game wins instead of resetting at the end of each game.
- A dedicated rules section which explains this game specifically, instead of linking to the rock paper scissors wikipedia page.

## Testing

- This site has been tested on the following browsers:
    - Chrome
    - Edge
    - Firefox
    - Opera

- Testing consisted of the following:
    - Loading the page.
    - Visual inspection of all sections of the page to ensure that the layout is as expected.
    - Play through the game several times to test various outcomes and ensure that everything works as expected.

- Responsive design testing consisted of the following:
    - Responsive design was tested using Chrome DevTools across standard screen sizes from desktop (1920x1080) down to small mobile (320x480).
    - Transitions between all media query breakpoints were observed.
    - Testing was also conducted on several available hardware devices within the above range of screen sizes.

### Validator Testing

#### HTML

- No errors were returned when checking code with the official W3C validator.

![W3C HTML validator](docs/validator/html-validation.PNG)

#### CSS

- No errors were returned when checking code with the official W3C CSS validator.

![W3C CSS validator](docs/validator/css-validation.PNG)

#### JavaScript

- No errors were returned when checking code with the official Jshint validator.
- The following metrics and warnings were returned:

![Jshint validator](docs/validator/jshint-validation.PNG)

#### Accessibility

- Page was tested for accessibility, performance, best preactices and SEO using Lighthouse in Chrome DevTools for both desktop and mobile.

![Lighthouse Report for Desktop](docs/lighthouse/lighthouse-desktop.PNG)

![Lighthouse Report for Mobile](docs/lighthouse/lighthouse-mobile.PNG)

### Fixed Bugs

- User's points tally was not iterating at times. It was found that missing brackets were stopping the youWin() function from activating.
- The event listener to allow the game to be replayed was activating without a button click. A post on Stack Overflow (link in Credits) suggested that replayGame() was being directly called when it should have been done in a callback. This solved the issue.
- When game was replayed the event listeners stopped working. It was found that these had to be reloaded after using innerHTML to repopulate the game area.
- After game ended and final scores were given it was possible to continue making selections and adding to the tally. This was solved by disabling the user selection buttons (link in credits) when the game ended.
- The game wasn't ending when the scores had reached their supposed limit. It was found that the playerScore and computerScore variables were integers, whereas the scoreLimit constant was a string. This was solved using parseInt() to make sure that scoreLimit was also an integer (link in credits).

### Unfixed Bugs

- In the event that both the player and computer make the same selection twice in a row, it is not obvious that anything has happened due to there being no change in appearance. In future, this should be rectified with an intermediate state which visually shows that there has been an iteration.

## Deployment

The site was deployed using Github Pages as follows:
- In the GitHub repository, go to settings.
- Navigate to the Pages section.
- Select Deploy from a branch from the Source drop-down menu.
- Select main from the Branch drop-down menu.
- Select /(root) from the Folder drop-down menu, and save.

The live link for the site is:<br>
https://jp-clarke.github.io/rock-paper-scissors-lizard-spock/

## Credits

### Content

- Link which helped resolve event listener bug:<br>
https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking

- Link referenced to disable user selection buttons:<br>
https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp

- Link reference for making scoreLimit an integer:
https://www.w3schools.com/jsref/jsref_parseint.asp

### Images

All hand gesture graphics, as well as graphic showing win/loss outcomes, were taken from the Rock paper scissors wikipedia page (https://en.wikipedia.org/wiki/Rock_paper_scissors) and licensed under Creative Commons.

### Acknowledgements

- I'd like to thank my mentor, Jubril Akolade for his guidance and support so far.
- As always, a big thanks to the Code Institute Slack Community for sharing their knowledge and resources.

