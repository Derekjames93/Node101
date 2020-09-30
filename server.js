const http = require('http');

const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(port, host, ()=>{
    console.log(`Server has started at http://${host}:${port}`);
})