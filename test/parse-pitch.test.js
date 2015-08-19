var test = require('tape')
var parsePitch = require('../lib/parse-pitch.js')

test('pitch parsing works for notes without accidentals', function(t) {
    var pitch_F4 = {
            letter: 'F',
        accidental: '',
            octave: 4,
          sciPitch: 'F4'
    }

    t.deepEqual(parsePitch('F4'), pitch_F4)
    t.deepEqual(parsePitch('f4'), pitch_F4, "capitalizes letter")
    t.deepEqual(parsePitch('f'),  pitch_F4, "defaults to octave 4")
    t.notDeepEqual(parsePitch('c'), pitch_F4)

    t.end()
})


test('pitch parsing works for notes with accidentals', function(t) {
    var pitch_Bb3 = {
            letter: 'B',
        accidental: 'b',
            octave: 3,
          sciPitch: 'Bb3'
    }

    t.deepEqual(parsePitch('Bb3'), pitch_Bb3)
    t.deepEqual(parsePitch('bb3'), pitch_Bb3, "capitalizes letter")
    t.notDeepEqual(parsePitch('Bbb3'), pitch_Bb3)

    t.end()
})


test('pitch parsing returns false for non-pitch strings', function(t) {
    t.equal(parsePitch(''), false, "returns false")
    t.equal(parsePitch('5'), false, "returns false")
    t.equal(parsePitch('Eeb5'), false, "returns false")
    t.equal(parsePitch('M6'), false, "returns false")
    t.equal(parsePitch('hello'), false, "returns false")
    t.equal(parsePitch('Abbbbbbbbbb4'), false, "returns false")
    t.equal(parsePitch('#F#'), false, "returns false")
    t.equal(parsePitch('P4#'), false, "returns false")
    t.equal(parsePitch('bA4'), false, "returns false")

    t.end()
}) 

test('throws an error when given non-string arguments', function(t) {
    t.throws(parsePitch({}))
    t.throws(parsePitch(5))
    t.throws(parsePitch(['Db4']))
    t.throws(parsePitch(undefined))

    t.end()
}) 
