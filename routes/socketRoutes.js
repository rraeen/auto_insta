const express = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const { users, io } = require('../socketIO/Server')
const userModel = require('../models/userModel')
const { getConversation } = require('../controllers/socketController')

const router = express.Router()
router.use(authMiddleware)

router.get('/conversation/:id',getConversation)


router.post('/send-message', (req, res) => {
  const { message, to } = req.body
  const from = req.user.id

  if (to && users[to]) {
    io.to(users[to]).emit('receiveMessage', { message, from })
  } else {
    io.emit('receiveMessage', { message, from })
  }

  res.status(200).json({ success: true, message: 'Message sent' })
})

module.exports = router
