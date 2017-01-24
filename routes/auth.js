/**
 * Created by ubuntu on 21/6/16.
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hiccup.db');

var session = require('express-session');
//var flash = require('connect-flash');
var path = require('path');
var express = require('express');
var router = express.Router();
var sess ; 

/* GET home page. * /
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../','public','html','home.html'));
});
*/
router.post('/login' , function(req ,res){
   // sess = req.session;
   // sess.email=req.body.email;
    // res.end('done');
    console.log("Authentication ");
    db.all("Select Email , Password from signup where Email = ? AND Password = ? ",[ req.body.email ,req.body.password ]
        , function (err , rows) {     
        console.log(rows.length) ;   //  console.log(rows[0].Email) ;
            if( err )
            {
                console.log(err);
                res.json({"status" : err.status , "data" : err.message});
            }
            else {
                    if (rows.length == 1)       // (req.body.Email == row.Email)
                    {
                        res.json({"status" : "200" , "data" : "Login successful"});
                       // res.sendFile(path.join(__dirname, '../', 'public', 'html', 'index.html'));
                    }
                    else {
                        res.json({"status" : "500" , "data" : "Login failed"});
                        //  res.sendFile(path.join(__dirname,'../','public','html','home.html'));
                    }
                
            }
         });

 });            




router.post('/register' , function( req , res ){ 
 //   res.json("Register Page");
      console.log(req.body.firstname);
    db.run("insert into signup ( FirstName , LastName , Email , Password ) values ( ? , ? , ? , ? )" ,
        [ req.body.firstname , req.body.lastname , req.body.email , req.body.password ] , function(err , rows){
            if(err){
                console.log('Failed ' + err); 
                res.json({"status" : "500" , "data" : "Insertion Failed"});
            }
            else {  
                console.log('successful');
                //res.end('done') ;
                 res.json({"status" : "200" , "data" : "Successfully inserted"});
            }
        });
   // sess = req.session;
   // sess.email=req.body.email;
    
    //db.run("update signup set Email = 'stark@mail.com'  where FirstName = 'tony' "  ) ;
    // db.run("delete from signup where FirstName = 'tony' ");
    
});

module.exports = router ;
