import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VideoHistoryItem from './VideoHistoryItem'
import {getHistory} from '../actions/videos'

const VideosHistory = ({searchHistory, getHistory}) => {
    useEffect(() => {
        console.log("useEffect");
        
        getHistory()
    },[getHistory])

    if (searchHistory === []) return <div >You havent seen any video yet</div>
    // const videos = searchResult.items
    console.log(searchHistory);
    
    const renderedVideos =  searchHistory.map((video) => {
        return <VideoHistoryItem key={video._id} video={video} />
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