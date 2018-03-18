/*

        Classe Fiche (description d'une page) :

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
        //...
    }

    this.ajouterFiche = function (name,user, callback) {
            this.add(name,user,null,null,null,null,null);
            callback();
    }

    /**
     * permet de modifier la note de fiabilité d'une fiche
     * @param note
     */
    this.noterFiabilite = function (note,username,name,callback) {
        this.fiabilité = note;
        var v;
        this.getOneUser(name,username,function (value) {
            v = value;
            if( value == undefined){
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
     * permet de modifier la note de coherence d'une fiche
     * @param note
     */
    this.noterCoherence = function (note,username,name,callback) {
        this.coherence = note;
        var v;
        this.getOneUser(name,username,function (value) {
            v = value;
            if( value== undefined){
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


    /**
     * permet d'ajouter ou de modifier si elle existe, une fiche
     * @param domain_name
     * @param name
     * @param user
     * @param description
     * @param subject
     * @param type
     * @param fiabilite
     * @param coherence
     */
    this.addFiche = function (domain_name,name,user,description,subject,type,fiabilite,coherence){
        var page = require('../Class/Page').Page;
        page.getDomain_Name(domain_name,function (values) {
            if(values == undefined){
                page.addPage(domain_name,name, function () {
                    var f = new Fiche();
                    f.getOneUser(name,user,function (values) {
                        if(values == undefined){
                            var f = new Fiche();
                            f.add(name,user,description,subject,type,fiabilite,coherence);
                        }else{
                            var f = new Fiche();
                            f.modify(name,description,subject,type,fiabilite,coherence);
                        }
                    })
                })
            }else {

                var f = new Fiche();
                f.getOneUser(name, user, function (values) {
                    if (values == undefined) {
                        var f = new Fiche();
                        f.add(name, user, description, subject, type, fiabilite, coherence,function () {

                        });
                    } else {
                        console.log('Modification fiche');
                        var f = new Fiche();
                        f.modify(name, description, subject, type, fiabilite, coherence,function () {

                        });
                    }
                })
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


    /**
     *
     * @param callback
     */
    this.getAll = function(callback) {
        connection.query('Select * from Fiche', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param name
     * @param callback
     */
    this.getFor = function(name,callback) {
        connection.query('Select * from Fiche where name = ?',[name], function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param domain_name
     * @param callback
     */
    this.getOne = function(domain_name,callback) {
        connection.query('Select * from Fiche where domain_name = ?',domain_name, function(err, rows, fields) {
            if (!err) {
                callback(rows[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }
    /**
     *
     * @param name
     * @param username
     * @param callback
     */
    this.getOneUser = function(name,username,callback) {
        connection.query('Select * from Fiche where name = ? and pseudoAuteur = ?',[name,username], function(err, rows, fields) {
            if (!err) {
                callback(rows[0]);
            }
            else
                console.log('Error while performing Query getOneUser.');
        });
    }

    /**
     *
     * @param name
     * @param user
     * @param description
     * @param subject
     * @param type
     * @param fiabilite
     * @param coherence
     */
    this.add = function (name,user,description,subject,type,fiabilite,coherence) {
        connection.query('INSERT INTO Fiche( name, pseudoAuteur,description,subject,note_fiabilite,note_coherence,type) values (?,?,?,?,?,?,?)', [name,user,description,subject,fiabilite,coherence,type],function (err) {
            if (!err) {
                console.log('Fiche ajouté');
                //callback();
            }
            else
                console.log('Error while performing Query add fiche.');
        });
    }

    /**
     *
     * @param note
     * @param name
     * @param user
     * @param callback
     */
    this.modifyFiabilite = function (note,name,user, callback) {
        var sql = 'UPDATE Fiche SET note_fiabilite = ? WHERE name = ? and pseudoAuteur =  ?';
        var data = [note,name,user];
        console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Fiabilite Fiche modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param note
     * @param name
     * @param user
     * @param callback
     */
    this.modifyCoherence = function (note,name,user, callback) {
        var sql = 'UPDATE Fiche SET note_coherence = ? WHERE name = ? and pseudoAuteur =  ?';
        var data = [note,name,user];
        console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Coherence Fiche modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param name
     * @param description
     * @param subject
     * @param type
     * @param fiabilite
     * @param coherence
     * @param callback
     */
    this.modify = function (name,description,subject,type,fiabilite,coherence, callback) {

        var sql = 'UPDATE Fiche SET description = ?,subject = ?,note_fiabilite = ?,note_coherence = ? , type = ? WHERE name = ?';
        var data = [description,subject,fiabilite,coherence,type,name];
        console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Fiche modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }
}

module.exports.Fiche = new Fiche();