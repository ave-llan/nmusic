var parsePitch = require('./parse-pitch.js')
var toMidi = require('./to-midi.js')
var semitonesBetween = require('./semitones-between.js')
var intervalSize = require('./interval-size.js')
var interval = require('./interval.js')
var plusInterval = require('./plus-interval.js')
var isHigher = require('./is-higher.js')

/**
 * @typedef {string} MusicLetter - 'A', 'B', 'C', 'D', 'E', 'F', or 'G'
 */

/**
 * @typedef {string} AccidentalString - '#' for sharp, 'b' for flat.
 *                                      '##'' for double sharp, 'bb' for double flat.
 */

/**
 * @typedef {MusicLetter} PitchString - a {@link MusicLetter} + optional {@link AccidentalString} +
 *                                 optional octave number. Must match the regular expression:
 *                                 /(A-G)(b{1,2}|#{1,2})?(\d{1,2})?/. If octave number is not provided,
 *                                 it will default to octave 4.
 * @example
 * 'C4'     // middle C on a piano, the fourth octave
 * 'Eb3'    // Eb in octave 3
 * 'F#'     // no octave number provided, a pitch class
 * 'F##'    // F double sharp
 * 'Dbb'    // D double flat
 */

/**
 * Creates a new immutable Pitch or if given an existing Pitch, returns it.
 * @constructor
 * @prop {PitchString} Pitch.name - this pitch in scientific pitch notation
 *
 * @param {PitchString|Pitch} sciPitch - a pitch string in scientific pitch notation
 * or a Pitch.
 * @throws Will throw an error if string is not a valid pitch
 *
 * @example
 * var p = new Pitch('Bb3')
 * p.name               => 'Bb3'
 * // if you forget the 'new' keyword, the constructor will call it for you
 * var p2 = Pitch('C4')
 * p2 instanceof Pitch  => true
 * // if given a Pitch as its argument, the same Pitch will be returned
 * var p3 = Pitch(p2)
 * p2 === p3            => true
 * // this can be used to write functions which accept pitch strings or Pitches as a parameter
 */
function Pitch (sciPitch) {
  if (sciPitch instanceof Pitch) return sciPitch
  if (!(this instanceof Pitch)) return new Pitch(sciPitch)
  var p = parsePitch(sciPitch)
  if (!p) throw Error('Invalid pitch name: ' + sciPitch)
  this.name = p.sciPitch
  Object.freeze(this)
}

Pitch.prototype = {
  constructor: Pitch,

  /**
   * @returns {PitchString} string in scientfic pitch notation
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
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {Boolean} is this pitch spelled the same as that pitch?
   */
  equals: function (that) {
    return this.name === Pitch(that).name
  },

  /**
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {Boolean} does this pitch sound identical to that pitch?
   */
  isEnharmonic: function (that) {
    return this.midi() === Pitch(that).midi()
  },

  /**
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {Boolean} does this pitch sound higher than that pitch?
   * @see {@link isHigher}
   */
  isHigher: function (that) {
    return isHigher(this.name, Pitch(that).name)
  },

  /**
   * @returns {PitchString}
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
  },

  /**
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {Number} how many half steps are there between these pitches?
   */
  semitonesTo: function (that) {
    return semitonesBetween(this.name, Pitch(that).name)
  },

  /**
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {Number} the interval size between these pitches
   * @see {@link intervalSize}
   */
  intervalSize: function (that) {
    return intervalSize(this.name, Pitch(that).name)
  },

  /**
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {Number} the simple interval size between these pitches in range [1,7]
   * @see {@link intervalSize.simple}
   */
  simpleIntervalSize: function (that) {
    return intervalSize.simple(this.name, Pitch(that).name)
  },

  /**
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {String} the interval between these pitches
   * @see {@link interval}
   */
  interval: function (that) {
    return interval(this.name, Pitch(that).name)
  },

  /**
   * @param {Pitch|PitchString} that - a Pitch or a pitch string
   * @returns {String} the simple interval between these pitches
   * @see {@link interval.simple}
   */
  simpleInterval: function (that) {
    return interval.simple(this.name, Pitch(that).name)
  },

  /**
   * @param {String|Number} interval - an interval string or number with or without quality. If
   *   interval quality is not provided, accidentals on this Pitch will be ignored.
   * @returns {Pitch} the resulting Pitch
   * @see {@link plusInterval}
   * @example
   * var pitch_C4 = new Pitch('C4')
   * plusInterval(pitch_C4, 10)     => Pitch: E5
   * plusInterval(pitch_C4, -10)    => Pitch: A2
   * plusInterval(pitch_C4, 'm10')  => Pitch: Eb5
   * plusInterval(pitch_C4, '-d7')  => Pitch: D#3
   */
  plusInterval: function (interval) {
    return new Pitch(plusInterval(this.name, interval))
  }

}

module.exports = Pitch
