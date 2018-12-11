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

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};