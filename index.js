var express = require('express');
var app = express();
var timestampMicro = require('./timestamp.js');

app.set('port', process.env.PORT || 3000 );

app.get('/:temps', function(requete, reponse) {
  var date = timestampMicro(requete.params.temps);
  reponse.json(date);
});

var server = app.listen(app.get('port'), function() {
  console.log("le serveur est à l'écoute sur le port " + app.get('port'));
});

