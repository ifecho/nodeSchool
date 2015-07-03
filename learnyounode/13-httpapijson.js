var http = require("http");
var url = require('url');

noPort = process.argv[2];

var idx = 0;
var server = http.createServer(
  function (request, response){
     response.writeHead(200, { 'Content-Type': 'application/json' });

     objUrl = url.parse(request.url, true);

     //recup date du query parameter
     date = new Date(objUrl.query.iso);

     //Objet date JSON
     var oDate = {};

     //Date format JSON Y M D
     if (objUrl.pathname == '/api/parsetime') {
       oDate.hour = date.getHours();
       oDate.minute = date.getMinutes();
       oDate.second = date.getSeconds();
     }
     else if (objUrl.pathname == '/api/unixtime'){
       oDate.unixtime = date.getTime();
     }
     response.end(JSON.stringify(oDate));
  }
);
server.listen (noPort);
