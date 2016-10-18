/*
* This is the guessing game script.
*/

/* This section runs when the script loads, but what it does is 
* create variables and constants for the game.
*/
// the random number for the player to guess
var number = getRandomInt(0, 100);
// the input field
var inputGuess = document.getElementById("inputGuess");
// the statement display
var statementDisplay = document.getElementById("statement");

// the statements
var STATEMENT_LARGER = "My number is larger.";
var STATEMENT_HIGHER = "My number is much higher than that!";
var STATEMENT_SMALLER = "My number is smaller.";
var STATEMENT_LOWER = "My number is much lower than that!";
var STATEMENT_CORRECT = "Correct!<br>My number was ";
var STATEMENT_NEW = "<br><br>Can you guess my new number?";

/* This function runs when a number is entered into the field.
* It first checks if the guess is small, then larger, otherwise it
* is correct.
*/
function guessMade() {
    var guess = inputGuess.value;
    if (guess < number) {
        var difference = number - guess;
        if (difference > 30) {
            statementDisplay.innerHTML = STATEMENT_HIGHER;
        } else {
            statementDisplay.innerHTML = STATEMENT_LARGER;
        }
    } else if (guess > number) {
        var difference = guess - number;
        if (difference > 30) {
            statementDisplay.innerHTML = STATEMENT_LOWER;
        } else {
            statementDisplay.innerHTML = STATEMENT_SMALLER;
        }
    } else {
        statementDisplay.innerHTML = STATEMENT_CORRECT + number + STATEMENT_NEW;
        number = getRandomInt(0,100);
    }
}


/* Returns a random integer between min (included) and max (excluded)
 from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}