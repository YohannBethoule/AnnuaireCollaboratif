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
    'user'     : 'root',
    'password' : '0000',
    database : 'Data'
});

connection.connect(function(err) {
    if (err) throw err
    console.log('Connected to My Sql!')
})

module.exports = {
    router:router,
    connection:connection
};

