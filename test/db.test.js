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
var Db = require('../lib/db');

/**
 * Test dependencies.
 */
var Text = require('../lib/text');

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

  describe('.findOne()', function() {
    it('should find the most accurate answer for text', function() {
      var text = new Text('People are crazy.');
      var db = new Db;
      db.findOne(text).should.eql('During these times, when crazy people are running the government, all you can do is laugh.');
    });
  });

  describe('.findAll()', function() {
    it('should find all matches for text', function() {
      var text = new Text('Bears are crazy.');
      var db = new Db;
      var result = db.findAll(text);

      result.should.be.an.array;

      (result.length > 0).should.be.true;
    });
  });
});
