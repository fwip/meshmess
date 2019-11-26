var meshmess = require('../index.js')
var test = require('tape')

test('no-op', function (t) {
  t.end()
})

test('can compute', function(t) {
    t.plan(1)
    let mm = meshmess.new()
    mm.register('data', 1)
    mm.register('f', (x) => x+1)
    let x = mm.compute('f', 'data')
    t.equal(x, 2, "1+1 = 2")
    t.end()
})