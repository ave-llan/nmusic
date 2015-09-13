var test = require('tape')
var Key = require('../../lib/key/key.js')
var Pitch = require('../../lib/pitch/pitch.js')

test('Key constructor', function (t) {
  var pitch_Bb4 = new Pitch('Bb4')
  t.true(Key('Bb', 'major') instanceof Key)
  t.true(Key(pitch_Bb4, 'minor') instanceof Key)

  t.equal(Key('Bb4', 'Major').toString(), 'Bb major')
  t.equal(String(new Key('Bb4', 'DORIAN')), 'Bb dorian')
  t.equal(String(Key('a', ['P1', 'M2', 'M3', 'A4', 'A5', 'A6'])), 'A custom-scale')

  var a_major = new Key('A3', 'major')
  t.equal(a_major.tonic.pitchClass(), 'A')
  t.equal(a_major.modeName, 'major')
  t.deepEqual(a_major.mode, ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'])
  t.deepEqual(a_major.scale, ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'])

  a_major.mode = 'test'
  t.equal(a_major.modeName, 'major')

  t.throws(function () {
    a_major.mode.push('A8')
  }, Error)

  a_major.scale[0] = 'Eb'
  t.deepEqual(a_major.scale, ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'])

  t.end()
})

test('Key.pitchAtDegree()', function (t) {
  var a_major = new Key('A3', 'major')
  t.deepEqual(a_major.pitchAtDegree(1), Pitch('A'))
  t.deepEqual(a_major.pitchAtDegree(3), Pitch('C#'))
  t.deepEqual(a_major.pitchAtDegree(9), Pitch('B'))
  t.deepEqual(a_major.pitchAtDegree(10), Pitch('C#'))

  var eb_dorian = new Key('Eb5', 'dorian')
  t.deepEqual(eb_dorian.pitchAtDegree(1), Pitch('Eb'))
  t.deepEqual(eb_dorian.pitchAtDegree(3), Pitch('Gb'))
  t.deepEqual(eb_dorian.pitchAtDegree(6), Pitch('C'))
  t.deepEqual(eb_dorian.pitchAtDegree(9), Pitch('F'))

  t.end()
})

test('Key.inKey()', function (t) {
  var f_sharp_minor = new Key('F#2', 'minor')
  t.true(f_sharp_minor.inKey('F#1'))
  t.true(f_sharp_minor.inKey('F#10'))
  t.true(f_sharp_minor.inKey(Pitch('G#3')))
  t.true(f_sharp_minor.inKey('C#5'))
  t.true(f_sharp_minor.inKey('D'))
  t.true(f_sharp_minor.inKey('E'))

  t.false(f_sharp_minor.inKey('Eb4'))
  t.false(f_sharp_minor.inKey('C2'))
  t.false(f_sharp_minor.inKey('F'))
  t.false(f_sharp_minor.inKey(Pitch('G')))

  t.end()
})
