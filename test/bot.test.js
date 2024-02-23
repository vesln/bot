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
var Bot = require('../lib/bot');

/**
 * Test dependencies.
 */
var Db = require('../lib/db');
var defaults = require('../lib/db');

describe('Bot', function() {
  describe('version', function() {
    it('should be exposed', function() {
      Bot.version.should.be.ok;
    });
  });

  describe('constructor', function() {
    it('should load db and defaults', function() {
      var bot = new Bot({foo: 'bar'}, ['foo', 'bar']);
      bot._db.should.eql({foo: 'bar'});
      bot._defaults.should.eql(['foo', 'bar']);
    });
  });

  describe('.answer()', function() {
    it('should answer questions', function() {
      var db = new Db;
      var bot = new Bot(db);
      bot.answer('Hello.').should.eql('"Hello," he lied.');
    });

    it('should answer even if he does not know what to say', function() {
      var db = new Db;
      var bot = new Bot(db, ['foo']);
      bot.answer('dasjdisahdia').should.eql('foo');
    });
  });
});
