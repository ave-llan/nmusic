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
     * @returns {String} string in scientfic pitch notation
     */
    toString: function() {
        return this.name
    },

    /**
     * @returns {String} 
     * in [scientfic pitch notation]{@link https://en.wikipedia.org/wiki/Scientific_pitch_notation} 
     * (same as Pitch.name)
     */
    sciPitch: function() {
        return this.name
    },

    /**
     * @returns {String} will return 'A', 'B', 'C', 'D', 'E', 'F', or 'G'
     */
    letter: function() {
        return parsePitch(this.name).letter
    },

    /**
     * @returns {String} 'b', 'bb', '#', '##' (double sharp is not 'x'), 
     * or '', the empty string if there is no accidental.
     */
    accidental: function() {
        return parsePitch(this.name).accidental
    },

    /**
     * @returns {Number} the octave number (C4 is 
     * [middle C]{@link https://en.wikipedia.org/wiki/C_(musical_note)#Middle_C})
     */
    octave: function() {
        return parsePitch(this.name).octave
    },

    /**
     * @returns {String} the [pitch class]{@link https://en.wikipedia.org/wiki/Pitch_class}),
     * same as {Pitch#sciPitch} but without octave number.
     */
    pitchClass: function() {
        var parsed = parsePitch(this.name)
        return parsed.letter + parsed.accidental
    },

    /**
     * returns the number of accidentals on this letter:
     * positive for sharps, negative for flats.
     * @returns {Number} how many half steps from its letter
     * @example
     * var p = new Pitch('Abb3')
     * p.halfSteps() => -2
     */
    numAccidental: function() {
        var accidental = parsePitch(this.name).accidental
        var steps = accidental.length
        if (steps > 0 && accidental[0] === 'b')
            steps *= -1
        return steps
    }
}


module.exports = Pitch