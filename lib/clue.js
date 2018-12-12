class Clue {
 constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId
  };

  // validateAnswer(clue) {
  //   if (domUpdates.playerGuess() == clue.answer.toLowerCase()) {
  //     return true;
  //    } else {
  //     return false;
  //   };
  // }

  getCategoryId(category){
    data.categories[category];
  };

};

if (typeof module !== 'undefined') {
  module.exports = Clue;
};