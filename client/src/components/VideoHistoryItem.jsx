import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { playVideo, deleteVideo } from "../actions/videos"

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
    marginLeft: "20px"
  },
  btn: {
    marginTop: "10px",
  },
  img: {
    maxWidth: "90%"
  },
}))

const VideoHistoryItem = ({ video, playVideo, deleteVideo }) => {
    
  const classes = useStyles()
  const { _id, thumbnails, alt, title, videoId } = video

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
        onClick={() => playVideo(videoId)}
      >
        <Grid item xs={4}>
          <img src={thumbnails} alt={alt} className={classes.img}/>
        </Grid>
        <Grid item xs={8}>
          <Typography component='h3' variant='body2'>
            {title}
          </Typography>
          <Button
            variant='outlined'
            color='secondary'
            size='small'
            className={classes.btn}
            onClick={() => {
              deleteVideo(_id)
            }}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

VideoHistoryItem.propTypes = {
  video: PropTypes.object.isRequired,
  playVideo: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
}

export default connect(
  null,
  { playVideo, deleteVideo }
)(VideoHistoryItem)
