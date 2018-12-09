// this should only include code for event listeners/handlers.

let startButton = $('.js-start-button');


$('.main-page').hide();

$('.category').on('click', function(e){
  let clue = new Clue()
  let category = $(e.target).siblings('.categories').attr('id');
  let cat = category.toLowerCase();
  console.log('category', cat)
  let pointValue = parseInt($(event.target).text());
  const foundClue = clue.createCard(cat, pointValue)
  domUpdates.createCard(foundClue)
});

// $('.categories').on('click', (e) => {
//   let category = $(e.target).siblings('.category-cards').text();
//   let pointValue = parseInt($(event.target).text());
//   game.matchQuestion(category, pointValue);
// });

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
