var MODES = {
  major: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
  minor: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7'],
  ionian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
  dorian: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7'],
  phrygian: ['P1', 'm2', 'm3', 'P4', 'P5', 'm6', 'm7'],
  lydian: ['P1', 'M2', 'M3', 'A4', 'P5', 'M6', 'M7'],
  mixolydian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7'],
  aeolian: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7'],
  locrian: ['P1', 'm2', 'm3', 'P4', 'd5', 'm6', 'm7']
}

/**
 * returns the intervals that define the scale degrees of a given mode
 *
 * @param {'major'|'minor'|'ionian'|'dorian'|'phrygian'|
           'lydian'|'mixolydian'|'aeolian'|'locrian'} modeName - a mode name
 * @returns {string[]} an array of interval strings representing the
 * interval each scale degree is from tonic, always starting with 'P1' for tonic
 *
 * @example
 * modeIntervals('major')  => ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']
 * modeIntervals('dorian') => ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7']
 */
var modeIntervals = function (modeName) {
  modeName = modeName.toLowerCase()
  if (!(modeName in MODES)) throw new Error('Unrecognized mode name:', modeName)
  return MODES[modeName]
}

module.exports = modeIntervals
