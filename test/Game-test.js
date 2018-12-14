const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Game = require('../lib/game.js');
global.domUpdates = require('../lib/domUpdates.js');
global.Player = require('../lib/player.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
    let players = [new Player(), new Player(), new Player()];
    game = new Game(players);
    chai.spy.on(global.domUpdates, ['highlightPodium'], () => true);
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  })

  it('should have the appropriate default properties', function() {
    expect(game.round).is.instanceof(Round);
    expect(game.currentRound).to.equal(1);
    expect(game.players).to.have.lengthOf(3);
    expect(game.currentPlayer).to.equal(0);
  });

  it('should increment this.currentPlayer value when updatePlayerTurn is called', function() {
    game.updatePlayerTurn()
    expect(game.currentPlayer).to.equal(1);
  });

});