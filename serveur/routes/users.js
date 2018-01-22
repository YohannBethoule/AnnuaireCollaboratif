/**
 * zone reservé au utilisateur : connexion si celui ci possede l'extension
 * @type {*|createApplication}
 */
var express = require('express');
var router = express.Router();
var app = express();


/*      Filtrer les IP si trop de connection        */


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


app.route('/login') //validation de connexion
// show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });


module.exports = router;


