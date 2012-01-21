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
 * Finds the most accurate answer for text.
 * 
 * @param {Text} Text object.
 * @returns {String} Answer.
 * @api public
 */
Db.prototype.findOne = function(text) {
  var match = null;
  var words = text.words();
  var maxMatches = 0;
  var count = 0;
  
  this._content.forEach(function(obj) {
    count = 0;
    for (var i = -1, len = words.length; ++i < len;) {
      if (~obj.words.indexOf(words[i])) count++;
    }
    if (maxMatches > count) return;
    maxMatches = count;
    match = obj.answer;
  });
  
  return match;
};

/**
 * Returns all matches for text.
 * 
 * @param {Text} Text object.
 * @returns {Array} answers.
 * @api public
 */
Db.prototype.findAll = function(text) {
  var matches = [];
  var words = text.words();
  
  this._content.forEach(function(obj) {
    for (var i = -1, len = words.length; ++i < len;) {
      if (~obj.words.indexOf(words[i])) return matches.push(obj.answer);
    }
  });
  
  return matches;
};

/**
 * Exposing `Db`.
 */
module.exports = Db;