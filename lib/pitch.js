var parsePitch = require('./parse-pitch.js')


function Pitch(sciPitch) {
    var p = parsePitch(sciPitch)
    if (!p) throw Error('Invalid pitch name: ' + sciPitch)
    this.name = p.sciPitch
    Object.freeze(this); 
}

Pitch.prototype = {
    constructor: Pitch,

    toString: function() {
        return this.name
    }
}


module.exports = Pitch;