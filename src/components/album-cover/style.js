import styled from "styled-components";
export const AlbumCoverWrapper = styled.div`
  width: 118px;

  display: flex;
  flex-direction: column;
  font-size: 12px;

  .img-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover .icon-play {
      opacity: 1;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .msk {
      position: absolute;
      top: 0;
      left: 0;
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
      z-index: 1;
    }
    .icon-play {
      position: absolute;
      opacity: 0;
      left: 72px;
      bottom: 10px;
      width: 22px;
      height: 22px;
      z-index: 2;

      transition: 0.2s opacity;
    }
  }
  .song-name {
    color: #000;
    padding: 0 9px;
  }
  .singer {
    color: #666;
    padding: 0 9px;
  }
`;
