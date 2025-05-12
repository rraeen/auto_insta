const express = require('express');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(authMiddleware);


router.get('/doctor-dashboard', roleMiddleware(['doctor']), (req, res) => {
  res.json({ message: 'Welcome to the doctor dashboard' });
});

router.get('/admin-dashboard', roleMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
