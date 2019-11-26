
const meshmess = {
    new: function() {
        let state = {}
        let mm = {
            register: function(name, data) {
                state[name] = data
            },
            compute: function(f, data) {
                return state[f](state[data])
            },
        }
        return mm
    }
}
module.exports = meshmess