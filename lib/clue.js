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

  comparePlayerGuess() {
  let player = new Player();
  console.log('comparePlayerGuess', player)
   if ($('.js-guess-input').val().toLowerCase() == this.answer.toLowerCase()) {
    player.updateScore(this.pointValue, 'add')
   } else {
    player.updateScore(this.pointValue, 'sub')
   }
   domUpdates.hideCard();
  };

 
  // access the ptVal associated with that question 
  // and add or subtract that value from the players score (Player.updateScore(ptVal))
  // invoke domUpdate method to update it on the podium 

   // updates players points, checks to see if it needs to instantiate a new Round (based on clues.length)

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};