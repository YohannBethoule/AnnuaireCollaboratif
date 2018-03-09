/*

    Controller de la page de modele (description d'une page)

 */
//require :
var express = require('express');
var router = express.Router();

var modelePage = require('../modele/modelePage').modelePage;
var fiche = require('../Class/Fiche').Fiche;
var page  = require('../Class/Page').Page;


/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.fiche = function(req, res, next){
    res.render('fiche', {type: page.listType,title: 'Fiche' });
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
    if(domain_name.endsWith("/")){
        domain_name = domain_name.slice(0,domain_name.lastIndexOf("/",-1));
    }

    var name = domain_name.slice(domain_name.lastIndexOf("/"));
    name=name.slice(1);
    var user = req.user[0].username;
    var description = req.body.description;
    var subject = req.body.subject;
    var type = req.body.typ;
    var fiabilite = req.body.fiabilite;
    var coherence = req.body.coherence;

    console.log(name,user,description,subject,type,fiabilite,coherence);

    fiche.addFiche(domain_name,name,user,description,subject,type,fiabilite,coherence);
    res.redirect('/recherche');
    //modelePage.create();
};







