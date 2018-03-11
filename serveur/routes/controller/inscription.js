/*

    Controller de la page de inscription

 */
//require :
var express = require('express');
var router = express.Router();
var passport = require('passport');

var email = require('../Class/email').Email;
var user = require('../Class/User').User;

/**
 *  view page d'inscription
 * @param req
 * @param res
 * @param next
 */
exports.inscription = function(req, res, next){
    console.log("Inscription :");
    res.render('inscription', { title: 'Inscription' });
};

exports.inscriptionCode = function(req, res, next){
    console.log("confirmer_inscription :");
    res.render('confirmer_inscription', { title: 'Inscription' });
};

var mail;
var passwd ;
var name;

/**
 * permet d'envoyer un mail au demandeur d'inscription
 * @param req
 * @param res
 * @param next
 */
exports.inscriptionDemander = function(req, res, next){
    console.log("inscriptionDemander : ")
    user.getOne(req.body.email,req.body.username,function (value) {
        if (value == undefined || value.length == 0){
            email = new require('../Class/email').Email;
            email.send_for_register(req.body.email);
            mail = req.body.email ;
            passwd = req.body.password;
            name = req.body.username;
            console.log("email.chaine : ",email.chaine)
            console.log("inscription demander : ",mail,name)
            res.redirect('/inscription/confirmer');

        }else{
            console.log("value != undefined : ",value)
            res.redirect('/inscription');
        }
    })
};

exports.inscriptionConfirmer = function(req, res, next){
    var mdp =  req.body.password;
    console.log("mdp = email.chaine : ",mdp ,email.chaine)
    if(mdp == email.chaine){
        req.body.email = mail;
        req.body.password= passwd;
        req.body.username = name;
        console.log("inscription confirmation : ",mail,name)
        next();
    }else{
        console.log("inscription confirmation echec : ",mdp,email.chaine)
        res.redirect('/inscription')
    }
};
/*
router.route('/inscription/confirmer')
    .post(passport.authenticate('local-signup', {
            successRedirect : '/connexion', // redirect to the secure profile section
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
*/
