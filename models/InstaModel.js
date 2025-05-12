

const mongoose = require('mongoose');

const InstaModelSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true, 
    },
    companyName: { type: String, trim: true },
    instaId: { type: String, trim: true },
    instaToken: { type: String, trim: true },
}, { timestamps: true });

const User = mongoose.model('InstaModel', InstaModelSchema);

module.exports = User;
