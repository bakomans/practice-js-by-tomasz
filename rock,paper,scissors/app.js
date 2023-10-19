// main var declaration

var computerChoiceDisplay = document.getElementById("computer-choice");
var yourChoiceDisplay = document.getElementById("your-choice");
var resultDisplay = document.getElementById("results");
var yourChoice
var computerChoice
var result
// possible choices user

var possibleChoices = document.querySelectorAll("button");
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
   yourChoice = e.target.id
   yourChoiceDisplay.innerHTML = yourChoice
   generateComputerChoice()
   getResult()
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

// Result display function
function getResult() {
    if (computerChoice === yourChoice) {
        result = "Its a Draw !"
    }
    if (computerChoice === "rock" && yourChoice === "paper") {
        result = "You Win !"
    }
    if (computerChoice === "rock" && yourChoice === "scissors") {
        result = "You Lost !"
    }
    if (computerChoice === "paper" && yourChoice === "scissors") {
        result = "You Win !"
    }
    if (computerChoice === "paper" && yourChoice === "rock") {
        result = "You Lost !"
    }
    if (computerChoice === "scissors" && yourChoice === "rock") {
        result = "You Win !"
    }
    if (computerChoice === "scissors" && yourChoice === "paper") {
        result = "You Lost !"
    }
    resultDisplay.innerHTML = result   
};     