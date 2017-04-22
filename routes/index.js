var express = require('express');
var path = require('path');
//var passport = require('passport') ;
var router = express.Router();
var session = require('express-session');
//var routes = require('./auth.js');
var conn = require('./db.js');

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
/*router.post('/login', function(req, res){
	console.log("post login ");
	//res.redirect('/about');
});*/
router.get('/signup' , function(req, res){
	console.log("in signup");
	console.log("headMain" , global.headMain);
	//headMain = 0;
	if(global.headMain == 1) {
		res.render('signup', {headMain: '0'});
	}console.log("headMain : : ",global.headMain);
});
router.post('/signup' , function( req , res ){
	//   res.json("Register Page");
	console.log(req.body.first_name+' '+req.body.last_name+' '+req.body.email+ " " +req.body.password);
	if(req.body.first_name!=='' && req.body.last_name!=='' && req.body.email!=='' && req.body.password!==''){
	conn.query("insert into userSignup ( firstname , lastname , email , password ) values ( ? , ? , ? , ? )" ,
		[ req.body.first_name , req.body.last_name , req.body.email , req.body.password ] ,
		function(err , rows){
			//console.log(rows.length) ;
			if(err){
				console.log('Failed ' + err);
				res.json({"status" : err.status , "data" : err.message , "stack": err.stack});
			}
			else {
				global.headMain = 1;
				userName = req.body.first_name +" "+req.body.last_name;
				console.log('successful');
				//res.end('done');
				//res.json({"status" : "200" , "data" : "Successfully Signup"});
				res.redirect('/login');
			}
		});
	} else {
		console.log("signup error");
		res.redirect('/signup');
	}
});
router.get('/login' , function(req, res){
	console.log("in login");
	console.log("headMain" , global.headMain);
	//headMain = 0;
	if(global.headMain == 1) {
		res.render('login', {headMain: '0'});
	}console.log("headMain : : ",global.headMain);
});
router.post('/login' , function(req ,res){
	// sess = req.session;
	// sess.email=req.body.email;
	// res.end('done');
	// routes.headMain = '1' ;
	console.log("Authentication "+req.body.emailLogin+" "+global.headMain);
	if(req.body.emailLogin!=='' && req.body.passwordLogin!==''){
	conn.query("Select firstname , lastname , Email , Password from userSignup where email = ? AND password = ? ",
		[ req.body.emailLogin ,req.body.passwordLogin ],
		function (err , rows) {
			console.log(rows.length) ;   //console.log(rows[0].Email) ;
			if( err )
			{
				console.log(err);
				res.json({"status" : err.status , "data" : err.message});
			}
			else {

				if (req.body.emailLogin == rows[0].Email) {
					console.log('email check');
					if (req.body.passwordLogin == rows[0].Password) {
						global.headMain = 0;
						console.log('password check');
						userName = rows[0].firstname + " " + rows[0].lastname;
						conn.query("insert into userLogin (email , password) values (?, ?)", [req.body.emailLogin, req.body.passwordLogin]);
						// console.log("dddd " +global.headMain);
						//res.json({"status": "200", "data": "Login successful"});
						res.redirect('/');
					} else {
						res.redirect('/login');
						res.json({'status': '500', 'data': 'wrong password'});
					}
				}
				else {
					res.json({"status": "500", "data": "Login failed"});
				}
			  }
			});
	}else {
		console.log("login error");
		res.redirect('/login');
	}
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
	res.render('tictactoe1');
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
