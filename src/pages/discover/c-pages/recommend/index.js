import React, { memo } from "react";

import { ContentWrapper } from "./style";

import TopBanner from "./c-cpns/top-banner";
import HotRecomment from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import TopList from "./c-cpns/top-list";
import Download from "@/components/download";
export default memo(function Recommend() {
  return (
    <div>
      <TopBanner />
      <ContentWrapper className="wrap-v2">
        <div className="left">
          <HotRecomment />
          <NewAlbum />
          <TopList />
        </div>
        <div className="right">
          <Download />
        </div>
      </ContentWrapper>
    </div>
  );
});
