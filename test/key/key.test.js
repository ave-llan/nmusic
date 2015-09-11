var test = require('tape')
var Key = require('../../lib/key/key.js')
var Pitch = require('../../lib/pitch/pitch.js')

test('Key methods', function (t) {
  var pitch_Bb4 = new Pitch('Bb4')
  t.true(Key('Bb', 'major') instanceof Key)
  t.true(Key(pitch_Bb4, 'minor') instanceof Key)

  t.equal(Key('Bb4', 'Major').toString(), 'Bb major')
  t.equal(String(new Key('Bb4', 'DORIAN')), 'Bb dorian')
  t.equal(String(Key('a', ['P1', 'M2', 'M3', 'A4', 'A5', 'A6'])), 'A custom-scale')

  t.end()
})
