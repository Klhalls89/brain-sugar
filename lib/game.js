class Game {
 constructor(playersArray) {
    this.round = 1;
    this.players = playersArray;
    this.currentPlayer = 0;
  }

// updatePlayerTurn()
  // if (currentPlayer === 2) {
    // currentPlayer = 0;
  // } else {
  // game.currentPlayer++
  // }
  // domUpdates.highlightPodium()

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
};