/*

        Classe Site :

 */
var connection = require('../users').connection;
var page = require('../Class/Page').Page;
/**
 *
 * @param id
 * @param domain_name
 * @param nom
 * @param type
 * @param description
 * @param note
 * @constructor
 */
var Site  = function(){
    this.id;
    this.domain_name;
    this.nom;
    this.type;
    this.description;
    this.note;

    this.listType = ['Généraliste','Sport','Economie','Histoire','Economie','Magazine','Information','Immobilier','Emploie','Automobile','Autre'];


    this.update = function (id,domain_name,nom,type,description) {
        this.id = id;
        this.domain_name = domain_name;
        this.nom = nom;
        this.type = type;
        this.description = description;
        this.note = note;
    }
    /**
     * update la note du site name
     * @param name nom du site
     * @param res
     * @param callback
     */
    this.updateNote = function (domain_name,callback) {
        var page = require('../Class/Page').Page;
        page.getAllForSite(domain_name,function (value) {
            var n= 0;
            var i=0,cum=0,i;
            for (i = 0; i < value.length; i++) {
                if(value[i].fiabilite != null) {
                    n++;
                    cum += value[i].fiabilite;
                }
                if(value[i].note_coherence != null) {
                    n++;
                    cum += value[i].coherence;
                }
            }

            if(n != 0){
                this.note =  cum / n;
            }else{
                this.note = null ;
            }


            var s = new Site();
            s.modifyNote(domain_name,this.note,callback);
        })
    }

    /**
     * ajoute le site
     * @param domain_name
     * @param nom
     */
    this.ajouterSite= function (domain_name, nom,callback) {
            this.create(domain_name, nom,callback);
    }


    /*
            Base De Donnee :
    */

    /**
     * permet de remplir les arguments avec les valeur adequat
     * @param domain_name
     */
    this.getThisSite= function (domain_name) {

    }

    /**
     *
     * @param name
     * @param description
     * @param res
     * @param callback
     */
    this.modifierDescritpion = function (name,description, res, callback) {
        this.modifyDescription(name,description, res, callback);
        this.sauvDescription(name, description, res);
    }

    this.getAllPageNote = function(domain_name, nom){

    }

    /**
     *
     * @param nom
     * @param res
     * @param callback
     */
    this.getNom = function (nom,callback) {
        connection.query('Select * from Website where name = ?',nom, function(err, rows, fields) {
            if (!err) {
                var r = rows[0];
                callback(rows[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param domain_name
     * @param nom
     * @param res
     */
    this.create = function (domain_name, nom,callback) {
        connection.query('insert into Website (domain_name,name,type,description,note) values (?,?,?,?,?)', [domain_name, nom,"","",null], function (err) {
            if (!err) {
                console.log('Site creer.');
                callback();
            }
            else
                console.log('Error while performing Query create site.');
        });
    }

    /**
     *
     * @param name
     * @param description
     * @param res
     * @param callback
     */
    this.modifyDescription = function (name,description, res, callback) {

        var sql = 'UPDATE Website SET description = ? WHERE name = ?';
        var data = [description,name];
        //console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                //console.log('Page modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    this.modifyNote = function (domain_name,note, callback) {

        var sql = 'UPDATE Website SET note = ? WHERE domain_name = ?';
        var data = [note,domain_name];
        //console.log("sql ",sql , data);
        connection.query(sql, data,function (err, result) {
            if (!err) {
                //console.log('Page modifie.',result[0]);
                callback(result[0]);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /**
     *
     * @param domain_name
     * @param description
     * @param res
     */
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
     * @param res
     * @param callback
     */
    this.getAll = function(res,callback) {
        connection.query('Select * from Website', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

}


module.exports.Site = new Site();