import React, { memo } from "react";
import { DownloadWrapper } from "./style";
export default memo(function Download() {
  return (
    <DownloadWrapper>
      <div className="header">网易云音乐多端下载</div>
      <div className="content download_sprite">同步歌单，随时畅听320k好音乐</div>
    </DownloadWrapper>
  );
});
