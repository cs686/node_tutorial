let http = require('http');
let Student = require('./student');
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    if (req.url != "/favicon.ico"){
        user_one = new Student(100, 'Jim', 24);
        user_one.enter(res);
        res.end()
    }
}).listen(3000);
console.log('server start in 3000');

