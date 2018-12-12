const chai = require('chai');
const assert = require('chai').assert;
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Game = require('../lib/game.js');
global.domUpdates = require('../lib/domUpdates.js');
global.Round = require('../lib/rounds.js');
global.Player = require('../lib/player.js');
chai.spy.on(global.domUpdates, ['highlightPodium'], () => true);


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

  it('should increment this.round when createNewRound is invoked', function() {
    game.createNewRound();
    expect(game.round).to.equal(2);
  });

  it('should have a currentPlayer property which initially defaults to zero', function() {
    expect(game.currentPlayer).to.equal(0);
  });

  it('should increment this.currentPlayer value when updatePlayerTurn is invoked', function() {
    game.updatePlayerTurn()
    expect(game.currentPlayer).to.equal(1);
  });


});