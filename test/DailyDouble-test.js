const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
global.Clue = require('../lib/clue.js');
const DailyDouble = require('../lib/dailyDouble.js');

describe('DailyDouble', function() {
  var dailyDouble;

  beforeEach(function() {
    dailyDouble = new DailyDouble();
  })

  // it('', function() {
    // test validateWager 
    // expect(dailyDouble).to.have.property('').with.lengthOf(); 
  // });
});