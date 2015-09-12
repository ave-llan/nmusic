var test = require('tape')
var scale = require('../../lib/key/scale.js')

test('scale()', function (t) {
  t.deepEqual(scale('Eb4', 'major'),
    ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5'])

  t.deepEqual(scale('Eb', 'major'),
    ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5'])

  t.deepEqual(scale('Eb4', 'minor'),
    ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5'])

  t.deepEqual(scale('Eb4', 'lydian'),
    ['Eb4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5'])

  t.deepEqual(scale('B2', 'minor'),
    ['B2', 'C#3', 'D3', 'E3', 'F#3', 'G3', 'A3'])

  t.deepEqual(scale('C4', ['P1', 'M2', 'M3', 'A4', 'A5', 'A6']),
    ['C4', 'D4', 'E4', 'F#4', 'G#4', 'A#4'])
  t.end()
})
