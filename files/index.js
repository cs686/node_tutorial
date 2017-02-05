let http = require('http');
let url = require('url');
let routes = require('./routes');

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    if (req.url != "/favicon.ico"){
        let parsename = url.parse(req.url).pathname;
        url_name = parsename.replace(/\//, '');
        routes[url_name](req, res);
        // //闭包
        // function callback(data) {
        //     res.write(data);
        //     res.end()
        // }
        // readfile.readfiles('./demo1.html', callback);
    }
}).listen(3000);
console.log('server start in 3000');

