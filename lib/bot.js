/*!
 * Bot - Feeling lonely? You personal bot is here.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Text class.
 * 
 * @type {Function}
 */
var Text = require('./text');

/**
 * Bot constructor.
 * 
 * @param {Db} Database.
 * @param {Array} Default answers used when nothing is found.
 */
function Bot(db, defaults) {
  this._db = db;
  this._defaults = defaults;
};

/**
 * Gives an anwser to supplied sentence.
 * 
 * @param {String} Sentence.
 * @param {Function} Callback.
 * @api public
 */
Bot.prototype.answer = function(sentence, cb) {
  var results = this._db.findAll(new Text(sentence));
  if (!results.length) results = this._defaults;
  return this.random(results);
};

/**
 * Returns random array key.
 * 
 * @param {Array} Array to search in.
 * @returns {Mixed} Array key.
 */
Bot.prototype.random = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Exposing `Bot`.
 */
module.exports = Bot;

/**
 * Exposing module version.
 */
module.exports.version = require('../package.json').version;