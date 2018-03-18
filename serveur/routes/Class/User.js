/*

        Classe User :

 */
var connection = require('../users').connection;
var User  = function(){ //utilisation de Passport ?
        this.id;
        this.pseudo ;
        this.mdp ;
        this.mail ;
        this.nom ;
        this.prenom;
        this.isadmin;

        this.modifier = function (id,pseudo,mdp,email,nom,prenom) {
            this.id = id;
            this.pseudo = pseudo;
            this.mdp = mdp;
            this.mail = email;
            this.nom = nom;
            this.prenom = prenom;
            this.isadmin = false;
            return ;
        }

        /*
            Base De Donnee :
        */

    /**
     * permet de remplir les arguments avec les valeur adequat
     */
    this.getThisUser = function (domain_name) {

    }
    this.getAll = function(callback) {
        connection.query('Select * from Utilisateur', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.getOne = function(email, pseudo,callback) {
        connection.query('Select * from Utilisateur where email = ? or  username = ? ',[email,pseudo], function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

}
var d =  User;

module.exports.User = new User();