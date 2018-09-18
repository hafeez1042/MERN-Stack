const errorCodes = require('../const/errorCodes');
const messages = require('../const/messages');

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }  else {
    res.status(errorCodes.http.UNAUTHORIZED).json({ message: messages.error.UNAUTHORIZED });
  }
};
