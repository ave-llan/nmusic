/**
 * Parse a pitch string and return its properties or 
 * false if the string is not valid
 *
 * @param {string} sciPitch - a pitch in scientific pitch notation
 * @returns {object|false} False if invalid pitch string or an object 
 * with the following properties:
 * - letter: string
 * - accidental: string
 * - octave: integer
 * - sciPitch: string
 *
 * @example
 * parsePitch('Bb3')   => {letter: 'B', accidental: 'b', octave: 3, sciPitch:'Bb3'} 
 * prasePitch('Xb4')   => false
 */
var parsePitch = function(sciPitch) {
    var els = /^([a-gA-G])(b{1,2}|#{1,2})?(\d{1,2})?$/.exec(sciPitch)
    // els[0]= scientific pitch, els[1]= letter, els[2]= accidentals, els[3]= octaveNumber
    if (!els) return false
    var p = {
        letter: els[1].toUpperCase(),
        accidental: (els[2] === undefined) ? '' : els[2],
        octave: (els[3] === undefined) ? 4 : Number(els[3])
    }
    p.sciPitch = p.letter + p.accidental + p.octave
    return p
}


module.exports = parsePitch