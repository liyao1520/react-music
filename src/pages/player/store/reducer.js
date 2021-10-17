import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  currentSong: {},
  currentLyric: [],
  currentLyricIndex: 0,
  playlist: [],
  playMode: undefined,
});
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_CURRENT_LYRIC:
      return state.set("currentLyric", action.currentLyric);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playlist", action.playlist);
    case actionTypes.ChANGE_PLAY_MODE:
      return state.set("playMode", action.mode);
    case actionTypes.UNSHIFT_PLAY_LIST:
      const index = state.get("playlist").findIndex((item) => item.id === action.item.id);
      if (index === -1) {
        return state.set("playlist", [action.item, ...state.get("playlist")]);
      } else {
        return state;
      }
    default:
      return state;
  }
}
export default reducer;
