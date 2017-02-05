var http = require('http');
var otherfunc = require('./functions.js');
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    func1(res);
    otherfunc.func2(res);
    res.write('<hr>');
    otherfunc['func2'](res);
    res.end()
}).listen(3000);
console.log('server start in 3000');

function func1(res) {
    console.log('func1');
    res.write('this is function 1')
}

