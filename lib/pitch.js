var parsePitch = require('./parse-pitch.js')

/**
 * Creates a new immutable Pitch.
 * @constructor
 * @prop {string} Pitch.name - this pitch in scientific pitch notation
 *
 * @param {string} sciPitch - a pitch in scientific pitch notation
 * @throws Will throw an error if string is not a valid pitch
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
    /**
     * @returns {string} string in scientfic pitch notation
     */
    toString: function() {
        return this.name
    }
}


module.exports = Pitch