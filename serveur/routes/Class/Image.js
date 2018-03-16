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
var Image  = function(){
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

    this.getArguments = function (callback) {

    }

    this.ajouterImage = function (user,name,url, res, callback) {
        this.addImage (user,name,url, res, callback);
    }


    this.getAllFor = function(nom,res,callback) {
        //var tab=[];
        connection.query('Select * from Image where name = ?', nom,function (err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query. getAllFor Image');
        });
    }

    this.getOne = function(nom,res,callback) {
        //var tab=[];
        connection.query('Select * from Image where name = ?', nom,function (err, rows, fields) {
            if (!err) {
                callback(rows[0]);
            }
            else
                console.log('Error while performing Query. getOne Image');
        });
    }
}


module.exports.Image =  new Image();