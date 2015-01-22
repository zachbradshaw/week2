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
var validWords = hangmanWords.filter(wordLength);
var gameWord = getRandomWord();
var turnCount = 6;

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

// turns gameWord into an array so its letters can be indexed
var displayWord = gameWord.split('');

// re"maps" the gameWord array and replaces it with underscore dashes
var dashedWord = displayWord.map(function (ch){
  return '_';
});

// takes dashedWord array, turns it into a string, and prepares it to be
// inserted into the DOM
var finalDisplay = dashedWord.join(' ');

// inserts finalDisplay into the DOM
document.querySelector('.dash-display').textContent = finalDisplay;
document.querySelector('.turn-counter').textContent = turnCount;

function setGuess(guessValue) {
  userLetter = guessValue;
}

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
    }

  finalDisplay = dashedWord.join(' ');
  document.querySelector('.dash-display').textContent = finalDisplay;
  document.querySelector('.turn-counter').textContent = turnCount;}

// document.querySelector('.turn-counter').textContent = turnCount;

console.log(gameWord);
console.log(turnCount);
