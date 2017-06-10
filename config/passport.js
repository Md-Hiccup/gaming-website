
//load bcrypt
var bCrypt = require('bcrypt-nodejs');
//  var passport = require('passport');
//  var User = require('../models/user');
module.exports = function(passport,user){

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
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
            User.findOne({where: {email: email}}).then(function (user) {
                if (user) {
                    return done({status : 401 , message : 'email is already taken'});
                }
                else {
                    var userPassword = generateHash(password);
                    var data =
                    {
                        email: email,
                        password: userPassword,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name
                    };
                    User.create(data).then(function (newUser, created){
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
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
                    return done(null, false, req.flash('loginMessage','Email does not exist' ));
                }
                if (!isValidPassword(user.password,password)) {
                    return done(null, false, req.flash('loginMessage','Incorrect password.'));
                }
                var userinfo = user.get();
                console.log("userinfo : " + JSON.stringify(userinfo));
                return done(null,userinfo);
            }).catch(function(err){
                console.log("Error:",err);
                return done(null, false, req.flash('loginMessage','Something went wrong with your Signin'));
            });
        }
    ));
}

//module.exports = passport;
