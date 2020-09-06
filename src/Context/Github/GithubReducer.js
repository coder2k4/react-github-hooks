import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../type";

export const GithubReducer = (state, action) => {
    switch (action.type) {

        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_REPOS:
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        case GET_USER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case SEARCH_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }


        default:
            return state
    }
}