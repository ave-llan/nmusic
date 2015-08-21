var parsePitch = require('./parse-pitch.js')

// number of halfsteps each letter is from C
var HALFSTEPS_FROM_C = {C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11}
// number of notes per octave cycle
var MUSIC_RADIX = 12

/**
 * What is the [midi number]{@link http://newt.phys.unsw.edu.au/jw/notes.html} of this pitch?
 * [Enharmonic]{@link https://en.wikipedia.org/wiki/Enharmonic} notes will return the same
 * midi number.
 *
 * @param {String} sciPitch - a pitch in scientific pitch notation.
 * @returns {Number} the midi number for this pitch. C4 is 60.
 *
 * @throws Will throw an error if string is not a valid pitch
 *
 * @example
 * toMidi('C4')    => 60
 * toMidi('B#3')   => 60
 * toMidi('Bb3')   => 58
 * toMidi('A#3')   => 58
 */

var toMidi = function (sciPitch) {
  var p = parsePitch(sciPitch)
  if (!p) throw Error('Invalid pitch name: ' + sciPitch)
  return HALFSTEPS_FROM_C[p.letter] + // start with number of half steps from C
  (MUSIC_RADIX * (p.octave + 1)) + // add one to octave num so C4 = 60
  p.numAccidental // add or subtract accidental
}

module.exports = toMidi
