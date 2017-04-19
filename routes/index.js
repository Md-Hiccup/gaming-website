var express = require('express');
var path = require('path');
//var passport = require('passport') ;
var router = express.Router();
var session = require('express-session');
//var routes = require('./auth.js');
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
global.headMain = 1;

router.get('/' , function(req, res){
	console.log("in index");
	console.log("headMain" , global.headMain);
	if(global.headMain==0)
		res.render('index' ,{headMain : '0'});
	else
		res.render('index' ,{headMain : '1'});
});
router.get('/blog' , function(req, res){
	console.log("in blog");
	console.log("headMain" , global.headMain);
	if(global.headMain==0)
		res.render('blog' ,{headMain : '0'});
	else
		res.render('blog' ,{headMain : '1'});
});
router.get('/about' , function(req, res){
	console.log("in about");
	console.log("headMain" , global.headMain);
	if(global.headMain==0)
		res.render('about' ,{headMain : '0'});
	else
		res.render('about' ,{headMain : '1'});
});

// Why function call this post method from processing auth/signp. why it is necessary to include post method in index.js
router.post('/login', function(req, res){
	console.log("post login ");
	//res.redirect('/about');
});
router.get('/logout', function(req, res){
	console.log("in logout");
	console.log("headMain " ,global.headMain);
	if(global.headMain == 0) {
		global.headMain = 1;
		res.render('index', {headMain : '1'});
	}console.log("headMain : : ", global.headMain);
});
router.get('/imarble' , function(req, res){
	console.log("in imarble");
	res.render('imarble');
});
router.get('/tictactoe1' , function(req, res){
	console.log("in tictactoe single");
});
router.get('/tictactoe2' , function(req, res){
	console.log("in tictactoe double");
	res.render('tictactoe2');
});
/*
router.get('/dashboard' , function(req, res){
	console.log("in dashboard");
	res.render('dashboard');
});

router.get('/home' , function (req ,res ){
//	res.sendFile(path.join(__dirname,'../','public','html','home.html'));
	console.log("in home");
	sess = req.session;
	sess.email = req.body.email ;
//	console.log(sess.email);
	if(sess.email) {
		console.log('Second '+sess.email);
		res.sendFile(path.join(__dirname,'../','public','html','index.html'));
		//res.write('<h1>Hello '+sess.email+'</h1>');
		//res.end('<a href="	">Logout</a>');
	} else {
		console.log('first '+sess.email);
		res.sendFile(path.join(__dirname,'../','public','html','home.html'));
		//res.end('<a href = "http://localhost:3000/home">Login</a>');
	}
});

router.get('/logout' , function(req ,res ) {
	req.session.destroy(function (err) {  
		if (err) { 
			console.log(err); 
		} else { 
			res.end('done');
			//res.sendFile(path.join(__dirname, '../', 'public', 'html', 'home.html'));
		} 
	});
});
*/
module.exports = router;
