import {HIDE_ALERT, SHOW_ALERT} from "../type";

export const AlertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return action.payload
        case HIDE_ALERT:
            return null
        default:
            return state
    }
}