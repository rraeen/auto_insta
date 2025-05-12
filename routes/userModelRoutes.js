const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const { createAppoinment, instaregistration, getInstance } = require('../controllers/userControllers');

const router = express.Router();
router.use(authMiddleware);


router.post('/add-appoinment',createAppoinment);
router.post('/instaregistration',instaregistration);
router.get('/getInstance',getInstance);



module.exports = router;
