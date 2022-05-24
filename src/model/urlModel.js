
const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({

    urlCode : {
        type: String,
        required: true,
        lowercase: true,
        unique : true
    },

    longUrl : {
        type: String,
        required: true
    },

    shortUrl: {
        type: String,
        unique : true,
        required: true
    }

}, { timestamps : true })

module.exports = mongoose.model('Url', urlSchema)