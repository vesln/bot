/*!
 * Bot - Feeling lonely? You personal bot is here.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Bot constructor.
 * 
 * @param {Object} Database.
 */
function Bot(db) {
  this._db = db;
};

/**
 * Version.
 * 
 * @type {String}
 */
Bot.prototype.version = require('../package.json').version;

/**
 * Gives an anwser to supplied sentence.
 * 
 * @param {String} Sentence.
 * @param {Function} Callback.
 */
Bot.prototype.answer = function(sentence, cb) {
  cb('Hello.');
};

/**
 * Exposing `Bot`.
 */
module.exports = Bot;