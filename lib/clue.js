class Clue {
 constructor(question, pointValue, answer, categoryID) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryID = categoryID
 } 

 createCard(cat, ptVal){
  return data.clues.find((clue) => {
    if(clue.categoryId == cat && clue.pointValue == ptVal) {
      console.log('clueguess',clue)
      return clue
    }
    this.categoryID = clue;
  })
}

  getCategoryID(cat){
    data.categories[cat]
  }

  submitPlayerGuess() {
    // updates players points, checks to see if it needs to instantiate a new Round (based on clues.length)
  }

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};