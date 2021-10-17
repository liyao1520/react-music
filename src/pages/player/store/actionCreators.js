import * as actionTypes from "./constants";

import { getSongDetail } from "@/services/player";
import { getLyric } from "@/services/song";
import { parseLyric } from "@/utils/parse-lyric";

import store from "@/store";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong,
});
const changeCurrentLyricAction = (currentLyric) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC,
  currentLyric: currentLyric,
});
export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index: index,
});
export const changePlaylistAction = (playlist) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playlist: playlist,
});
export const unshitPlaylistAction = (item) => ({
  type: actionTypes.UNSHIFT_PLAY_LIST,
  item: item,
});
export const changePlayModeAction = (mode) => ({
  type: actionTypes.ChANGE_PLAY_MODE,
  mode: mode,
});
export const autoSwitchCurrentSongAction = () => {
  const currentId = store.getState().getIn(["player", "currentSong"]).id;
  const playlist = store.getState().getIn(["player", "playlist"]);
  const crruentIndex = playlist.findIndex((item) => item.id === currentId);
  const playMode = store.getState().getIn(["player", "playMode"]);
  return (dispatch) => {
    if (playMode === actionTypes.PLAY_MODE.LOOP) {
      dispatch(getCurrentSongAction(currentId));
    } else if (playMode === actionTypes.PLAY_MODE.ORDER) {
      //如果是最后一个歌曲
      if (crruentIndex + 1 === playlist.length) {
        const firstSong = playlist[0];
        dispatch(getCurrentSongAction(firstSong.id));
      } else {
        const nextSong = playlist[crruentIndex + 1];
        dispatch(getCurrentSongAction(nextSong.id));
      }
    } else if (playMode === actionTypes.PLAY_MODE.RANDOM) {
      //随机数
      const randomIndex = Math.floor(Math.random() * playlist.length);
      const randomSong = playlist[randomIndex];
      dispatch(getCurrentSongAction(randomSong.id));
    } else {
      dispatch(getCurrentSongAction(currentId));
    }
  };
};
export const switchCurrentSongPrevAction = () => {
  const currentId = store.getState().getIn(["player", "currentSong"]).id;
  const playlist = store.getState().getIn(["player", "playlist"]);
  const crruentIndex = playlist.findIndex((item) => item.id === currentId);
  return (dispatch) => {
    if (crruentIndex === 0) {
      dispatch(getCurrentSongAction(currentId));
    } else {
      const prevId = playlist[crruentIndex - 1].id;
      dispatch(getCurrentSongAction(prevId));
    }
  };
};
export const switchCurrentSongNextAction = () => {
  const currentId = store.getState().getIn(["player", "currentSong"]).id;
  const playlist = store.getState().getIn(["player", "playlist"]);
  const crruentIndex = playlist.findIndex((item) => item.id === currentId);
  console.log(crruentIndex);
  return (dispatch) => {
    if (crruentIndex + 1 === playlist.length) {
      const firstId = playlist[0].id;
      dispatch(getCurrentSongAction(firstId));
    } else {
      const nextId = playlist[crruentIndex + 1].id;
      dispatch(getCurrentSongAction(nextId));
    }
  };
};
/**
 *
 * redux-thunk
 */
export const getCurrentSongAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]));
      dispatch(unshitPlaylistAction(res.songs[0]));
    });
    getLyric(ids).then((res) => {
      const lyricList = parseLyric(res.lrc.lyric);
      dispatch(changeCurrentLyricAction(lyricList));
    });
  };
};
