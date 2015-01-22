// TODO: Your job is to write logic that will
// give the user one of three random fortunes
//
// Use the alert("Some text value") function
// to tell the user their fortune.

// var number = Math.floor(Math.random() * 3) + 1;


function tellFortune () {
  var number = Math.floor(Math.random() * 3) + 1;
  
  if (number === 1) {
    alert("You will befriend a stranger at lunch today.")
    // document.querySelector('.fortune-result').textContent = "You will befriend
    // a stranger at lunch today.";
  } else if (number === 2) {
    alert("Your luck has increased, go play the lottery.");
    // document.querySelector('.fortune-result').textContent = "Your luck has
    // increased, go play the lottery.";
  } else {
    alert("Death is imminent, stay home.");
    // document.querySelector('.fortune-result').textContent = "Death is
    // imminent, stay home.";
  }
}
