/**
 * zone reservé au utilisateur : connexion si celui ci possede l'extension
 *
 */
var express = require('express');
var router = express.Router();
var app = express();

/* Connexion , Inscription, Verification Droit, Filtre les IP si trop de connection..    */

//connection par default :
//id d'invite


//utiliser socket ou express-connection ou PassportJS ?

app.route('/login') //validation de connexion
    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login) (tentaive de connection)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });



app.route('/inscription') //validation de connexion
// show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the Inscription form');
    });

module.exports = router;


