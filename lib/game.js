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
    // this should move into clue and player
    // pass in parameters from domUpdates.playerGuess()

    // let result = clue.validateAnswer() will return true or false 
      // let result = clue.validateAnswer()
    // this.players[this.currentPlayer].updateScore(result)
    
    if (domUpdates.playerGuess() == clue.answer.toLowerCase()) {
      this.players[this.currentPlayer].score += clue.pointValue;
     } else {
      this.players[this.currentPlayer].score -= clue.pointValue;
     }
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