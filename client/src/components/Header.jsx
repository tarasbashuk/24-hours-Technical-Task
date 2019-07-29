import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolBar: {
      justifyContent: 'center'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense' className={classes.toolBar}>
          <Typography variant='h6' color='inherit'>
             Technical Task by Taras Bashuk
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
