import { getSizeImage } from "@/utils/format-data";
import React, { memo } from "react";
import { ArticleCoverWrapper } from "./style";
export default memo(function ArtistCover(props) {
  const { info = {} } = props;
  return (
    <ArticleCoverWrapper>
      <div className="img-wrap">
        <img src={getSizeImage(info.img1v1Url, 140)} alt="" />
      </div>
      <div className="name">{info.name}</div>
    </ArticleCoverWrapper>
  );
});
