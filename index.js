var express = require('express');
var app = express();
var timestampMicro = require('./public/js/timestamp.js').timestampMicroservice;

app.set('port', process.env.PORT || 3000 );

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(requete, reponse) {
	reponse.render('index', {
		siteTitle: 'timestampMicroservice',
    pageTitle: 'défi fcc - timestampMicroservice',
    pageID: 'index'
	});
});

app.get('/:temps', function(requete, reponse) {
  var date = timestampMicro(requete.params.temps);
  reponse.json(date);
});

var server = app.listen(app.get('port'), function() {
  console.log("le serveur est à l'écoute sur le port " + app.get('port'));
});

