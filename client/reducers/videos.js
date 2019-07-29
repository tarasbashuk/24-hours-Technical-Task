import {SEARCH_VIDEO, SAVE_VIDEO, DELETE_VIDEO} from '../actions/types'

const initialState = {
    searchQuery: '',
    searchResult: [],
    searchHistory: [],
    loading: true,
    
} 

export default function (state = initialState, action) {
    const {type, payload} = action
    
    switch (type) {
        case SEARCH_VIDEO:
            return {...state}

        case SAVE_VIDEO:
            return
            // return {...state, ...payload, isAuthenticated: true, loading: false}

        case DELETE_VIDEO:
            return
            // return {...state, token: null, isAuthenticated: false, loading: false}

        default:
            return {...state}      
    }
}
