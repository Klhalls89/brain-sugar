const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Clue = require('../lib/clue.js');


describe('Clue', function() {
  var clue;

  beforeEach(function() {
    clue = new Clue('what?', 100, 'Bob Barker', 10);
  })

  it('should have a property of question that is a string', function() {
    expect(clue.question).to.be.a('string'); 
  })

  it('should have a property of pointValue that is a number', function() {
    expect(clue.pointValue).to.be.a('number'); 
  })

  it('should have a property of answere that is a string', function() {
    expect(clue.answer).to.be.a('string'); 
  })

  it('should have a property of categoryId that is a number', function() {
    expect(clue.categoryId).to.be.a('number');
  })
});
