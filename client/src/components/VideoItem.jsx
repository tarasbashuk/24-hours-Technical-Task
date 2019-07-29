import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { playVideo, saveVideo } from "../actions/videos"

import { Grid, Typography, Paper, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.primary,
    width: "100%",
    marginRight: "20px"
  },
  btn: {
    marginTop: "10px",
    marginLeft: "10px"
  },
  img: {
    maxWidth: "100%"
  },
  caption: {
    marginLeft: "10px"
  }
}))

const VideoItem = ({ video, playVideo, saveVideo }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid container direction='row' justify='flex-start' alignItems='center'>
        <Grid item xs={4}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            component='h2'
            variant='body1'
            className={classes.caption}
          >
            {video.snippet.title}
          </Typography>
          <Button
            variant='outlined'
            color='primary'
            size='medium'
            className={classes.btn}
            onClick={() => {
              playVideo(video.id.videoId)
              saveVideo(video)
            }}
          >
            Play
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  playVideo: PropTypes.func.isRequired,
  saveVideo: PropTypes.func.isRequired
}

export default connect(
  null,
  { playVideo, saveVideo }
)(VideoItem)
