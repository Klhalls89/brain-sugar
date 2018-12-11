let playersArray = [
  new Player(document.querySelector('.js-p1-name-input').value), 
  new Player(document.querySelector('.js-p2-name-input').value), 
  new Player(document.querySelector('.js-p3-name-input').value)
];
let game = new Game(playersArray);
let currentClue;

$('.main-page').hide();
$('.category').on('click', generatePopupCard)
$('.js-start-button').on('click', startGame)
$('.js-submit-guess-btn').on('click', checkAnswer)

function checkAnswer(){
  game.comparePlayerGuess(currentClue);
};

function generatePopupCard(e) {
  let category = $(e.target).siblings('.categories').attr('id').toLowerCase();
  let pointValue = parseInt($(event.target).text());
  let foundClue = findMatchingClue(category, pointValue);
  domUpdates.createCard(foundClue);
  currentClue = new Clue(
    foundClue.question, 
    foundClue.pointValue, 
    foundClue.answer, 
    foundClue.categoryID);
};

function startGame(e) {
  e.preventDefault();
  let round = new Round();
  // playersArray[0].isTurn = true;
  domUpdates.updatePlayerNames(playersArray);
  $('.js-login-page').hide();
  $('.main-page').show();
};

 function findMatchingClue(cat, ptVal) {
  return data.clues.find((clue) => {
    if(clue.categoryId == cat && clue.pointValue == ptVal) {
      return clue;
      }
      this.categoryID = clue;
    })
  }
