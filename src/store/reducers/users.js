import { combineReducers } from "redux"
import { ActionTypeUser } from "../constants/actions-types/user"
import { dataMock } from "../../data/dataMock"

const initialState = dataMock

const userGetReducer = (state = initialState.get, action) => {
    switch (action.type) {
        case ActionTypeUser.get.GET_ALL:
            return state
        case ActionTypeUser.get.GET_ONE:
            return state
        case ActionTypeUser.get.POST:
            return state
        case ActionTypeUser.get.PUT:
            return state
        case ActionTypeUser.get.PATCH:
            return state
        case ActionTypeUser.get.DELETE:
            return state
        default:
            return state
    }
}

export default combineReducers({
    get: userGetReducer
})