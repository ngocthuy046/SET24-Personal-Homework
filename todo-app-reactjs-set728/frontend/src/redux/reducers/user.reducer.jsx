import { userConstants } from "../constants";
const initialState = {
    user: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                user: action.user
            }
        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                user: action.user
            }
        case userConstants.LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}