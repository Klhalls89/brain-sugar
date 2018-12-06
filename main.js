// this should only include code for event listeners/handlers.

let startButton = document.querySelector('.js-start-button');

startButton.addEventListener('click', function(e) {
  e.preventDefault();
  let playersArray = [document.querySelector('.js-p1-name-input').value, document.querySelector('.js-p2-name-input').value, document.querySelector('.js-p3-name-input').value]

  let game = new Game(playersArray); 
  
  console.log(game)
  console.log(playersArray)

  game.createNewRound();

  let test = playersArray[0].isTurn = true;
  console.log(test)

})

// console.log(Object.keys(data))
// console.log(Object.keys(data.categories))
// console.log(Object.keys(data.clues))
// let cluesArray = Object.keys(data.clues)
// console.log(Object.keys(cluesArray[0]))


// converting camelCase category names to spaces: 
// https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
