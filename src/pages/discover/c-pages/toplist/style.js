import styled from "styled-components";
export const TopListWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-top: 0;
  border-bottom: 0;
  background-color: #fff;
  display: flex;
  .left {
    width: 240px;
    border-right: 1px solid #ccc;
    padding-top: 30px;
    .title {
      padding: 0 10px 12px 15px;
      font-size: 14px;
      color: #000;
      font-weight: 700;
      font-family: simsun;
    }
    .toplist {
      .item {
        display: flex;
        padding: 10px 0 10px 20px;
        cursor: pointer;
        align-items: center;
        &:hover {
          background: #e6e6e6;
        }
        .item-left {
          margin-right: 10px;
        }
        .item-right {
          color: #999;
          .name {
            color: #333;
          }
        }
      }
    }
  }

  .right {
    width: 740px;
    .play-list-wrap {
      margin-top: 40px;
    }
    .top {
      display: flex;
    }
    padding: 47px 30px 40px 39px;
    .img-wrap {
      width: 190px;
      height: 190px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .playlist-info {
      flex: 1;
      margin-left: 20px;

      .title {
        font-size: 20px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        i {
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -243px;
          margin-right: 10px;
        }
      }
      .info {
        display: flex;
        align-items: center;
        a {
          margin-right: 15px;
          color: #0c73c2;
        }
        img {
          width: 35px;
          height: 35px;
          margin-right: 10px;
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
      .btns {
        margin: 20px 0;
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
      .tags {
      }
    }
  }
`;
