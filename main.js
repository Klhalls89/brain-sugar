// this should only include code for event listeners/handlers.

let startButton = $('.js-start-button');
let gameBoard = $('.game-board');

$('.main-page').hide();

gameBoard.on('click', function(){
  let clue = new Clue()
  clue.createCard(10, 100)
  domUpdates.createCard(clue)
});

startButton.on('click', function(e) {
  e.preventDefault();
  let playersArray = [
    new Player(document.querySelector('.js-p1-name-input').value).playerName, 
    new Player(document.querySelector('.js-p2-name-input').value).playerName, 
    new Player(document.querySelector('.js-p3-name-input').value).playerName
  ]
  console.log(playersArray)
  let game = new Game(playersArray);
  let round = new Round();
  domUpdates.updatePlayerNames(playersArray);
  $('.js-login-page').hide();
  $('.main-page').show();
  console.log(game)
});




// converting camelCase category names to spaces: 
// https://stackoverflow.com/questions/7225407/
// convert-camelcasetext-to-sentence-case-text
