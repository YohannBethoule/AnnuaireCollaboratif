/*

        Classe Argument :

 */
var connection = require('../users').connection;

/**
 *
 * @param id
 * @param orientation
 * @param domain_name_site
 * @param id_commentaire
 * @param id_fiche
 * @param nomAuteur
 * @param description
 * @param fiabilite
 * @param coherence
 * @param list_url
 * @constructor
 */
var Argument  = function(){
    this.id;
    this.orientation ;
    this.domain_name_site;
    this.id_commentaire;
    this.id_fiche;
    this.nomAuteur;
    this.description;
    this.fiabilite;
    this.coherence;
    this.list_url;

    /**
     *
     * @param orientation
     * @param domain_name_site
     * @param id_commentaire
     * @param id_fiche
     * @param nomAuteur
     * @param description
     * @param fiabilite
     * @param coherence
     * @param list_url
     */
    this.update = function (orientation,domain_name_site,id_commentaire, id_fiche, nomAuteur,description,fiabilite,coherence,list_url) {
        this.orientation = orientation;
        this.domain_name_site = domain_name_site;
        this.id_commentaire= id_commentaire;
        this.id_fiche = id_fiche;
        this.nomAuteur = nomAuteur;
        this.description = description;
        this.fiabilite = fiabilite;
        this.coherence = coherence;
        this.list_url = list_url;
    }

    /*
            Base De Donnee :
    */

    this.addToDataBase = function () {
        
    }


}

module.exports.Argument = Argument;