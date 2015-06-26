var fs = require('fs');
var fichier = process.argv[2];
fs.readFile(fichier, 'utf8', 
	function callback(err,strContenu) {
		console.log(strContenu.split('\n').length - 1);
	}
);

