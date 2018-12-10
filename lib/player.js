class Player {
 constructor(playerName, score = 0, isTurn = false) {
   this.playerName = playerName;
   this.score = score;
   this.isTurn = isTurn;
 }

 updateScore(points, type) { 
  if (type === 'add') {
    this.score += points;
  } else if (type === 'sub') {
    this.score -= points;
  }
  // game.updatePlayerTurn()
 // domUpdates.displayScore(this.score);
 // domUpdates.

 }

 updateTurn() {
  //access the players array
  //reassign isTurn to turn
  //isTurn ture for 0
  //once the guess is submited
  //shift the first player out of the array
  //push the player back in to the end of the array
 }


};

if (typeof module !== 'undefined') {
  module.exports = Player;
};