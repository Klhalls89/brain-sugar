class Game {
 constructor(players) {
    this.round = 1;
    this.players = players;
    this.currentPlayer = 0;
  };

  getPlayers() {
    this.players = domUpdates.getPlayerNames()
    console.log(this.players)
  }

  comparePlayerGuess(clue) {
    let result = clue.validateAnswer();
    this.players[this.currentPlayer].updateScore(result, clue.pointValue);
    domUpdates.displayScore(this.players);
    domUpdates.hideCard();
  };

  updatePlayerTurn() {
    if (this.currentPlayer > 1) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
    domUpdates.highlightPodium(this.currentPlayer)
  };

  createNewRound() {
    this.round++;
  };

};

if (typeof module !== 'undefined') {
  module.exports = Game;
};