class Clue {
 constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId
  };

  validateAnswer(clue) {
    if (domUpdates.playerGuess() == this.answer.toLowerCase()) {
      return 'correct';
    } else {
      return 'incorrect';
    };
  }

  getCategoryId(category){
    data.categories[category];
  };

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};