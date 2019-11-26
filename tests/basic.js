var meshmess = require('../index.js')
var test = require('tape')

test('no-op', function (t) {
  t.end()
})

test('can compute', function(t) {
    t.plan(1)
    let mm = meshmess.new()
    let data = mm.register(1)
    let f = mm.register((x) => x+1)
    let computed = mm.apply(f, data)
    let x = mm.view(computed)
    t.equal(x, 2, "1+1 = 2")
    t.end()
})