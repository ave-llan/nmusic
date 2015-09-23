var intervalSize = require('./interval-size.js')
var intervalQuality = require('./interval-quality.js')

/**
 * the interval between two pitch strings
 *
 * @param {PitchString} sciPitch1 - a pitch in scientific pitch notation.
 * @param {PitchString} sciPitch2 - a pitch in scientific pitch notation.
 * @returns {String} the interval between the two pitches
 *
 * @throws an error if either string is not a valid pitch
 *
 * @see [interval.simple]{@link interval.simple} for returning the simple interval
 *
 * @example
 * interval('C4', 'E4')    => 'M3'
 * interval('E4', 'Eb4')   => 'm3'
 * interval('C4', 'F4')    => 'P4'
 * interval('C4', 'F#4')   => 'A4'
 * interval('B3', 'Ab4')   => 'd7'
 */
var interval = function (sciPitch1, sciPitch2) {
  return intervalQuality(sciPitch1, sciPitch2) + intervalSize(sciPitch1, sciPitch2)
}

/**
 * the simple interval between two pitch strings
 *
 * @param {String} sciPitch1 - a pitch in scientific pitch notation.
 * @param {String} sciPitch2 - a pitch in scientific pitch notation.
 * @returns {Number} the simple interval between the two pitches.
 * Contrary to standard practice, an octave is considered compound and reduces to 1 as in {@link intervalSize.simple}
 *
 * @throws an error if string is not a valid pitch
 *
 * @example
 * interval.simple('C4', 'E4')    => 'M3'
 * interval.simple('C4', 'E5')    => 'M3'
 * interval.simple('C1', 'E9')    => 'M3'
 */
interval.simple = function (sciPitch1, sciPitch2) {
  return intervalQuality(sciPitch1, sciPitch2) + intervalSize.simple(sciPitch1, sciPitch2)
}

module.exports = interval
