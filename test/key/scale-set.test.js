var test = require('tape')
var scaleSet = require('../../lib/key/scale-set.js')

test('scaleSet()', function (t) {
  t.deepEqual(scaleSet('Eb', 'major'),
    ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'])

  t.deepEqual(scaleSet('Eb4', 'major'),
    ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'])

  t.deepEqual(scaleSet('Eb', 'minor'),
    ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'])

  t.deepEqual(scaleSet('Eb', 'lydian'),
    ['Eb', 'F', 'G', 'A', 'Bb', 'C', 'D'])

  t.deepEqual(scaleSet('B', 'minor'),
    ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'])

  t.end()
})
