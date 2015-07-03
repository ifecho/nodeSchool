var http = require("http");
var fs = require("fs");

noPort = process.argv[2];
fichier = process.argv[3];

var server = http.createServer(
  function (request, response){
    fluxFichier = fs.createReadStream(fichier);
    fluxFichier.pipe(response);
  }
);
server.listen (noPort);
