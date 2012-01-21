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
var Db = require('../lib/db');

describe('Db', function() {
  describe('contructor', function() {
    it('should use default content if no content is supplied', function() {
      var db = new Db;
      (!!db._content).should.be.ok;
    });
    
    it('should use the supplied content', function() {
      var content = {foo: 'bar'};
      var db = new Db(content);
      db._content.should.eql(content);
    });
  });
});