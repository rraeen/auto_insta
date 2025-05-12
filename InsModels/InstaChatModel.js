const mongoose = require('mongoose');
const { InsDB } = require('../config/db');


const instaChatSchema = new mongoose.Schema({
    instaId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    chatArr: {
        type: [{ url: String,msg: String,}], 
        default: [],
    },
    defaultPrompt: {
        type: [String], 
        default: [],
    },
    summery: {
        type: String, 
    },
});

const InstaModel = InsDB.model('InstaChatModal', instaChatSchema);

module.exports = InstaModel;
