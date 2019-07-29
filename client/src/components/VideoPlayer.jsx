import React from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"


const VideoPlayer = ({currentVideo, playing}) => {
    
    if (!playing) {
        return <div>Loading ...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${currentVideo}?autoplay=1`;
    return (
        <div>
            <div>
                <iframe src={videoSrc} allowFullScreen title='Video player' autoPlay width="640" height="360"/>
            </div>
        </div>

    )
}
VideoPlayer.propTypes = {
    currentVideo: PropTypes.string.isRequired,
    playing: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    currentVideo: state.videos.currentVideo,
    playing: state.videos.playing
  })

export default connect(mapStateToProps, null) (VideoPlayer)