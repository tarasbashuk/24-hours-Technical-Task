import axios from "axios"
import {
  KEY,
  URL,
  SEARCH_VIDEO,
  PLAY_VIDEO,
  SAVE_VIDEO,
  GET_HISTORY,
  DELETE_VIDEO
} from "./types"

//Search video

export const searchVideo = query => async dispatch => {
  try {
    const params = {
      part: "snippet",
      maxResults: 5,
      key: KEY,
      q: query
    }
    const res = await axios.get(URL, {
      params
    })

    dispatch({
      type: SEARCH_VIDEO,
      payload: res.data.items
    })
  } catch (err) {
    console.error(err)
  }
}

// Play chosen video

export const playVideo = video => dispatch => {
  dispatch({
    type: PLAY_VIDEO,
    payload: video
  })
}

// Save chosen video

export const saveVideo = video => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const thumbnails = video.snippet.thumbnails.default.url,
      alt = video.snippet.description,
      title = video.snippet.title,
      videoId = video.id.videoId

    const body = JSON.stringify({
      alt,
      thumbnails,
      title,
      videoId
    })

    const res = await axios.post("/api/videos", body, config)

    dispatch({
      type: SAVE_VIDEO,
      payload: res.data
    })
  } catch (err) {
    console.error(err)
  }
}

// load history of search

export const getHistory = () => async dispatch => {
  try {
    const res = await axios.get("/api/videos")

    dispatch({
      type: GET_HISTORY,
      payload: res.data
    })
  } catch (err) {
    console.error(err)
  }
}

// delete video by _id

export const deleteVideo = _id => async dispatch => {
  try {
    await axios.delete(`/api/videos/${_id}`)

    dispatch({
      type: DELETE_VIDEO,
      payload: _id
    })
  } catch (err) {
    console.error(err)
  }
}
