var net = require("net");
var strftime = require("strftime");

noPort = process.argv[2];

var server = net.createServer(
  function (socket){
    socket.write(strftime("%Y-%m-%d %H:%M", new Date()));
    socket.end();
  }
);
server.listen (noPort);
