import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import VideoItem from "./VideoItem"

import { Grid, Typography } from "@material-ui/core"

const SearchList = ({ loaded, searchResult }) => {
  if (searchResult.length === 0)
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Typography
            component='h2'
            variant='h5'
            style={{ marginLeft: "30px" }}
          >
            You haven't searched any video yet
          </Typography>
        </Grid>
      </Grid>
    )

  const renderedVideos = searchResult.map(video => {
    return <VideoItem key={video.id.videoId} video={video} />
  })

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography component='h2' variant='h5' style={{ marginLeft: "30px" }}>
          Search Result:
        </Typography>
      </Grid>
      <Grid item>{renderedVideos}</Grid>
    </Grid>
  )
}

SearchList.propTypes = {
  searchResult: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  searchResult: state.videos.searchResult,
  loaded: state.videos.loaded
})

export default connect(
  mapStateToProps,
  null
)(SearchList)
