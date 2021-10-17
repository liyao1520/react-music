import styled from "styled-components";
import progressBar from "@/assets/img/progress_bar.png";
import icon from "@/assets/img/sprite_icon.png";
export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  z-index: 99;
  background-position: 0 0;
  background-repeat: repeat-x;
  transition: 0.2s;
  #audio {
    display: none;
  }
  .wrap-v2 {
    height: 100%;
    display: flex;
    justify-content: center;
    .btns {
      width: 137px;
      padding: 6px 0 0 0;
      display: flex;
      align-items: center;
      .prev {
        background-position: 0 -130px;
        width: 28px;
        height: 28px;
        &:hover {
          background-position: -30px -130px;
        }
      }
      .paused {
        background-position: 0 -165px;
        width: 36px;
        height: 36px;
        &:hover {
          background-position: -40px -165px;
        }
      }
      .play {
        width: 36px;
        height: 36px;
        background-position: 0 -204px;
        &:hover {
          background-position: -40px -204px;
        }
      }
      .next {
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
        &:hover {
          background-position: -110px -130px;
        }
      }
      .sprite_player {
        display: inline-block;
        text-indent: -9999px;
        margin-right: 8px;
        cursor: pointer;
      }
    }
    .avatar {
      width: 35px;
      margin: 6px 15px 0 0;
      display: flex;
      align-items: center;
      img {
        width: 34px;
        height: 34px;
      }
    }
    .play {
      width: 581px;
      display: flex;
      flex-direction: column;
      .info {
        display: flex;
        margin-top: 10px;
        font-size: 13px;
        .song-name {
          max-width: 300px;
          color: #e8e8e8;
          margin-right: 10px;
        }
        .singer {
          color: #9b9b9b;
        }
      }
      .slider {
        display: flex;
        .time {
          color: #fff;
          margin-left: 10px;
        }
        .ant-slider {
          position: relative;
          width: 466px;
          top: -10px;
          .ant-slider-rail {
            height: 9px;
            background-position: right 0;
            background: url(${progressBar}) no-repeat;
            z-index: -1;
          }
          .ant-slider-track {
            height: 9px;
            background: url(${progressBar}) right 0;
            background-position: left -66px;
          }
          .ant-slider-handle {
            background-position: 0 -280px;
            width: 22px;
            height: 24px;
            background: url(${icon}) no-repeat;
            background-position: 0 -250px;
            border: 0;
            margin-top: -8px;
            &:hover {
              background-position: 0 -280px;
            }
          }
        }
      }
    }
    .oper {
      width: 87px;
    }
    .control {
      width: 153px;
      padding-left: 13px;
      display: flex;
      align-items: center;
      .icn-list {
        width: 61px;
        padding-left: 29px;
        background-position: -42px -68px;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        text-indent: 0;
        line-height: 27px;
      }
      .icn-vol {
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .icn-order {
        background-position: -3px -344px;
        &:hover {
          background-position: -33px -344px;
        }
      }
      .icn-loop {
        background-position: -66px -344px;
        &:hover {
          background-position: -93px -344px;
        }
      }
      .icn-random {
        background-position: -66px -248px;
        &:hover {
          background-position: -93px -248px;
        }
      }
      a {
        text-indent: -9999px;
        width: 25px;
        height: 25px;
        margin: 11px 5px 0 0;
        text-decoration: none;
      }
    }
    .lock_wrap {
      position: absolute;
      width: 52px;
      height: 67px;
      top: -14px;
      right: 15px;
      background-position: 0 -380px;
      .lock {
        display: block;
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
        cursor: pointer;
      }
      .close {
        background-position: -100px -380px;
        &:hover {
          background-position: -100px -400px;
        }
      }
      .open {
        background-position: -80px -380px;
        &:hover {
          background-position: -80px -400px;
        }
      }
    }
  }
  .playlsitPopoverWrapper {
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: #000;
  }
`;
