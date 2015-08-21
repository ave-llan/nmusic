var test = require('tape')
var toMidi = require('../../lib/pitch/to-midi.js')

test('toMidi returns the correct number', function (t) {
  t.equal(toMidi('C4'), 60)
  t.equal(toMidi('B#3'), 60)
  t.equal(toMidi('Cb4'), 59)
  t.equal(toMidi('B3'), 59)
  t.equal(toMidi('A##3'), 59)
  t.equal(toMidi('Cbb4'), 58)
  t.equal(toMidi('Bb3'), 58)
  t.equal(toMidi('A0'), 21)

  t.end()
})

test('toMidi throws an error for invalid pitches', function (t) {
  t.throws(function () {toMidi('AA3')}, Error)
  t.throws(function () {toMidi('3')}, Error)
  t.throws(function () {toMidi('bB3')}, Error)
  t.throws(function () {toMidi('#A4')}, Error)
  t.throws(function () {toMidi('')}, Error)

  t.end()
})
