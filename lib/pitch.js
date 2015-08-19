var parsePitch = require('./parse-pitch.js')


function Pitch(sciPitch) {
    this.name = parsePitch(sciPitch).sciPitch
    if (!this.name) throw Error('Invalid pitch name: ' + sciPitch)
    Object.freeze(this); 
}

Pitch.prototype = {
    constructor: Pitch,

    toString: function() {
        return this.name
    }
}


module.exports = Pitch;