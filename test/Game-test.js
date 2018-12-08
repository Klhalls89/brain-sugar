const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Game = require('../lib/game.js');
global.domUpdates = require('../lib/domUpdates.js');
global.round = require('../lib/rounds.js');
global.player = require('../lib/player.js');


describe('Game', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  // it('should instatiate a new question object when ____ is called', function() {
  //   game.makeQuestion();
  //   expect(game.currentQuestion).to.equal()
  // })
});