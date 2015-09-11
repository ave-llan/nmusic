var test = require('tape')
var modeIntervals = require('../../lib/key/mode-intervals.js')

test('modeIntervals()', function (t) {
  var major = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']

  t.deepEqual(modeIntervals('major'), major)
  t.deepEqual(modeIntervals('MAJOR'), major)
  t.deepEqual(modeIntervals('minor'), modeIntervals('aeolian'))
  t.throws(function () {modeIntervals('not_a_mode')})

  t.end()
})
