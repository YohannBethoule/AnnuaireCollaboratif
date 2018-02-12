/*

        Classe Page :

 */

require('./Commentaire');
var connection = require('../users').connection;

var Page  = function(id,url,nom,type,description,sujet,listCommentaire,fiabilité,coherence){
    this.id = id;
    this.url = url;
    this.nom = nom;
    this.type = type;
    this.description = description;
    this.sujet= sujet;
    this.fiabilité = fiabilité;
    this.coherence = coherence;

    this.update = function (url,nom,type,description,sujet,listCommentaire,fiabilité,coherence) {
        this.url = url;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.sujet= sujet;
        this.listCommentaire = listCommentaire;
        this.fiabilité = fiabilité;
        this.coherence = coherence;
    }

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

    this.update = function (domain_name, res) {
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