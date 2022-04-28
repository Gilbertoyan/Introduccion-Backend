const http = require('http');

const hostname = '192.168.50.184';

const port = 3000;

const server = http.createServer((req, res) =>{

    res.statusCode= 200;

    res.setHeader('Content-Type', 'text/html');

    res.end('Hola mundo\n');

});
server.listen(port, hostname,() => {
    console.log('el servidor se está ejecutando en http://192.168.50.184:3000/');
});