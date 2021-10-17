import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhance = composeEnhancers(applyMiddleware(thunk));
const state = createStore(reducer, enhance);

export default state;
