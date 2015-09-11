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

  t.end()
})

test('Key.scaleDegree()', function (t) {
  var a_major = new Key('A3', 'major')
  t.true(a_major.scaleDegree(1).equals('A3'))
  t.true(a_major.scaleDegree(3).equals('C#4'))
  t.true(a_major.scaleDegree(9).equals('B4'))
  t.true(a_major.scaleDegree(10).equals('C#5'))

  var eb_dorian = new Key('Eb5', 'dorian')
  t.true(eb_dorian.scaleDegree(1).equals('Eb5'))
  t.true(eb_dorian.scaleDegree(3).equals('Gb5'))
  t.true(eb_dorian.scaleDegree(6).equals('C6'))
  t.true(eb_dorian.scaleDegree(9).equals('F6'))

  t.end()
})
