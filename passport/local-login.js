const jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;
// const config = require('../config');
const db = require("../models");

/**
 * Return the Passport Local Strategy object.
 */

module.exports = function (passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    console.log('serializeUser-ll', user);
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    console.log('deserializeUser-ll', user, id);
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use('local-login', new PassportLocalStrategy({
    
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  // find a user by email address
  return db.User.findOne({ email: userData.email }, (err, user) => {
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      console.log(userData.password, passwordErr, isMatch);
      console.log(jwt);
      // console.log(config.jwtSecret);


      // create a token string
      const token = jwt.sign(payload, 'secret');
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  });
}));
}
