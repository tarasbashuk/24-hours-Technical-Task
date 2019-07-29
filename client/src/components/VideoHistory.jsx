import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VideoItem from './VideoItem'
import {getHistory} from '../actions/videos'

const VideosHistory = ({searchHistory, loadHistory}) => {
    useEffect(() => {
        console.log("useEffect");
        
        getHistory()
    },[])

    if (searchHistory === []) return <div >You havent seen any video yet</div>
    // const videos = searchResult.items
    console.log(searchHistory);
    
    const renderedVideos =  searchHistory.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} />
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};

VideosHistory.propTypes = {
    searchHistory: PropTypes.array.isRequired,
    getHistory: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    searchHistory: state.videos.searchHistory,

  })
  
export default connect (mapStateToProps, {getHistory}) (VideosHistory);