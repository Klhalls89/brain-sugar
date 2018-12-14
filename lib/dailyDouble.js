class DailyDouble extends Clue {
  constructor(question, pointValue, answer, categoryID) {
    super(question, pointValue, answer, categoryID);
  }

  validateWager(wager, game) {
    let wagerNum = parseInt(wager);
    let pointValues = game.round.clues.map(clue => clue.pointValue);
    let highestPointValue =  Math.max(... pointValues);
    console.log('vailidate wager', game.players[game.currentPlayer] )
    if (wagerNum < 5) {
      domUpdates.displayInvalidWagerMessage()
    } else if (wagerNum <= game.players[game.currentPlayer].score || 
      wagerNum <= highestPointValue) {
      return 'valid wager';
    } else {
      domUpdates.displayInvalidWagerMessage()
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}