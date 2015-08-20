var parsePitch = require('./parse-pitch.js')

/**
 * Creates a new immutable Pitch.
 * @constructor
 *
 * @param {string} sciPitch - a pitch in scientific pitch notation
 * @returns {Pitch} a new Pitch
 * @prop {string} Pitch.name - this pitch in scientific pitch notation
 * @throws Will throw an error if string is not a valid pitch.
 *
 * @example
 * var p = new Pitch('Bb3')
 * p.name => 'Bb3'
 */
function Pitch(sciPitch) {
    var p = parsePitch(sciPitch)
    if (!p) throw Error('Invalid pitch name: ' + sciPitch)
    this.name = p.sciPitch
    Object.freeze(this)
}

Pitch.prototype = {
    constructor: Pitch,

    toString: function() {
        return this.name
    }
}


module.exports = Pitch