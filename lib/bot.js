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
 * Exposing `Bot`.
 */
module.exports = Bot;