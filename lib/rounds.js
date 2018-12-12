class Round {
  constructor(categories = [], clues = [], dailyDouble = null) {
    this.categories = categories;
    this.clues = clues; 
    this.dailyDouble = dailyDouble;
  };

  assignDailyDouble(){
    let randomIndex = Math.floor(Math.random() * this.clues.length);
    let randomDailyDouble = this.clues[randomIndex]
    this.dailyDouble = new DailyDouble(randomDailyDouble.question, randomDailyDouble.pointValue, randomDailyDouble.answer, randomDailyDouble.categoryId)
    this.clues[randomIndex] = this.dailyDouble
  };

  removeClue(currentClue) {
    let clueRemoved = this.clues.find(clue => {
      if (clue instanceof DailyDouble) {
        this.clues.splice(this.clues.indexOf(clue), 1);
      } else { 
        return clue.categoryId === currentClue.categoryId &&
        clue.pointValue === currentClue.pointValue;
      }
    });
    let clueRemovedIndex = this.clues.indexOf(clueRemoved);
    this.clues.splice(clueRemovedIndex, 1);
  };

  checkCluesArray(game) {
    if (this.clues.length === 0) {
      game.round++;
      console.log('clues array empty', game.round)
      // domUpdates.updateRound(game.round);
    }
  };

  generateRandomNumber(min, max) {
    // expect number > 5 to be true 
    // expect number < 5 to be false 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  createCategories() {
    let categoriesArray = Object.keys(data.categories);
    for (let i = 0; i < 4; i++) {
      let categoryIndex = this.generateRandomNumber(0, categoriesArray.length - 1);
      this.categories.push({category: categoriesArray[categoryIndex], Id: data.categories[categoriesArray[categoryIndex]] })
      categoriesArray.splice(categoryIndex, 1)
    };
    domUpdates.updateCategories(this.categories);
    this.createRoundClues(this.categories);
  };

// rename these parameters 
  createRoundClues(categories) {
    let currentRoundClues = categories.reduce((arr, category) => { 
      let matchingIds = data.clues.filter(clue => {
        return clue.categoryId === category.Id;
      });
      return arr.concat(matchingIds.slice(0, 4));
    }, []);
    this.clues = currentRoundClues;
  };

  updateRound() {
    this.round++
  };
};

if (typeof module !== 'undefined') {
  module.exports = Round;
};