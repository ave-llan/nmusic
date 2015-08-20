var test = require('tape')
var Pitch = require('../lib/pitch.js')

test('new Pitches can be created', function(t) {

    var pitch_Bb4 = new Pitch('Bb4')

    t.equal(pitch_Bb4.name, 'Bb4')
    t.true(pitch_Bb4 instanceof Pitch, 'is instance of Pitch')

    pitch_Bb4.name = 'E4'
    t.equal(pitch_Bb4.name, 'Bb4', 'Pitch is immutable')

    pitch_Bb4.test = 'testing'
    t.equal(typeof pitch_Bb4.test, 'undefined', 'Pitch is immutable')

    t.end()
})