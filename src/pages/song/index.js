import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import RecommendNavBar from "@/components/recommend-navbar";
import { SongWrapper } from "./style";
import { getSongDetail } from "@/services/player";
import { getLyric } from "@/services/song";
import { getSizeImage } from "@/utils/format-data";
import { parseLyric } from "@/utils/parse-lyric";
import { getCurrentSongAction } from "../player/store/actionCreators";
import Download from "@/components/download";
import { getSimiPlayList } from "@/services/playlist";
import SongsCoverMini from "@/components/songs-cover-mini";
import { NavLink } from "react-router-dom";

export default memo(function Song(props) {
  const search = new URLSearchParams(props.location.search);
  const id = search.get("id");
  const [musicInfo, setMusicInfo] = useState({});
  const [lyricList, setlyricList] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isopen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function playMusic(event) {
    event.preventDefault();
    dispatch(getCurrentSongAction(id));
  }
  useEffect(() => {
    getSongDetail(id).then((res) => {
      if (!res.songs[0]) {
        alert("对不起您访问的网址有问题!");
        props.history.replace("/");
      } else {
        setMusicInfo(res.songs[0]);
      }
    });
    getLyric(id).then((res) => {
      if (res.nolyric || !res.lrc) {
        setlyricList([]);
        return;
      }
      const lyricList = parseLyric(res.lrc.lyric);
      setlyricList(lyricList);
    });
    getSimiPlayList(id).then((res) => {
      setPlaylists(res.playlists);
    });
  }, [id, props.history]);
  return (
    Object.keys(musicInfo).length && (
      <div>
        <RecommendNavBar />
        <SongWrapper>
          <div className="left">
            <div className="music-info">
              <div className="cover">
                <div className="img-wrap">
                  <img src={getSizeImage(musicInfo.al.picUrl, 130)} alt="" />
                </div>
              </div>
              <div className="music-content">
                <div className="header">
                  <div className="music-name">{musicInfo.name}</div>
                  <div className="music-desc">{musicInfo.alia[0]}</div>
                </div>
                <div className="singer">
                  <span>歌手:</span>
                  <NavLink to={"/artist?id=" + musicInfo.ar[0].id}>{musicInfo.ar[0].name}</NavLink>
                </div>
                <div className="album">
                  <span>所属专辑:</span>
                  <a>{musicInfo.al.name}</a>
                </div>
                <div className="btns">
                  <a className="sprite_button play" onClick={playMusic}>
                    <i className="sprite_button"></i>
                    <span>播放</span>
                  </a>
                  <span className="add-icon sprite_button">+</span>
                </div>
                <div className="lyric-content">
                  {lyricList.length ? (
                    <ul>
                      {lyricList.slice(0, 15).map((item) => {
                        return <li key={item.time}>{item.content}</li>;
                      })}
                      {isopen &&
                        lyricList.slice(15).map((item) => {
                          return <li key={item.time}>{item.content}</li>;
                        })}
                      <i>
                        <span className="open" onClick={(e) => setIsOpen(!isopen)}>
                          {isopen ? "收起" : "展开"}
                        </span>
                        <span>{isopen ? "👆" : "👇"}</span>
                      </i>
                    </ul>
                  ) : (
                    <p>~无歌词~</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="related-playList">包含这首歌的歌单</div>
            {playlists.map((item) => {
              return <SongsCoverMini info={item} key={item.id} />;
            })}
            <Download />
          </div>
        </SongWrapper>
      </div>
    )
  );
});
