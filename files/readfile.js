let fs = require('fs');

module.exports = {
    readfilesSync: function (path) {
        return fs.readFileSync(path, 'utf-8')
    },
    readfiles: function (path, callback) {
        return fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                console.log(err)
            } else {
                // console.log(data.toString())
                callback(data)
            }
        });
    }

}