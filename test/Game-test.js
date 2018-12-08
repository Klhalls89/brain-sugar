const chai = require('chai');
const assert = require('chai').assert;
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Game = require('../lib/game.js');
global.domUpdates = require('../lib/domUpdates.js');
global.Round = require('../lib/rounds.js');
global.Player = require('../lib/player.js');


describe('Game', function() {
  var game;

  beforeEach(function() {
    let playersArray = ['Whitney', 'Kristen', 'Tiffany'];
    game = new Game(playersArray);
  });

  it('should have a players property that is an array with a length of three', function() {
    expect(game.players).to.have.lengthOf(3);
    // expect(game.players[0, 1 ,2].to.be.an.instanceOf(Player))
  })

  // it('should instatiate a new question object when ____ is called', function() {
  //   game.makeQuestion();
  //   expect(game.currentQuestion).to.equal()
  // })
});