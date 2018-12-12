const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Round = require('../lib/rounds.js');
global.domUpdates = require('../lib/domUpdates.js');
global.Game = require('../lib/game.js');
global.Clue = require('../lib/clue.js');
global.DailyDouble = require('../lib/dailyDouble.js');
global.Player = require('../lib/player.js');
global.data = require('../lib/jeopardy-dataset.js');
chai.spy.on(global.domUpdates, ['updateCategories'], () => true);

// chai.spy.on(global.Round, ['assignDailyDouble'], () => true);


describe('Round', function() {
  var round;

  beforeEach(function() {

    round = new Round({
      categories: [],
      clues: [],
      dailyDouble: null
    });
  });

  it('should have a categories property which is an empty array', function() {
    expect(round).to.have.property('categories').with.lengthOf(0); 
  });

  it('should have a clues property which is an empty array', function() {
    expect(round).to.have.property('clues').with.lengthOf(0);
  });

  it('should have a dailyDouble property which initially defaults to null', function() {
    expect(round.dailyDouble).to.equal(null);
  });

  it('should create a dailyDouble question when assignDailyDouble is invoked', function() {
    // let randomDailyDouble = {
    //   question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
    //   pointValue: 100,
    //   answer: "golf",
    //   categoryId: 10
    // };
    round.assignDailyDouble();
    expect(round.dailyDouble).to.deep.equal(randomDailyDouble);
  });

  // it('should generate a random number when generateRandomNumber is invoked', function() {
    // round.generateRandomNumber(1, 16);

    // expect().to.equal();
  // });

});
