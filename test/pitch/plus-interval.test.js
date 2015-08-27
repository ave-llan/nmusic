var test = require('tape')
var plusInterval = require('../../lib/pitch/plus-interval.js')

test('plusInterval works for positive simple intervals', function (t) {
  t.equal(plusInterval('C4', 1), 'C4')
  t.equal(plusInterval('C4', '2'), 'D4')
  t.equal(plusInterval('C#4', 3), 'E4')
  t.equal(plusInterval('Cb4', '4'), 'F4')
  t.equal(plusInterval('C##4', 5), 'G4')
  t.equal(plusInterval('Cbb4', '6'), 'A4')
  t.equal(plusInterval('C#4', 7), 'B4')
  t.equal(plusInterval('Cb4', '8'), 'C5')

  t.equal(plusInterval('B3', 2), 'C4')
  t.equal(plusInterval('B3', '5'), 'F4')
  t.equal(plusInterval('B3', 9), 'C5')
  t.equal(plusInterval('A3', '3'), 'C4')
  t.equal(plusInterval('A3', 12), 'E5')
  t.equal(plusInterval('G5', '5'), 'D6')

  t.end()
})

test('plusInterval works for negative simple intervals', function (t) {
  t.equal(plusInterval('C4', -1), 'C4')
  t.equal(plusInterval('C4', '-2'), 'B3')
  t.equal(plusInterval('C#4', -3), 'A3')
  t.equal(plusInterval('Cb4', '-4'), 'G3')
  t.equal(plusInterval('C##4', -5), 'F3')
  t.equal(plusInterval('Cbb4', '-6'), 'E3')
  t.equal(plusInterval('C#4', -7), 'D3')
  t.equal(plusInterval('Cb4', '-8'), 'C3')

  t.equal(plusInterval('D4', -2), 'C4')
  t.equal(plusInterval('D4', '-5'), 'G3')
  t.equal(plusInterval('D4', -10), 'B2')
  t.equal(plusInterval('A3', '-3'), 'F3')
  t.equal(plusInterval('A3', -12), 'D2')
  t.equal(plusInterval('F5', '-5'), 'B4')

  t.end()
})

test('plusInterval works for postivie intervals with quality', function (t) {
  t.equal(plusInterval('Bb3', 'P1'), 'Bb3')
  t.equal(plusInterval('Bb3', 'A1'), 'B3')
  t.equal(plusInterval('Bb3', 'd1'), 'Bbb3') // this is a strange case, but is the expected output

  t.equal(plusInterval('D#3', 'P1'), 'D#3')
  t.equal(plusInterval('D#3', 'A1'), 'D##3')
  t.equal(plusInterval('D#3', 'd1'), 'D3')

  t.equal(plusInterval('G#4', 'd2'), 'Ab4')
  t.equal(plusInterval('G#4', 'm2'), 'A4')
  t.equal(plusInterval('G#4', 'M2'), 'A#4')
  t.equal(plusInterval('G#4', 'A2'), 'A##4')

  t.equal(plusInterval('B5', 'd2'), 'Cb6')
  t.equal(plusInterval('B5', 'm2'), 'C6')
  t.equal(plusInterval('B5', 'M2'), 'C#6')
  t.equal(plusInterval('B5', 'A2'), 'C##6')

  t.equal(plusInterval('G2', 'd3'), 'Bbb2')
  t.equal(plusInterval('G2', 'm3'), 'Bb2')
  t.equal(plusInterval('G2', 'M3'), 'B2')
  t.equal(plusInterval('G2', 'A3'), 'B#2')

  t.equal(plusInterval('F3', 'd4'), 'Bbb3')
  t.equal(plusInterval('F3', 'P4'), 'Bb3')
  t.equal(plusInterval('F3', 'A4'), 'B3')

  t.equal(plusInterval('C4', 'd5'), 'Gb4')
  t.equal(plusInterval('C4', 'P5'), 'G4')
  t.equal(plusInterval('C4', 'A4'), 'F#4')

  t.equal(plusInterval('A6', 'd6'), 'Fb7')
  t.equal(plusInterval('A6', 'm6'), 'F7')
  t.equal(plusInterval('A6', 'M6'), 'F#7')
  t.equal(plusInterval('A6', 'A6'), 'F##7')

  t.equal(plusInterval('D0', 'd7'), 'Cb1')
  t.equal(plusInterval('D0', 'm7'), 'C1')
  t.equal(plusInterval('D0', 'M7'), 'C#1')
  t.equal(plusInterval('D0', 'A7'), 'C##1')

  t.equal(plusInterval('E4', 'd8'), 'Eb5')
  t.equal(plusInterval('E4', 'P8'), 'E5')
  t.equal(plusInterval('E4', 'A8'), 'E#5')

  t.equal(plusInterval('C4', 'd9'), 'Dbb5')
  t.equal(plusInterval('B3', 'P12'), 'F#5')
  t.equal(plusInterval('A2', 'M17'), 'C#5')

  t.end()
})

