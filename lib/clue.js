class Clue {
 constructor(question, pointValue, answer, categoryID) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryID = categoryID
 } 

  getCategoryID(cat){
    data.categories[cat];
  }

  comparePlayerGuess(currentGame) {
     if ($('.js-guess-input').val().toLowerCase() == this.answer.toLowerCase()) {
      currentGame.players[currentGame.currentPlayer].score += this.pointValue;
     } else {
      currentGame.players[currentGame.currentPlayer].score -= this.pointValue;
     }
    console.log(playersArray)
    domUpdates.displayScore(currentGame.players[currentGame.currentPlayer].score);
    domUpdates.hideCard();

    console.log('test', currentGame.players[currentGame.currentPlayer].score)
  };

   // updates players points, checks to see if it needs to instantiate a new Round (based on clues.length)

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};