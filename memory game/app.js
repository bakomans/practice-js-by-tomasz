// create an array


var cardArray = [
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

var gridDisplay = document.querySelector("#grid");
var resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenIds = [];
var cardsWon = [];

// function create board
function createBoard() {
  for (var i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
// call create board

createBoard();

// function check match

function checkMatch() {
  var cards = document.querySelectorAll("img");
  var optionOneId = cardsChosenIds[0];
  var optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId){
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("You clicled the same image !")
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("you found the match");
    cards[optionOneId].setAttribute("src", "img/white.png");
    cards[optionTwoId].setAttribute("src", "img/white.png");
    cards[optionOneId].removeEventListener("sclick", flipCard);
    cards[optionTwoId].removeEventListener("sclick", flipCard);
    cardsWon.push(cardsChosen);
  }else {
    cards[optionOneId].setAttribute("src", "img/blank.png")
    cards[optionTwoId].setAttribute("src", "img/blank.png")
    alert("Please try again !")
  }
  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length == cardArray.length/2) {
    resultDisplay.textContent = "congratulation all is yours";
  }
}

// flip card function

function flipCard() {
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log("clicked", cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
