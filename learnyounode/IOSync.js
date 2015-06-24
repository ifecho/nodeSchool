var fs = require('fs');
var fichier = process.argv[2];
buffer = fs.readFileSync(fichier);

var str = buffer.toString();
console.log(str.split('\n').length - 1);