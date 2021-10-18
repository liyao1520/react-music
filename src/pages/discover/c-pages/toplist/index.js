import { changePlaylistAction, getCurrentSongAction } from "@/pages/player/store/actionCreators";
import { getPlayListDetail, getPlayListSongs } from "@/services/playlist";
import { getTopList } from "@/services/toplist";
import { getSizeImage } from "@/utils/format-data";
import { Tag } from "antd";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PlayList from "@/components/play-list";
import { TopListWrapper } from "./style";
export default memo(function TopList(props) {
  const search = new URLSearchParams(props.location.search);
  const id = parseInt(search.get("id"));
  const [playList, setPlaylist] = useState({ creator: {}, tags: [] });
  const [songs, setSongs] = useState([]);
  const history = useHistory();
  const [topList, setTopList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getTopList().then((res) => {
      setTopList(res.list);
    });
  }, []);
  useEffect(() => {
    const paramsId = id ? id : 19723756;
    getPlayListDetail(paramsId).then((res) => {
      setPlaylist(res.playlist);
      const ids = res.playlist.trackIds.map((item) => item.id);
      getPlayListSongs(ids).then((res) => {
        setSongs(res.songs);
      });
    });
  }, [id]);
  function playlistPlay(e) {
    e.preventDefault();
    if (songs.length) {
      dispatch(changePlaylistAction(songs));
      dispatch(getCurrentSongAction(songs[0].id));
    }
  }
  const toplistClick = useCallback(
    (id) => {
      history.replace("/discover/toplist?id=" + id);
    },
    [history]
  );
  return (
    <TopListWrapper>
      <div className="left">
        <h3 className="title">云音乐特色榜</h3>
        <ul className="toplist">
          {topList.slice(0, 4).map((item, index) => {
            return (
              <li
                key={item.id}
                className="item"
                style={{ backgroundColor: (id === item.id || (index === 0 && !id)) && "#e6e6e6" }}
                onClick={(e) => {
                  toplistClick(item.id);
                }}
              >
                <div className="item-left">
                  <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                </div>
                <div className="item-right">
                  <div className="name">{item.name}</div>
                  <div>{item.updateFrequency}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <h3 className="title">全球媒体榜</h3>
        <ul className="toplist">
          {topList.slice(4).map((item) => {
            return (
              <li
                key={item.id}
                className="item"
                onClick={(e) => {
                  toplistClick(item.id);
                }}
                style={{ backgroundColor: id === item.id && "#e6e6e6" }}
              >
                <div className="item-left">
                  <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                </div>
                <div className="item-right">
                  <div className="name">{item.name}</div>
                  <div>{item.updateFrequency}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <div className="top">
          <div className="img-wrap">
            <img src={getSizeImage(playList.coverImgUrl, 180)} alt="" />
          </div>
          <div className="playlist-info">
            <div className="title">
              <i className="sprite_icon2"></i>
              <span>{playList.name}</span>
            </div>
            <div className="info">
              <a>
                <img src={getSizeImage(playList.creator.avatarUrl, 40)} alt="" />
                <span>{playList.creator.nickname}</span>
              </a>
              <span className="time">2019-12-26 创建</span>
            </div>
            <div className="btns">
              <a className="sprite_button play" onClick={playlistPlay}>
                <i className="sprite_button"></i>
                <span>播放</span>
              </a>
              <span className="add-icon sprite_button">+</span>
            </div>
            <div className="tags">
              <span>标签: </span>
              {playList.tags.map((item) => {
                return <Tag key={item}>{item}</Tag>;
              })}
            </div>
            <div>
              <span>介绍: {playList.description}</span>
            </div>
          </div>
        </div>
        <div className="play-list-wrap">
          <PlayList songs={songs} />
        </div>
      </div>
    </TopListWrapper>
  );
});
