const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
global.Clue = require('../lib/clue.js');
global.Game = require('../lib/game.js');
global.Round = require('../lib/rounds.js');
global.Player = require('../lib/player.js');
const DailyDouble = require('../lib/dailyDouble.js');

describe('DailyDouble', function() {
  var dailyDouble;

  beforeEach(function() {
    dailyDouble = new DailyDouble();
    chai.spy.on(global.domUpdates, ['displayInvalidWagerMessage'], () => true);
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates); 
  });

  it('should validate the users wager', function() {    
    let players = [new Player(), new Player(), new Player()];
    players[0].score = 7;
    let test = dailyDouble.validateWager('6', new Game(players));
    expect(test).to.be.equal('valid wager');
  });
});