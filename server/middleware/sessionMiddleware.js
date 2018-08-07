const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const env = require('../../.env');

module.exports = session({
  genid: () => {
    return uuid(); // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
});
