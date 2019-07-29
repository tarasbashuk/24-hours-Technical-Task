const express = require('express')
const router = express.Router()

const Video = require('../../models/Video')

// @route POST api/videos
// @desс  Save video
// @acces Public


router.post('/', async (req, res) => {
    const {
        thumbnails,
        alt,
        title,
        videoId
    } = req.body

    try {
        let video = new Video({
            thumbnails,
            alt,
            title,
            videoId
        })

        await video.save()
        console.log(video);
        

        res.json(video)
           
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
    })

// @route POST api/videos
// @desс  Save video
// @acces Public


router.get('/', async (req, res) => {
    try {
       
        const videos = await Video.find().sort({
            date: -1
        })
console.log('from db', videos);
        
        res.json(videos)
           
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
    })
   

module.exports = router;