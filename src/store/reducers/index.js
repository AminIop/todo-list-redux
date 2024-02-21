import { combineReducers } from "redux"
import StoreTypes from "../constants/store-types"
import userReducer from "./users"


const rootReducer = combineReducers(
    {
        [StoreTypes.USER]: userReducer
    }
)
export default rootReducer