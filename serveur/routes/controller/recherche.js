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
        for (i = 0; i < value.length; i++) {
            var page = require('../Class/Page').Page;
                page.pageUpdate(value[i].name,function () {
            })
        }
        site.getAll(res,function (value_s) {
            for (i = 0; i < value_s.length; i++) {
                site.updateNote(value_s[i].domain_name,function () {
                })
            }
            res.render('recherche', {listPage : value,listSite : value_s ,title: 'Recherche' });
        });
    });
};

//faire une recherche :
exports.rechercheNormale = function(req, res, next){
    if(req.body.search == undefined || req.body.search == ""){
        res.redirect('/recherche');
        return;
    }
    console.log("rechercheNormale : " +req.body.search);
    search.recherche(req.body.search,res,function (value) {
        for (i = 0; i < value.length; i++) {
            var page = require('../Class/Page').Page;
            page.pageUpdate(value[i].name,function () {
            })
        }
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