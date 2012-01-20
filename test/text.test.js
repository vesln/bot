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
var Text = require('../lib/text');

describe('Text', function() {
  describe('constructor', function() {
    it('should cache the supplied text', function() {
      var text = new Text('Hello!');
      text._text.should.eql('Hello!');
    });
  });
});