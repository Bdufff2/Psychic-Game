

// list of possible computer selections
var possibleChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

// list of possible game outcomes
var wins = 0;
var losses = 0;

// guesses left 
var guessesLeft = 9;

// open array for letters guessed
var lettersGuessedSoFar = [];

// computer random guess seletion
var computerGuess = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

// key the user chooses
// var userGuess = null;

// user secetion begins the game
document.onkeyup = function (event) {

    // determine which key was pressed
    var userGuess = event.key;
    // console.log("userGuess", userGuess)
    // possible user guesses / if not selected nothing will happen
    if (possibleChoices.indexOf(userGuess) >= 0) {

        if (lettersGuessedSoFar.indexOf(userGuess) < 0 && possibleChoices.indexOf(userGuess) >= 0) {
            lettersGuessedSoFar[lettersGuessedSoFar.length] = userGuess;
            

            // calculate wins and loses
            if (userGuess === computerGuess) {
                win++;
                guessesLeft = 9;
                lettersGuessedSoFar = [];
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            } else {
                guessesLeft--;
                // make wrong guesses appear on screen
                // "letters Guessed: " + lettersGuessedSoFar;
            }

            // game resets with loss
            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 9;
                lettersGuessedSoFar = [];
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }

            // keep game updated and display in html
            var html =
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Remaining Guesses: " + guessesLeft + "</p>" +
                "<p>letters Guessed: " + lettersGuessedSoFar + "</p>";

            document.querySelector("#game").innerHTML = html;

        }
    }
}
