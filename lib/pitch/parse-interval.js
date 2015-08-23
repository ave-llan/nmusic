var simplifyIntervalSize = require('./simplify-interval-size.js')

var PERFECTABLE_INTERVALS = [1, 4, 5]
var PERFECT_QUALITIES = 'dAP'
var IMPERFECT_QUALITIES = 'MmAd'
var LETTERS_PER_OCTAVE = 7
var NOTES_PER_OCTAVE = 12

// Map of half steps in interval, given first size, then interval quality
// HALFSTEPS_FROM_INTERVAL_QUALITY[simpleIntervalSize][intervalQuality] = number of halfsteps
var HALFSTEPS_FROM_INTERVAL_QUALITY = {
  '1': {P: 0, A: 1, d: -1},      // d1 does not exist conceptually, but d8 will simplify to it for this
  '2': {d: 0, m: 1, M: 2, A: 3},
  '3': {d: 2, m: 3, M: 4, A: 5},
  '4': {d: 4, P: 5, A: 6},
  '5': {d: 6, P: 7, A: 8},
  '6': {d: 7, m: 8, M: 9, A: 10},
  '7': {d: 9, m: 10, M: 11, A: 12}
}

/**
 * parses an interval string or number and return its properties in an object or
 * return false if the string or number is not valid
 *
 * @param {String|Number} interval - an interval string with interval quality or a number
 * representing only interval size. Both types of input may be signed ('-P5' or -5)
 * to indicate a descending interval.
 *
 * @returns {Object|false} False if invalid interval else an object
 * with the following properties:
 * - interval: string
 * - direction: number -1 or 1
 * - quality: string of 'm', 'M', 'P', 'd', or 'A' OR null if not given
 * - size: number, size of the interval, never negative
 * - simpleSize: number in range [1,7]
 * - perfectable: boolean (if false, this is an imperfect interval)
 * - octaves: number of octave changes. Will be >= 0.
 * - halfsteps: number|undefined if given quality, number of halfsteps this interval translates to
 *
 * @example
 * parseInterval('-M6')  => {interval: '-M6', direction: -1, quality: 'M', size: 6, simpleSize: 6,
 *                           perfectable: false, octaves: 0, halfsteps: 9}
 * parseInterval(12)     => {interval: '12', direction: 1, quality: null, size: 12, simpleSize: 5,
 *                           perfectable: true, octaves 1}
 * parseInterval('M5')   => false
 */
var parseInterval = function (interval) {
  var els = /^(-)?([dmMAP])?(\d{1,2})$/.exec(String(interval))
  // els[0]= interval, els[1]= sign, els[2]= quality, els[3]= size
  if (!els || els[3] === '0') return false

  var i = {}
  i.interval = els[0]
  i.direction = (els[1] === undefined) ? 1 : -1
  i.quality = (els[2] === undefined) ? null : els[2]
  i.size = Number(els[3])
  i.simpleSize = simplifyIntervalSize(i.size)
  i.perfectable = PERFECTABLE_INTERVALS.indexOf(i.simpleSize) > -1
  i.simpleSize = simplifyIntervalSize(i.size)
  i.octaves = Math.floor((i.size - 1) / LETTERS_PER_OCTAVE)

  if (i.quality !== null) {
    if ((i.perfectable && PERFECT_QUALITIES.indexOf(i.quality) === -1) ||
      (!i.perfectable && IMPERFECT_QUALITIES.indexOf(i.quality) === -1)) {
      return false
    }
    i.halfsteps = HALFSTEPS_FROM_INTERVAL_QUALITY[i.simpleSize][i.quality] +
                  i.octaves * NOTES_PER_OCTAVE
  }

  return i
}

module.exports = parseInterval
