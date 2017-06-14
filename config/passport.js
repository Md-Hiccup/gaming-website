
//load bcrypt
var bCrypt = require('bcrypt-nodejs');
//  var passport = require('passport');
//  var User = require('../models/user');
module.exports = function(passport, user){

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        console.log("passport-serializeUser "+JSON.stringify(user));
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        console.log("passport-deserializeUser "+id);
        User.findById(id).then(function(user) {
            if(user){
                done(null, user.get());
            }
            else{
                done(user.errors,null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            console.log("need to check user email"+email);
            User.findOne({where: {email: email}}).then(function (user) {
                if (user) {
                    console.log("email-is-already-taken");
                    return done({status : 401 , message : 'email is already taken'});
                }
                else {
                    console.log("newUser-is-created");
                    var userPassword = generateHash(password);
                    var data =
                    {
                        email: email,
                        password: userPassword,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name
                    };
                    console.log("DATA : "+JSON.stringify(data));
                    User.create(data).then(function (newUser, created){
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            console.log("created-user-detail");
                            return done({status : 200 , id : newUser.id , name : newUser.first_name+" "+newUser.last_name});
                        }
                    }).catch(function(error) {
                        return done({status : 401 ,message : 'Email is not valid'});
                });
              }
            }).catch(function(error) {
                return done({status : 401 , message : 'Something went wrong with your Signup'});
        });
      }
    ));


    //LOCAL SIGNIN
    passport.use('local-login', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            var User = user;
            var isValidPassword = function(userpass,password){
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({ where : { email: email}}).then(function (user) {
                if (!user) {
                    return done({status: 401 , message :'Email does not exist' });
                }
                if (!isValidPassword(user.password,password)) {
                    return done({status : 401 , message : 'Incorrect password.'});
                }
                var userinfo = user.get();
                return done({status : 200 , id : userinfo.id , name : userinfo.first_name+" "+ userinfo.last_name});
            }).catch(function(err){
                return done({status : 401 , message:'Something went wrong with your Login'});
            });
        }
    ));
}

//module.exports = passport;
