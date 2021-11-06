import { combineReducers } from "redux"
import todoReducer from './todoReducer'
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
})

export default rootReducer
