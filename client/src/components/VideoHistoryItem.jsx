import React from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import {playVideo, deleteVideo} from '../actions/videos' 

const VideoHistoryItem = ({video , playVideo, deleteVideo}) => {
    const {_id, thumbnails, alt, title, videoId} = video
    return (
        <div className=' video-item item' onClick={ () => playVideo(videoId) }>
            <img className='ui image' src={thumbnails} alt={alt}/>
            <div className='content'>
                <div className='header'>{title}</div>
            </div>
            <button onClick={ () => {
                deleteVideo(_id)
                } } >Delete!!</button>
        </div>
    )
};

VideoHistoryItem.propTypes = {
    video: PropTypes.object.isRequired,
    playVideo: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired
}

export default connect(null, {playVideo, deleteVideo}) (VideoHistoryItem);