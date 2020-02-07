var http = require('http'),
	fs = require('fs');
	
http.createServer(function (req, res) {
	fs.readFile('src/demo_html.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);