var hangmanWords = [
"the","of","and","a","to","in","is","you","that","it","he",
"was","for","on","are","as","with","his","they","I","at","be",
"this","have","from","or","one","had","by","word","but","not",
"what","all","were","we","when","your","can","said","there",
"use","an","each","which","she","do","how","their","if","will",
"up","other","about","out","many","then","them","these","so",
"some","her","would","make","like","him","into","time","has",
"look","two","more","write","go","see","number","no","way",
"could","people","my","than","first","water","been","call",
"who","oil","its","now","find","long","down","day","did","get",
"come","made","may","part"
];

// setting variables
var userLetter;

var prevLetters = userLetter;

var validWords = hangmanWords.filter(wordLength);

var gameWord = getRandomWord();

var turnCount = 6;

var gameMessage = "You have " + turnCount + " turn(s) left before this dude gets hanged...no pressure.";

// turns gameWord into an array so its letters can be indexed
var displayWord = gameWord.split('');

// re"maps" the gameWord array and replaces it with underscore dashes
var dashedWord = displayWord.map(function (ch){
  return '_';
});

// takes dashedWord array, turns it into a string, and prepares it to be
// inserted into the DOM
var finalDisplay = dashedWord.join(' ');

// function that filters out all words in the hangmanWords variable
// that are shorter than three letters
function wordLength(word) {
  return word.length >= 3;
}

// function that uses Math.floor and Math.random to pull a random word
// out of the hangmanWords array
function getRandomWord() {
  return validWords[Math.floor(Math.random() * validWords.length)];
}

// inserts finalDisplay into the DOM
document.querySelector('.dash-display').textContent = finalDisplay;
document.querySelector('.turn-counter').textContent = gameMessage;

// Assigns the value (or letter) of the user's guess to userLetter, which was
// previously undefined.
function setGuess(guessValue) {
  userLetter = guessValue;
}

// the big one:
// checkGuess is the function that powers hangman.
//
// Setting the variable 'correct' to FALSE allows the turnCount variable to
// decrement one number for every wrong guess, it is set to TRUE within the
// first if statement.
//
// The for loop starts at the 0 index of gameWord, or the first letter.
// Depending on the length of the word, it will count "up" until it reaches the
// end of the word, or the final character in the index.
//
// The first if statement checks to see if userLetter is equal to each
// letter in the index of displayWord, an array compiled from the random word
// generated with every page reload. If the userLetter matches one or more of
// the letters in gameWord, those letters are revealed in the DOM and replace
// the underscore placeholders. Setting the local variable 'correct' to TRUE
// makes sure that turnCount stays the same on a correct guess.
//
// The second if statement if for an incorrect guess, if the letter goes through
// the first if statement without finding a match, the local variable 'correct'
// remains false, and turnCount goes down by one accordingly.
//
// The global variable 'finalDisplay' is reconverted back into a string using
// the .join method.
//
// The correctly guessed letters are inserted into the DOM if applicable with
// the first document.querySelector and the turnCount is updated using the
// second document.querySelector.
//
// And that's what an informative comment looks like...I think.

function checkGuess() {
  var correct = false

  for (i = 0; i < gameWord.length; i++) {
    if (userLetter === displayWord[i]) {
      dashedWord[i] = userLetter;
      correct = true;
    }
  }
    if (correct === false) {
      turnCount = --turnCount;
      prevLetters.push(guessValue);
    }

  finalDisplay = dashedWord.join(' ');
  document.querySelector('.dash-display').textContent = finalDisplay;
  document.querySelector('.turn-counter').textContent = "You have " + turnCount + " turn(s) left before this dude gets hanged...no pressure.";
  document.querySelector('.prev-letters').textContent = prevLetters;

}



console.log(gameWord);
console.log(turnCount);
