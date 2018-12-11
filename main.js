let playersArray = [
  new Player(document.querySelector('.js-p1-name-input').value), 
  new Player(document.querySelector('.js-p2-name-input').value), 
  new Player(document.querySelector('.js-p3-name-input').value)
];
let game = new Game(playersArray);
let currentClue;
let round;

$('.main-page').hide();
$('.category').on('click', generatePopupCard)
$('.js-start-button').on('click', startGame)
$('.js-submit-guess-btn').on('click', checkAnswer)

function checkAnswer(){
  game.comparePlayerGuess(currentClue);
  round.removeClue(currentClue);
  round.checkCluesArray(game);
};

function generatePopupCard(e) {
  let category = $(e.target).siblings('.categories').attr('id').toLowerCase();
  let pointValue = parseInt($(event.target).text());
  let foundClue = findMatchingClue(category, pointValue);
  domUpdates.createCard(foundClue);
  currentClue = new Clue(foundClue.question, foundClue.pointValue, foundClue.answer, foundClue.categoryId);
  domUpdates.disableSquare(e.target, round);
};

function startGame(e) {
  e.preventDefault();
  round = new Round();
  domUpdates.updatePlayerNames(playersArray);
  $('.js-login-page').hide();
  $('.main-page').show();
};

 function findMatchingClue(cat, ptVal) {
  return data.clues.find((clue) => {
    if(clue.categoryId == cat && clue.pointValue == ptVal) {
      return clue;
      }
      this.categoryId = clue;
    })
  }
