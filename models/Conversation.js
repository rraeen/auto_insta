const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model('Conversation', conversationSchema);
  