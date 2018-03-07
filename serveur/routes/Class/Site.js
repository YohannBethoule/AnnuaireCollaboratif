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

    this.updateAll = function () {

    }

    /**
     * update la note du site name
     * @param name nom du site
     * @param res
     * @param callback
     */
    this.updateNote = function (name, res,callback) {
        page.getAllForSite(domain_name,res,function () {
            var n= 0;
            var i=0,cum=0,i;
            for (i = 0; i < value.length; i++) {
                if(value[i].note_fiabilite != null) {
                    n++;
                    cum += value[i].note_fiabilite;
                }
                if(value[i].note_coherence != null) {
                    n++;
                    cum += value[i].note_coherence;
                }
            }
            this.note =  cum / n;

            var s = new Site();
            s.modifyNote(name,res,callback);
        })
    }

    /**
     * calculer la note du site suivant les notes de ses différentes pages/articles
     */
    this.calcule_note= function () {
        //
    }

    /**
     * ajoute le site
     * @param domain_name
     * @param nom
     */
    this.ajouterSite= function (domain_name, nom) {
            this.create(domain_name, nom);
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
    this.getNom = function (nom,res,callback) {
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
    this.create = function (domain_name, nom, res) {
        connection.query('insert into Website values (?,?)', [domain_name, nom], function (err, result) {
            if (!err) {
                console.log('Site creer.');
            }
            else
                console.log('Error while performing Query.');
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

    this.modifyNote = function (name,note, res, callback) {

        var sql = 'UPDATE Website SET description = ? WHERE name = ?';
        var data = [note,name];
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