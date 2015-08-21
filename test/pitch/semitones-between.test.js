var test = require('tape')
var semitonesBetween = require('../../lib/pitch/semitones-between.js')

test('toMidi returns the correct number', function (t) {
  t.equal(semitonesBetween('C4', 'C4'), 0)
  t.equal(semitonesBetween('C4', 'B#3'), 0)
  t.equal(semitonesBetween('Cb4', 'B3'), 0)
  t.equal(semitonesBetween('C4', 'E4'), 4)
  t.equal(semitonesBetween('C4', 'C5'), 12)
  t.equal(semitonesBetween('C4', 'C#5'), 13)
  t.equal(semitonesBetween('C4', 'Cb5'), 11)
  t.equal(semitonesBetween('B#3', 'C5'), 12)
  t.equal(semitonesBetween('C4', 'Eb5'), 15)

  t.end()
})
