const http = require('http');
//const http2 = require('https'); // https

const courses = [
    {
        "name": "차성현",
        "age": '26',
    },
    {
        "name": "이태규",
        "age": '26',
    },
    {
        "name": "김동현",
        "age": '26',
    },
    {
        "name": "이동수",
        "age": '26',
    },
]

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/courses') {
        if (method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(courses))
        } else if (method === 'POST') {
            const body = [];
            req.on('data', chunk => {
                console.log(chunk);
                body.push(chunk)
            })
            req.on('end', () => {
                const course = JSON.parse(Buffer.concat(body).toString());
                courses.push(course);
                console.log(course);
                res.writeHead(201);
                res.end();
            })
        }
    }
});

server.listen(7070);