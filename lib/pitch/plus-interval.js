var parsePitch = require('./parse-pitch.js')
var parseInterval = require('./parse-interval.js')
var semitonesBetween = require('./semitones-between.js')

var LETTERS = 'CDEFGAB'
var ACCIDENTAL_FROM_HALFSTEPS = {'-2': 'bb', '-1': 'b', '0': '', '1': '#', '2': '##'}

/**
 * given pitch string plus given interval string equals new pitch string
 *
 * @param {String} sciPitch        - a pitch in scientific pitch notation.
 * @param {String|Number} interval - an interval string or number with or without quality. If quality
 *                                   is not provided, accidentals on given pitch will be ignored.
 * @returns {String} the resulting pitch string.
 *
 * @throws an error if pitch string or interval string is not valid
 *
 * @example
 * plusInterval('C4', 10)    => 'E5'
 * plusInterval('C4', -10)   => 'A2'
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
  var newPitch = LETTERS[newLetterIndex] + String(i.direction * i.octaves + p.octave)
  if (i.quality === null) return newPitch  // if no quality was requested, return now

  // use requested interval quality to determine accidentals for new pitch
  var halfstepDifference = i.direction * (i.halfsteps - semitonesBetween(p.sciPitch, newPitch))

  return LETTERS[newLetterIndex] +                        // letter
         ACCIDENTAL_FROM_HALFSTEPS[halfstepDifference] +  // accidental
         String(i.direction * i.octaves + p.octave)       // octave number
}

module.exports = plusInterval
