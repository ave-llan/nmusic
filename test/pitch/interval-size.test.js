var test = require('tape')
var intervalSize = require('../../lib/pitch/interval-size.js')

test('intervalSize returns the correct number', function (t) {
  t.equal(intervalSize('C4', 'C4'), 1)
  t.equal(intervalSize('C4', 'C#4'), 1)
  t.equal(intervalSize('C4', 'B3'), 2)
  t.equal(intervalSize('Cb4', 'B#3'), 2)
  t.equal(intervalSize('Cbb4', 'B##3'), 2)
  t.equal(intervalSize('C4', 'E4'), 3)
  t.equal(intervalSize('E4', 'C4'), 3)
  t.equal(intervalSize('C4', 'B4'), 7)
  t.equal(intervalSize('D3', 'Db4'), 8)
  t.equal(intervalSize('C4', 'E5'), 10)
  t.equal(intervalSize('C##4', 'Ebb5'), 10)
  t.equal(intervalSize('C4', 'C2'), 15)

  t.end()
})
