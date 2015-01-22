// TODO: Write a number guessing game.
//
// Rules: The game will generate a number between 1 and 10,
// inclusive. So, it might generate a 1. Or it might generate
// a 10, or any whole number in between.
//
// The user should enter a number into the text box and then
// click "guess".
//
// You should then tell the user (via alert or another way)
// if her guess was too big, too small, or just right!
//
//
// Look at the HTML, and note that you'll need to
// write two functions:
//
// setGuess(guessValueAsString)
// guess()
//
// Feel free to rename the guessValueAsString parameter
var answer = Math.floor(Math.random() * 10) + 1;
var guessValue = 0;

function setGuess (guessValueString) {
  guessValue = Number(guessValueString);
}

function guess () {
  if (guessValue < answer) {
    document.querySelector('.guess-result').textContent = "Too low!";
    // alert("Too low!");
  }
  else if (guessValue > answer) {
    document.querySelector('.guess-result').textContent = "Too high!";
    // alert("Too high!");
  }
  else if (guessValue === NaN) {
    document.querySelector('.guess-result').textContent = "Please enter a valid number";
  }
  else {
    document.querySelector('.guess-result').textContent = "You got it!";
    // alert("You got it!");
  }
}
