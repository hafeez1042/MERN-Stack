const userModel = require('../../../models/user');
const errorCodes = require('../../../const/errorCodes');
const messages = require('../../../const/messages');
const jwt = require('../../../helpers/jwt');
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

const register = (req, res) => {
  userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(({ name, email }) => {
    const user = { name, email };
    jwt.generateJWT(user)
      .then(accessToken => {
        res.json({ user, accessToken });
      }).catch(error => {
        res.status(errorCodes.http.BAD_REQUEST).json({ message: messages.error.UNKNOWN_ERROR, error });
      });
  }).catch(error => {
    if (error.code === errorCodes.mongo.DUPLICATE) {
      res.status(errorCodes.http.CONFLICT).json({ message: messages.error.USER_ALREADY_EXISTS });
    } else {
      res.status(errorCodes.http.BAD_REQUEST).json(error);
    }
  });
};


// const login = (req, res) => {
//   const { email, password } = req.body;
//   userModel.findByEmail(email, 'password email name').then(user => {
//     bcrypt.compare(password, user.password).then(() => {
//       jwt.generateJWT(user)
//         .then(response => {
//           res.json({ user: { email, name: user.name }, accessToken: response });
//         }).catch(error => {
//           res.status(errorCodes.http.BAD_REQUEST).json({ message: messages.error.UNKNOWN_ERROR, error });
//         });
//     }).catch(() => {
//       res.status(errorCodes.http.UNAUTHORIZED).json({ message: messages.error.INVALID_PASSWORD });
//     });
//   }).catch(() => {
//     res.status(errorCodes.http.UNAUTHORIZED).json({ message: messages.error.INVALID_EMAIL });
//   });
// };


module.exports = {
  register,
  login,
};
