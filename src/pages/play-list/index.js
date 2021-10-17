import React, { memo, useEffect, useState } from "react";
import RecommendNavBar from "@/components/recommend-navbar";
import { getPlayListDetail, getPlayListSongs } from "@/services/playlist";
import { PlayListWrapper } from "./style";
import { Tag } from "antd";

import { getSizeImage } from "@/utils/format-data";
import PlayList from "@/components/play-list";
import { useDispatch } from "react-redux";
import { changePlaylistAction, getCurrentSongAction } from "../player/store/actionCreators";
export default memo(function PlayListPage(props) {
  const search = new URLSearchParams(props.location.search);
  const id = search.get("id");
  const [playList, setPlaylist] = useState({ creator: {}, tags: [] });
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getPlayListDetail(id).then((res) => {
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
  return (
    <div>
      <RecommendNavBar />
      <PlayListWrapper>
        <div className="left">
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
                <a href="">
                  <img src={getSizeImage(playList.creator.avatarUrl, 40)} alt="" />
                  <span>{playList.creator.nickname}</span>
                </a>
                <span className="time">2019-12-26 创建</span>
              </div>
              <div className="btns">
                <a href="" className="sprite_button play" onClick={playlistPlay}>
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
          <div>
            <PlayList songs={songs} />
          </div>
        </div>
        <div className="right"></div>
      </PlayListWrapper>
    </div>
  );
});
