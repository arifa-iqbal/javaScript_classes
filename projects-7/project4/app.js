const sumitBtn = document.querySelector("#submt");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultpara");

let randomNumber = parseInt(Math.random() * 100 + 1);
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
  } else {
    preGuess.push(guess);
    if (numberGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over. random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
// function to check the guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right wow 🎉`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is toooo small please try again`);
  } else if (guess > randomNumber) {
    displayMessage(`number is greater please try again`);
  }
}
// function to display the guess
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numberGuess++;
  remaining.innerHTML = `${11 - numberGuess}`;
}
// function to display message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}
// function for the end of the game
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id = "newGame" >start new game</h3>`;
  startOver.appendChild(p);
  palyGame = false;
  newGame();
}
// function to new game
function newGame() {
  const startnewGame = document.querySelector("#newGame");
  startnewGame.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    palyGame = [];
    numberGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numberGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    palyGame = true;
  });
}
