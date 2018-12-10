

$('.main-page').hide();
$('.category').on('click', generatePopupCard)
$('.js-submit-guess-btn').on('click', submitPlayerGuess)
$('.js-start-button').on('click', startGame)

function generatePopupCard(e) {
  let category = $(e.target).siblings('.categories').attr('id').toLowerCase()
  let pointValue = parseInt($(event.target).text());
  let clue = new Clue()
  const foundClue = clue.findMatchingCard(category, pointValue);
  domUpdates.createCard(foundClue);
};

function startGame(e) {
  e.preventDefault();
  let round = new Round();
  let playersArray = [
    new Player(document.querySelector('.js-p1-name-input').value).playerName, 
    new Player(document.querySelector('.js-p2-name-input').value).playerName, 
    new Player(document.querySelector('.js-p3-name-input').value).playerName
  ]
  let game = new Game(playersArray);
  domUpdates.updatePlayerNames(playersArray);
  $('.js-login-page').hide();
  $('.main-page').show();
};

function submitPlayerGuess() {
  let clue = new Clue();
  clue.comparePlayerGuess(clue.categoryID);
};
