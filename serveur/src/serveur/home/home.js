var http = require('http'),
fs       = require('fs');

var server = http.createServer(function(req, res) {
  fs.readFile('../../web/index.html', function(err, data) {
    if (err) {
      res.writeHead(500);
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(data);
    }
  });
  
});

server.listen(8080);
console.log("Serveur web lancé sur localhost:8080 ...");
