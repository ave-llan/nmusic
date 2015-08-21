var test = require('tape')
var simplifyIntervalSize = require('../../lib/pitch/simplify-interval-size.js')

test('simplifyIntervalSize', function (t) {
  t.equal(simplifyIntervalSize(1), 1)
  t.equal(simplifyIntervalSize(-1), -1)
  t.equal(simplifyIntervalSize(5), 5)
  t.equal(simplifyIntervalSize(-6), -6)
  t.equal(simplifyIntervalSize(8), 1)
  t.equal(simplifyIntervalSize(-8), -1)
  t.equal(simplifyIntervalSize(10), 3)
  t.equal(simplifyIntervalSize(-12), -5)
  t.equal(simplifyIntervalSize(-15), -1)
  t.equal(simplifyIntervalSize(16), 2)
  t.equal(simplifyIntervalSize(-17), -3)

  t.end()
})
