var http = require("http");
var map = require("through2-map");

noPort = process.argv[2];

var server = http.createServer(
  function (request, response){
    request.pipe(
      map(function(maString) {return maString.toString().toUpperCase();})).pipe(response);
  }
);
server.listen (noPort);
