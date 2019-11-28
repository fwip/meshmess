var meshmess = require('../index.js')
var test = require('tape')

test('no-op', function (t) {
  t.end()
})

test('can compute', async function(t) {
    t.plan(3)
    let mm = meshmess.new()

    let data = mm.register(1)
    let increment = mm.register((x) => x+1)
    let double = mm.register((x) => x*2)

    let computed = increment.apply(data.value)
    let double_computed = double.apply(computed.value)

    t.equal(data.value, 1, "get data out")
    t.equal(computed.value, 2, "computation on data")
    t.equal(double_computed.value, 4, "computation on computed data")

    t.end()
})