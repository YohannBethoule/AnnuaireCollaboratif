/*

    Controller de la page de modele (description d'une page)

 */
//require :
var express = require('express');
var router = express.Router();
var modelePage = require('../modele/modelePage').modelePage;

exports.modele = function(req, res, next){
    console.log("modele :");// + nom
    res.render('modele', { title: 'Modele' ,});

    //faire recherche de la page :
    //recherche
    //page = ...

    //requete json :

};
exports.modeleModifier = function(req, res, next) {
    var page = req.params.name;
    var desc = req.body.description;
    console.log("modifier modele :",page,desc);
    modelePage.modify(page, desc, res, function (value) {
        res.render('modele', {page: value, title: 'Modele'});
    });
}

