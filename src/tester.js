var Convert = require('ansi-to-html'),
	convert = new Convert();

var dt = "<h1>hello world</h1>";
const buf = Buffer.from(dt.toString());

var d = convert.toString(buf);

for(const b of d){
	console.log(b);
}
