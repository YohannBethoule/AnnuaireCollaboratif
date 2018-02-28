/*

        Classe Fiche :

 */
var connection = require('../users').connection;

/**
 *
 * @param id
 * @param domain_name
 * @param nom_auteur
 * @param description
 * @param sujet
 * @param fiabilité
 * @param coherence
 * @constructor
 */
var Fiche  = function(id,domain_name,nom_auteur,description, sujet ,fiabilité,coherence){ //mettre autres attributs (autres notes)
    this.id = id;
    this.domain_name = domain_name;
    this.nom_auteur = nom_auteur;
    this.type = type;
    this.description = description;
    this.sujet= sujet;
    this.fiabilité= fiabilité;
    this.coherence= coherence;

    //update/modifier
    /**
     *
     * @param domain_name
     * @param nom_auteur
     * @param type
     * @param description
     * @param sujet
     * @param fiabilité
     * @param coherence
     */
    this.update = function (domain_name,nom_auteur,type,description,sujet,fiabilité,coherence) {
        this.domain_name = domain_name;
        this.nom_auteur = nom_auteur;
        this.type = type;
        this.description = description;
        this.sujet= sujet;
        this.fiabilité = fiabilité;
        this.coherence = coherence;
    }

    /*
            Base De Donnee :
    */
    /**
     * permet de remplir les arguments avec les valeur adequat
     */
    this.getThisFiche = function (domain_name) {

    }

    this.getArguments = function (domain_name, callback) {

    }

}

module.exports.Fiche = Fiche;