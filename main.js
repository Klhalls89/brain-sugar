let players;
let game;
let currentClue;
let round;

$('.main-page').hide();
$('.category').on('click', generatePopupCard);
$('.js-start-button').on('click', startGame);
$('.js-submit-guess-btn').on('click', submitAnswer);
$('.js-submit-wager-btn').on('click', updatePoints);

function submitAnswer() {
  game.updateDisplayScore(currentClue);
  round.removeClue(currentClue);
  game.updatePlayerTurn();
}

function generatePopupCard(e) {
  let category = $(e.target).siblings('.categories').attr('id').toLowerCase();
  let pointValue = parseInt($(event.target).text());
  let foundClue = findMatchingClue(category, pointValue);
  domUpdates.createCard(foundClue);
  if (foundClue instanceof DailyDouble) {
    domUpdates.createDailyDoubleCard(foundClue)
  }
  currentClue = new Clue(foundClue.question, foundClue.pointValue, foundClue.answer, foundClue.categoryId);
  domUpdates.disableSquare(e.target, round);
};

function updatePoints() {
  let dailyDouble = new DailyDouble();
  let userWager = $('.js-wager-input').val();
  if (dailyDouble.validateWager(userWager) === 'valid wager') {
    currentClue.pointValue = parseInt(userWager);
    $('.js-daily-double-popup').hide()
  };
};

function startGame(e) {
  e.preventDefault();
  round = new Round();
  round.createCategories();
  round.assignDailyDouble();
  players = domUpdates.getPlayerNames();
  game = new Game(players);
  domUpdates.updatePlayerNames(players);
  $('.js-login-page').hide();
  $('.main-page').show();
};

function findMatchingClue(category, pointValue) {
  console.log('find matching clues', round.clues.length)
  return round.clues.find((clue) => {
    if (clue.categoryId == category && clue.pointValue == pointValue) {
      return clue;
    }
    this.categoryId = clue;
  });
};