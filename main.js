

$('.main-page').hide();
$('.category').on('click', generatePopupCard)
$('.js-start-button').on('click', startGame)

function generatePopupCard(e) {
  let category = $(e.target).siblings('.categories').attr('id').toLowerCase()
  let pointValue = parseInt($(event.target).text());
  let foundClue = findMatchingClue(category, pointValue)
  domUpdates.createCard(foundClue);
  let currentClue = new Clue(foundClue.question, foundClue.pointValue, foundClue.answer, foundClue.categoryID)

  $('.js-submit-guess-btn').on('click', function(){
    currentClue.comparePlayerGuess();
    // update player turn 
  })
};

function startGame(e) {
  e.preventDefault();
  let round = new Round();
  let playersArray = [
    new Player(document.querySelector('.js-p1-name-input').value), 
    new Player(document.querySelector('.js-p2-name-input').value), 
    new Player(document.querySelector('.js-p3-name-input').value)
  ]
  playersArray[0].isTurn = true;
  console.log(playersArray)

  let game = new Game(playersArray);
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
