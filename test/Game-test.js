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

  it('should have a players property which is an array with a length of three', function() {
    expect(game.players).to.have.lengthOf(3);
  });

  it('should have a round property which initially defaults to one', function() {
    expect(game.round).to.equal(1);
  });

  it('should increment this.round when createNewRound is called', function() {
    game.createNewRound();
    expect(game.round).to.equal(2);
  });
});