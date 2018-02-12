/*

        Classe Site :

 */
var connection = require('../users').connection;

var Site  = function(id,url,nom,type,description,fiabilité){
    this.id = id;
    this.url = url;
    this.nom = nom;
    this.type = type;
    this.description = description;
    this.fiabilité = fiabilité;

    this.update = function (url,nom,type,description,fiabilité) {
        this.id = id;
        this.url = url;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.fiabilité = fiabilité;
    }
}


module.exports.Site = Site;