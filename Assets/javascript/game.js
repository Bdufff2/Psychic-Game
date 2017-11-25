

    // list of possible computer selections
    var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l","z","x", "c", "v", "b", "n", "m"];

    // list of possible game outcomes
    var wins = 0;
    var losses = 0;

    // guesses left and previous guesses
    var guessesLeft = 9;
    var lettersGuessedSoFar = ;

    // user secetion begins the game
    document.onkeyup = function(event) {

        // determine which key was pressed
        var userGuess = event.key;

        // computer random guess seletion
        var computerGuess = computerChoices[Math.floor(math.random() * computerChoices.length)];


        // possible user guesses / if not selected nothing will happen
        if ((userGuess === "q") || ((userGuess === "w") || ((userGuess === "e") || ((userGuess === "r") || ((userGuess === "t") || ((userGuess === "y") || ((userGuess === "u") || ((userGuess === "i") || ((userGuess === "o") || ((userGuess === "p") || ((userGuess === "a") || ((userGuess === "s") || ((userGuess === "d") || ((userGuess === "f") || ((userGuess === "g") || ((userGuess === "h") || ((userGuess === "j") || ((userGuess === "k") || ((userGuess === "l") || ((userGuess === "z") || ((userGuess === "x") || ((userGuess === "c") || ((userGuess === "v") || ((userGuess === "b") || ((userGuess === "n") || ((userGuess === "m")) {
            if ((userGuess === computerGuess


            }

        // reset once win or loss







    }





