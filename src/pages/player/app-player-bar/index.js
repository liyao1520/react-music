import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { Slider, message, Popover } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppPlayerBarWrapper } from "./style";

import { formatDate, getPlayUrl, getSizeImage } from "@/utils/format-data";
import { useLocalStorage } from "@/hooks";
import { NavLink } from "react-router-dom";
import {
  autoSwitchCurrentSongAction,
  changeCurrentLyricIndexAction,
  changePlayModeAction,
} from "../store/actionCreators";
import PlaylistPopover from "./cpn/playlistPopover";

import { PLAY_MODE } from "../store/constants";

export default memo(function AppPlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hide, setHide] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  //是否锁住播放栏
  const [isLock, setLock] = useLocalStorage("lock");
  if (isLock === undefined) {
    setLock(false);
  }
  const { currentSong, currentLyric, currentLyricIndex, playlist } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentLyric: state.getIn(["player", "currentLyric"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      playlist: state.getIn(["player", "playlist"]),
    }),
    shallowEqual
  );
  //audio组件
  const audioRef = useRef();

  const timer = useRef();
  const playShowTimer = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = getPlayUrl(currentSong.id);
      const callback = () => {
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentTime(0);
        //设置播放栏
        setHide(false);
        if (!isLock) {
          playShowTimer.current = setTimeout(() => {
            setHide(true);
          }, 5000);
        }
        audioRef.current.removeEventListener("canplay", callback);
      };
      audioRef.current.addEventListener("canplay", callback);
    }
  }, [currentSong]); // eslint-disable-line react-hooks/exhaustive-deps

  const mouseEnterHandle = useCallback(() => {
    if (playShowTimer.current) {
      clearTimeout(playShowTimer.current);
    }
    setHide(false);
  }, []);

  const mouseLeaveHanble = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setHide(true);
    }, 5000);
  }, []);
  const siliderChangehandle = useCallback(
    (val) => {
      console.log(currentTime);
      audioRef.current.currentTime = val / 1000;
    },
    [currentTime]
  );
  const tipFormatter = useCallback((val) => {
    return formatDate(val, "mm:ss");
  }, []);
  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const timeupdateHandle = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    const index = currentLyric.findIndex((item) => {
      return currentTime < item.time / 1000;
    });
    const _currentLyricIndex = index - 1;

    if (currentLyricIndex !== _currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(_currentLyricIndex));
      if (currentLyric[_currentLyricIndex]) {
        message.open({
          content: currentLyric[_currentLyricIndex].content,
          duration: 0,
          key: "lyric",
          className: "lyric-content",
        });
      }
    }
    setCurrentTime(currentTime * 1000);
  }, [dispatch, currentLyric, currentLyricIndex]);
  const hanbleAudioEnded = useCallback(
    (e) => {
      dispatch(autoSwitchCurrentSongAction());
    },
    [dispatch]
  );
  // volSliderStyle
  const volSliderStyle = {
    height: "100px",
  };
  //控制声音大小
  const volChange = useCallback((val) => {
    audioRef.current.volume = val / 100;
  }, []);

  //是否显示playlsitPopover
  const [playlsitPopoverShow, setPlaylsitPopoverShow] = useState(true);

  //播放模式
  const [playMode, SetPlayMode] = useLocalStorage("play_mode");
  useEffect(() => {
    dispatch(changePlayModeAction(playMode));
  }, [playMode, dispatch]);
  if (playMode === undefined) {
    SetPlayMode(PLAY_MODE.ORDER);
  }
  const playModeToIcon = {
    [PLAY_MODE.LOOP]: "icn-loop",
    [PLAY_MODE.ORDER]: "icn-order",
    [PLAY_MODE.RANDOM]: "icn-random",
  };
  const playmodeInfo = {
    [PLAY_MODE.LOOP]: "单曲循环",
    [PLAY_MODE.ORDER]: "顺序播放",
    [PLAY_MODE.RANDOM]: "随机播放",
  };
  function switchPlayMode(event) {
    event.preventDefault();
    switch (playMode) {
      case PLAY_MODE.LOOP:
        // dispatch(changePlayModeAction(PLAY_MODE.ORDER));
        SetPlayMode(PLAY_MODE.ORDER);
        return;
      case PLAY_MODE.ORDER:
        // dispatch(changePlayModeAction(PLAY_MODE.RANDOM));
        SetPlayMode(PLAY_MODE.RANDOM);
        return;
      case PLAY_MODE.RANDOM:
        // dispatch(changePlayModeAction(PLAY_MODE.LOOP));
        SetPlayMode(PLAY_MODE.LOOP);
        return;
      default:
        return "";
    }
  }
  return (
    Object.keys(currentSong).length && (
      <AppPlayerBarWrapper
        style={{ bottom: hide ? "-44px" : "0px" }}
        className="sprite_player"
        onMouseEnter={isLock ? () => {} : mouseEnterHandle}
        onMouseLeave={isLock ? () => {} : mouseLeaveHanble}
      >
        <div className="wrap-v2">
          <div className="btns">
            <div href="" className="sprite_player prev">
              上一个
            </div>
            <div
              href=""
              className={["sprite_player", isPlaying ? "paused" : "play"].join(" ")}
              onClick={isPlaying ? pauseMusic : playMusic}
            >
              播放
            </div>
            <div href="" className="sprite_player next">
              下一个
            </div>
          </div>
          <div className="avatar">
            <NavLink to={"/song?id=" + currentSong.id}>
              <img src={getSizeImage(currentSong.al.picUrl, 50)} alt="" />
            </NavLink>
          </div>
          <div className="play">
            <div className="info">
              <NavLink to={"/song?id=" + currentSong.id} className="song-name text-nowrap">
                {currentSong.name}
              </NavLink>

              {currentSong.ar.map((item, index) => {
                return (
                  <a href="todo" className="singer" key={index}>
                    {(index === 0 ? " " : " / ") + item.name}
                  </a>
                );
              })}
            </div>
            <div className="slider">
              <Slider
                onChange={siliderChangehandle}
                tipFormatter={tipFormatter}
                max={currentSong.dt}
                min={0}
                value={currentTime}
              />
              <div className="time">
                <span>{formatDate(currentTime, "mm:ss")}</span>
                <span> / </span>
                <span>{formatDate(currentSong.dt, "mm:ss")}</span>
              </div>
            </div>
          </div>
          <div className="control">
            <Popover
              overlayClassName="vol-popover"
              content={
                <div style={volSliderStyle}>
                  <Slider vertical defaultValue={100} onChange={volChange}></Slider>
                </div>
              }
              trigger="click"
            >
              <a href="todo" className="sprite_player icn-vol">
                声音
              </a>
            </Popover>

            <Popover content={playmodeInfo[playMode]} trigger="hover">
              <a
                href="todo"
                onClick={(e) => {
                  switchPlayMode(e);
                }}
                className={["sprite_player", playModeToIcon[playMode]].join(" ")}
              >
                播放模式
              </a>
            </Popover>
            <Popover overlayClassName="Playlist-popover" content={<PlaylistPopover />} trigger="click">
              <a
                href="todo"
                className=" sprite_player icn-list"
                onClick={(e) => {
                  setPlaylsitPopoverShow(!playlsitPopoverShow);
                }}
              >
                {playlist ? playlist.length : 0}
              </a>
            </Popover>
          </div>

          <div className="lock_wrap sprite_player">
            <span
              className={["lock", "sprite_player", isLock ? "close" : "open"].join(" ")}
              onClick={(e) => {
                setLock(!isLock);
              }}
            ></span>
          </div>
        </div>
        <audio id="audio" src="" ref={audioRef} onTimeUpdate={timeupdateHandle} onEnded={hanbleAudioEnded}></audio>
        {playlsitPopoverShow && <div className="playlsitPopoverWrapper"></div>}
      </AppPlayerBarWrapper>
    )
  );
});
