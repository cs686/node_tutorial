function User(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function (res) {
        res.write(this.id + this.name + this.age + 'enter the room');
        console.log(this.id + this.name + this.age + 'enter the room')
    }
}
module.exports = User;