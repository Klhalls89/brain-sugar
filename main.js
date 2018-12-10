

$('.main-page').hide();

$('.category').on('click', function(e){
  let category = $(e.target).siblings('.categories').attr('id').toLowerCase()
  let pointValue = parseInt($(event.target).text());
  let clue = new Clue()
  const foundClue = clue.findMatchingCard(category, pointValue);

  
  domUpdates.createCard(foundClue);
});

$('.js-start-button').on('click', function(e) {
  e.preventDefault();
  let playersArray = [
    new Player(document.querySelector('.js-p1-name-input').value).playerName, 
    new Player(document.querySelector('.js-p2-name-input').value).playerName, 
    new Player(document.querySelector('.js-p3-name-input').value).playerName
  ]
  let game = new Game(playersArray);
  let round = new Round();
  domUpdates.updatePlayerNames(playersArray);
  $('.js-login-page').hide();
  $('.main-page').show();
});

$('.js-submit-guess-btn').on('click', function() {
  let clue = new Clue();
  clue.submitPlayerGuess(clue.categoryID);

});
