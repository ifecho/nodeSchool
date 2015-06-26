/*-----------------------MODULE LIST FILE-------------------------------*/
/*----------------LISTING FILTRE------------------*/
var fs = require('fs');
var path = require('path');


//Lecture fichiers du repertoire
module.exports = function listFile (repertoire, extension, callbackListFile) {
	fs.readdir(repertoire, 
		function callbackfs(err, listFile) {
			//Propagation erreur
			if (err) return callbackListFile(err);
			var data = [];
			var curFile = "";
			for (var idx = 0; idx < listFile.length; idx++) {
				curFile = listFile[idx];
				if (path.extname(curFile) == "." + extension) data.push(curFile);
			}
			
			callbackListFile(null, data);
		}
	);
};


