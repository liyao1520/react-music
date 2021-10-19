import styled from "styled-components";
export const PlayListWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #ccc;
  background-color: #fff;
  .left {
    width: 709px;
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
  .right {
    width: 270px;
    border-left: 1px solid #ccc;
    padding: 20px 40px 40px 30px;
    .related-playList {
      height: 23px;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      color: #333;
      font-weight: 700;
    }
  }
  .description {
    max-height: 100px;
    overflow-y: auto;
    padding-right: 4px;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
  }
`;
