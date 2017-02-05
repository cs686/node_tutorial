let readfile = require('./readfile');
module.exports = {
    login: function (req, res) {
        //闭包
        function callback(data) {
            res.write(data);
            res.end()
        }
        readfile.readfiles('./demo1.html', callback);
    },
    logout: function (req, res) {
        //闭包
        function callback(data) {
            res.write(data);
            res.end()
        }
        readfile.readfiles('./demo2.html', callback);
    }
};