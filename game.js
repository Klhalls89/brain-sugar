// order will matter with how we link these in HTML (index last, domUpdates first)
// make sure game isn't doing too muc
class Game {
 constructor(playerNames) {
    this.players = [];
  }
  
  createNewRound(playerNames) {
    this.players = [new Player(playerNames[0]), new Player(playerNames[1]), new Player(playerNames[2])],
    new Round();
  }

  endRound() {

  }




}
// potential methods: startGame(), endGame(), 
 // check clues array length and if it's zero, increment this.round++ 
  