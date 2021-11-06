import { combineReducers } from "redux"
import noteReducer from './noteReducer'
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  note: noteReducer,
  user: userReducer,
})

export default rootReducer
