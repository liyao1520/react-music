import PlayList from "@/components/play-list";
import { getArtistDetail } from "@/services/article";
import { Tabs } from "antd";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { changePlaylistAction, getCurrentSongAction } from "../player/store/actionCreators";
import { ArtistWrapper } from "./style";
const { TabPane } = Tabs;
export default memo(function Actist(props) {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const id = search.get("id");
  const [artist, setArtist] = useState({});
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getArtistDetail(id).then((res) => {
      setArtist(res.artist);
      setSongs(res.hotSongs);
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
    <ArtistWrapper>
      <div className="left">
        <div className="singer">{artist.name}</div>
        <div className="cover">
          <img src={artist.picUrl + "?param=640y300"} alt="" />
        </div>
        <div className="btns">
          <a href="" className="sprite_button play" onClick={playlistPlay}>
            <i className="sprite_button"></i>
            <span>播放</span>
          </a>
          <span className="add-icon sprite_button">+</span>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="热门歌曲" key="1">
            <div className="playlist">
              <PlayList songs={songs} />
            </div>
          </TabPane>
          <TabPane tab="艺人介绍" key="2">
            <div>
              <p className="jianjie">{artist.name + "的简介"}</p>
              <p className="content">{artist.briefDesc}</p>
            </div>
          </TabPane>
        </Tabs>
      </div>
      <div className="right">123</div>
    </ArtistWrapper>
  );
});
