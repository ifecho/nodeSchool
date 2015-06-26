var http = require("http");

var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var arrContenu = new Array();

getUrl(url1, 0);
getUrl(url2, 1);
getUrl(url3, 2);

function getUrl (pfUrl, idxArr) {
  http.get(pfUrl,
    function callbackGet(response) {
      response.setEncoding("utf8");
      response.pipe(bl(
        function(err,data){
          if (err) return console.error(err);
          arrContenu[idxArr]  = data.toString();
          affResultatComplet();
        }
      ));
    }
  )
}

function affResultatComplet() {
  if(theEnd() == true) {
    for (var idx = 0; idx <3; idx++) {
      console.log(arrContenu[idx]);
    }
  }
}

function theEnd () {
    retour = false;
    if(arrContenu[0] && arrContenu[1] && arrContenu[2]) retour = true;
    return retour;
}
