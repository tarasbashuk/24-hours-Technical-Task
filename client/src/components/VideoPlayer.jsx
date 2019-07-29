import React from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"


const VideoPlayer = ({currentVideo, playing}) => {
    
    if (!playing) {
        return <div>Loading ...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${currentVideo.id.videoId}?autoplay=1`;
    console.log(typeof(currentVideo));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player' autoPlay width="640" height="360" id="player"/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{currentVideo.snippet.title}</h4>
                <p>{currentVideo.snippet.description}</p>
            </div>
        </div>

    )
}
VideoPlayer.propTypes = {
    currentVideo: PropTypes.object.isRequired,
    playing: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    currentVideo: state.videos.currentVideo,
    playing: state.videos.playing
  })

export default connect(mapStateToProps, null) (VideoPlayer)