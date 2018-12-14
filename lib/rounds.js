class Round {
  constructor() {
    this.categories = [];
    this.clues = []; 
    this.dailyDouble = null;
  }

  assignDailyDouble() {
    let randomIndex = Math.floor(Math.random() * this.clues.length);
    let randomDailyDouble = this.clues[randomIndex];
    this.dailyDouble = new DailyDouble(
      randomDailyDouble.question, 
      randomDailyDouble.pointValue, 
      randomDailyDouble.answer, 
      randomDailyDouble.categoryId)
    this.clues[randomIndex] = this.dailyDouble;
  }

  removeClue(currentClue) {
    let clueRemoved = this.clues.find(clue => {
      if (clue instanceof DailyDouble) {
        return clue;
      }
      return clue.categoryId === currentClue.categoryId && clue.pointValue === currentClue.pointValue;
    });
    let clueRemovedIndex = this.clues.indexOf(clueRemoved);
    this.clues.splice(clueRemovedIndex, 1);
  }

  generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createCategories() {
    let categoriesArray = Object.keys(data.categories);
    for (let i = 0; i < 4; i++) {
      let categoryIndex = this.generateRandomNumber(0, categoriesArray.length - 1);
      this.categories.push({
        category: categoriesArray[categoryIndex], 
        Id: data.categories[categoriesArray[categoryIndex]]
      })
      categoriesArray.splice(categoryIndex, 1)
    }
    domUpdates.updateCategories(this.categories);
    this.createRoundClues(this.categories);
  }

  createRoundClues(categories) {
    let currentRoundClues = categories.reduce((arr, category) => { 
      let matchingIds = data.clues.filter(clue => {
        return clue.categoryId === category.Id;
      });
      return arr.concat(matchingIds.slice(0, 4));
    }, []);
    this.clues = currentRoundClues;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Round;
}