var toMidi = require('./to-midi.js')

/**
 * does this pitch sound higher than that pitch?
 *
 * @param {String} sciPitch1 - a pitch in scientific pitch notation.
 * @param {String} sciPitch2 - a pitch in scientific pitch notation.
 * @returns {boolean} is sciPitch1 higher than sciPitch2?
 *
 * @throws Will throw an error if string is not a valid pitch
 *
 * @example
 * isHigher('D4', 'C4')    => true
 * isHigher('C4', 'D4')    => false
 * isHigher('C4', 'B#3')   => false   // enharmonic, so they actually sound equal
 * isHigher('B##3', 'C4')  => true    // B##3 sounds higher than C4
 */
var isHigher = function (sciPitch1, sciPitch2) {
  return toMidi(sciPitch1) > toMidi(sciPitch2)
}

module.exports = isHigher
