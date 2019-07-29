import {SEARCH_VIDEO, SAVE_VIDEO, DELETE_VIDEO, PLAY_VIDEO, GET_HISTORY} from '../actions/types'

const initialState = {
    searchQuery: '',
    searchResult: [],
    searchHistory: [],
    currentVideo: '',
    loaded: false,
    playing: false
} 

export default function (state = initialState, action) {
    const {type, payload} = action
    
    switch (type) {
        case SEARCH_VIDEO:
            return {...state, searchResult: payload, loaded: true}

        case PLAY_VIDEO:
            return {...state, currentVideo: payload, playing: true}

        case SAVE_VIDEO:
            let newSearchHistory = state.searchHistory
            newSearchHistory.push(payload)
            return {...state, searchHistory:  newSearchHistory, playing: true}

        case GET_HISTORY:
            return {...state, searchHistory:  payload}

        case DELETE_VIDEO:
            return {...state, searchHistory: state.searchHistory.filter(video=> video._id !== payload), loading: false}

        default:
            return {...state}      
    }
}
