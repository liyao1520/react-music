import styled from "styled-components";

export const PlaylsitPopoverWrapper = styled.div`
  width: 553px;
  height: 300px;
  background-color: #282725;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  .header {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #1e1e1e;
    padding: 0 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #282725;
    .title {
      font-size: 14px;
      color: #ffffff;
      font-weight: 700;
    }
  }
  ul {
    height: 260px;
    overflow-y: auto;
    /* 定义滚动条样式 */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: rgba(0, 0, 0, 0.5);
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
      border-radius: 10px;
      background-color: rgba(240, 240, 240, 0.3);
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .item {
    display: flex;
    padding: 0 20px;
    height: 28px;
    line-height: 28px;
    color: #ccc;
    font-size: 12px;
    &:hover {
      color: #fff;
      background-color: #1b1b19;
    }
    .play {
      color: red;
      margin-right: 5px;
      font-size: 12px;
    }
    .song-name {
      width: 240px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .singer {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      a {
        color: #ccc;
      }
    }
    .time {
      width: 50px;
    }
  }
`;
