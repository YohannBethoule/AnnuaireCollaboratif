/**
 * zone de connection BDD
 *
 */
var express = require('express');
var router = express.Router();
var app = express();
var dbconfig = require('./bdd.js').Data;
var passport   = require('passport')
var bodyParser = require('body-parser')

/*connection base de donnee */

var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    'user'     : 'wib_bdd',
    'password' : 'Annuaire2018',
    database: 'Data'
});

connection.connect(function(err) {
    if (err) throw err
    console.log('Connected to My Sql!')
})

module.exports = {
    router:router,
    connection:connection
};

