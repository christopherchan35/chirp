// var User = require('./models/models');
// var mongoose = require('mongoose');
// var User = mongoose.model('User');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var users = {};
module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
      console.log('serializing user:',user.username);
      //return the unique id for the user
      done(null, user.username);
    });

    //Desieralize user will call with the unique id provided by serializeuser
    passport.deserializeUser(function(username, done) {

      return done(null, users[username]);

    });

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {

            if(users[username]){
                console.log('User Not Found with username '+username);
                return done(null, false);
            }

            if(isValidPassword(users[username], password)){
                //sucessfully authenticated
                return done(null, users[username]);
            }
            else{
                console.log('Invalid password '+username);
                return done(null, false)
            }
        }
));

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            if (users[username]){
                console.log('User already exists with username: ' + username);
                return done(null, false);
            }

            //store user in memory
            users[username] = {
                username: username,
                password: createHash(password)
            }

            console.log(users[username].username + ' Registration successful');
            return done(null, users[username]);
        })
);

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };
}

// var LocalStrategy = require('passport-local').Strategy;
// var bCrypt = require('bcrypt-nodejs');
// //temp data store
// var users = {};
// module.exports = function(passport){
//
//   // Passport needs to be able to serialize and deserialize users to support persistent login sessions
//   passport.serializeUser(function(user, done) {
//     // tell Passport which ID to use for user
//     console.log('serializing user:', user.username);
//     return done(null, user.username);
//   });
//
//   passport.deserializeUser(function(username, done) {
//     // return user object back
//     return done(null, users[username]);
//   });
//
//   passport.use('login', new LocalStrategy({
//       passReqToCallback : true
//     },
//     function(req, username, password, done) {
//       // checks if user exists
//       if(!users[username]){
//         return done('user not found', false);
//       }
//       // checks if password is correct
//       if(isValidPassword(users[username], password)){
//         return done('invalid password', false);
//       }
//       // successful sign in
//       return done(null, user[username]);
//     }
//   }));
//
//   passport.use('signup', new LocalStrategy({
//       passReqToCallback : true // allows us to pass back the entire request to the callback
//     },
//     function(req, username, password, done) {
//         // check if user already exists
//         if(users[username]){
//           return done('username already taken', false);
//         }
//         // add user to db
//         users[username] = {
//           username: username,
//           password: createHash(password)
//         }
//         return done(null, users[username]);
//     }
//   }));
//
//   var isValidPassword = function(user, password){
//     return bCrypt.compareSync(password, user.password);
//   };
//
//   // Generates hash using bCrypt
//   var createHash = function(password){
//     return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
//   };
// };
