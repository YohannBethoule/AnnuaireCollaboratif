/*

        Classe Fiche :

 */
var connection = require('../users').connection;
var page = require('../Class/Page').Page;


var Fiche  = function(){
    this.domain_name;
    this.nom_auteur;
    this.type;
    this.description;
    this.sujet;
    this.fiabilité;
    this.coherence;

    //modifier
    this.update = function (domain_name,nom_auteur,type,description,sujet,fiabilité,coherence) {
        this.domain_name = domain_name;
        this.nom_auteur = nom_auteur;
        this.type = type;
        this.description = description;
        this.sujet= sujet;
        this.fiabilité = fiabilité;
        this.coherence = coherence;
    }

    this.ajouterFiche = function (name,user, callback) {
            this.add(name,user,callback);
    }

    /**
     *
     * @param note
     */
    this.noterFiabilite = function (note,username,name,callback) {
        this.fiabilité = note;
        var v;
        this.getOneUser(name,username,function (value) {
            v = value;
            if( v== null){
                var f = new Fiche();
                f.ajouterFiche(name,username,function () {
                    var f2 = new Fiche();
                    f2.modifyFiabilite(note,name,username,function () {
                        callback();
                    });
                });
            }else{
                var f = new Fiche();
                f.modifyFiabilite(note,name,username,function () {
                    callback();
                });
            }
        });


    }

    /**
     *
     * @param note
     */
    this.noterCoherence = function (note,username,name,callback) {
        this.coherence = note;
        var v;
        this.getOneUser(name,username,function (value) {
            v = value;
            if( v== null){
                var f = new Fiche();
                f.ajouterFiche(name,username,function () {
                    var f2 = new Fiche();
                    f2.modifyCoherence(note,name,username,function () {
                        callback();
                    });
                });
            }else{
                var f = new Fiche();
                f.modifyCoherence(note,name,username,function () {
                    callback();
                });
            }
        });
    }


    this.addFiche = function (domain_name){
        var page = require('../Class/Page').Page;
        page.getDomain_Name(domain_name,function (values) {
            if(values == undefined){
                console.log("Ajout Fiche in:",values);
                page.addPage(domain_name)
            }
        })
    }

    /*
            Base De Donnee :
    */
    /**
     * permet de remplir les arguments avec les valeur adequat
     */
    this.getThisFiche = function (domain_name) {

    }

    this.getArguments = function (domain_name, callback) {

    }


    this.getAll = function(callback) {
        connection.query('Select * from Fiche', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.getFor = function(name,callback) {
        connection.query('Select * from Fiche where name = ?',[name], function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.getOne = function(domain_name,callback) {
        connection.query('Select * from Fiche where domain_name = ?',domain_name, function(err, rows, fields) {
            if (!err) {
                callback(rows[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }
    this.getOneUser = function(name,username,callback) {
        connection.query('Select * from Fiche where name = ? and pseudoAuteur = ?',[name,username], function(err, rows, fields) {
            if (!err) {
                callback(rows[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.add = function (name,user,callback) {
        connection.query('INSERT INTO Fiche( name, pseudoAuteur,description,subject,note_fiabilite,note_coherence) values (?,?,?,?,?,?)', [name,user,"","",null,null],function (err) {
            if (!err) {
                console.log('Page ajouté');
                callback();
            }
            else
                console.log('Error while performing Query.');
        });
    }


    this.modifyFiabilite = function (note,name,user, callback) {
        var sql = 'UPDATE Fiche SET note_fiabilite = ? WHERE name = ? and pseudoAuteur =  ?';
        var data = [note,name,user];
        console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Fiabilite Page modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }
    this.modifyCoherence = function (note,name,user, callback) {
        var sql = 'UPDATE Fiche SET note_coherence = ? WHERE name = ? and pseudoAuteur =  ?';
        var data = [note,name,user];
        console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Coherence Page modifie.',result[0]);
                callback(result[0]);
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
}

module.exports.Fiche = new Fiche();