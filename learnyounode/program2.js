/*Récupération des parametres ligen de commande*/
//console.log(process.argv);
var resultat = 0;
for (var idx = 2; idx < process.argv.length; idx++) {
	resultat =  resultat + Number(process.argv[idx]);
}
console.log(resultat);
