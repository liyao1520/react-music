import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { getSizeImage } from "@/utils/format-data";
import { TopRankingWrapper } from "./style";
import { NavLink } from "react-router-dom";
import { changePlaylistAction, getCurrentSongAction } from "@/pages/player/store/actionCreators";
import { getPlayListSongs } from "@/services/playlist";
export default memo(function TopRanking(props) {
  const { info } = props;
  const { tracks = [] } = info;
  const dispatch = useDispatch();
  function playMusic(id) {
    dispatch(getCurrentSongAction(id));
  }
  function playPlayList(e) {
    e.preventDefault();
    getPlayListSongs(info.trackIds.map((item) => item.id)).then((res) => {
      const songs = res.songs;
      dispatch(changePlaylistAction(songs));
      dispatch(getCurrentSongAction(songs[0].id));
    });
    dispatch(changePlaylistAction());
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="img-wrap">
          <img src={getSizeImage(info.coverImgUrl, 100)} alt="" />
        </div>
        <div className="name">
          <NavLink to={"/discover/toplist?id=" + info.id}>
            <h3>{info.name}</h3>
          </NavLink>

          <div className="btn">
            <a className="sprite_02 play" onClick={playPlayList}>
              播放
            </a>
            <a className="sprite_02 collect">收藏</a>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="item">
              <div className="index">{index + 1}</div>
              <div className="name text-nowrap">
                <NavLink to={"/song?id=" + item.id}>{item.name}</NavLink>
              </div>
              <div className="btn">
                <a
                  className="sprite_02 play"
                  onClick={(e) => {
                    playMusic(item.id);
                  }}
                >
                  播放
                </a>
                <a className="sprite_icon2 add">添加到播放列表</a>
                <a className="sprite_02 collect">收藏</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <NavLink to={"/discover/toplist?id=" + info.id}>查看全部 &gt;</NavLink>
      </div>
    </TopRankingWrapper>
  );
});
