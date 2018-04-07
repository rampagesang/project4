const db = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

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
    console.log('serializeUser', user);
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    console.log('deserializeUser', user, id);
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  }, (req, email, password, done) => {
    const userData = {
      email: email.trim(),
      password: password.trim(),
      firstName: req.body.firstName.trim(),
      lastName: req.body.lastName.trim()
    };

    // db.User
    //   .create(userData)
    //   .then(dbModel => done(null))
    //   .catch(err => done(err));

    const newUser = new db.User(userData);
    newUser.save((err) => {
      if (err) { return done(err); }

      return done(null);
    });
  }));
}

