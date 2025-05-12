const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const { generateToken } = require('../utils/jwtutils')

const isAuth = async (req, res) => {
  try {
    const { username, token } = req.body
    const user = await User.findOne({ username })
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (user && decoded) {
      res.json({ 
        username: user?.username,
        email: user?.email,
        token: token,
        role: user?.role,
       })
    }
  } catch (error) {
    // console.error('Error in isAuth function:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body
    const user = new User({ username, email, password, role })
    await user.save()
    let createdUser = await User.findOne({ username })
    if (createdUser) {
      const token = generateToken(createdUser)
      res.json({_id:createdUser._id, username, email, token, role: createdUser.role })
    } else {
      res.status(400).json({ message: 'Registration failed' })
    }
  } catch (error) {
    console.error('Error during user registration', error)
    res.status(400).json({ message: error.message })
  }
}

const login = async (req, res) => {
 
  try {
    const { username, password } = req.body
    let user = {}

    if (username != 'root') {
      user = await User.findOne({ username })
      if (!user || !(await user.comparePassword(password))) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }
    } else {
      user = await User.findOne({ username, password })
      if (!user) {
        return res.status(400).json({ message: 'Ivalid credentials ' })
      }
    }

    if (user) {
      const token = generateToken(user)
      const { email, role } = user
      res.json({ _id:user._id,username, email, role, token })
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })
    user.password = newPassword
    if (createdUser) {
      const token = generateToken(createdUser)
    await user.save()
    let createdUser = await User.findOne({ email })
      res.json({
        _id:user._id,
        username: createdUser?.username,
        email,
        token,
        role: createdUser.role,
      })
    } else {
      res.status(400).json({ message: 'failed' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { login, register, resetPassword, isAuth }
