var parsePitch = require('./parse-pitch.js')
var toMidi = require('./toMidi.js')

/**
 * Creates a new immutable Pitch.
 * @constructor
 * @prop {string} Pitch.name - this pitch in scientific pitch notation
 *
 * @param {string} sciPitch - a pitch in scientific pitch notation
 * @throws Will throw an error if string is not a valid pitch
 *
 * @example
 * var p = new Pitch('Bb3')
 * p.name => 'Bb3'
 */
function Pitch (sciPitch) {
  var p = parsePitch(sciPitch)
  if (!p) throw Error('Invalid pitch name: ' + sciPitch)
  this.name = p.sciPitch
  Object.freeze(this)
}

Pitch.prototype = {
  constructor: Pitch,

  /**
   * @returns {String} string in scientfic pitch notation
   */
  toString: function () {
    return this.name
  },

  /**
   * @returns {Number} the midi number of this pitch, so enharmonic notes will be equal
   * @see [pitch.midi()]{@link Pitch#midi}
   */
  valueOf: function () {
    return this.midi()
  },

  /**
   * @param {Pitch} that - another pitch
   * @returns {Boolean} is this pitch spelled the same as that pitch?
   */
  equals: function (that) {
    return this.name === that.name
  },

  /**
   * @returns {String}
   * in [scientfic pitch notation]{@link https://en.wikipedia.org/wiki/Scientific_pitch_notation}
   * (same as pitch.name)
   */
  sciPitch: function () {
    return this.name
  },

  /**
   * @returns {String} will return 'A', 'B', 'C', 'D', 'E', 'F', or 'G'
   */
  letter: function () {
    return parsePitch(this.name).letter
  },

  /**
   * @returns {String} 'b', 'bb', '#', '##' (double sharp is not 'x'),
   * or '', the empty string if there is no accidental.
   */
  accidental: function () {
    return parsePitch(this.name).accidental
  },

  /**
   * @returns {Number} the octave number (C4 is
   * [middle C]{@link https://en.wikipedia.org/wiki/C_(musical_note)#Middle_C})
   */
  octave: function () {
    return parsePitch(this.name).octave
  },

  /**
   * @returns {String} the [pitch class]{@link https://en.wikipedia.org/wiki/Pitch_class},
   * same as [pitch.sciPitch()]{@link Pitch#sciPitch} but without octave number.
   */
  pitchClass: function () {
    var parsed = parsePitch(this.name)
    return parsed.letter + parsed.accidental
  },

  /**
   * returns the number of accidentals on this letter:
   * positive for sharps, negative for flats.
   * @returns {Number} how many half steps from its letter, will be in the range [-2, 2]
   * @example
   * var p = new Pitch('Abb3')
   * p.halfSteps() => -2
   */
  numAccidental: function () {
    return parsePitch(this.name).numAccidental
  },

  /**
   * What is the [midi number]{@link http://newt.phys.unsw.edu.au/jw/notes.html} of this pitch?
   *
   * @returns {Number} the midi number for this pitch. C4 is 60.
   *
   * @example
   * toMidi('C4')    => 60
   * toMidi('B#3')   => 60
   * toMidi('Bb3')   => 58
   * toMidi('A#3')   => 58
   */
  midi: function () {
    return toMidi(this.name)
  }
}

module.exports = Pitch
