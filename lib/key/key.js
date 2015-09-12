var Pitch = require('../pitch/pitch.js')
var modeIntervals = require('./mode-intervals.js')
var scaleSet = require('./scale-set.js')

/**
 * Creates a new key. Note that most Key methods use pitch classes without reguards
 * to octave number.
 * @constructor
 *
 * @param {Pitch|string} tonic - the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music))
 * of this scale. Octave number may be provided, but do not affect the Key methods.
 * @param {string|string[]} mode - a string representing a mode name (minor, major, dorian) or
 * an array of interval strings representing the interval each scale degree is from tonic
 *
 * @prop {Pitch} tonic - the tonic of this scale. Although all Pitch instances have an
 * octave number, it is not used in the Key methods.
 * @prop {string} modeName - a string representing the mode name. If custom mode is provided,
 * defaults to 'custom-scale'
 * @prop {string[]} mode - an array of interval strings representing the interval each
 * scale degree is from tonic
 * @prop {string[]} scale - an array of pitch class strings
 */
var Key = function (tonic, mode) {
  if (!(this instanceof Key)) return new Key(tonic, mode)
  this.tonic = Pitch(tonic)
  this.modeName = (typeof mode === 'string') ? mode.toLowerCase()
                                             : 'custom-scale'
  this.mode = (typeof mode === 'string') ? modeIntervals(mode)
                                         : mode
  this.scale = scaleSet(this.tonic.pitchClass(), this.mode)
  Object.freeze(this.scale)
  Object.freeze(this)
}

Key.prototype = {
  constructor: Key,

  /**
   * @returns {String} the tonic + the modeName ('Bb major')
   */
  toString: function () {
    return this.tonic.pitchClass() + ' ' + this.modeName
  },

  /**
   * returns the pitch class at the requested scale degree
   * @param {number} degree - the desired scale degree of this scale (an integer > 0)
   * @returns {string} a pitch class string
   * @example
   * var a_major = new Key('A3', 'major')
   * a_major.scaleDegree(3)   => 'C#'
   * a_major.scaleDegree(10)  => 'C#'
   */
  pitchAtDegree: function (degree) {
    // get the note within an octave of the tonic
    return this.scale[(degree - 1) % this.scale.length]
  }
}

module.exports = Key
