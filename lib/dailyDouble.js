class dailyDouble extends Clue {
  constructor(question, pointValue, answer, categoryID) {
    super(question, pointValue, answer, categoryID);
  }
  setPlayerWager(wager) {
    this.wager = wager;
    // runs updateScore() on 
  }
}
