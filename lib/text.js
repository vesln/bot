/*!
 * Bot - Feeling lonely? You personal bot is here.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

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
  var type = null;
  
  switch (text.charAt(text.length -1)) {
    case '!': 
      type = 'exclamatory'; 
      break;
    case '?':
      type = 'interrogative';
      break;
    default: 
      type = 'imperative';
  }
  
  this._type = type;
};

/**
 * Returns text type.
 * 
 * @returns {String}
 */
Text.prototype.type = function() {
  return this._type;
};

/**
 * Exposing `Text`.
 */
module.exports = Text;