class Clue {
 constructor(question, pointValue, answer, categoryID) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryID = categoryID
 }
  submitPlayerGuess() {
    // updates players points, checks to see if it needs to instantiate a new Round (based on clues.length)
  }
}
