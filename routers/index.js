let http = require('http');
let url = require('url');
let routers = require('./router');
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    if (req.url != "/favicon.ico"){
        let urlParse = url.parse(req.url).pathname;
        urlname = urlParse.replace(/\//,'');
        routers[urlname](req,res);
        // console.log(urlname);
        res.end()
    }
}).listen(3000);
console.log('server start in 3000');

