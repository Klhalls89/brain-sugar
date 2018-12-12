class Game {
 constructor(playersArray) {
    this.round = 1;
    this.players = playersArray;
    this.currentPlayer = 0;
  };

  comparePlayerGuess(clue) {
    if ($('.js-guess-input').val().toLowerCase() == clue.answer.toLowerCase()) {
      this.players[this.currentPlayer].score += clue.pointValue;
     } else {
      this.players[this.currentPlayer].score -= clue.pointValue;
     }
    domUpdates.displayScore(playersArray);
    domUpdates.hideCard();
  };

  updatePlayerTurn() {
    if (this.currentPlayer > 1) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
    // domUpdates.highlightPodium()
  };

  createNewRound() {
    this.round++;
  }

  // endRound() {
  // }

};

if (typeof module !== 'undefined') {
  module.exports = Game;
};