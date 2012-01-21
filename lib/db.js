/*!
 * Bot - Feeling lonely? You personal bot is here.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Database content.
 * 
 * @type {Object)
 */ 
var contents = require('../db/quotes.json');

/**
 * Db constructor.
 * 
 * @param {Object} Content.
 */
function Db(content) {
  content || (content = contents);
  this._content = content;
};

/**
 * Exposing `Db`.
 */
module.exports = Db;