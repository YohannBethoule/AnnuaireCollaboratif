/*

        Classe Commentaire :

 */
var connection = require('../users').connection;

var Commentaire  = function(id,url,nomAuteur,type,description){
    this.id = id;
    this.url = url;
    this.nomAuteur = nomAuteur;
    this.type = type; //orientation
    this.description = description;
    this.sujet= sujet;
    this.fiabilité = fiabilité;

    this.update = function (url,nomAuteur,type,description) {
        this.url = url;
        this.nomAuteur = nomAuteur;
        this.type = type; //orientation
        this.description = description;
        this.sujet= sujet;
        this.fiabilité = fiabilité;
    }
}


module.exports.Commentaire = Commentaire;