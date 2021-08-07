import {SET_LOADING, RESET_LOADING } from '../../constants/types'

const initialState = {
    isLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}