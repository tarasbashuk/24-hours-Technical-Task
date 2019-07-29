const express = require("express")
const router = express.Router()

const Video = require("../../models/Video")

// @route POST api/videos
// @desс  Save video
// @acces Public

router.post("/", async (req, res) => {
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
        res.json(video)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// @route POST api/videos
// @desс  Save video
// @acces Public

router.get("/", async (req, res) => {
    try {
        const videos = await Video.find().sort({
            date: 1
        })
        res.json(videos)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

// @route  DELETE api/videos/:_id
// @decs  Delete  video by _id
// @acces Public

router.delete("/:_id", async (req, res) => {
    try {
        const video = await Video.findById(req.params._id)

        if (!video)
            return res.status(404).json({
                msg: "Post not found"
            })

        await video.remove()

        res.json({
            msg: "Video  deleted"
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

module.exports = router