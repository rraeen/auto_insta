
const express = require('express');
const {login, register,resetPassword, isAuth } = require('../controllers/authControllers');

const router = express.Router();

router.post('/isAuth', isAuth);
router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword);


module.exports = router;
