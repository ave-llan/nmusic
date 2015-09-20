var toMidi = require('./to-midi.js')

/**
 * the number of semitones between these two pitch strings
 *
 * @param {String} sciPitch1 - a pitch in scientific pitch notation.
 * @param {String} sciPitch2 - a pitch in scientific pitch notation.
 * @returns {Number} the semitones between these two pitch strings.
 *
 * @throws Will throw an error if string is not a valid pitch
 *
 * @example
 * semitonesBetween('C4', 'Db4')   => 1
 * semitonesBetween('C4', 'B#3')   => 0
 * semitonesBetween('C4', 'C5')    => 12
 */
var semitonesBetween = function (sciPitch1, sciPitch2) {
  return Math.abs(toMidi(sciPitch1) - toMidi(sciPitch2))
}

module.exports = semitonesBetween
