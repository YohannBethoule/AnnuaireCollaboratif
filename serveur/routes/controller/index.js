/*

    Controller de la page d'index (home)

 */

//require :
var express = require('express');
var router = express.Router();
var session  = require('express-session');
var passport = require('passport');

/**
 * method de bienvenue
 * @param req
 * @param res
 * @param next
 */
exports.bienvenue = function(req, res, next){
    console.log("Bienvenue :");
    next();
};

/**
 * page principale "home"
 * @param req
 * @param res
 * @param next
 */
exports.index = function(req, res, next){
    var user = req.user
    console.log("Username : ",user);
    res.render('index', {user: user , title: 'Index' });
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.telecharger = function(req, res, next){
    console.log("Telechargement  :");
};

