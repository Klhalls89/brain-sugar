class Game {
 constructor(playersArray) {
    this.round = 1;
    this.players = [
      new Player(playersArray[0]),
      new Player(playersArray[1]),
      new Player(playersArray[2])
    ];
  }

  createPlayers() {
  }
  
  createNewRound() {
    let round = new Round();
  }

  endRound() {
  }

};

if (typeof module !== 'undefined') {
  module.exports = Game;
}