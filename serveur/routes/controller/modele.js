/*

    Controller de la page de modele (description d'une page)

 */
//require :
var express = require('express');
var router = express.Router();
var modelePage = require('../modele/modelePage').modelePage;

exports.modele = function(req, res, next){
    console.log("modele :");// + nom
    res.render('ajout', { title: 'Modele' ,});//faire une page d'ajout de page
};

exports.ajoutModele = function(req, res, next){
    console.log("Bienvenue Fiche :");
    var page = req.body.url;
    modelePage.create(page,res);
};

exports.modeleModifier = function(req, res, next) {
    var page_nom = req.params.name;
    var dn = req.body.domain_name;
    var desc = req.body.description;
    var note1 = req.body.note1;
    var note2 = req.body.note2;
    console.log("modifier modele :",dn, desc, note1,note2);
    //verfier modif av
    modelePage.modify(page_nom, desc, res, function (value) {
        res.redirect('/recherche/'+page_nom);
    });

    /*
    modelePage.modifyFiabilite(note1, desc, res, function (value) {

    });

    modelePage.modifyCoherence(note2, desc, res, function (value) {

    });
    */
}

