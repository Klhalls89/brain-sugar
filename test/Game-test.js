const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Game = require('../game.js');
global.domUpdates = require('../domUpdates.js');
global.round = require('../round.js');
global.player = require('../player.js');


describe('Game', function() {
  it('should instatiate a new question object when ____ is called', function() {
    game.makeQuestion();
    expect(game.currentQuestion).to.equal()
  })
})