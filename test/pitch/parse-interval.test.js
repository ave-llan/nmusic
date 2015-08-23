var test = require('tape')
var parseInterval = require('../../lib/pitch/parse-interval.js')

test('interval parsing works for notes without accidentals', function (t) {

  t.deepEqual(parseInterval('M6'),
    { interval: 'M6',
      direction: 1,
      quality: 'M',
      size: 6,
      perfectable: false,
      simpleSize: 6,
      octaves: 0,
      halfsteps: 9
    })

  t.deepEqual(parseInterval('-P5'),
    {
      interval: '-P5',
      direction: -1,
      quality: 'P',
      size: 5,
      perfectable: true,
      simpleSize: 5,
      octaves: 0,
      halfsteps: 7
    })

  t.deepEqual(parseInterval(10),
    {
      interval: '10',
      direction: 1,
      quality: null,
      size: 10,
      perfectable: false,
      simpleSize: 3,
      octaves: 1
    })

  t.deepEqual(parseInterval(-18),
    {
      interval: '-18',
      direction: -1,
      quality: null,
      size: 18,
      perfectable: true,
      simpleSize: 4,
      octaves: 2
    })

  t.deepEqual(parseInterval('A1'),
    { interval: 'A1',
      direction: 1,
      quality: 'A',
      size: 1,
      perfectable: true,
      simpleSize: 1,
      octaves: 0,
      halfsteps: 1
    })

  t.deepEqual(parseInterval('-d9'),
    { interval: '-d9',
      direction: -1,
      quality: 'd',
      size: 9,
      perfectable: false,
      simpleSize: 2,
      octaves: 1,
      halfsteps: 12
    })

  t.deepEqual(parseInterval('d15'),
    { interval: 'd15',
      direction: 1,
      quality: 'd',
      size: 15,
      simpleSize: 1,
      perfectable: true,
      octaves: 2,
      halfsteps: 23
    })

  t.end()
})

test('interval parsing returns false for non-interval strings', function (t) {
  t.equal(parseInterval(0), false, 'returns false')
  t.equal(parseInterval(''), false, 'returns false')
  t.equal(parseInterval('M0'), false, 'returns false')
  t.equal(parseInterval('-P0'), false, 'returns false')
  t.equal(parseInterval('g5'), false, 'returns false')
  t.equal(parseInterval('M5'), false, 'returns false')
  t.equal(parseInterval('-P10'), false, 'returns false')
  t.equal(parseInterval('test'), false, 'returns false')
  t.equal(parseInterval(53535), false, 'returns false')
  t.equal(parseInterval('m12'), false, 'returns false')
  t.equal(parseInterval('bA4'), false, 'returns false')

  t.end()
})

test('throws an error when given non-string arguments', function (t) {
  t.throws(parseInterval({}))
  t.throws(parseInterval(5))
  t.throws(parseInterval(['Db4']))
  t.throws(parseInterval(undefined))

  t.end()
})
