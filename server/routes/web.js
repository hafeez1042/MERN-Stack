const express = require('express');
const homeController = require('../controllers/web/homeController');
const router = express.Router();

router.get('/authrequired', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n');
  } else {
    res.send('not aithenticated');
    res.redirect('/');
  }
});

router.get('/*', homeController.index);
module.exports = router;
