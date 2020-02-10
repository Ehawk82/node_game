var http = require('http'),
	fs = require('fs'),
	Convert = require('ansi-to-html'),
	convert = new Convert();

var events = require('events');
var eventEmitter = new events.EventEmitter();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

http.createServer(function (req, res) {
	fs.readFile('src/index.html', function(err, data) {
		var dt = Buffer.from(data),
			ps = convert.toHtml(dt.toString());

		const dom = new JSDOM(ps);
		eventEmitter.addListener('scream', function() {
			console.log(eventEmitter);
			console.log('A scream is detected! - '); //FIXME
		});
		var btn = dom.window.document.createElement('button');
		btn.innerHTML = "click me";
		btn.onclick = mF();
//CHECKME
function mF(){
	eventEmitter.emit('scream', eventEmitter);
};
		var spn = dom.window.document.createElement('h3');
		spn.innerHTML = "test thingy";

		dom.window.document.querySelector("p").innerHTML = "<h2>changing the text on the fly</h2>";
		dom.window.document.querySelector("body").append(spn,btn);
		
		var newDom = dom.window.document.querySelector("html").innerHTML;
		var newDt = convert.toHtml(newDom);
		
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(newDt);
		res.end();
	});
}).listen(8080);
