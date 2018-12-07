// this should only include code for event listeners/handlers.

let startButton = $('.js-start-button');
$('.main-page').hide();

let gameBoard = $('.game-board')
gameBoard.on('click', function(){
  let clue = new Clue()
  clue.createCard(10, 100)
})

startButton.on('click', function(e) {
  e.preventDefault();
  let playersArray = [
    document.querySelector('.js-p1-name-input').value, 
    document.querySelector('.js-p2-name-input').value, 
    document.querySelector('.js-p3-name-input').value
  ]
  let game = new Game(playersArray); 

  console.log({game})
  console.log({playersArray})

  domUpdates.updatePlayerNames(playersArray);
  
  game.createNewRound();

  $('.js-login-page').hide();
  $('.main-page').show();

});

// converting camelCase category names to spaces: 
// https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
