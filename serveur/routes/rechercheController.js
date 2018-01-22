var express = require('express');
var router = express.Router();

var app = express();


router.post('/rechercheAction', function rechercheAction (req, res) {
    res.send('recherche !');
});