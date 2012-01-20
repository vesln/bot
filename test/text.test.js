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
  
  describe('.type()', function() {
    describe('it should know if sentence is', function() {
      it('imperative', function() {
        var text = new Text('Hello.');
        text.type().should.eql('imperative');
        
        text = new Text('Hello');
        text.type().should.eql('imperative');
      });
      
      it('interrogative', function() {
        var text = new Text('Are you cool?');
        text.type().should.eql('interrogative');
        
        text = new Text('I love her. Am I an idiot?');
        text.type().should.eql('interrogative');
      });
      
      it('exclamatory', function() {
        var text = new Text('This... is... SPARTAAA!');
        text.type().should.eql('exclamatory');
        
        text = new Text('I do not think so. I am sure!');
        text.type().should.eql('exclamatory');
      });
    });
  });
  
  describe('.words()', function() {
    it('should remove stop words', function() {
      var text = new Text('I love her. Am I an idiot?');
      text.words().should.eql(['i', 'love', 'i', 'idiot']);
    });
  });
});