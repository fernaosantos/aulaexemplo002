
var minhabiblioteca = require("./exemplomodule");

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(minhabiblioteca.primeironome+" sobrenome:"+minhabiblioteca.sobrenome);
    res.end();

}).listen(8080);


console.log( minhabiblioteca.primeironome );