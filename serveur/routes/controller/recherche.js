/*

    Controller de la page de recherche

 */

//require :
var express = require('express');
var router = express.Router();

var modelePage = require('../modele/modelePage').modelePage;
var page = require('../Class/Page').Page;
var site = require('../Class/Site').Site;
var search = require('../Class/search').Search;

exports.recherche = function(req, res, next){
    console.log("Bienvenue Recherche :");
    page.getAll(res,function (value) {
        site.getAll(res,function (value_s) {
            res.render('recherche', {listPage : value,listSite : value_s ,title: 'Recherche' });
        });
    });
};

//faire une recherche :
exports.rechercheNormale = function(req, res, next){
    console.log("rechercheNormale : " +req.body.search);
    search.recherche(req.body.search,res,function (value) {
        search.rechercheSite(req.body.search,res,function (value_s) {
            res.render('recherche', {listPage : value,listSite : value_s  ,title: 'Recherche' });
        });
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