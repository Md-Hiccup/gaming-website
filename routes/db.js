
var mysql = require('mysql');
var sqlInfo = {
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'gameDb'
};
var connection = mysql.createConnection(sqlInfo);
//connection.connect('use gameDb');

connection.connect(function(err){
    if(!err){
        console.log("Database is connected to gameDb....\n");
    }
    else {
        console.log("Error connecting Database...");
        console.log("code : "+err.code+" \nfatal :"+err.fatal + "\nstack : "+err.stack);
    }
    console.log("connection as id :",connection.threadId);
});

var userLogin = "create table if not exists userLogin ( loginId int PRIMARY KEY AUTO_INCREMENT , Email varchar(20) NOT NULL ," +
    "  Password varchar(20) NOT NULL , Creation_Date Timestamp, " +
    "FOREIGN KEY(Email , Password) REFERENCES userSignup( Email , Password));";

var userSignup = "create table if not exists userSignup ( signupId int PRIMARY KEY AUTO_INCREMENT , FirstName varchar(20) NOT NULL , " +
    "LastName varchar(20) NOT NULL, Email varchar(20) NOT NULL , Password varchar(20) NOT NULL);";
 
/*var scoreBoard = "create table if not exists scoreBoard ( loginId int , Email varchar(20) NOT NULL ," +
    " Rank int ,  Score int , FOREIGN KEY ( loginId ) REFERENCES userLogin (loginId ));";

/*var session = "create temp table if not exists session ( Id INT PRIMARY KEY AUTO_INCREMENT , Email varchar(20) NOT NULL ," +
    "Login REAL , Logout REAL , Data REAL ;)";*/

connection.query(userLogin,function(error , results, fields){
    if(error) throw error;
    console.log("userLogin Table is Created ");
});
connection.query(userSignup, function(error){
    if (error) throw error;
    console.log('userSignup table is created');
});

module.exports = connection ;