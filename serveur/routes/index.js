var express = require('express');
var router = express.Router();
var fs = require('fs');

var app = express();
/* Express*/
//controller:

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hello Home');
  res.render('index', { title: 'Express' });
  app.use(express.static(__dirname + '../views'));
});
/* Autre Page. */
//page recherche
router.get('/jade/recherche', function(req, res, next) {
    //app.use('./routes', recherche);
    //router.get(recherche)
   // var recherche =  require('./rechercheController');
    //app.use('/routes', require('./rechercheController'));
    res.render('jade/recherche', { title: 'Recherche' });
});
//page à propos
router.get('/jade/apropos', function(req, res, next) {
  res.render('jade/apropos', { title: 'Express' });
});

//page modele representative des annotation a faire a une page d'information
router.get('/jade/modele', function(req, res, next) {
  res.render('jade/modele', { title: 'Express' });
});

//page permettant la connexion
router.get('/connexion', function(req, res, next) {
  res.render('connexion', { title: 'Express connexion' });
});

/* GET home page static */
/*

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/../views/testHtml.html');
});

//server.listen(4200);

*/

/*
        Methode & Action: -> faire les Controllers !
 */


router.post('/rechercheAction', function rechercheAction (req, res) {
    res.send('recherche' +' !');
});


router.get('/telecharger', function(req, res) {
    res.send('Telechargement !');
    console.info("Telechargement !");
});

//function de telechargement du fichier d'extension
function getFile(exists, response, localpath)
{
    if(!exists) return sendError(404, '404 Not Found', response);
    fs.readFile(localpath, "binary",//type a changer
        function(err, file){ sendFile(err, file, response);}); // envoie du fichier
}

// a utiliser pour creer des pages de recherche :                            <---------- -----
// route with parameters (http://localhost:8080/:name)
router.get('/:name', function(req, res) {
    res.send('La page ' + req.params.name + " n'existe pas (encore)!");
});

// route middleware to validate :name -> recupere n'importe quel :name
router.param('name', function(req, res, next, name) {
    // mettre validation correespondante
    console.log('doing name validations on ' + name);
    req.name = name;
    // go to the next thing
    next();
});

module.exports = router;