/*

    Controller de la page de recherche

 */

//require :
var express = require('express');
var router = express.Router();

var modelePage = require('../modele/modelePage').modelePage;

exports.recherche = function(req, res, next){
    console.log("Bienvenue Recherche :");
    modelePage.get(res,function (value) {
        res.render('recherche', {listPage : value ,title: 'Index' });
    });
};

//faire une recherche :
exports.rechercheNormale = function(req, res, next){
    console.log("rechercheNormale : " +req.body.search);
    modelePage.recherche(req.body.search,res,function (value) {
        res.render('recherche', {listPage : value ,title: 'Index' });
    });
};


//afficher une page (modele) : //mettre dans modele ?
exports.modele = function(req, res, next){
    console.log("rechercheGeneral : "+ req.params.name);
    modelePage.getNom(req.params.name,res,function (value) {
        res.render('modele', {page : value ,title: 'Modele' });
    });
};

//option  :
//faire diffentes recherches specifiques :
exports.rechercheSite = function(req, res, next){
    console.log("rechercheSite :");
};
exports.recherchePage = function(req, res, next){
    console.log("recherchePage :");
};