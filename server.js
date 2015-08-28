// http://127.0.0.1:4000/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
  console.log(req.headers);

  console.log(req.method, req.url);

  var urlParsed = url.parse(req.url, true);
  console.log(urlParsed);

  if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache');
    res.end(urlParsed.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }

});


// http.Server -> net.Server -> EventEmitter

server.listen(4000, '127.0.0.1');
console.log('server is running');



//var counter = 0;
//
//var emit = server.emit;
//server.emit = function(event /* arg1, arg2,... */) {
// console.log(event);
//  emit.apply(server, arguments);
//};
//
//server.on('request', function(req, res) {
//  res.end('Hello, world '+ ++counter);
//});