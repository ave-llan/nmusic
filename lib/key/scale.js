var plusInterval = require('../pitch/plus-interval.js')
var modeIntervals = require('./mode-intervals.js')

/**
 * given a pitch string and scale mode, build a scale from that pitch
 *
 * @param {PitchString} tonic - the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music))
 * of this scale
 * @param {string|string[]} mode - a string representing a mode name (minor, major, dorian) or
 * an array of interval strings representing the interval each scale degree is from tonic
 *
 * @returns {PitchString[]} an array of pitch strings
 *
 * @example
 * scale('Eb4', 'major')
 * => ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5']
 */
var scale = function (tonic, mode) {
  mode = (typeof mode === 'string') ? modeIntervals(mode)
                                         : mode
  return mode.map(plusInterval(tonic))
}

module.exports = scale
