var http = require('http');
var send = require('send');
var url = require('url');

var app = http.createServer(function(req, res){

  var p = url.parse(req.url).pathname
  send(req, p, { root: __dirname })
  .pipe(res);

}).listen(8080);

