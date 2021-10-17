import { combineReducers } from "redux-immutable";
import { reducer as recommendReduce } from "@/pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "@/pages/player/store";

const reducers = combineReducers({
  recommend: recommendReduce,
  player: playerReducer,
});

export default reducers;
