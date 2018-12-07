// this should be an object with methods to manipulate the DOM.
// let playerOneNameInput = document.querySelector('.js-p1-name-input');
let playerOneNameDisplay = document.querySelector('.p1-name-display');
let playerTwoNameDisplay = document.querySelector('.p2-name-display');
let playerThreeNameDisplay = document.querySelector('.p3-name-display');

let categoryOne = document.querySelector('.category-1');
let categoryTwo = document.querySelector('.category-2');
let categoryThree = document.querySelector('.category-3');
let categoryFour = document.querySelector('.category-4');

let domUpdates = {
  updatePlayerNames(playArr) {
    playerOneNameDisplay.innerText = playArr[0];
    playerTwoNameDisplay.innerText = playArr[1];
    playerThreeNameDisplay.innerText = playArr[2];
  },

  updateCategories(categoryArray) {
    categoryOne.innerText = categoryArray[0].category;
    categoryTwo.innerText = categoryArray[1].category;
    categoryThree.innerText = categoryArray[2].category;
    categoryFour.innerText = categoryArray[3].category;
  }


  // updateScore() will go update text on dom 
  // createYourTurnBorder()
  // displayCard() {
  //   new Clue 
  // }
  // assignCategories:
};