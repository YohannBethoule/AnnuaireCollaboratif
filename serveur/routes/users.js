/**
 * zone de connection : connection si celui ci possede l'extension
 *
 */
var express = require('express');
var router = express.Router();
var app = express();
//var dbconfig = require('./bdd').Data;
var passport   = require('passport')
var bodyParser = require('body-parser')

/*connection base de donnee */ //utiliser sequelize ? et passportjs



// faire connection :
//auto = invite
//sinon connexion

var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    'user'     : 'picsou',
    'password' : 'picsou',
    database : 'Wib'
});

connection.connect(function(err) {
    if (err) throw err
    console.log('Connected to My Sql!')
})

/*
connection.query('SELECT * from User', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
});
*/
module.exports = {
    router:router,
    connection:connection,
};

