// this should be an object with methods to manipulate the DOM.

let domUpdates = {
  updatePlayerNames(playArr) {
    $('.p1-name-display').text(playArr[0]);
    $('.p2-name-display').text(playArr[1]);
    $('.p3-name-display').text(playArr[2]);
  },

  updateCategories(categoryArray) {
    let catOne = categoryArray[0].category;
    let result1 = catOne.replace( /([A-Z])/g, " $1" );
    let catOneFinalResult = result1.charAt(0).toUpperCase() + result1.slice(1);
    $('.category-1').text(catOneFinalResult);

    let catTwo = categoryArray[1].category;
    let result2 = catTwo.replace( /([A-Z])/g, " $1" );
    let catTwoFinalResult = result2.charAt(0).toUpperCase() + result2.slice(1);
    $('.category-2').text(catTwoFinalResult);

    let catThree = categoryArray[2].category;
    let result3 = catThree.replace( /([A-Z])/g, " $1" );
    let catThreeFinalResult = result3.charAt(0).toUpperCase() + result3.slice(1);
    $('.category-3').text(catThreeFinalResult);

    let catFour = categoryArray[3].category;
    let result4 = catFour.replace( /([A-Z])/g, " $1" );
    let catFourFinalResult = result4.charAt(0).toUpperCase() + result4.slice(1);
    $('.category-4').text(catFourFinalResult);
  },

  createCard(currentClue) {
    document.querySelector('.js-card-popup').style.zIndex = '1';
    // $('.js-card-popup').zIndex('1');
  }
};

  // updateScore() will go update text on dom 
  // createYourTurnBorder()
  //   new Clue 
  // }
  // assignCategories: