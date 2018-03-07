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
    this.getCommentaire = function(res,callback) {
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
    this.getSite = function(res,callback) {
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
    this.getFiche = function(res,callback) {
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
    this.getArgument = function(res,callback) {
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
    this.getUrlArgument = function(res,callback) {
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
        connection.query("Select * from Page where name REGEXP ?",string, function(err, rows, fields) {
            if (!err) {
                if(rows.length == 0) {
                    connection.query("Select * from Page where description REGEXP ?", string, function (err, rows, fields) {
                        if (!err) {
                            callback(rows);
                        }
                        else
                            console.log('Error while performing Query.');
                    });
                }else
                    callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }
    /*modele :*/

    this.getSimple = function (page, res) {
        connection.query('UPDATE Website where domain_name = ?', [domain_name], function (err, result) {
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

        var sql = 'UPDATE Website SET description = ? WHERE name = ?';
        var data = [description,name];
        console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Page modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }


    this.modifyCoherence = function (name, fiabilite, res, callback) {
        var sql = 'UPDATE Website SET description = ? WHERE name = ?';
        var data = [description,name];
        console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Page modifie.',result[0]);
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

    //ajout supression commentaire , modifier note 1&2:
}

module.exports = {
    modelePage:new modelePage()
};