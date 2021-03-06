/*

    Controller de la page de modele (description d'une page)

 */
//require :
var express = require('express');
var router = express.Router();
var modelePage = require('../modele/modelePage').modelePage;
var fiche= require('../Class/Fiche').Fiche;
var page = require('../Class/Page').Page;
var site= require('../Class/Site').Site;


/**
 * Page
 * @param req
 * @param res
 * @param next
 */
exports.modelePage = function(req, res, next){
    console.log("rechercheGeneral : "+ req.params.name);
    page = require('../Class/Page').Page;
    page.get(req.params.name,res,function (value) {
        res.render('modele', {user: req.user,page : value ,title: 'Modele' });
    });
};

/**
 * revois les données json de la page demandée (pour l'extension)
 * @param req
 * @param res
 * @param next
 */
exports.pageJson = function(req, res, next){
    console.log("rechercheGeneral : "+ req.params.name);
    page = require('../Class/Page').Page;
    page.getNom(req.params.name,res,function (value) {
        res.send( value);
    });
};

/**
 * pour modifier la description d'une page
 * @param req
 * @param res
 * @param next
 */
exports.modeleModifierDescriptionPage = function(req, res, next) {
    var page_nom = req.params.name;
    var dn = req.body.domain_name;
    var desc = req.body.description;
    var note1 = req.body.note1;
    var note2 = req.body.note2;

    console.log("modifier modele :",dn, desc, note1,note2);
    page.modifierDescritpion(page_nom, desc, res, function (value) {
        res.redirect('/page/'+page_nom);
    });
}

/**
 * pour commenter une page
 * @param req
 * @param res
 * @param next
 */
exports.modeleCommenter = function(req, res, next) {
    var page_nom = req.params.name;
    var commentaire = req.body.texte;
    console.log("commenter modele :",page_nom, commentaire,req.user[0].username);
    page.ajouterCommentaire(req.user[0].username ,page_nom, commentaire, res, function () {
        res.redirect('/page/'+page_nom);
    });
}

/**
 * pour redefinir la cohérence d'un utilisateur sur une page
 * @param req
 * @param res
 * @param next
 */
exports.modeleCoherence = function(req, res, next) {
    var name = req.params.name;
    var nb = req.params.nb;
    console.log("USER",req.user[0].username );
    console.log("name",name);
    console.log("nb",nb);
    fiche.noterCoherence(nb,req.user[0].username ,name, function () {
        res.redirect('/page/'+name);
    });
}

/**
 * pour redefinir la fiabilité d'un utilisateur sur une page
 * @param req
 * @param res
 * @param next
 */
exports.modeleFiabilite = function(req, res, next) {
    var name = req.params.name;
    var valeur = req.url;
    var nb = req.params.nb;
    fiche.noterFiabilite(nb,req.user[0].username ,name , function () {//note,username,name,callback
        res.redirect('/page/'+name);
    });
}


exports.siteJson = function(req, res, next){
    console.log("siteJson : "+ req.params.name);
    site = require('../Class/Site').Site;
    console.log("siteJson : "+ req.params.name);
    site.getNom(req.params.name,function (value) {
        res.send( value  );
    });
};

//non utile :
/**
 * Site
 * @param req
 * @param res
 * @param next
 */
exports.modeleSite = function(req, res, next){
    console.log("rechercheGeneral : "+ req.params.name);
    site.getNom(req.params.name,res,function (value) {
        res.render('modele', {user: req.user,page : value ,title: 'Modele' });
    });
};



exports.modeleModifierDescriptionSite = function(req, res, next) {
    var site_nom = req.params.name;
    var dn = req.body.domain_name;
    var desc = req.body.description;

    site.modifierDescritpion(site_nom, desc, res, function (value) {
        res.redirect('/site/'+site_nom);
    });
}

