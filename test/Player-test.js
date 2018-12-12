const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Player = require('../lib/Player.js');

describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player('Kristen', 100);
  })

  it('should have a the appropriate default properties', function() {
    expect(player.playerName).to.be.a('string'); 
    expect(player.score).to.be.a('number'); 
  })

  describe('updateScore', function() {
    it('should increment the score when the result is correct', function() {
      player.updateScore('correct', 100)
      expect(player.score).to.equal(200);
    })

    it('should decrement the score when the result is incorrect', function() {
      player.updateScore('incorrect', 100)
      expect(player.score).to.equal(0);
    })
  })
});

