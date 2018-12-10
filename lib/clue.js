class Clue {
 constructor(question, pointValue, answer, categoryID) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryID = categoryID
 } 

 findMatchingCard(cat, ptVal) {
  return data.clues.find((clue) => {
    if(clue.categoryId == cat && clue.pointValue == ptVal) {
      console.log('test in Clue js', clue)
      return clue;
      }
      this.categoryID = clue;
    })
  }

  getCategoryID(cat){
    data.categories[cat];
  }

  comparePlayerGuess(clue) {
    // if ($('.js-guess-input').val().toLowerCase() === data.clues

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