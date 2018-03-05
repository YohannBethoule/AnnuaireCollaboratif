/*

        Classe Site :

 */
var connection = require('../users').connection;

/**
 *
 * @param id
 * @param domain_name
 * @param nom
 * @param type
 * @param description
 * @param note
 * @constructor
 */
var Site  = function(){
    this.id;
    this.domain_name;
    this.nom;
    this.type;
    this.description;
    this.note;

    this.listType = ['Généraliste','Sport','Economie','Histoire','Economie','Magazine','Information','Immobilier','Emploie','Automobile','Autre'];

    /**
     *
     * @param domain_name
     * @param nom
     * @param type
     * @param description
     * @param note
     */
    this.update = function (id,domain_name,nom,type,description,note) {
        this.id = id;
        this.domain_name = domain_name;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.note = note;
    }

    /**
     * calculer la note du site suivant les notes de ses différentes pages/articles
     */
    this.calcule_note= function () {
        //
    }


    /*
            Base De Donnee :
    */

    /**
     * permet de remplir les arguments avec les valeur adequat
     */
    this.getThisSite= function (domain_name) {

    }

    this.getAllPageNote = function(){

    }

}


module.exports.Site = Site;