var computerChoiceDisplay = document.getElementById("computer-choice");
var yourChoiceDisplay = document.getElementById("your-choice");
var resultDisplay = document.getElementById("results");
var yourChoice

// possible choices user

var possibleChoices = document.querySelectorAll("button");
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
   yourChoice = e.target.id
   yourChoiceDisplay.innerHTML = yourChoice
}));

// computer choices