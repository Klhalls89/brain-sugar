class Player {
 constructor(playerName, score = 0) {
   this.playerName = playerName;
   this.score = score;
 };
};

if (typeof module !== 'undefined') {
  module.exports = Player;
};