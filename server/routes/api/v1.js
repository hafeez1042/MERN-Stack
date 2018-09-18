const express = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const homeController = require('../../controllers/api/v1/homeController');
const authController = require('../../controllers/api/v1/authController');

const router = express.Router();

router.get('/', homeController.index);
router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/private', authMiddleware, (req, res) => {
  res.json({ message: 'This is a private route, only authorized person can access this route', authUser: req.user});
});

module.exports = router;
