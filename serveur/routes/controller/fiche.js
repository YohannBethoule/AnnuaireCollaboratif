/*

    Controller de la page de modele (description d'une page)

 */
//require :
var express = require('express');
var router = express.Router();

var modelePage = require('../modele/modelePage').modelePage;
var fiche = require('../Class/Fiche').Fiche;


/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.fiche = function(req, res, next){
    res.render('fiche', {title: 'Fiche' });
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.ajoutFiche = function(req, res, next){
    console.log("Ajout Fiche :");
    var domain_name = req.body.url;
    //var desc = req.body.description;
    fiche.addFiche(domain_name);
    res.redirect('/recherche');
    //modelePage.create();
};







