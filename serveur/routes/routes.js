/*
    permet le routage et les differentes actions du site web
*/

var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var app = express();
var fs = require('fs');
var vm = require('vm');
var passport = require('passport');

//controller:
var recherche = require('./controller/recherche');
var index = require('./controller/index');
var fiche = require('./controller/fiche');
var modele = require('./controller/modele');
var inscription = require('./controller/inscription');
var connexion = require('./controller/connexion');

//classe :
var email = require('./Class/email').Email;


var routes = this;
    // Systeme de routage :

router.use(function timeLog (req, res, next) {
    console.log('Time : ', Date.now())
    next()
});

    /* GET home page. */
router.use('/', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

//return a la page index si l'utilisateru n'est pas connecté
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/connexion');
}

//initialisation du controller :
router.route('/')
    .get(index.index)
    .post(index.telecharger);

//faire get ?
router.post('/telecharger',index.telecharger);//telechargement de l'extension : utiliser module serve-static ?

/* Autre Page. */// -->Utiliser controller

//page recherche (list de page)
router.route('/recherche')
    .get(recherche.recherche)
    .post(recherche.rechercheNormale);


//fiche:
router.route('/fiche')
    .get(fiche.fiche)
    .post(isAuthenticated,fiche.ajoutFiche);

//router.post('/recherche/:nomSites/:nomPage',recherche.recherchePage);

//page permettant la connexion
router.route('/connexion')
    .get(connexion.connexion)
    .post(passport.authenticate('local-login', {
            successRedirect : 'back', // redirect to the secure profile section
            failureRedirect : '/connexion', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }),
        function(req, res) {
            console.log("connexion",req.user);
            if(req.user){
                console.log('signin successful',req.originalUrl);
            } else {
                console.log('signin error');
            }
            res.redirect('/connexion');
        });


//page permettant la inscription
router.route('/inscription')
    .get(inscription.inscription)
    .post(inscription.inscriptionDemander);

router.route('/inscription/confirmer')
    .get(inscription.inscriptionCode)

router.use('/inscription/confirmer', inscription.inscriptionConfirmer);

router.route('/inscription/confirmer')
    .post(passport.authenticate('local-signup', {
            successRedirect : 'back', // redirect to the secure profile section
            failureRedirect : '/inscription', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }),
        function(req, res) {
            console.log(req.user);
            if(req.user){
                console.log('signup successful');
            } else {
                console.log('Email already in use');
            }
            res.redirect('/insciption');
        });

router.route('/deconnexion')
    .get(connexion.deconnexion)


//page à propos
router.get('/apropos', function(req, res, next) {
    res.render('apropos', {user: req.user, title: 'A Propos' });
});

//modele :
router.route('/page/:name')
    .get(modele.modelePage)
    .post(isAuthenticated,modele.modeleModifierDescriptionPage);

router.route('/page/:name/commentaire')
    .post(isAuthenticated,modele.modeleCommenter);

router.route('/page/:name/coherence/:nb')
    .get(isAuthenticated,modele.modeleCoherence);

router.route('/page/:name/fiabilite/:nb')
    .get(isAuthenticated,modele.modeleFiabilite);

//site : (non utilisé)
router.route('/site/:name')
    .get(modele.modeleSite)
    .post(isAuthenticated,modele.modeleModifierDescriptionSite);


/* partie pour l'Extension :*/

router.route('/extension/page/:name')
    .get(modele.pageJson);
    //.post(isAuthenticated,modele.modeleModifierDescriptionPage);

//router.route('/extension/page/:name/commentaire')
    //.post(isAuthenticated,modele.modeleCommenter);

router.route('/extension/site/:name')
    .get(modele.siteJson)
    //.post(isAuthenticated,modele.modeleModifierDescriptionPage);



//function de telechargement du fichier d'extension
function getFile(exists, response, localpath)
{
    if(!exists) return sendError(404, '404 Not Found', response);
    fs.readFile(localpath, "binary",//type a changer
        function(err, file){ sendFile(err, file, response);}); // envoie du fichier
}

router.get('/test', function(req, res) {
    res.sendFile(__dirname +"/index.html");
});

router.get('/:name', function(req, res) {
    res.send('La page ' + req.params.name + " n'existe pas (encore)!");
});



module.exports = {
    router:router,
} ;