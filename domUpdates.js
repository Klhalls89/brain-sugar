// this should be an object with methods to manipulate the DOM.
// let playerOneNameInput = document.querySelector('.js-p1-name-input');
let playerOneNameDisplay = document.querySelector('.p1-name-display');
let playerTwoNameDisplay = document.querySelector('.p2-name-display');
let playerThreeNameDisplay = document.querySelector('.p3-name-display');


let domUpdates = {
  updatePlayerNames(playArr) {
    playerOneNameDisplay.innerText = playArr[0];
    playerTwoNameDisplay.innerText = playArr[1];
    playerThreeNameDisplay.innerText = playArr[2];
  },

  // updateScore: function() will go update text on dom 
  // createYourTurnBorder: function() 
  // displayCard: function() {
  //   new Clue 
  // }
  // assignCategories:
};