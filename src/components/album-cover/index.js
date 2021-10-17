import React, { memo } from "react";
import { getSizeImage } from "@/utils/format-data";

import { AlbumCoverWrapper } from "./style";
export default memo(function AlbumCover(props) {
  const { info } = props;
  return (
    <AlbumCoverWrapper>
      <a href="todo" className="img-wrap">
        <img src={getSizeImage(info.picUrl, 100)} alt="" />
        <div className="msk sprite_covor"></div>
        <div className="icon-play icon_play"></div>
      </a>
      <a href="todo" className="song-name text-nowrap">
        {info.name}
      </a>
      <a href="todo" className="singer text-nowrap">
        {info.artist.name}
      </a>
    </AlbumCoverWrapper>
  );
});
