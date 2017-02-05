let user = require('./user');
function student(id, name, age) {
    user.apply(this,[id, name, age])
}
module.exports = student;