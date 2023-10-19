// main var declaration

var computerChoiceDisplay = document.getElementById("computer-choice");
var yourChoiceDisplay = document.getElementById("your-choice");
var resultDisplay = document.getElementById("results");
var yourChoice
var computerChoice

// possible choices user

var possibleChoices = document.querySelectorAll("button");
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
   yourChoice = e.target.id
   yourChoiceDisplay.innerHTML = yourChoice
   generateComputerChoice()
}));

// computer choices function

function generateComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) +1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
};