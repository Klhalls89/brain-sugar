const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
global.Clue = require('../lib/clue.js');
global.DailyDouble = require('../lib/dailyDouble.js');
const Round = require('../lib/rounds.js');

chai.spy.on(global.domUpdates, ['updateCategories'], () => true);

describe('Round', function() {
  var round;

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
    };

  beforeEach(function() {
    round = new Round(roundProperties.categories, roundProperties.clues, roundProperties.dailyDouble);
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  });

  it('should have a categories property which is an empty array', function() {
    expect(round).to.have.property('categories').with.lengthOf(0); 
    expect(round).to.have.property('clues').with.lengthOf(1);
    expect(round.dailyDouble).to.equal(null);
  });

  it('should create a dailyDouble question when assignDailyDouble is called', function() {
    round.assignDailyDouble();
    expect(round.dailyDouble).is.instanceof(DailyDouble);
  });

  it('should remove a clue from the clues array', function() {
    let clue = {
        question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
        pointValue: 100,
        answer: "golf",
        categoryId: 10
        };
    round.removeClue(clue);
    expect()
  })

});
