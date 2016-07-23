//var cardOne = "king";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "queen";

//if (cardOne === cardTwo) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}

// cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

// cards in play
var cardsInPlay = [];


var board = document.getElementById('game-board');


function createBoard() {

  for (var i=0; i<cards.length; i++) {

    
    var cardAddition = document.createElement('div');

   
    cardAddition.className = 'card';

// sets card's 'data-card' to be the element of the array
  
    cardAddition.setAttribute('data-card', cards[i]);

// when a card is clicked the function isTwoCards runs
    
    cardAddition.addEventListener('click', isTwoCards);

// append the card to the board

    board.appendChild(cardAddition);
   
  }

}

//checks if there are cards in play

function isTwoCards() {

  // add card to array of cards being viewed
  
  cardsInPlay.push(this.getAttribute('data-card'));

	// show the card's image

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  // check for a match
  if (cardsInPlay.length === 2) {
    // cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear for next try
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();