var myModule = require("./myModule");

var repertoire = process.argv[2];
var extension = process.argv[3];

myModule(repertoire,extension,
	function callback(err,data) {
		if (err) {
			console.log(err);
			return;
		}

		for (var idx = 0; idx < data.length; idx++) {
			console.log(data[idx]);
		}
	}
);