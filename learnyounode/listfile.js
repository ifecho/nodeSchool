/*----------------LISTING FILTRE------------------*/
var fs = require('fs');
var path = require('path');

var repertoire = process.argv[2];
var extension = process.argv[3];

//Lecture fichiers du repertoire
fs.readdir(repertoire, 
	function callback(err, listFile) {
		var curFile = "";
		for (var idx = 0; idx < listFile.length; idx++) {
			curFile = listFile[idx];
			if (path.extname(curFile) == "." + extension) console.log(curFile);
		}
	}
);
