class Game {
  constructor(players) {
    this.round = new Round();
    this.currentRound = 1;
    this.players = players;
    this.currentPlayer = 0;
  }

  updatePlayerTurn() {
    if (this.currentPlayer > 1) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
    domUpdates.highlightPodium(this.currentPlayer);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}