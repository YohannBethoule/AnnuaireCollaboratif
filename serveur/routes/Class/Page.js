/*

        Classe Page :

 */

require('./Commentaire');
var connection = require('../users').connection;

/**
 *
 * @param id
 * @param domain_name
 * @param nom
 * @param type
 * @param description
 * @param sujet
 * @param listCommentaire
 * @param fiabilité
 * @param coherence
 * @constructor
 */
var Page  = function(){
    this.id;
    this.domain_name;
    this.nom;
    this.type;
    this.description;
    this.sujet;
    this.fiabilité;
    this.coherence;
    this.listCommentaire;

    this.listType = ['Actualité','Politique','Société','Economie','Culture','Sport','Science','Ecologie', 'Autre'];

    //update/modifier
    /**
     *
     * @param domain_name
     * @param nom
     * @param type
     * @param description
     * @param sujet
     * @param listCommentaire
     * @param fiabilité
     * @param coherence
     */
    this.update = function (domain_name,nom,type,description,sujet,fiabilité,coherence) {
        this.domain_name = domain_name;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.sujet= sujet;
        this.listCommentaire = listCommentaire;
        this.fiabilité = fiabilité;
        this.coherence = coherence;
    }

    //activer des le debut ?
    this.getCommentaires = function () {
        ///
    }

    this.noterFiabilite = function (note) {
        ///
    }

    this.noterCoherence = function (note) {
        ///
    }




    /*
            Base De Donnee :
    */

    /**
     * ajoute le site si celui ci n'est pas present dans la base de donne
     */
    this.ajouterSite= function () {
        //ajouter avec attribut domain name
    }

    /**
     * permet de remplir les arguments avec les valeur adequat
     */
    this.getThisPage = function (domain_name) {

    }


    this.getSite= function (callback) {

    }


    this.addPage = function () {

    }

    /**
     *
     * @param nom
     * @param res
     * @param callback
     */
    this.getNom = function (nom,res,callback) {
        connection.query('Select * from Website where name = ?',nom, function(err, rows, fields) {
            if (!err) {
                var r = rows[0];
                callback(r);
            }
            else 
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param domain_name
     * @param res
     */
    this.updateDomain = function (domain_name, res) {
        connection.query('update Website set domain_name = ?', [domain_name], function (err, result) {
            if (!err) {
                console.log('Pages update.');
            }
            else
                console.log('Error while performing Query.');
        });
    }

}

module.exports.Page = Page;