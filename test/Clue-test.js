const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Clue = require('../lib/clue.js');
global.domUpdates = require('../lib/domUpdates.js')

chai.spy.on(global.domUpdates,['playerGuess'],() => true)


describe('Clue', function() {
  var clue;

  beforeEach(function() {
    clue = new Clue('what?', 100, 'Bob Barker', 10);
    chai.spy.on(global.domUpdates, ['playerGuess'], () => 'incorrect answer');
  });

<<<<<<< HEAD
=======
  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  })

>>>>>>> complete-round-tests
  it('should have the appropriate default properties', function() {
    expect(clue.question).to.be.a('string'); 
    expect(clue.pointValue).to.be.a('number'); 
    expect(clue.answer).to.be.a('string'); 
    expect(clue.categoryId).to.be.a('number');
<<<<<<< HEAD
  })

  it('should return a string when validate answer is invoked', function(){
    clue.validateAnswer();
    expect('string')
  })
=======
  });

  it('should validate whether the player answer is correct', function() {
    let returnValue = clue.validateAnswer(clue);
    expect(returnValue).to.be.equal('incorrect');
  });
>>>>>>> complete-round-tests

});
