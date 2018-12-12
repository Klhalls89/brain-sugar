class Round {
  constructor() {
    this.categories = [];
    this.clues = []; 
    this.createCategories();
    this.dailyDouble = null;
    this.assignDailyDouble();
  };

  assignDailyDouble(){
    let randomIndex = Math.floor(Math.random() * this.clues.length);
    let randomDailyDouble = this.clues[randomIndex]
    this.dailyDouble = new DailyDouble(randomDailyDouble.question, randomDailyDouble.pointValue, randomDailyDouble.answer, randomDailyDouble.categoryId)
    this.clues[randomIndex] = this.dailyDouble
    console.log(this.dailyDouble)
  };

  removeClue(currentClue) {
    let clueRemoved = this.clues.find(clue => {
      return clue.categoryId === currentClue.categoryId &&
      clue.pointValue === currentClue.pointValue;
    });
    let clueRemovedIndex = this.clues.indexOf(clueRemoved);
    this.clues.splice(clueRemovedIndex, 1);
  };

  checkCluesArray(game) {
    if (this.clues.length === 0) {
      console.log('true');
      // game.round++;
    }
  };

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  createCategories() {
    let categoriesArray = Object.keys(data.categories);
    for (let i = 0; i < 4; i++) {
      let categoryIndex = this.getRandomInt(0, categoriesArray.length - 1);
      this.categories.push({category: categoriesArray[categoryIndex], Id: data.categories[categoriesArray[categoryIndex]] })
      categoriesArray.splice(categoryIndex, 1)
    };
    domUpdates.updateCategories(this.categories);
    this.createRoundClues(this.categories);
  };

  createRoundClues(cats) {
    let currentRoundClues = cats.reduce((arr, cat) => { 
      let matchingIds = data.clues.filter(clue => {
        return clue.categoryId === cat.Id;
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