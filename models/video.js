const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    thumbnails: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Video = mongoose.model('video', VideoSchema)