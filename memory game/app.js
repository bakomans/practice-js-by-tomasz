var cardArray = [
    {
        name: "fries",
        img:"img/fries.png",
    },
    {
        name: "cheeseburger",
        img:"img/cheeseburger.png",
    },
    {
        name: "hotdog",
        img:"img/hotdog.png",
    },
    {
        name: "ice-cream",
        img:"img/ice-cream.png",
    },
    {
        name: "milkshake",
        img:"img/milkshake.png",
    },
    {
        name: "pizza",
        img:"img/pizza.png",
    },
    {
        name: "fries",
        img:"img/fries.png",
    },
    {
        name: "cheeseburger",
        img:"img/cheeseburger.png",
    },
    {
        name: "hotdog",
        img:"img/hotdog.png",
    },
    {
        name: "ice-cream",
        img:"img/ice-cream.png",
    },
    {
        name: "milkshake",
        img:"img/milkshake.png",
    },
    {
        name: "pizza",
        img:"img/pizza.png",
    },
]

cardArray.sort(() => 0.5 - Math.random());

var gridDisplay = document.querySelector("#grid");

// function create board 
function createBoard () {
    for (var i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img");
        card.setAttribute("src", "img/blank.png");
        card.setAttribute("data-id", i);
        gridDisplay.appendChild(card);
    }
}
createBoard()