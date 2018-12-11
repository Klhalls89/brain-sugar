class dailyDouble extends Clue {
  constructor(question, pointValue, answer, categoryID) {
    super(question, pointValue, answer, categoryID);
  }
  setPlayerWager(wager) {
    this.wager = wager;
    // runs updateScore() on 
  }
}

//when the clue array generates at the begging of the round 
//it should randomly assign one of those clues to daily double
//when the daily double is picked, we need an exta pop up window
//for their wager, their wager needs to be either the an amount that they have 
// or the highest amoun on the board.
// the amount they choose then need to be 
