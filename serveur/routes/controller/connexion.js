/*

    Controller de la page de connexion

 */
//require :
var express = require('express');
var router = express.Router();
var passport = require('../passport');

exports.connexion = function(req, res, next){
    console.log("Connexion :");
    res.render('connexion', { title: 'Connexion' });
};

exports.connexionAction = function(req, res, next){
    console.log("Tentative connexion :");
   /* var pseudo = req.body.pseudo; //ou email
    var mdp = req.body.mdp;
    console.log("connexion de" + pseudo+" ,mdp: "+ mdp );*/

    //passport js :
    passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/connexion', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    },
    function(req, res) {
        res.redirect('/');
    })
};