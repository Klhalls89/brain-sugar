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
    console.log('comparePlayerGuess',this.answer)
   if ($('.js-guess-input').val().toLowerCase() == this.answer.toLowerCase()){
    console.log('comparePlayerGuess', 'fire')
   }
  };

  // take the value of the input field and compare it to the clue.answer
  // we will have to toLowerCase() on both 
  // access the ptVal associated with that question 
  // and add or subtract that value from the players score (Player.updateScore(ptVal))
  // invoke domUpdate method to update it on the podium 

   // updates players points, checks to see if it needs to instantiate a new Round (based on clues.length)

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};