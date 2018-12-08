class Round {
  constructor() {
    this.categories = [];
    this.clues = []; 
    this.createCategories();
  }

  createCategories() {
    let categoriesArray = Object.keys(data.categories);

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for (let i = 0; i < 4; i++) {
      let categoryIndex = getRandomInt(0, categoriesArray.length - 1);
      this.categories.push({category: categoriesArray[categoryIndex], ID: data.categories[categoriesArray[categoryIndex]] })
      categoriesArray.splice(categoryIndex, 1)
    }
    
    domUpdates.updateCategories(this.categories);

    console.log(this.categories)
  }

  // createClues() {
    
    
  // }

  updateRound() {
    this.round++
  }
};