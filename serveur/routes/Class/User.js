/*

        Classe User :

 */
var connection = require('../users').connection;
var User  = function(id,pseudo,mdp,email,nom,prenom){ //utilisation de Passport ?
        this.id = id;
        this.pseudo = pseudo;
        this.mdp = mdp;
        this.mail = email;
        this.nom = nom;
        this.prenom = prenom;
        this.isadmin = false;

        this.modifier = function (pseudo,mdp,email,nom,prenom) {
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


}
var d =  User;

module.exports.User = User;