let game;
let currentClue;

$('.main-page').hide();
$('.category').on('click', generatePopupCard);
$('.js-start-button').on('click', startGame);
$('.js-submit-guess-btn').on('click', submitAnswer);
$('.js-submit-wager-btn').on('click', updateWagerPoints);

function submitAnswer() {
  let result = currentClue.validateAnswer();
  game.players[game.currentPlayer].updateScore(result, currentClue.pointValue);
  domUpdates.displayScore(game.players);
  game.updatePlayerTurn();
  game.round.removeClue(currentClue);
  domUpdates.hideCard();
}

function generatePopupCard(e) {
  let category = $(e.target).siblings('.categories').attr('id').toLowerCase();
  let pointValue = parseInt($(event.target).text());
  let foundClue = findMatchingClue(category, pointValue);
  domUpdates.createCard(foundClue);
  if (foundClue instanceof DailyDouble) {
    domUpdates.createDailyDoubleCard()
  }
  currentClue = new Clue(
    foundClue.question, 
    foundClue.pointValue, 
    foundClue.answer, 
    foundClue.categoryId);
  domUpdates.disableSquare(e.target);
}

function updateWagerPoints() {
  let dailyDouble = new DailyDouble();
  let userWager = $('.js-wager-input').val();
  if (dailyDouble.validateWager(userWager) === 'valid wager') {
    currentClue.pointValue = parseInt(userWager);
    $('.js-daily-double-popup').hide()
  }
}

function startGame(e) {
  e.preventDefault();
  let players = domUpdates.getPlayerNames();
  domUpdates.updatePlayerNames(players);
  game = new Game(players);
  game.round.createCategories();
  game.round.assignDailyDouble();
  $('.js-login-page').hide();
  $('.main-page').show();
}

function findMatchingClue(category, pointValue) {
  return game.round.clues.find((clue) => {
    if (clue.categoryId == category && clue.pointValue == pointValue) {
      return clue;
    }
    this.categoryId = clue;
  });
}