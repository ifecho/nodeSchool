fs = require("fs");

fichier = process.argv[2];

fs.createReadStream(fichier).pipe(process.stdout);
