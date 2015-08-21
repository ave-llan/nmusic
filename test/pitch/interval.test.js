var test = require('tape')
var interval = require('../../lib/pitch/interval.js')

test('interval()', function (t) {
  t.equal(interval('C4', 'C4'), 'P1')
  t.equal(interval('C4', 'Db4'), 'm2')
  t.equal(interval('C4', 'D4'), 'M2')
  t.equal(interval('C4', 'Eb4'), 'm3')
  t.equal(interval('C4', 'E4'), 'M3')
  t.equal(interval('C4', 'F4'), 'P4')
  t.equal(interval('C4', 'F#4'), 'A4')
  t.equal(interval('C4', 'Gb4'), 'd5')
  t.equal(interval('C4', 'G4'), 'P5')
  t.equal(interval('C4', 'G#4'), 'A5')
  t.equal(interval('C4', 'Ab4'), 'm6')
  t.equal(interval('C4', 'A4'), 'M6')
  t.equal(interval('C4', 'A#4'), 'A6')
  t.equal(interval('C4', 'Bb4'), 'm7')
  t.equal(interval('C4', 'B4'), 'M7')
  t.equal(interval('C4', 'B#4'), 'A7')
  t.equal(interval('C4', 'C5'), 'P8')
  t.equal(interval('C4', 'Cb5'), 'd8')
  t.equal(interval('C4', 'C#5'), 'A8')
  t.equal(interval('B#3', 'C4'), 'd2')
  t.equal(interval('Bb3', 'Bbb3'), 'A1')
  t.equal(interval('B3', 'Ab4'), 'd7')

  t.equal(interval('C4', 'Eb5'), 'm10')
  t.equal(interval('Eb5', 'C4'), 'm10')
  t.equal(interval('B#3', 'C5'), 'd9')
  t.equal(interval('C4', 'A5'), 'M13')
  t.equal(interval('E5', 'Cb4'), 'A10')
  t.equal(interval('F#2', 'C#4'), 'P12')

  t.end()
})

test('interval.simple()', function (t) {
  t.equal(interval.simple('C4', 'C4'), 'P1')
  t.equal(interval.simple('C4', 'E4'), 'M3')
  t.equal(interval.simple('C1', 'E8'), 'M3')
  t.equal(interval.simple('C4', 'C#5'), 'A1')

  t.equal(interval.simple('C4', 'Eb5'), 'm3')
  t.equal(interval.simple('Eb5', 'C4'), 'm3')
  t.equal(interval.simple('B#3', 'C5'), 'd2')
  t.equal(interval.simple('C4', 'A5'), 'M6')
  t.equal(interval.simple('E5', 'Cb4'), 'A3')
  t.equal(interval.simple('F#2', 'C#4'), 'P5')

  t.equal(interval.simple('C4', 'Cb6'), 'd1') // perhaps this should be A1 instead?

  t.end()
})
