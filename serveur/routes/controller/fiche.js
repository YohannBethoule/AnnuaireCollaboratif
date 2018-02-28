/*

    Controller de la page de modele (description d'une page)

 */
//require :
var express = require('express');
var router = express.Router();

var modelePage = require('../modele/modelePage').modelePage;


exports.fiche = function(req, res, next){
    console.log("Bienvenue Fiche :");
    res.render('fiche', {title: 'Fiche' });
};

exports.ajoutFiche = function(req, res, next){
    console.log("Bienvenue Fiche :");
    var page = req.body.url;
    var desc = req.body.description;
    modelePage.create();
    //
};







