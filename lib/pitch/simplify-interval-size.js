var LETTERS_PER_OCTAVE = 7

/**
 * simplify compound intervals to within the range of 1-7. Works for
 * negative intervals as well.
 *
 * @param {Number} intervalSize - any valid interval number
 * @returns {Number} the simplified interval
 *
 * @throws Will throw an error if intervalSize is 0
 *
 * @example
 * simplifyIntervalSize(10)   => 3
 * simplifyIntervalSize(-12)  => -5
 * simplifyIntervalSize(-4)   => -4
 * simplifyIntervalSize(8)    => 1
 */

var simplifyIntervalSize = function (intervalSize) {
  if (intervalSize === 0) {
    throw new Error('0 is not a valid interval size')
  }

  var base1adjust = 1
  if (intervalSize < 0) {
    base1adjust *= -1
  }

  return (intervalSize - base1adjust) % LETTERS_PER_OCTAVE + base1adjust
}

module.exports = simplifyIntervalSize
