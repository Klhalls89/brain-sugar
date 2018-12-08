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
    this.round++;
  }

  endRound() {
  }

};

if (typeof module !== 'undefined') {
  module.exports = Game;
}