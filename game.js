class Game {
 constructor(playersArray) {
    this.round = 1;
    this.players = [new Player(playersArray[0]), new Player(playersArray[1]), new Player(playersArray[2])];
  }

  createPlayers() {
  }
  
  createNewRound() {
    let round = new Round();
    // round.createCategories, round.createClues
    // domUpdates.assignCategories
  }

  endRound() {
  }

};