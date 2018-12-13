class Player {
  constructor(playerName, score = 0) {
    this.playerName = playerName;
    this.score = score;
  }

  updateScore(result, pointValue) {
    if (result === 'correct') {
      this.score += pointValue;
    } else if (result === 'incorrect') {
      this.score -= pointValue;
    }
  }

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}