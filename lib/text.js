/*!
 * Bot - Feeling lonely? You personal bot is here.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Stop words.
 * 
 * @type {Array} 
 */
var stopWords = require('../db/stop_words.json');

/**
 * Text constructor.
 * 
 * @param {String} Text.
 */
function Text(text) {
  this._text = text.trim();
  this.analyze(this._text);
};

/**
 * Analyzes text.
 * 
 * @param {String} text.
 * @api private
 */
Text.prototype.analyze = function(text) {
  var words = [];
  
  text.split(/\s+/).forEach(function(word) {
    word = word.toLowerCase().replace(/\W+/g, '');
    if (~stopWords.indexOf(word) || !word) return;
    words.push(word);
  });
  
  this._words = words;
};

/**
 * Returns text words.
 * 
 * @returns {Array}
 * @api public
 */
Text.prototype.words = function() {
  return this._words;
};

/**
 * Exposing `Text`.
 */
module.exports = Text;