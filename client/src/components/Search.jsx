import React, { useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { searchVideo } from "../actions/videos"
import { Button, TextField, Typography, Container, CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },

  paper: {
    marginTop: theme.spacing(8),
    marginRight: '15%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Search = ({ searchVideo }) => {
  const classes = useStyles()

  const [formData, setFormData] = useState({
    query: "",
    queryError: ""
  })

  const { query, queryError } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const validate = () => {
    let isError = false
    const errors = {
      queryError: ""
    }

    if (query === "" || query === " ") {
      isError = true
      errors.queryError = "Write something!"
    }

    setFormData({ ...formData, ...errors })
    return isError
  }

  const onSubmit = async e => {
    e.preventDefault()
    const err = validate()
    if (!err) {
      await searchVideo(query)
    }
  }

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h2' variant='h5'>
          Video Search
        </Typography>
        <form className={classes.form} onSubmit={e => onSubmit(e)}>
          <TextField
            type='input'
            variant='outlined'
            margin='normal'
            fullWidth
            label='Start serching video now!'
            name='query'
            autoComplete='text'
            autoFocus
            value={query}
            onChange={e => onChange(e)}
            error={!(queryError === "")}
            helperText={queryError === "" ? "" : queryError}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Search
          </Button>
        </form>
      </div>
    </Container>
  )
}

Search.propTypes = {
  searchVideo: PropTypes.func.isRequired
}

export default connect(
  null,
  { searchVideo }
)(Search)
