/*!
 * Bot - Feeling lonely? You personal bot is here.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var should = require('chai').should();

/**
 * Subject.
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

  describe('.words()', function() {
    it('should remove stop words', function() {
      var text = new Text('I love her. Am I an idiot?');
      text.words().should.eql(['i', 'love', 'i', 'idiot']);
    });
  });
});
