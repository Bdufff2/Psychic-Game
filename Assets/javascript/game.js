

// list of possible computer selections
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

// list of possible game outcomes
var wins = 0;
var losses = 0;

// guesses left and previous guesses
var guessesLeft = 9;
var lettersGuessedSoFar = [];

// user secetion begins the game
document.onkeyup = function (event) {

    // determine which key was pressed
    var userGuess = event.key;

    // computer random guess seletion
    var computerGuess = computerChoices[Math.floor(math.random() * computerChoices.length)];


    // possible user guesses / if not selected nothing will happen
    if ((userGuess === "q") || ((userGuess === "w") || ((userGuess === "e") || ((userGuess === "r") || ((userGuess === "t") || ((userGuess === "y") || ((userGuess === "u") || ((userGuess === "i") || ((userGuess === "o") || ((userGuess === "p") || ((userGuess === "a") || ((userGuess === "s") || ((userGuess === "d") || ((userGuess === "f") || ((userGuess === "g") || ((userGuess === "h") || ((userGuess === "j") || ((userGuess === "k") || ((userGuess === "l") || ((userGuess === "z") || ((userGuess === "x") || ((userGuess === "c") || ((userGuess === "v") || ((userGuess === "b") || ((userGuess === "n") || ((userGuess === "m")) {

        // calculate wins and loses
        if (userGuess === computerGuess) {
            win++;
        } else if (userGuess != computerGuess) {
            guessesLeft--;
            // make wrong guesses appear on screen
        } else if (userGuess != computerGuess) {
            "letters Guessed: " + lettersGuessedSoFar;
        }

        if (guessesLeft === 0) {
            losses++
        }     }

    


    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Remaining Guesses: " + guessesLeft + "</p>" +
        "<p>letters Guessed: " + lettersGuessedSoFar + "</p>" +


    document.getElementById("game").innerHTML = html;


            // to do's:
    // need function to reset the game once the correct letter is picked or loss
    // need to make sure that once a letter is picked it cannot be picked again






}





