import React, { memo } from "react";
import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/format-data";
import { useHistory } from "react-router-dom";
export default memo(function SongsCover(props) {
  const { info } = props;

  const history = useHistory();
  function songClick() {
    if (info.id) {
      history.push("/playlist?id=" + info.id);
    }
  }
  return (
    <SongsCoverWrapper
      onClick={(e) => {
        songClick();
      }}
    >
      <div className="img-wrap">
        <img src={getSizeImage(info.picUrl ? info.picUrl : info.coverImgUrl, 140)} alt="" />
        <div className="bottom">
          <div className="b-left">
            <div className="icon-music sprite_icon"></div>
            <div className="count">{getCount(info.playCount)}</div>
          </div>
          <div className="icon-play sprite_icon"></div>
        </div>
      </div>
      <div className="title text-nowrap">{info.name}</div>
      <div className="singer text-nowrap">{info.creator && info.creator.nickname}</div>
    </SongsCoverWrapper>
  );
});
