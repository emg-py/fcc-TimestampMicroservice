var moment = require('moment');

module.exports.timestampMicroservice = function(temps) {
    var resultat = {
    unix: null,
    natural: null,
    naturelle: null
  };
 
  var date;

  function dateUnix(date) {
    return moment(date).format('X');
  };

  function dateNaturelleEN(date) {
    return moment(date).locale('en').format('LL');
  };

  function dateNaturelleFR(date) {
    return moment(date).locale('fr').format('LL');
  };

  if (!isNaN(temps)) {
    date = moment.unix(temps);
    console.log(temps);
    console.log(date);
  } else if (moment(temps, 'MMMM D, YYYY', 'en', true).isValid()) {
    date = moment.utc(temps, 'MMMM D YYYY').format();
    console.log('en  ' + temps);
    console.log('en  ' + date);
  } else if (moment(temps, 'D MMMM YYYY', 'fr', true).isValid()) {
    date = moment.utc(temps, 'D MMMM YYYY', 'fr').format();
    console.log('fr  ' + temps);
    console.log('fr  ' + date);
  } else {
    return resultat;
  };
 
  resultat.unix = dateUnix(date);
  resultat.natural = dateNaturelleEN(date);
  resultat.naturelle = dateNaturelleFR(date);

  return resultat;
};