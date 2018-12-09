class Player {
 constructor(playerName) {
   this.playerName = playerName;
   this.score = 0;
   this.isTurn = false;
 }

 updateScore(points, type) { 
  // if ([type] === 'add') {
  //   this.score += points;
  // } else if ([type] === 'subtract') {
  //   this.score -= points;
  // }

  // take the points from clue
  // this.score += 100 
  // domUpdates.displayScore(this.score);

 }

 // updateTurn() {
  // this.isTurn = !this.isTurn 
 // }


};

if (typeof module !== 'undefined') {
  module.exports = Player;
};