const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../models/user');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    userModel.findByEmail(email, 'password email name')
      .then(user => {
        bcrypt.compare(password, user.password)
          .then(() => {
            return done(null, { email, name: user.name, _id: user._id });
          });
      })
      .catch(() => done(null, false, { message: 'Invalid email or password!...' }));
  }
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  userModel.getById(id)
    .then(res => done(null, res))
    .catch(error => done(error, false));
});

module.exports = passport;
