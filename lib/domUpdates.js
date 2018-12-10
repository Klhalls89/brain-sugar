// this should be an object with methods to manipulate the DOM.

let domUpdates = {
  updatePlayerNames(playArr) {
    $('.p1-name-display').text(playArr[0].playerName);
    $('.p2-name-display').text(playArr[1].playerName);
    $('.p3-name-display').text(playArr[2].playerName);
  },

  createCard(currentClue) {
    document.querySelector('.js-card-popup').style.zIndex = '1';
    $('.pop-question').text(currentClue.question); 
  },

  hideCard() {
    document.querySelector('.js-card-popup').style.zIndex = '-1';
  },

  updateCategories(categoryArray) {
    // forEach loop here by creating a template literal for each $
    let catOne = categoryArray[0].category;
    let result1 = catOne.replace( /([A-Z])/g, " $1" );
    let catOneFinalResult = result1.charAt(0).toUpperCase() + result1.slice(1);
    $('.category-1').text(catOneFinalResult);
    $('.category-1').attr('id',categoryArray[0].ID)

    let catTwo = categoryArray[1].category;
    let result2 = catTwo.replace( /([A-Z])/g, " $1" );
    let catTwoFinalResult = result2.charAt(0).toUpperCase() + result2.slice(1);
    $('.category-2').text(catTwoFinalResult);
    $('.category-2').attr('id',categoryArray[1].ID)

    let catThree = categoryArray[2].category;
    let result3 = catThree.replace( /([A-Z])/g, " $1" );
    let catThreeFinalResult = result3.charAt(0).toUpperCase() + result3.slice(1);
    $('.category-3').text(catThreeFinalResult);
    $('.category-3').attr('id',categoryArray[2].ID)

    let catFour = categoryArray[3].category;
    let result4 = catFour.replace( /([A-Z])/g, " $1" );
    let catFourFinalResult = result4.charAt(0).toUpperCase() + result4.slice(1);
    $('.category-4').text(catFourFinalResult);
    $('.category-4').attr('id',categoryArray[3].ID)
  }

};

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
};

  // updateScore() will go update text on dom 
  // createYourTurnBorder()
  //   new Clue 
  // }
  // assignCategories: