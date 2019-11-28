const meshmess = {
    new: function() {
        let registry = []
        let key = 0;
        let mm = {
            register: function(data) {
                let ret = {key: key++}
                Object.defineProperty(ret, 'value', {get() {return data}})
                if (typeof data === 'function') {
                    ret.apply = (...args) => {
                        return mm.apply(data, ...args)
                    }
                }
                return ret
            },
            apply: function(f, ...moreargs) {
                return Object.defineProperty(
                    {key: key++},
                    'value',
                    {get() {return f(
                        ...(moreargs.map((m) => {return m.value}))
                    )}}
                )
            },
        }
        return mm
    }
}
module.exports = meshmess