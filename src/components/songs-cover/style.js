import styled from "styled-components";
export const SongsCoverWrapper = styled.div`
  width: 140px;
  height: 204px;
  cursor: pointer;

  .img-wrap {
    position: relative;
    width: 100%;
    height: 140px;
    .bottom {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.7);
      cursor: auto;
      line-height: 27px;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 27px;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 0 10px;
      color: #ccc;
      .b-left {
        display: flex;
        align-items: center;
        .icon-music {
          background-position: 0 -24px;
          width: 14px;
          height: 11px;
          margin-right: 8px;
        }
      }

      .icon-play {
        background-position: 0 -60px;
        width: 16px;
        height: 17px;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    margin: 8px 0 3px;
    font-size: 14px;
  }
`;
