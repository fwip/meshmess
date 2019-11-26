var meshmess = require('../index.js')
var test = require('tape')

test('no-op', function (t) {
  t.end()
})

test('can compute', async function(t) {
    t.plan(2)
    let mm = meshmess.new()

    let data = mm.register(1)
    let increment = mm.register((x) => x+1)
    let double = mm.register((x) => x*2)

    let computed = mm.apply(increment, data)
    let double_computed = mm.apply(double, computed)

    let x = mm.view(computed)
    t.equal(x, 2, "1+1 = 2")

    let x2 = mm.view(double_computed)
    t.equal(x2, 4, "2*2 = 4")

    t.end()
})