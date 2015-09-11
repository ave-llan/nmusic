var Pitch = require('../pitch/pitch.js')
var modeIntervals = require('./mode-intervals.js')

/**
 * Creates a new key.
 * @constructor
 *
 * @param {Pitch|string} tonic - the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music))
 * of this scale
 * @param {string|string[]} mode - a string representing a mode name (minor, major, dorian) or
 * an array of interval strings representing the interval each scale degree is from tonic
 *
 * @prop {Pitch} tonic - the tonic of this scale
 * @prop {string} modeName - a string representing the mode name. If custom mode is provided,
 * defaults to 'custom-scale'
 * @prop {string[]} mode - an array of interval strings representing the interval each
 * scale degree is from tonic
 */
var Key = function (tonic, mode) {
  if (!(this instanceof Key)) return new Key(tonic, mode)
  this.tonic = Pitch(tonic)
  this.modeName = (typeof mode === 'string') ? mode.toLowerCase()
                                             : 'custom-scale'
  this.mode = (typeof mode === 'string') ? modeIntervals(mode)
                                         : mode
}

Key.prototype = {
  constructor: Key,

  /**
   * @returns {String} the tonic + the modeName ('Bb major')
   */
  toString: function () {
    return this.tonic.pitchClass() + ' ' + this.modeName
  }
}

module.exports = Key
