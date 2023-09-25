const http = require('http');
const port = 3000
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hello, process.env.MYVAR=' + process.env.MYVAR);
    response.end();
}).listen(port);
console.log('Server running at http://localhost:' + port + '/, with process.env.MYVAR=', process.env.MYVAR)


