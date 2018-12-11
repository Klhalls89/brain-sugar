class Game {
 constructor(playersArray) {
    this.round = 1;
    this.players = playersArray;
    this.currentPlayer = 0;
  }

  updatePlayerTurn() {
    if (this.currentPlayer === 2) {
      this.currentPlayer = 0
    } else {
      this.currentPlayer++
    }
    // domUpdates.highlightPodium()
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
};