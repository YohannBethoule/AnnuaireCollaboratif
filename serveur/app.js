var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var vm = require('vm');
var fs = require('fs');
var sql = require('mysql');
var passport   = require('passport')
var flash = require('connect-flash');

//page perso :
var database = require('./routes/database');
//database.createDataBase();

var index = require('./routes/controller/index');
var recherche = require('./routes/controller/recherche');
var routes = require('./routes/routes');
var users = require('./routes/users');
require('./routes/passport')(passport);


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(session({
    secret: 'zaerzarzerrunning', //
    resave: true,
    saveUninitialized: true
} )); // session secret

//initialisation de passport:
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

//initialisation pour toutes les pages :
app.use('/', users.router);//base de donnée
app.use('/', routes.router);//lancement du syteme de routage

//app.use('/', index);

//app.use('/recherche',recherche);


/*
     Erreur :
 */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;