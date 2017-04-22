/**
 * Created by ubuntu on 21/6/16.
 * /
//var mysql = require('mysql');
var conn = require('./db.js');
//var flash = require('connect-flash');
var path = require('path');
var express = require('express');
var router = express.Router();

/*
router.get('/login' , function(req, res){
    console.log("in login");
    console.log("headMain" , global.headMain);
    //headMain = 0;
    if(global.headMain == 1) {
        res.render('login', {headMain: '0'});
    }console.log("headMain : : ",global.headMain);
});
* /
router.post('/login' , function(req ,res){
   // sess = req.session;
   // sess.email=req.body.email;
    // res.end('done');
   // routes.headMain = '1' ;
    console.log("Authentication "+req.body.emailLogin+" "+global.headMain);
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
                    if(req.body.emailLogin == rows[0].Email)
                    {   if(req.body.passwordLogin == rows[0].Password){
                        global.headMain = 0;
                        userName = rows[0].firstname +" "+rows[0].lastname;
                        conn.query("insert into userLogin (email , password) values (?, ?)",[req.body.emailLogin ,req.body.passwordLogin]);
                        // console.log("dddd " +global.headMain);
                        res.json({"status" : "200" , "data" : "Login successful"});
                        }else{
                        res.json({'status' : '500' , 'data': 'wrong password'});
                         }
                    }
                    else {
                        res.json({"status" : "500" , "data" : "Login failed"});
                    }

            }
         });
 });

/*
router.get('/signup' , function(req, res){
    console.log("in signup");
    console.log("headMain" , global.headMain);
    //headMain = 0;
    if(global.headMain == 1) {
        res.render('signup', {headMain: '0'});
    }console.log("headMain : : ",global.headMain);
});
* /
router.post('/signup' , function( req , res ){
 //   res.json("Register Page");
      console.log(req.body.first_name+' '+req.body.last_name+' '+req.body.email+ " " +req.body.password);
    conn.query("insert into userSignup ( firstname , lastname , email , password ) values ( ? , ? , ? , ? )" ,
        [ req.body.first_name , req.body.last_name , req.body.email , req.body.password ] ,
        function(err , rows){
        //console.log(rows.length) ;
            if(err){
                console.log('Failed ' + err);
                res.json({"status" : err.status , "data" : err.message , "stack": err.stack});
            }
            else {
                global.headMain = 0;
                userName = req.body.first_name +" "+req.body.last_name;
                console.log('successful');
                //res.end('done');
                 res.json({"status" : "200" , "data" : "Successfully Signup"});

            }
        });
});

/*
router.delete('/logout' , function( req , res ){
    //   res.json("Register Page");
    //console.log(req.body.first_name+' '+req.body.last_name+' '+req.body.email+ " " +req.body.password);
    conn.query("delete from userLogin where email = ?" ,
        [req.body.email] , function(err , rows){
            if(err){
                console.log('Failed ' + err);
                res.json({"status" : "500" , "data" : "Deletion Failed"});
            }
            else {
                console.log('successful');
                //res.end('done');
                res.json({"status" : "200" , "data" : "Successfully Deleted"});
            }
        });
});
*/
//module.exports = router ;
