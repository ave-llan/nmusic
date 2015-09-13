var Pitch = require('../pitch/pitch.js')
var modeIntervals = require('./mode-intervals.js')
var scaleSet = require('./scale-set.js')
var parsePitch = require('../pitch/parse-pitch.js')

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
   * is this pitch a member of this key?
   * @param {Pitch|string} pitch - a pitch string or Pitch
   * @returns {boolean} is this pitch in the key?
   * @example
   * var a_major = new Key('A3', 'major')
   * a_major.inKey('C3')   => false
   * a_major.inKey('C#3')  => true
   */
  inKey: function (pitch) {
    return this.scale.indexOf(Pitch(pitch).pitchClass()) > -1
  },

  /**
   * given a letter and key, returns the accidental that should be on this letter
   * in this key
   * @param {Pitch|string} pitch - a pitch string or Pitch
   * @returns {string} the accidental that needs to be added to this letter for it to be in the key
   */
  accidentalOn: function (pitch) {
    var letters = []
    var accidentals = []
    this.scale.forEach(function (p) {
      var parsed = parsePitch(p)
      letters.push(parsed.letter)
      accidentals.push(parsed.accidental)
    })
    return accidentals[letters.indexOf(Pitch(pitch).letter())]
  },

  /**
   * returns the Pitch at the requested scale degree. Although Pitches default to octave
   * number 4, this should be thought of as a pitch class
   * @param {number} degree - the desired scale degree of this scale (an integer > 0)
   * @returns {Pitch} a pitch class string
   * @example
   * var a_major = new Key('A3', 'major')
   * a_major.scaleDegree(3)   => 'C#4'<Pitch>
   * a_major.scaleDegree(10)  => 'C#4'<Pitch>
   */
  pitchAtDegree: function (degree) {
    // get the note within an octave of the tonic
    return Pitch(this.scale[(degree - 1) % this.scale.length])
  }
}

module.exports = Key
