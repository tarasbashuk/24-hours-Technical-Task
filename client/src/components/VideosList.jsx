import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VideoItem from './VideoItem'

const VideosList = ({loaded, searchResult}) => {
    if (!loaded) return <div >You havent found any video yet</div>
    // const videos = searchResult.items
    console.log(searchResult);
    
    const renderedVideos =  searchResult.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};

VideosList.propTypes = {
    searchResult: PropTypes.array.isRequired
  }
  
  const mapStateToProps = state => ({
    searchResult: state.videos.searchResult,
    loaded: state.videos.loaded
  })
  
export default connect (mapStateToProps, null) (VideosList);
