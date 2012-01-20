/*!
 * Bot - Feeling lonely? You personal bot is here.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * The tested class.
 * 
 * @type {Function}
 */
var Bot = require('../lib/bot');

describe('Bot', function() {
  describe('version', function() {
    it('should be sane', function() {
      var bot = new Bot;
      bot.version.should.be.ok;
    });
  });
  
  describe('constructor', function() {
    it('should load db', function() { 
      var bot = new Bot({foo: 'bar'});
      bot._db.should.eql({foo: 'bar'});
    });
  });
  
  describe('.answer()', function() {
    it('should answer simple questions', function(done) {
      var bot = new Bot;
      bot.answer('Hello!', function(answer) {
        answer.should.match(/(Hi.|Hello.|Greetings.|How can I help you today?)/);
        done();
      })
    });
  });
});