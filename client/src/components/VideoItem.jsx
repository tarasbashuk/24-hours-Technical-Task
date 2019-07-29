import React from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import {playVideo, saveVideo} from '../actions/videos' 

const VideoItem = ({video , playVideo, saveVideo}) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div>
                <div>{video.snippet.title}</div>
            </div>
            <button onClick={ () => {
                playVideo(video.id.videoId)
                saveVideo(video)
                } } >Play!!</button>
        </div>
    )
};

VideoItem.propTypes = {
    video: PropTypes.object.isRequired,
    playVideo: PropTypes.func.isRequired,
    saveVideo: PropTypes.func.isRequired
}

export default connect(null, {playVideo, saveVideo}) (VideoItem);