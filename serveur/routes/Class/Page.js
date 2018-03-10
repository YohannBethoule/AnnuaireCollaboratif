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
            this.sujet= value.subject;
            this.fiabilite= value.fiabilite;
            this.coherence= value.coherence;
            //console.log(fiche);
            var p = new Page();
            p.pageUpdate(nom,function () {
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

    this.pageUpdate = function (nom,callback) {
        fiche.getFor(nom,function (value) {
            console.log("value",value)

            //update le type :
            var n= 0;
            var i=0,j=0,cum=0,i;
            var t  = [];
            var tn  = [];
            for (i = 0; i < value.length; i++) {
                console.log("value",value[i].type)
                if(value[i].type != null || value[i].type != undefined || value[i].type != ""|| value[i].type != "null") {
                    var b = undefined;
                    for (j = 0; j < t.length; j++) {
                        if(t[j] == value[i].type ) {
                            b = j;
                        }
                    }
                    if(b == undefined || b != undefined || b != "" ){
                        t[t.length] = value[i].type
                        tn[t.length -1] = 1;
                    }else{
                        tn[b] = tn[b] + 1;
                    }
                    console.log("t,tn",t,tn)
                }
            }
            var max = 0,v;
            for (j = 0; j < tn.length; j++) {
                if(tn[j] > max ) {
                    max =  tn[j];
                    v = j;
                }
            }

            this.type = t[v];
            console.log("this.type = t[v];",this.type , t[v])
            var p = new Page();
            p.modifyType(nom,this.type);


            //update le sujet :
            var n= 0;
            var i=0,j=0,cum=0,i;
            var t  = [];
            var tn  = [];
            for (i = 0; i < value.length; i++) {
                if(value[i].subject != null || value[i].subject != undefined || value[i].subject != ""|| value[i].subject != "null") {
                    var b = undefined;
                    for (j = 0; j < t.length; j++) {
                        if(t[j] == value[i].subject ) {
                            b = j;
                        }
                    }
                    if(b == undefined){
                        t[t.length] = value[i].subject
                        tn[t.length-1] = 1;
                    }else{

                        tn[b] = tn[b] + 1;
                    }
                }
            }
            console.log("t[b]")
            var max = 0,v;
            for (j = 0; j < tn.length; j++) {
                if(tn[j] > max ) {
                    max =  tn[j];
                    v = j;
                }
            }
            this.sujet = t[v];
            p.modifySujet(nom,this.sujet);
            //update la fiabilité :

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

            //update la coherence :

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
    this.addPage = function (domain_name,nom,callback) {

        //var nom=domain_name.substring(domain_name.indexOf("/",1));
        var nom_site ;
        var nom_page = nom ;
        var lien_page= domain_name ;
        var lien_site ;
        if(domain_name.startsWith("http") || domain_name.startsWith("https")){

            if(domain_name.startsWith("https")){
                domain_name = domain_name.slice(8,-1);
            }else{
                domain_name = domain_name.slice(7,-1);
            }
            console.log("domain_name : ",domain_name);
        }

        //nom_page=domain_name.slice(domain_name.lastIndexOf("/"));
        //nom_page=nom_page.slice(1);
/*
        if(domain_name.endsWith(".php") || domain_name.endsWith(".html")){
            domain_name = domain_name.slice(domain_name.lastIndexOf("."),-1);
        }
*/
        if(domain_name.startsWith("www")){
            lien_site=domain_name.slice(0,domain_name.indexOf("/"));
            nom_site=domain_name.slice(4,domain_name.indexOf("/"));
            nom_site=nom_site.slice(0,nom_site.indexOf("."));
        }else{
            lien_site=domain_name.slice(0,domain_name.indexOf("/"));
            nom_site=domain_name.slice(0,domain_name.indexOf("/"));
            nom_site=domain_name.slice(0,domain_name.indexOf("."));
        }

        console.log("nom_page : ",nom_page);
        console.log("nom_site : ",nom_site);
        console.log("lien_site : ",lien_site);
        console.log("lien_page : ",lien_page);

        if(lien_site == lien_page){
            //pas d'ajout de site directement
            return;
        }
        //console.log("",nom);

        site.getNom(nom_site,function (value) {
            if(value == undefined){
                var site = require('../Class/Site').Site;
                site.ajouterSite(lien_site,nom_site,function () {
                    var p = new Page();
                    p.create(lien_site,lien_page,nom_page,callback);
                });
            }else{
                var p = new Page();
                p.create(lien_site,lien_page,nom_page,callback);
            }
        })


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

    this.modifyType = function (name,type) {

        var sql = 'UPDATE Page SET type = ? WHERE name = ?';
        var data = [type,name];
        //console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Page modifie.',result[0]);
                //callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }
    this.modifySujet = function (name,sujet) {

        var sql = 'UPDATE Page SET subject = ? WHERE name = ?';
        var data = [sujet,name];
        //console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                console.log('Page modifie.',result[0]);
                //callback(result[0]);
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
    this.create = function (domain_name_site,domain_name, name,callback) {
        connection.query('insert into Page(domain_name_site, domain_name, name ,type,subject,description,fiabilite,coherence)  Values (?,?,?,?,?,?,?,?)', [domain_name_site,domain_name,name,null,null,null,null,null], function (err) {
            if (!err) {
                console.log('Page creer.');
                callback();
            }
            else
                console.log('Error while performing Query create page.');
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

    this.getAllForSite = function(site ,callback) {
        //var tab=[];
        connection.query('Select * from Page where domain_name_site = ?',site, function(err, rows, fields) {
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