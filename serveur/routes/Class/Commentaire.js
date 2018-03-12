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
var Commentaire  = function(){
    this.id;
    this.domain_name ;
    this.nomAuteur ;
    this.sujet;
    this.texte;


    this.update = function (nomAuteur,domain_name,type,description) {
        this.domain_name = domain_name;
        this.nomAuteur = nomAuteur;
        this.texte = texte;
        this.sujet= sujet;
        //...
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

    this.ajouterCommentaire = function (user,name,commentaire, res, callback) {
        this.addCommentaire (user,name,commentaire, res, callback);
    }


    this.addCommentaire = function (user,name,commentaire, res, callback) {
        connection.query('INSERT INTO Commentaire( pseudoAuteur, name ,text) values (?,?,?)', [user,name,commentaire],function (err) {
            if (!err) {
                console.log('Commentaire ajouté');
                callback();
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.getAllFor = function(nom,res,callback) {
        //var tab=[];
        connection.query('Select * from Commentaire where name = ?', nom,function (err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }
}


module.exports.Commentaire =  new Commentaire();