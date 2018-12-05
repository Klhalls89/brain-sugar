const playerNames = document.querySelector('inputs')
const myAwesomeGame = new Game( this will querySelect the input fields for players names )
const myAwesomeGame.createNewGame(['matt', 'filbert'])




class Game {
 constructor(playerNames) {
  this.round = 1;
  this.players = [new Player(playerNames[0]), new Player(playerNames[1]), new Player(playerNames[2])];
  this.categories = [];
  this.clues = []
  }
  createCategories()

  createNewGame(playerNames) {
    this.players = [new Player(playerNames[0]), new Player(playerNames[1])],
  }
}
potential methods: startGame(), endGame(), updateRound(), 
 // check clues array length and if it's zero, increment this.round++ 
  

class Player {
 constructor(name, score) {
   this.name = name;
   this.score = score;
   this.isTurn = false; //changes
 }
 updateScore(points) { //this parameter can be positive or negative 
  // take the points from clue 
 }
}
potential methods: updateScore(), 

class Clue {
 constructor(question, pointValue, answer, categoryID) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryID = categoryID
    // 
 }
}
potential methods: submitPlayerGuess(), 

dailyDouble will extend Clue and use super to grab those properties 
- class dailyDouble extends Clue {
    constructor(question, pointValue, answer, categoryID) {
      super(question, pointValue, answer, categoryID);
    }
    setPlayerWager(wager) {
      this.wager = wager;
      // runs updateScore()
    }
}


converting camelCase category names to spaces: https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
