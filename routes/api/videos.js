const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const config = require('config')
const API_KEY = config.get('API_KEY')


// const VideoSerach = require('../../models/VideoSerach')

// @route GET api/videos
// @desс  Test route
// @acces Public


router.post('/',async (req, res) => {
    // let input = "cat"

    // let youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${input}&type=video&key=${API_KEY}`;
    // let url = `https://www.googleapis.com/youtube/v3/search`;
    // const options = {
    //     part: "snippet",
    //     key: API_KEY,
    //     maxResults: 3
    // }

    // let videos = await axios.get(youtubeUrl)
    // console.log(videos);
    
        // .then(res => res.json())
        // .then(json => json.items)
        // .catch(e => console.log(e));
    // res.send(videos)
    })


   

module.exports = router;