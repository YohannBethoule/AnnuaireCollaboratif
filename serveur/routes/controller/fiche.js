/*

    Controller de la page de modele (description d'une page)

 */
//require :
var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

var modelePage = require('../modele/modelePage').modelePage;
var fiche = require('../Class/Fiche').Fiche;
var page  = require('../Class/Page').Page;


/**
 * voir fiche
 * @param req
 * @param res
 * @param next
 */
exports.fiche = function(req, res, next){
    res.render('fiche', {user: req.user,type: page.listType, title: 'Fiche' });
};

/**
 * ajouter / modifier une fiche sur une page
 * @param req
 * @param res
 * @param next
 */
exports.ajoutFiche = function(req, res, next){
    console.log("Ajout Fiche :");
    var domain_name = req.body.url;
    request(domain_name,function (error,response,body) {
        switch(response) {
            case 404:
                res.redirect('/fiche');
                console.log("err ajout mauvais domaine.",req.user[0].username,domain_name);
                return;
                break;
            default :
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
                console.log("fiche :",name,user,description,subject,type,fiabilite,coherence);
                fiche.addFiche(domain_name,name,user,description,subject,type,fiabilite,coherence);
                res.redirect('/recherche');

        }
    })
};







