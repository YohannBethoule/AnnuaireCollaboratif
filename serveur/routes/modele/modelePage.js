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


    // COMMENTAIRE
    // select TOUT
    this.getCommentaire = function(res,callback) {
        var tab=[];
        connection.query('SELECT * FROM Commentaire', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
              console.log('Error while performing Query.');
        });
        return tab;
    }

    // select le(s) commentaire(s) pour un utilisateur
    this.getCommentaireByPseudo = function(pseudo, res,callback) {
        var tab=[];
        connection.query('SELECT text FROM Commentaire WHERE pseudoAuteur = ?',pseudo, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // delete commentaire avec l'id
    this.deleteCommentaire = function(id, res, callback) {
        var tab=[];
        connection.query('DELETE FROM Commentaire WHERE id = ?',id, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // récuperer un commentaire a partir du pseudo de l'auteur et du domaine du site
    this.getCommentByPseudoAndDomain = function(domain, pseudo, res,callback) {
        var tab=[];
        connection.query('Select text from Commentaire where pseudoAuteur = ? AND domain_name = ?', pseudo, domain, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }


    // WEBSITE
    // select basique
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

    // récupérer l'URL d'un site à partir du nom
    this.getSiteURL = function(nom, res,callback) {
        var tab=[];
        connection.query('Select domain_name from Website where name = ?',nom, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // récupérer le nom d'un site à partir de l'url
    this.getSiteName = function(url, res,callback) {
        var tab=[];
        connection.query('Select name from Website where url = ?',url, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // recuperer la description d'un site à partir de son nom de domaine
    this.getSiteDesc = function(domain, res,callback) {
        var tab=[];
        connection.query('Select description from Website where domain_name = ?',domain, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // recuperer la note d'un site à partir de son nom de domaine
    this.getSiteNote = function(domain, res,callback) {
        var tab=[];
        connection.query('Select note from Website where domain_name = ?',url, function(domain, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // supprimer un site par son nom
    this.deleteSite = function(name, res,callback) {
        var tab=[];
        connection.query('DELETE from Website where name = ?',name, function(domain, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    /*
     * UTILISATEURS
     */
    // select *
    this.getUtilisateurs = function(res,callback) {
        var tab=[];
        connection.query('Select * from Utilisateur', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // récupérer le pseudo avec le mail
    this.getUserByMail = function(mail, res,callback) {
        var tab=[];
        connection.query('Select username from Utilisateur where email = ?', mail, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // récupérer le mail par le pseudo
    this.getMailUserByPseudo = function(pseudo, res,callback) {
        var tab=[];
        connection.query('Select mail from Utilisateur where username = ?', pseudo, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // supprimer un utilisateur par son pseudo
    this.deleteUserByPseudo = function(pseudo, res,callback) {
        var tab=[];
        connection.query('DELETE FROM Utilisateur where username = ?', pseudo, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    // supprimer un utilisateur par son mail
    this.deleteUserByPseudo = function(mail, res,callback) {
        var tab=[];
        connection.query('DELETE FROM Utilisateur where email = ?', mail, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
        return tab;
    }

    /*
     * DESCRIPTION
     */
    // select *
    this.getDescription = function(res,callback) {
        var tab=[];
        connection.query('Select * from Description', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
              console.log('Error while performing Query.');
        });
        return tab;
    }

    // récupérer description par le nom

    this.getDescByName = function(name, res,callback) {
        var tab=[];
        connection.query('Select description from Description where name = ?', name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
              console.log('Error while performing Query.');
        });
        return tab;
    }
    // supprimer description par le nom
    this.deleteDescByName = function(name, res,callback) {
        var tab=[];
        connection.query('DELETE FROM Description WHERE name = ?', name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
              console.log('Error while performing Query.');
        });
        return tab;
    }

    /*
     * Page
     */
    // select *
        this.getPages = function (res,callback) {
        connection.query('Select * from Page',function(err, rows, fields) {
            if (!err) {
                var r = rows[0];
                callback(r);
            }
            else
              console.log('Error while performing Query.');
        });
    }

    // récupérer le type en fonction du nom de la page
    this.getPageTypeByName = function (name,res,callback) {
        var r = string;
        connection.query('Select type from Page where name = ?',name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // récupérer la descripton d'un page en fonction de son nom
    this.getPageDescByName = function (name,res,callback) {
        var r = string;
        connection.query('Select description from Page where name = ?',name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // récupérer notes fiabilite & coherence d'une page en fonction de son nom
    this.getNotesTypeByName = function (name,res,callback) {
        var r = string;
        connection.query('Select fiabilite, coherence from Page where name = ?',name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // récupérer le sujet de la page en fonction de son nom
    this.getPageSubjectByName = function (name,res,callback) {
        var r = string;
        connection.query('Select subject from Page where name = ?',name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // récupérer l'url de la page en fonction de son nom
    this.getPageURLByName = function (name,res,callback) {
        var r = string;
        connection.query('Select domain_name_site from Page where name = ?',name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // supprimer une page en fonction de son nom
    this.deletePageByName = function (name,res,callback) {
        var r = string;
        connection.query('DELETE from Page where name = ?',name, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }


    /*
     * FICHE
     */
    // select *
    this.getFiches = function (res,callback) {
        var r = string;
        connection.query('Select * from Fiche', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // récupérer les notes d'un utilisateur sur une fiche avec le domaine de la fiche
    this.getNotesOfUserFiche = function (pseudo, domain, res,callback) {
        var r = string;
        connection.query('Select note_fiabilite, note_coherence from Fiche WHERE pseudoAuteur = ? AND domain_name_site = ?', pseudo, domain, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // supprimer une fiche en fonction de l'url
    this.deleteFicheByUrl = function (domain,res,callback) {
        var r = string;
        connection.query('Delete from Fiche where domain_name_site = ?',domain, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /*
     * ARGUMENT
     */
    // select *
    this.getArguments = function (res,callback) {
        var r = string;
        connection.query('Select * from Argument', function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // récupérer les parties descriptions en fonction de l'auteur
    this.getArguments = function (pseudo, res,callback) {
        var r = string;
        connection.query('Select partie_description from Argument where pseudoAuteur = ?', pseudo, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }
    // récupérer l'orientation d'un commentaire sur un site et par utilisateur
    this.getOrientation = function (domain, pseudo, res,callback) {
        var r = string;
        connection.query('Select orientation from Argument where pseudo = ? and domain_name_site = ?', pseudo, domain, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // supprimer argument par pseudo & domaine
    this.deleteArgument = function (pseudo, domain, res,callback) {
        var r = string;
        connection.query('Delete from Argument where pseudo = ? and domain_name_site = ?', pseudo, domain, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /*
     * URL Argument
     */
    // recupere le booleen enregistree en fonction de l'url
    this.getEnregistrement = function (url, res,callback) {
        var r = string;
        connection.query('Select enregistree from URL_Argument where url_justification = ?', url, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    // supprime un url
    this.deleteURLArg = function (url, res,callback) {
        var r = string;
        connection.query('Delete from URL_Argument where url_justification = ?', url, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }
            else
                console.log('Error while performing Query.');
        });
    }

    /*
     * Quelques updates...
     */

    this.updateWebsiteDescByName = function (name,description, res, callback) {

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

    this.updateCoherence = function (name, coherence, res, callback) {
        var sql = 'UPDATE Page SET coherence = ? WHERE name = ?';
        var data = [coherence,name];
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

    this.updateFiabilite = function (name, fiabilite, res, callback) {
        var sql = 'UPDATE Page SET fiabilite = ? WHERE name = ?';
        var data = [fiabilite,name];
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

module.exports = {
    modelePage:new modelePage()
};