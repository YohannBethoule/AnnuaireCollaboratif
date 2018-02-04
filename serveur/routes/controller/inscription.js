/*

    Controller de la page de inscription

 */
//require :
var express = require('express');
var router = express.Router();
var passport = require('passport');

exports.inscription = function(req, res, next){
    console.log("Inscription :");
    res.render('inscription', { title: 'Inscription' });
};
exports.inscriptionAction = function(req, res, next){
    console.log("Tentative d'Incription :");

    passport.authenticate('local-signup', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/connexion', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        },
        function(req, res) {
            res.redirect('/');
        });
    //inscription validé :
    //res.redirect('/');
};