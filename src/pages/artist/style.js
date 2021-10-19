import styled from "styled-components";
export const ArtistWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  .left {
    width: 709px;
    padding: 47px 30px 40px 39px;
    .jianjie {
      color: #333;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 10px;
      padding-left: 5px;
      border-left: 4px solid #c10d0c;
    }
    .content {
      text-indent: 2em;
      color: #666;
      font-size: 12px;
    }
    .singer {
      height: 34px;
      line-height: 24px;
      font-weight: normal;
      font-size: 24px;
      color: #333;
      font-size: 24px;
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
    .cover {
      width: 640px;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    padding: 20px 40px 40px 30px;
    border-left: 1px solid #ccc;
    .related-singer {
      height: 23px;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      color: #333;
      font-weight: 700;
    }
  }
`;
