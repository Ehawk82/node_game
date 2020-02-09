var http = require('http'),
    demo = require('./demo.js');

const d = demo.plot();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(d);
  res.end();
}).listen(5656, '127.0.0.1');

console.log('Server running');