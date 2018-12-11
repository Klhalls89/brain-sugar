class Clue {
 constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId
  } 

  getCategoryId(cat){
    data.categories[cat];
  }

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};