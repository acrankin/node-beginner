var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello World");
    response.end();
}).listen(8888);