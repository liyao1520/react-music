import { formatDate } from "@/utils/format-data";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCurrentSongAction } from "../../store/actionCreators";
import { PlaylsitPopoverWrapper } from "./style";

export default memo(function PlaylsitPopover(props) {
  const { playlist, currentSong } = useSelector(
    (state) => ({
      playlist: state.getIn(["player", "playlist"]),
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  function playMusic(id) {
    dispatch(getCurrentSongAction(id));
  }
  return (
    <PlaylsitPopoverWrapper>
      <div className="header">
        <div className="title">播放列表({playlist.length})</div>
      </div>
      <ul>
        {playlist.map((item) => {
          return (
            <li key={item.id} className="item">
              {currentSong.id === item.id ? (
                <span className="iconfont play">&#xe87c;</span>
              ) : (
                <span style={{ width: "17px" }}></span>
              )}

              <span className="song-name" onClick={(e) => playMusic(item.id)}>
                {item.name}
              </span>
              <span className="singer">
                {item.ar &&
                  item.ar.map((item, index) => {
                    return <span key={item.name}>{index === 0 ? item.name : "/" + item.name}</span>;
                  })}
              </span>
              <span className="time">{formatDate(item.dt, "mm:ss")} </span>
            </li>
          );
        })}
      </ul>
    </PlaylsitPopoverWrapper>
  );
});
