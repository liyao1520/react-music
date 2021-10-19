import { getSizeImage } from "@/utils/format-data";
import React, { memo } from "react";
import { useHistory } from "react-router";
import { SongsCoverMiniWrapper } from "./style";
export default memo(function SongsCoverMini(props) {
  const { info } = props;

  const history = useHistory();
  function playlistClick(id) {
    history.push("/playlist?id=" + id);
  }
  return (
    <SongsCoverMiniWrapper>
      <div
        className="playlist-left"
        onClick={(e) => {
          playlistClick(info.id);
        }}
      >
        <img src={getSizeImage(info.coverImgUrl, 50)} alt="" />
      </div>
      <div className="playlist-right">
        <div className="name text-nowrap">
          <a
            onClick={(e) => {
              playlistClick(info.id);
            }}
          >
            {info.name}
          </a>
        </div>
        <div className="creator">
          <span>by</span>
          <span className="nickname">{info.creator && info.creator.nickname}</span>
        </div>
      </div>
    </SongsCoverMiniWrapper>
  );
});
