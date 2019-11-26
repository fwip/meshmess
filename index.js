const meshmess = {
    new: function() {
        let registry = []
        let curry = function(f, ...args) {
            return function(...moreargs) {
                return f(...args, ...moreargs)
            }
        }
        let mm = {
            register: function(data) {
                let name = registry.length 
                registry[name] = data
                return name
            },
            apply: function(f, ...moreargs) {
                let name = registry.length 
                registry[name] = () => {
                    return registry[f](
                        ...(moreargs.map(mm.view))
                    )}
                return name
            },
            view: function(x) {
                let data = registry[x]
                if (typeof data === 'function') {
                    return data()
                }
                return data
            },
        }
        return mm
    }
}
module.exports = meshmess