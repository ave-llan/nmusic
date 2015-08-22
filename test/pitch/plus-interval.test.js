var test = require('tape')
var plusInterval = require('../../lib/pitch/plus-interval.js')

test('plusInterval works for positive simple intervals', function (t) {
  t.equal(plusInterval('C4', 1), 'C4')
  t.equal(plusInterval('C4', 2), 'D4')
  t.equal(plusInterval('C#4', 3), 'E4')
  t.equal(plusInterval('Cb4', 4), 'F4')
  t.equal(plusInterval('C##4', 5), 'G4')
  t.equal(plusInterval('Cbb4', 6), 'A4')
  t.equal(plusInterval('C#4', 7), 'B4')
  t.equal(plusInterval('Cb4', 8), 'C5')

  t.equal(plusInterval('B3', 2), 'C4')
  t.equal(plusInterval('B3', 5), 'F4')
  t.equal(plusInterval('B3', 9), 'C5')
  t.equal(plusInterval('A3', 3), 'C4')
  t.equal(plusInterval('A3', 12), 'E5')
  t.equal(plusInterval('G5', 5), 'D6')

  t.end()
})
