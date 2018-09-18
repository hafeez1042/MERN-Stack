const userModel = require('../../../models/user');
const errorCodes = require('../../../const/errorCodes');
const messages = require('../../../const/messages');
const passport = require('../../../config/passport');

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (info) return res.send(info.message);
    if (err) return next(err);
    if (!user) return res.redirect('/login');
    req.login(user, (loginError) => {
      if (loginError) return next(err);
      return res.redirect('/authrequired');
    });
    return next();
  })(req, res, next);
};

const register = (req, res, next) => {
  userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(() => {
    login(req, res, next);
  }).catch(error => {
    if (error.code === errorCodes.mongo.DUPLICATE) {
      res.status(errorCodes.http.CONFLICT).json({ message: messages.error.USER_ALREADY_EXISTS });
    } else {
      res.status(errorCodes.http.BAD_REQUEST).json(error);
    }
  });
};

module.exports = {
  register,
  login,
};
