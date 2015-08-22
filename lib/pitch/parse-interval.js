var simplifyIntervalSize = require('./simplify-interval-size.js')

var PERFECT_INTERVALS = [1, 4, 5, 8]
var PERFECT_QUALITIES = 'daP'
var IMPERFECT_QUALITIES = 'Mmad'
var LETTERS_PER_OCTAVE = 7

/**
 * parses an interval string or number and return its components in an object or
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
 * - perfectable: boolean (if false, this is an imperfect interval)
 * - simpleSize: number in range [1,7]
 * - octaves: number of octave changes. Will be >= 0.
 *
 * @example
 * parseInterval('-M6')  => {interval: '-M6', direction: -1, quality: 'M', size: 6, perfectable: false}
 * parseInterval(12)     => {interval: '12', direction: 1, quality: null, size: 12, perfectable: true}
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
  i.perfectable = PERFECT_INTERVALS.indexOf((i.size - 1) % 7 + 1) > -1
  i.simpleSize = simplifyIntervalSize(i.size)
  i.octaves = Math.floor((i.size - 1) / LETTERS_PER_OCTAVE)

  if (i.quality !== null && (
    (i.perfectable && PERFECT_QUALITIES.indexOf(i.quality) === -1) ||
    (!i.perfectable && IMPERFECT_QUALITIES.indexOf(i.quality) === -1))) {
    return false
  }

  return i
}

module.exports = parseInterval
