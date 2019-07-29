import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import VideoHistoryItem from "./VideoHistoryItem"
import { getHistory } from "../actions/videos"

import { Grid, Typography } from "@material-ui/core"

const VideosHistory = ({ searchHistory, getHistory, loaded }) => {
  useEffect(() => {
    getHistory()
  }, [getHistory])

  if (searchHistory.length === 0)
    return <div>You havent seen any video yet</div>

  const renderedVideos = searchHistory.map(video => {
    return <VideoHistoryItem key={video._id} video={video} />
  })

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography component='h2' variant='h5' style={{ marginLeft: "30px" }}>
          Search History:
        </Typography>
      </Grid>
      <Grid item>{renderedVideos}</Grid>
    </Grid>
  )
}

VideosHistory.propTypes = {
  searchHistory: PropTypes.array.isRequired,
  getHistory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchHistory: state.videos.searchHistory,
  loaded: state.videos.loaded
})

export default connect(
  mapStateToProps,
  { getHistory }
)(VideosHistory)
