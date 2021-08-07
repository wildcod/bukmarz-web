import { GET_ERRORS } from '../../constants/types'

const initialState = {
    msg: '',
    status: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload,
                status: action.payload.status
            }
        default:
            return state
    }
}

export  const createError = (err) => {
    return {type: GET_ERRORS, payload: err}
}