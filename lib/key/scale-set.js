var scale = require('./scale.js')
var parsePitch = require('../pitch/parse-pitch.js')

/**
 * given a pitch string and scale mode, build a pitch class scale from that pitch
 *
 * @param {string} tonic - the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music))
 * of this scale. If octave number is provided, it will be ignored.
 * @param {string|string[]} mode - a string representing a mode name (minor, major, dorian) or
 * an array of interval strings representing the interval each scale degree is from tonic
 *
 * @returns {string[]} an array of pitch class strings
 * @see for a similar function which uses octave numbers, see {@link scale}
 * @example
 * scale('Eb4', 'major')
 * => ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']
 */
var scaleSet = function (tonic, mode) {
  return scale(tonic, mode).map(function (pitch) {
    var parsed = parsePitch(pitch)
    return parsed.letter + parsed.accidental
  })
}

module.exports = scaleSet
