

const mongoose = require('mongoose');

const ChatSettingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true, 
    },
    friendId:{type: String},
    mode: { type: String, trim: true },
    systemPrompt: { type: String, trim: true },
    active: { type: Boolean, default: false }
}, { timestamps: true });

 

module.exports = mongoose.model('ChatSettingModel', ChatSettingSchema);
