var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hiccup.db');
var flash = require('connect-flash');

var session = require('express-session');

var routes = require('./routes/index');
var auth = require('./routes/auth');
//var users = require('./routes/users');
/*
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// public static file
app.set('images' , path.join(__dirname , 'public', 'images'));
app.set('javascripts' , path.join(__dirname , 'public' , 'javascripts'));
app.set('stylesheets',path.join(__dirname , 'public', 'stylesheets'));
app.set('html' , path.join(__dirname , 'public' , 'html'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  cookieName: 'session',
  resave : true ,
  saveUninitialized: true,
  secret: 'express-session',
 // duration: 30 * 60 * 1000,
 // activeDuration: 5 * 60 * 1000
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/auth' , auth);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');         //  res.status(404).send('Sorry can't find that');
  err.status = 404;
  next(err);

});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);              //console.error(err.stack);
  res.render('error', {                       // res.status(500).send('Something Broke');
    message: err.message,
    error: {}
  });
});


module.exports = app;