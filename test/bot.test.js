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
});