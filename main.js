// this should only include code for event listeners/handlers.

let startButton = document.querySelector('.js-start-button');

startButton.addEventListener('click', function(e) {
  e.preventDefault();
  let playersArray = [
    document.querySelector('.js-p1-name-input').value, 
    document.querySelector('.js-p2-name-input').value, 
    document.querySelector('.js-p3-name-input').value
  ]
  let game = new Game(playersArray); 

  console.log(game)
  console.log(playersArray)

  // domUpdates.updatePlayerNames();

  // game.createNewRound();
})

console.log(Object.keys(data))
console.log(Object.keys(data.categories))
console.log(Object.values(data.clues[0]))

let firstA = Object.values(data.clues[0])
console.log(firstA[2]);

let firstQ = Object.values(data.clues[0])
console.log(firstQ[0])
// let cluesArray = Object.keys(data.clues)
// console.log(Object.keys(cluesArray[0]))


// converting camelCase category names to spaces: 
// https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
