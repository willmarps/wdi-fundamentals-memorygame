//var cardOne = "king";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "queen";

//if (cardOne === cardTwo) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}


var board = document.getElementById('game-board');


function createBoard() {

  for (var i=0; i<4; i++) {

    
    var cardAddition = document.createElement('div');

   
    cardAddition.className = 'card';

   
    board.appendChild(cardAddition);
  }

}
createBoard();