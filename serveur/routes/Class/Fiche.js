/*

        Classe Fiche :

 */
var connection = require('../users').connection;

var Fiche  = function(id,url,nom,fiabilité,coherence){ //mettre autres attributs (autres notes)
    this.id = id;
    this.url = url;
    this.nom = nom;
    this.type = type;
    this.description = description;
    this.sujet= sujet;

    this.update = function (url,nom,type,description,sujet,listCommentaire,fiabilité,coherence) {
        this.url = url;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.sujet= sujet;
        this.listCommentaire = listCommentaire;


    }
}

module.exports.Fiche = Fiche;