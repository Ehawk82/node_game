var http = require('http');
var screamer = require('screamer-test-impl');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(screamer.screamer(" helloWorld! "));
  res.end();
}).listen(8080);