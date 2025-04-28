const sumitBtn = document.querySelector("#submt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector("#guesses");
const remaining = document.querySelector("#lastResult");
const lowOrHi = document.querySelector("#lowOrHi");

const randomNumber = parseInt(Math.random() * 100 + 1);
const p = document.createElement("p");

let preGuess = [];
let numberGuess = 1;
let palyGame = true;
if (palyGame) {
  sumitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// function form validation
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a number between 1 and 100");
  } else if (guess < 1) {
    alert("please enter a number greater than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  }
}
// function to check the guess
function checkGuess(guess) {}
// function to display the guess
function displayGuess(guess) {}
// function to display message
function displayMessage(message) {}
// function for the end of the game
function endGame() {}
// function to new game
function newGame() {}
