const jsonWebToken = require('jsonwebtoken');
const config = require('../../.env');

const generateJWT = ({ email, name, _id }, maxAge) => {
  return new Promise((resolve, reject) => {
    jsonWebToken.sign({ email, name, _id }, config.JWT_SECRET, { expiresIn: maxAge || '14 days'}, (err, res) => {
      if (err || !res) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const verifyJWT = (token) => {
  return new Promise((resolve, reject) => {
    jsonWebToken.verify(token, config.JWT_SECRET, (err, res) => {
      if (err || !res) {
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = {
  generateJWT,
  verifyJWT,
};
