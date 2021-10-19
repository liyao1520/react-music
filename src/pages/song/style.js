import styled from "styled-components";
import sprite_cover from "@/assets/img/sprite_cover.png";
export const SongWrapper = styled.div`
  display: flex;
  width: 980px;
  border: 1px solid #ccc;
  border-bottom: 0;
  border-top: 0;
  margin: 0 auto;
  .music-info {
    display: flex;
  }
  .left {
    width: 709px;
    padding: 47px 30px 40px 39px;

    .cover {
      width: 206px;

      .img-wrap {
        position: relative;
        width: 206px;
        height: 205px;
        background: url(${sprite_cover}) no-repeat -140px -580px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          position: absolute;
          z-index: -1;
          width: 130px;
          height: 130px;
        }
      }
    }
    .music-content {
      margin-left: 25px;
      .header {
        padding-left: 40px;
        margin-bottom: 15px;
        .music-name {
          font-size: 24px;
          color: #333;
        }
        .music-desc {
          color: #bababa;
          font-size: 14px;
        }
      }
      .singer,
      .album {
        margin: 10px 0;
        color: #999;
        span {
          margin-right: 4px;
        }
        a {
          color: #0c73c2;
        }
      }
      .btns {
        margin-bottom: 20px;
        display: flex;
        .play {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background-position: 0 -387px;
          text-align: center;
          width: 61px;
          height: 31px;
          color: #fff;
          i {
            display: inline-block;
            width: 20px;
            height: 18px;
            margin: -2px 2px 0;
            background-position: 0 -1622px;
          }
        }
        .add-icon {
          display: inline-block;
          width: 31px;
          height: 31px;
          margin-left: -3px;
          padding-right: 0;
          background-position: 0 -1588px;
          text-indent: -9999px;
        }
        .item {
          display: inline-block;
          height: 31px;
          margin-right: 6px;
          padding-right: 5px;
          background-position: right -1020px;
          display: flex;
          align-items: center;
        }
        .comment-icon {
          background-position: 0 -1465px;
        }
      }
      .lyric-content {
        .open {
          cursor: pointer;
          color: #0c73c2;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .right {
    padding: 20px 40px 40px 30px;
    width: 270px;
    border-left: 1px solid #ccc;
    .related-playList {
      height: 23px;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      color: #333;
      font-weight: 700;
    }
  }
`;
