import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk';
import initState from "./state";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))


export default store