test('plusInterval works for negative intervals with quality', function (t) {
  t.equal(plusInterval('Bb3', '-P1'), 'Bb3')
  t.equal(plusInterval('Bb3', '-A1'), 'Bbb3')
  t.equal(plusInterval('Bb3', '-d1'), 'B3')

  t.equal(plusInterval('D#3', '-P1'), 'D#3')
  t.equal(plusInterval('D#3', '-A1'), 'D3')
  t.equal(plusInterval('D#3', '-d1'), 'D##3')

  t.equal(plusInterval('G4', '-d2'), 'F##4')
  t.equal(plusInterval('G4', '-m2'), 'F#4')
  t.equal(plusInterval('G4', '-M2'), 'F4')
  t.equal(plusInterval('G4', '-A2'), 'Fb4')

  t.equal(plusInterval('B5', '-d2'), 'A##5')
  t.equal(plusInterval('B5', '-m2'), 'A#5')
  t.equal(plusInterval('B5', '-M2'), 'A5')
  t.equal(plusInterval('B5', '-A2'), 'Ab5')

  t.equal(plusInterval('G2', '-d3'), 'E#2')
  t.equal(plusInterval('G2', '-m3'), 'E2')
  t.equal(plusInterval('G2', '-M3'), 'Eb2')
  t.equal(plusInterval('G2', '-A3'), 'Ebb2')

  t.equal(plusInterval('F3', '-d4'), 'C#3')
  t.equal(plusInterval('F3', '-P4'), 'C3')
  t.equal(plusInterval('F3', '-A4'), 'Cb3')

  t.equal(plusInterval('C4', '-d5'), 'F#3')
  t.equal(plusInterval('C4', '-P5'), 'F3')
  t.equal(plusInterval('C4', '-A5'), 'Fb3')

  t.equal(plusInterval('A6', '-d6'), 'C##6')
  t.equal(plusInterval('A6', '-m6'), 'C#6')
  t.equal(plusInterval('A6', '-M6'), 'C6')
  t.equal(plusInterval('A6', '-A6'), 'Cb6')

  t.equal(plusInterval('D1', '-d7'), 'E#0')
  t.equal(plusInterval('D1', '-m7'), 'E0')
  t.equal(plusInterval('D1', '-M7'), 'Eb0')
  t.equal(plusInterval('D1', '-A7'), 'Ebb0')

  t.equal(plusInterval('E4', '-d8'), 'E#3')
  t.equal(plusInterval('E4', '-P8'), 'E3')
  t.equal(plusInterval('E4', '-A8'), 'Eb3')

  t.equal(plusInterval('C4', '-d9'), 'B#2')
  t.equal(plusInterval('B3', '-P12'), 'E2')
  t.equal(plusInterval('A3', '-M17'), 'F1')

  t.end()
})

test('plusInterval throws an error when given bad input', function (t) {
  t.throws(function () {plusInterval()}, Error)
  t.throws(function () {plusInterval('', '')}, Error)
  t.throws(function () {plusInterval('C4', 'C4')}, Error)
  t.throws(function () {plusInterval('M3', 'M3')}, Error)
  t.throws(function () {plusInterval('C4', 'P6')}, Error)

  t.end()
})

test('plusInterval returns working function when given only pitch', function (t) {
  var majorscale = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8']

  t.deepEqual(majorscale.map(plusInterval('Eb4')),
    ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5'])
  t.deepEqual(majorscale.map(plusInterval('D3')),
    ['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4', 'D4'])

  t.end()
})

test('plusInterval returns working function when given only interval', function (t) {
  var major_Eb = ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5']

  t.deepEqual(major_Eb.map(plusInterval('-m9')),
    ['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4', 'D4'])

  t.end()
})
