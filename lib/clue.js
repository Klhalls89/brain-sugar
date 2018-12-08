class Clue {
 constructor(question, pointValue, answer, categoryID) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryID = categoryID
 } 

 createCard(id, ptVal){
  data.clues.find((clue) => {
    if(clue.categoryId === id && clue.pointValue === ptVal) {
      console.log('clueguess',clue)
      return clue
    }
  })
}

  submitPlayerGuess() {
    // updates players points, checks to see if it needs to instantiate a new Round (based on clues.length)
  }

};