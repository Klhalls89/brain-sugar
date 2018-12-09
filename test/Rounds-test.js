const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Round = require('../lib/rounds.js');
global.domUpdates = require('../lib/domUpdates.js');
global.Game = require('../lib/game.js');
global.Player = require('../lib/player.js');
global.data = require('../lib/jeopardy-dataset.js');
chai.spy.on(global.domUpdates, ['updateCategories'], () => true);

describe('Round', function() {
  var round;

  beforeEach(function() {
    round = new Round();
  });

  it('should have a categories property which is an empty array', function() {
    expect(round.categories).to.have.lengthOf(4);
  });

  it('should have a clues property which is an empty array', function() {
    expect(round.clues).to.have.lengthOf(0);
  });

});
