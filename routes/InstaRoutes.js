const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const { createAppoinment, instaregistration, getInstance } = require('../controllers/userControllers');
const { getFriendsList,getMyPosts, setAutomationChat } = require('../controllers/getFriendsList');

const router = express.Router();
router.use(authMiddleware);


router.get('/friends',getFriendsList);
router.get('/getPost',getMyPosts);
router.post('/setautomationChat',setAutomationChat);




module.exports = router;
