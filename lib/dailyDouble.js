class DailyDouble extends Clue {
  constructor(question, pointValue, answer, categoryID) {
    super(question, pointValue, answer, categoryID);
  };

  validateWager(wager) {
    let wagerNum = parseInt(wager);
    let pointValues = round.clues.map(clue => clue.pointValue);
    let highestPointValue =  Math.max(... pointValues);
    if (wagerNum < 5) {
      $('.js-submit-wager-btn').disabled = true;
      $('.invalid-wager').text('Please enter a valid wager.');
    } else if (wagerNum <= game.players[game.currentPlayer].score || wagerNum <= highestPointValue) {
        return 'valid wager';
    } else {
      $('.js-submit-wager-btn').disabled = true;
      document.querySelector('.js-daily-double-popup').style.zIndex = '2';
      $('.invalid-wager').text('Please enter a valid wager.');
    }
  };
};