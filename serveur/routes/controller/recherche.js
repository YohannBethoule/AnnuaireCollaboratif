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

    //console.log("recherche:" ,l);
};

//faire une recherche :
exports.rechercheNormale = function(req, res, next){
    console.log("rechercheNormale :" +req.body.search);
    modelePage.getNom(req.req.body.search,res,function (value) {
        res.render('recherche', {listPage : value ,title: 'Index' });
    });
};


//afficher une page (modele) :
exports.rechercheGeneral = function(req, res, next){
    console.log("rechercheGeneral : "+ req.params.name);
    modelePage.getNom(req.params.name,res,function (value) {
        res.render('modele', {page : value ,title: 'Modele' });
    });
};


//utile ? :

exports.rechercheSite = function(req, res, next){
    console.log("rechercheSite :");
};
exports.recherchePage = function(req, res, next){
    console.log("recherchePage :");
};