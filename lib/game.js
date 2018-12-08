class Game {
 constructor(playersArray) {
    this.round = 1;
    this.players = [
      playersArray[0],
      playersArray[1],
      playersArray[2]
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