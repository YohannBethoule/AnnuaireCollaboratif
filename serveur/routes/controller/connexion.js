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
exports.deconnexion = function(req, res, next){
    console.log("Tentative deconnexion :");
    req.session.destroy(function (err) {

        res.redirect('/'); //Inside a callback… bulletproof!

    });
};


