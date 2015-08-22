var parsePitch = require('./parse-pitch.js')
var parseInterval = require('./parse-interval.js')

var LETTERS = 'CDEFGAB'

/**
 * starting pitch plus interval equals new pitch
 *
 * @param {String} sciPitch - a pitch in scientific pitch notation.
 * @param {String|Number} interval - an interval string or number.
 * @returns {String} the resulting pitch string
 *
 * @throws an error if pitch string or interval string is not valid
 *
 * @example
 * plusInterval('C4', 10)    => 'E5'
 */
var plusInterval = function (sciPitch, interval) {
  var p = parsePitch(sciPitch)
  var i = parseInterval(interval)
  if (!p || !i) throw new Error('Invalid pitch or interval:', sciPitch, interval)

  // calculate the index of the new letter and check if it passed through an octave cycle
  var newLetterIndex = LETTERS.indexOf(p.letter) + (i.simpleSize - 1) * i.direction
  if (newLetterIndex >= LETTERS.length) {
    i.octaves += 1
    newLetterIndex = newLetterIndex % LETTERS.length
  } else if (newLetterIndex < 0) {
    i.octaves += 1
    newLetterIndex += LETTERS.length
  }

  return LETTERS[newLetterIndex] + String(i.direction * i.octaves + p.octave)
}

module.exports = plusInterval
