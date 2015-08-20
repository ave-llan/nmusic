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


test('Pitch.toString() generates the correct string', function(t) {
    t.equal((new Pitch('Bb5')).toString(), 'Bb5')

    var harmonic = 'C#3 D#3 E3 F#3 G#3 A3 B#3 C#4'
    var mapped = harmonic.split(' ').map(function(pitch) {
        return new Pitch(pitch)
    }).join(' ')
    t.equal(mapped, harmonic, "toString is being called automatically")

    t.end()
})

test('Pitch.halfSteps() returns the correct number', function(t) {
    t.equal((new Pitch('A##9')).halfSteps(), 2)
    t.equal((new Pitch('G#2')).halfSteps(), 1)
    t.equal((new Pitch('F4')).halfSteps(), 0)
    t.equal((new Pitch('Bb3')).halfSteps(), -1)
    t.equal((new Pitch('Dbb7')).halfSteps(), -2)

    t.end()
})