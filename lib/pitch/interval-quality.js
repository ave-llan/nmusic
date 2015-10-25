var intervalSize = require('./interval-size.js')
var semitonesBetween = require('./semitones-between.js')

// Map of interval quality, given first size, then number of half steps
// INTERVAL_QUALITY[intervalSize][semitonesTo] = quality
// P = perfect, m = minor, M = major, d = diminished, A = augmented
var INTERVAL_QUALITY = {
  '1': {'0': 'P', '1': 'A', '2': 'AA', '11': 'd'},            // 11 is for diminished octaves b/c interval uses mod 12
  '2': {'11': 'dd', '0': 'd', '1': 'm', '2': 'M', '3': 'A', '4': 'AA'},
  '3': {'2': 'd', '3': 'm', '4': 'M', '5': 'A', '6': 'AA'},
  '4': {'4': 'd', '5': 'P', '6': 'A', 7: 'AA'},
  '5': {'6': 'd', '7': 'P', '8': 'A', '9': 'AA'},
  '6': {'7': 'd', '8': 'm', '9': 'M', '10': 'A', '11': 'AA'},
  '7': {'9': 'd', '10': 'm', '11': 'M', '0': 'A', '1': 'AA'}, // A7 is 0 instead of 12 b/c interval uses mod 12
  '8': {'11': 'd', '12': 'P', '13': 'A'}
}

/**
 * the interval quality between two pitch strings
 *
 * @param {PitchString} sciPitch1 - a pitch in scientific pitch notation.
 * @param {PitchString} sciPitch2 - a pitch in scientific pitch notation.
 * @returns {String} a character representing the interval between the two pitches:
 * - 'P' = perfect
 * - 'm' = minor
 * - 'M' = major
 * - 'd' = diminished
 * - 'A' = augmented
 *
 * @throws an error if either string is not a valid pitch
 *
 * @example
 * intervalQuality('C4', 'E4')    => 'M'
 * intervalQuality('E4', 'Eb4')   => 'm'
 * intervalQuality('C4', 'F4')    => 'P'
 * intervalQuality('C4', 'F#4')   => 'A'
 * intervalQuality('B3', 'Ab4')   => 'd'
 */
var intervalQuality = function (sciPitch1, sciPitch2) {
  var sizeBetween = intervalSize.simple(sciPitch1, sciPitch2)
  var halfSteps = semitonesBetween(sciPitch1, sciPitch2) % 12
  return INTERVAL_QUALITY[sizeBetween][halfSteps]
}

module.exports = intervalQuality
