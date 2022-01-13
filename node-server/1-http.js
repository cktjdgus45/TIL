const http = require('http');
//const http2 = require('https'); // https

const server = http.createServer((req, res) => {
    console.log(req.headers)
    console.log(req.httpVersion)
    console.log(req.method)
    console.log(req.url)
    res.write('welcome');
    res.end();
});

server.listen(7070);