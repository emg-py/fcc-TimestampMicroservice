

module.exports = function(temps) {
    var resultat = {
    unix: null,
    natural: null,
    naturelle: null
  };
 
  var date;
  if (!isNaN(parseInt(temps))) {
    date = new Date(parseInt(temps));
  } else {
    date = new Date(temps);
  }
 
  if (!isNaN(date.getTime())) {
    resultat.unix = date.getTime();
    resultat.natural = dateNaturelleEN(date);
    resultat.naturelle = dateNaturelleFR(date);
  }

  return resultat;
}
 
function dateNaturelleEN(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};

function dateNaturelleFR(date) {
  var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
 
  return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
};
