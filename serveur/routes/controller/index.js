/*

    Controller de la page d'index (home)

 */

//require :
var express = require('express');
var router = express.Router();
var session  = require('express-session');
var passport = require('passport');


exports.bienvenue = function(req, res, next){
    console.log("Bienvenue :");
    next();
};
exports.index = function(req, res, next){
    var user = req.user
    console.log("Username : ",user);
    res.render('index', {user: user , title: 'Index' });
};

exports.telecharger = function(req, res, next){
    console.log("Telechargement  :");
};

