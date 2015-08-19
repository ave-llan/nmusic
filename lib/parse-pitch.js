var parsePitch = function(sciPitch) {
    var els = /^([a-gA-G])(b{1,2}|#{1,2})?(\d{1,2})?$/.exec(sciPitch)
    // [0]= scientific pitch, [1]= letter, [2]= accidentals, [3]= octaveNumber
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