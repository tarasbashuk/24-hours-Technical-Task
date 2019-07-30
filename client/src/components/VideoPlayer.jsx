import React from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { Container } from "@material-ui/core"

const VideoPlayer = ({currentVideo, playing}) => {
    
    if (!playing) {
        return null
    }
    const videoSrc = `https://www.youtube.com/embed/${currentVideo}?autoplay=1`;
    return (
        <Container maxWidth="sm">
                <iframe src={videoSrc} allowFullScreen title='Video player' autoPlay width="560px" height="320px"/>
        </Container>

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