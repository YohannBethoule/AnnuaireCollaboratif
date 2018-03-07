/*

         search : permettant d'établir des resultats d'apres une recherche donnée

 */

var connection = require('../users').connection;

var Search  = function(){
        /*
                Base De Donnee :
        */

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
        this.rechercheSite = function (string,res,callback) {
            connection.query("Select * from Website where name REGEXP ?",string, function(err, rows, fields) {
                if (!err) {
                    if(rows.length == 0) {
                        connection.query("Select * from Website where description REGEXP ?", string, function (err, rows, fields) {
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
    }
module.exports.Search = new Search();