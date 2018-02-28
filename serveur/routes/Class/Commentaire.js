/*

        Classe Commentaire :

 */
var connection = require('../users').connection;

/**
 *
 * @param id
 * @param nomAuteur
 * @param domain_name
 * @param texte
 * @constructor
 */
var Commentaire  = function(id,nomAuteur,domain_name,texte){
    this.id = id;
    this.domain_name = domain_name;
    this.nomAuteur = nomAuteur;
    this.sujet= sujet;
    this.texte = texte;

    //update/modifier
    /**
     *
     * @param nomAuteur
     * @param domain_name
     * @param type
     * @param description
     */
    this.update = function (nomAuteur,domain_name,type,description) {
        this.domain_name = domain_name;
        this.nomAuteur = nomAuteur;
        this.texte = texte;
        this.sujet= sujet;
    }

    /*
            Base De Donnee :
    */
    /**
     * permet de remplir les arguments avec les valeur adequat
     */
    this.getThisCommentaire = function (domain_name,callback) {

    }

    this.getArguments = function (callback) {

    }
}


module.exports.Commentaire = Commentaire;