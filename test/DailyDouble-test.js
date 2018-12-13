const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
global.Clue = require('../lib/clue.js');
global.Game = require('../lib/game.js');
global.Round = require('../lib/rounds.js');
const DailyDouble = require('../lib/dailyDouble.js');

describe('DailyDouble', function() {
  var dailyDouble;

  let roundProperties =
    {
      categories: [],
      clues: [{
        question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
        pointValue: 100,
        answer: "golf",
        categoryId: 10
        }],
      dailyDouble: null
    }

  beforeEach(function() {
    let round = new Round(roundProperties.categories, roundProperties.clues, roundProperties.dailyDouble);
    dailyDouble = new DailyDouble();
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  });

  it.skip('should validate the users wager', function() {
    let test = dailyDouble.validateWager(6);
    expect(test).to.be.equal('valid wager');
  });
});