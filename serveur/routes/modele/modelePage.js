/**
 * Liste des pages disponibles (gateway)
 *
 */
var connection = require('../users').connection;
var Commentaire = require('../Class/Commentaire').Commentaire;

/*
new Page(1,'adress','type',5,5,new Array().push(new Commentaire('riri','c1'),new Commentaire('fifi','c2'),new Commentaire('riri','c3'),new Commentaire('riri','c4'))),
    new Page(2,'adress2','type',5,5,new Array().push(new Commentaire('riri','c1'),new Commentaire('fifi','c2'),new Commentaire('riri','c3'),new Commentaire('riri','c4'))),
    new Page(3,'adress3','type',5,5,new Array().push(new Commentaire('riri','c1'),new Commentaire('fifi','c2'),new Commentaire('riri','c3'),new Commentaire('riri','c4')))
*/
//afficher toutes les page dans recherche
function  modelePage() {
    /*recherche :*/
    this.get = function(res,callback) {
        var tab=[];
        connection.query('Select * from Website', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
              console.log('Error while performing Query.');
        });
        return tab;
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
    this.recherche = function (string,res,callback) {

        var r = string;
        connection.query('Select * from Website where name = ?',nom, function(err, rows, fields) {
            if (!err) {
                callback(rows[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }
    /*modele :*/

    this.getSimple = function (page, res) {
        connection.query('update Website where domain_name = ?', [domain_name], function (err, result) {
            if (!err) {
                res.render('recherche', {page : rows[0] ,title: 'Index' });
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /*autre :*/
    this.create = function (page, res) {
        connection.query('insert into Website set ?', page, function (err, result) {
            if (!err) {
                console.log('Page creer.');
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.modify = function (name,description, res, callback) {
        var sql = "update Website set description = ?",description;
        var sql2 = " where domain_name = ?",name;
        console.log("sql ",sql+sql2);
        connection.query(sql+sql2, function (err, result) {
            if (!err) {
                console.log('Page modifie.');
                callback(result[0]);
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


    this.delete = function (domain_name, res) {
    connection.query('delete from User where domain_name = ?', domain_name, function (err, result) {
            if (!err) {
                console.log('Page delete.');
            }
            else
                console.log('Error while performing Query.');
        });
    }
}

module.exports = {
    modelePage:new modelePage()
};