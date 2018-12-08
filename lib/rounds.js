class Round {
  constructor() {
    this.categories = [];
    this.clues = []; 
    this.createCategories();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createCategories() {
    let categoriesArray = Object.keys(data.categories);

    for (let i = 0; i < 4; i++) {
      let categoryIndex = this.getRandomInt(0, categoriesArray.length - 1);
      this.categories.push({category: categoriesArray[categoryIndex], ID: data.categories[categoriesArray[categoryIndex]] })
      categoriesArray.splice(categoryIndex, 1)
    }
    
    domUpdates.updateCategories(this.categories);
  };

  // createClues() {
  // }

  updateRound() {
    this.round++
  };
};