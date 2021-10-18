import React, { memo } from "react";
import { getSizeImage } from "@/utils/format-data";

import { AlbumCoverWrapper } from "./style";
export default memo(function AlbumCover(props) {
  const { info } = props;
  return (
    <AlbumCoverWrapper>
      <a  className="img-wrap">
        <img src={getSizeImage(info.picUrl, 100)} alt="" />
        <div className="msk sprite_covor"></div>
        <div className="icon-play icon_play"></div>
      </a>
      <a  className="song-name text-nowrap">
        {info.name}
      </a>
      <a  className="singer text-nowrap">
        {info.artist.name}
      </a>
    </AlbumCoverWrapper>
  );
});
