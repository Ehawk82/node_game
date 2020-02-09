var stuff = '<h1 style="background:silver;">test</h1><p>Paragraph 1</p>';

var data = Buffer.from(stuff);

var Convert = require('ansi-to-html');
var convert = new Convert();

exports.plot = function () {
  return convert.toHtml(data.toString());
};
