// this should be an object with methods to manipulate the DOM.

let playerOneNameInput = document.querySelector('.js-p1-name-input');
let playerOneNameDisplay = document.querySelector('.p1-name-display');

let domUpdates = {
  // updateScore: function()
  updatePlayerNames: function() {
    playerOneNameDisplay.innerText = playerOneNameInput.value;
  }
  // updateScore: function()
  // createYourTurnBorder: function()
  // displayCard: function() {
  //   new Clue 
  // }
  // assignCategories:
};