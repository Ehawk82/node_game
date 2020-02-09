var http = require('http'),
	fs = require('fs'),
	Convert = require('ansi-to-html'),
	convert = new Convert();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

http.createServer(function (req, res) {
	fs.readFile('src/index.html', function(err, data) {
		var dt = Buffer.from(data),
			ps = convert.toHtml(dt.toString());

		const dom = new JSDOM(ps);

		dom.window.document.querySelector("p").textContent = "changing the text on the fly";
		
		var newDom = dom.window.document.querySelector("html").innerHTML;
		var newDt = convert.toHtml(newDom);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(newDt);
		res.end();
	});
}).listen(8080);
