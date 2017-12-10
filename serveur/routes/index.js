var express = require('express');
var router = express.Router();

var app = express();

/* Express*/

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hello Home');
  res.render('index', { title: 'Express' });
});

router.get('/jade/recherche', function(req, res, next) {
  //res.send('Hello Home');
  res.render('jade/recherche', { title: 'Express' });
});

router.get('/jade/apropos', function(req, res, next) {
  //res.send('Hello Home');
  res.render('jade/apropos', { title: 'Express' });
});

router.get('/jade/modele', function(req, res, next) {
  //res.send('Hello Home');
  res.render('jade/modele', { title: 'Express' });
});


router.get('/connexion', function(req, res, next) {
  res.render('connexion', { title: 'Express connexion' });
});

app.route('/login') //validation de connexion
// show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
});

// route with parameters (http://localhost:8080/:name)
router.get('/:name', function(req, res) {
    res.send('La page ' + req.params.name + " n'existe pas (encore)!");
});

// route middleware to validate :name -> recupere n'importe quel :name
router.param('name', function(req, res, next, name) {
    // mettre validation correespondante
    console.log('doing name validations on ' + name);
    req.name = name;
    // go to the next thing
    next();
});

module.exports = router;

/* GET home page static */
/*

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/../views/testHtml.html');
});

//server.listen(4200);

*/