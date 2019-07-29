import React, { Fragment } from "react"
import { Provider } from "react-redux"
import store from "./store"
import Header from "./components/Header"
import Search from "./components/Search"
import VideosList from "./components/VideosList"
import VideoPlayer from "./components/VideoPlayer"
import VideoHistory from "./components/VideoHistory"

import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles()

  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Search />
            </Grid>
            <Grid item xs={3}>
              <VideoHistory />
            </Grid>
            <Grid item xs={5}>
              <VideoPlayer />
            </Grid>
            <Grid item xs={4}>
              <VideosList />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    </Provider>
  )
}

export default App
