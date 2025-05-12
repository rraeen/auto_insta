const { Server } = require('socket.io');
const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { getOnlineUsers } = require('../controllers/socketController');
const { default: mongoose } = require('mongoose');
const InstaModel = require('../InsModels/InstaChatModel');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:4001',
    methods: ['GET', 'POST'],
  },
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connected, setting up change stream');
  
  const instaChatChangeStream = InstaModel.watch();
  
  instaChatChangeStream.on('change', (change) => {
    console.log('Change detected:', change);
    io.emit('dbChange', change);
  });
});

const users = {};

io.use((socket, next) => {
  const token = socket.handshake.auth?.token;
  if (!token) return next(new Error('Authentication error'));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error('Invalid token'));
  }
});

io.on('connection',(socket) => {
  const userId = socket.user?.id;
  if (userId) {
    users[userId] = socket.id;
    getOnlineUsers(users)
    .then(onlineUsers=>{
      io.emit('onlineUsers', onlineUsers);
    })
    .catch((error) => {
      console.error('Error fetching online users:', error);
    });
  }
  socket.on('disconnect', () => {
    delete users[userId];
    getOnlineUsers(users)
    .then(onlineUsers=>{
      io.emit('onlineUsers', onlineUsers);
    })
    .catch((error) => {
      console.error('Error fetching online users:', error);
    });
  });
});

module.exports = { app, io, server, users };
