/*

        Classe Page :

 */

require('./Commentaire');
var connection = require('../users').connection;

var site = require('../Class/Site').Site;
var commentaire = require('../Class/Commentaire').Commentaire;
var fiche = require('../Class/Fiche').Fiche;

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
    this.name;
    this.type;
    this.description;
    this.sujet;
    this.fiabilite;
    this.coherence;
    this.listCommentaire;

    this.listType = ['Actualité','Politique','Société','Economie','Culture','Sport','Science','Ecologie', 'Autre','Humour'];

    this.get = function (nom,res,callback) {
        this.getNom(nom,res,function (value) {
            if(value == null){
                res.redirect('/');
                return;
            }
            this.domain_name = value.domain_name;
            this.name = value.name;
            this.type = value.type;
            this.description = value.description;
            this.sujet= value.sujet;
            this.fiabilite= value.fiabilite;
            this.coherence= value.coherence;
            //console.log(fiche);
            var p = new Page();
            p.noteUpdate(nom,function () {
                var p = new Page();
                p.modifyFiabilite(this.name,this.fiabilite,function () {
                    var p = new Page();
                    p.modifyCoherence(this.name,this.coherence,function () {

                    });
                });

                //var p = new Page();
                commentaire.getAllFor(nom,res,function (values) {
                    this.listCommentaire = values;
                    callback(this);
                });
             });

        });
    };



    this.update = function (nom) {
        this.domain_name = domain_name;
        this.name = nom;
        this.type = type;
        this.description = description;
        this.sujet= sujet;
        this.listCommentaire = listCommentaire;
        this.fiabilite = fiabilite;
        this.coherence = coherence;
    }

    this.noteUpdate = function (nom,callback) {
        fiche.getFor(nom,function (value) {
            var n= 0;
            var i=0,cum=0,i;
            for (i = 0; i < value.length; i++) {
                if(value[i].note_fiabilite != null) {
                    n++;
                    cum += value[i].note_fiabilite;
                }
            }
            if(n != 0){
                this.fiabilite =  cum / n;
            }else{
                this.fiabilite= null;
            }

            cum = 0;
            n= 0;
            for (i = 0; i < value.length; i++) {
                valeur =  value[i].note_coherence;
                if( value[i].note_coherence != null) {
                    n++;
                    cum += value[i].note_coherence;
                }
            }

            if(n != 0){
                this.coherence =  cum / n;
            }else{
                this.coherence = null ;
            }
            callback();
        });
    };




    this.ajouterCommentaire = function (user,name,comm, res, callback) {
        commentaire.ajouterCommentaire(user,name,comm, res, callback);
    }

    this.modifierDescritpion = function (name,description, res, callback) {
        this.modifyDescription(name,description, res, callback);
        this.sauvDescription(name, description, res);
    }

    /**
     * permet d'ajouter une page, et de verifier si le site correspondant a été enregistrer (le fait enregistrer sinon)
     * @param domain_name
     */
    this.addPage = function (domain_name) {

        var nom=domain_name.substring(domain_name.indexOf("/",1));
        var nom_site;
        var lien_site;
        if(domain_name.startsWith("http") || domain_name.startsWith("https")){
            domain_name = domain_name.slice(7,-1);
            if(domain_name.startsWith("https")){
                domain_name = domain_name.slice(8,-1);
            }
            console.log("domain_name : ",domain_name);
        }
        if(domain_name.startsWith("www")){
            lien_site=domain_name.slice(domain_name.indexOf("/",-1),4);
            nom_site=domain_name.substring(0,4);
        }else{
            nom_site=domain_name.substring(0,domain_name.indexOf(".",2));
        }

        console.log("nom : ",nom);
        console.log("nom_site : ",nom_site);
        console.log("lien_site : ",lien_site);
        //console.log("",nom);
        /*site.getNom(nom_site,function (value) {
            if(value == null){
                site.ajouterSite(domain_name,nom_site);
            }
            var p = new Page();
            p.create(domain_name,nom);
            fiche.create()
        })*/


    }


    /*
            Base De Donnee :
    */



    /**
     * permet de remplir les arguments avec les valeur adequat
     */
    this.getThisPage = function (domain_name) {

    }

    /**
     *
     * @param nom
     * @param res
     * @param callback
     */
    this.getNom = function (nom,res,callback) {
        connection.query('Select * from Page where name = ?',nom, function(err, rows, fields) {
            if (!err) {
                var r = rows[0];
                callback(r);
            }
            else 
                console.log('Error while performing Query.');
        });
    }

    this.getDomain_Name = function (domain_name,callback) {
        connection.query('Select * from Page where domain_name = ?',domain_name, function(err, rows, fields) {
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
        connection.query('update Page set domain_name = ?', [domain_name], function (err, result) {
            if (!err) {
                console.log('Pages update.');
            }
            else
                console.log('Error while performing Query.');
        });
    }


    this.modifyDescription = function (name,description, res, callback) {

        var sql = 'UPDATE Page SET description = ? WHERE name = ?';
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

    this.modifyCoherence = function (name,note, callback) {

        var sql = 'UPDATE Page SET coherence = ? WHERE name = ?';
        var data = [note,name];
        //console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Page modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.modifyFiabilite = function (name,note, callback) {

        var sql = 'UPDATE Page SET fiabilite = ? WHERE name = ?';
        var data = [note,name];
        //console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Page modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.sauvDescription = function (name, description , res) {
        connection.query('insert into Description values (?,?,?)', [0,name, description], function (err, result) {
            if (!err) {
                console.log('Description creer.');
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param page
     * @param res
     */
    this.create = function (domain_name_site,domain_name, name) {
        connection.query('insert into Page Values(?,?,?,?,?,?)', [domain_name_site,domain_name,name,null,null,null], function (err, result) {
            if (!err) {
                console.log('Page creer.');
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.getAll = function(res,callback) {
        //var tab=[];
        connection.query('Select * from Page', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        //return tab;
    }

    this.getAllForSite = function(site ,res,callback) {
        //var tab=[];
        connection.query('Select * from Page where domain_name = ?',site, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        //return tab;
    }
}

module.exports.Page = new Page();