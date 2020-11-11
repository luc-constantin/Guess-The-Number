let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100;

function rangeUpdate() {
  const rangeOutput = document.getElementById("rangeOutput");
  rangeOutput.innerText = `${low} - ${high}`
  rangeOutput.style.marginLeft = low + '%';
  rangeOutput.style.marginRight = 100 - high + '%';
  rangeOutput.classList.add("flash");


  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + '%';
  lowValue.style.background = "#ffb35c ";
  lowValue.style.borderRadius = "4px";

  const space = document.getElementById("space");
  space.style.flex = low - low + '%';
  space.style.background = "#62bcf0";
  space.style.borderRadius = "2px";


  const highValue = document.getElementById("high");
  highValue.style.flex = 100 - high + '%';
  highValue.style.background = "#ffb35c ";
  highValue.style.borderRadius = "4px";

  
}

function endGame() {
document.getElementById("newGameButton").style.display = "inline";
document.getElementById('inputBox').setAttribute("readonly", "readonly");
}
function newGame() {
  window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess); 
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

function startGame() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
    maxGuesses = 10;
    startGame();

}

function hardMode() {
    maxGuesses = 7;
    startGame();
}

function proMode() {
  maxGuesses = 5;
  startGame();
}
function compareGuess() {
  const userGuess =  Number(document.getElementById("inputBox").value);
  userGuesses.push(" " + userGuess);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++
  document.getElementById("attempts").innerHTML = attempts;
  if (attempts < maxGuesses)
  if(userGuess > computerGuess){
   if (userGuess < high) high = userGuess;
    document.getElementById("textOutput").innerHTML 
    = "Guess to high, try a lower one 🙂 "
    document.getElementById("inputBox").value = "";
    } else if (userGuess < computerGuess) {
      if (userGuess > low) low = userGuess;
      document.getElementById("textOutput").innerHTML = 
      "Guess to low, try a higher one 🙂 "
      document.getElementById("inputBox").value = "";
    }else {
      document.getElementById("textOutput").innerHTML = 
      "YAY!👏  You Won! 🏆 Correct guess after  " + attempts + " attempts";
      endGame();
    } else {
        if(userGuess > computerGuess){
            document.getElementById("textOutput").innerHTML = 
            "You Lose! 😳 but you can try again, <br> The number was " + computerGuess;
             endGame();
            } else if (userGuess < computerGuess) {
              document.getElementById("textOutput").innerHTML = 
              "You Lose! 😳 but you can try again, <br> The number was " + computerGuess;
             endGame();
            }else {
              document.getElementById("textOutput").innerHTML = 
              "YAY!👏  Correct after  " + attempts + " attempts";
             endGame();
           }
    }
    rangeUpdate();
}
