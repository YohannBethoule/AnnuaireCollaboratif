/*
    permet le routage et les differentes actions du site web
*/

var express = require('express');
var router = express.Router();
var fs = require('fs');
var vm = require('vm');
var app = express();
/* Express*/
//controller:


// Systeme de routage :

/* GET home page. */
router.get('/', function(req, res, next) {
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
    res.render('jade/apropos', { title: 'A Propos' });
});

//page modele representative des annotation a faire a une page d'information
router.get('/jade/modele', function(req, res, next) {
    res.render('jade/modele', { title: 'Modele' });
});

//page permettant la connexion
router.get('/connexion', function(req, res, next) {
    res.render('connexion', { title: 'Connexion' });
});


/* GET home page static */
/*

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/../views/testHtml.html');
});



/*
        Methode & Action:  utiliser request a la place de get &/ou post
 */
//ajouter la base de donnée ici


// a inclure dans autre fichier js ? -> eval(fs.readFileSync(__dirname + "/recherche.js"))
var tab=[];


router.get('/recherche/:name', function rechercheAction (req, res) {
    res.render('jade/recherche', { title: 'Recherche' });
    res.send('recherche' +req.params.name+' !');
    //verification syntaxe
    // gereration de la liste d'article ou du site d'info
    //envoie du fichier json :
    res.json(tab);
});


//telechargement de l'extension : utiliser module serve-static ?

router.get('/telecharger', function(req, res) {
    res.send('Telechargement !');
    console.info("Telechargement !");
    //getFile();
});

//function de telechargement du fichier d'extension
function getFile(exists, response, localpath)
{
    if(!exists) return sendError(404, '404 Not Found', response);
    fs.readFile(localpath, "binary",//type a changer
        function(err, file){ sendFile(err, file, response);}); // envoie du fichier
}

//mettre aussi une partie dans users pour la verification des droits ? :

//ajout nouvelle page :

//interaction avec page (ajout commentaire, note , ...) :

//signaler:
//commentaire:
//page:

//fin //mettre une partie dans users pour la verification des droits ? :

//routage dynamique  :
// route with parameters (http://localhost:8080/:name)
router.get('/:name', function(req, res) {
    res.send('La page ' + req.params.name + " n'existe pas (encore)!");
});

/*
// route middleware to validate :name -> recupere n'importe quel :name
router.param('name', function(req, res, next, name) {
    // mettre validation correespondante
    console.log('doing name validations on ' + name);
    req.name = name;
    // go to the next thing
    next();
});
*/

/*creer Classe User & Page Web*/

/* Donnees JSON TEST : */


module.exports = router;
