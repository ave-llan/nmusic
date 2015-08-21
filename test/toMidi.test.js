var test = require('tape')
var toMidi = require('../lib/toMidi.js')


test('toMidi returns the correct number', function(t) {


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