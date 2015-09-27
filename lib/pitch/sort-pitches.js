var Pitch = require('./pitch.js')

/**
 * helper function to sort an array of PitchStrings from lowest to highest
 * @param {PitchString[]} pitches - an array of pitch strings
 * @returns {PitchString[]} a new clone of the provided pitch string
 * array sorted from low pitch to high pitch
 */
function sortPitches (pitches) {
  return pitches.map(Pitch).sort(function (a, b) {
    return a - b
  }).map(function (pitch) {
    return pitch.sciPitch()
  })
}

module.exports = sortPitches
