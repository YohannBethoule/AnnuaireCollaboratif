/*

         search : permettant d'établir des resultats d'apres une recherche donnée

 */

var connection = require('../users').connection;

var search  = function(){

    this.recherche = function (recherche,callback) {
        var res = recherche;
        // methode syntaxe
        //appele bdd select
        //return resultat
        callback(res);
    }
}
module.exports.search = search;