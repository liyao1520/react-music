import styled from "styled-components";
export const ArtistWrapper = styled.div`
  display: flex;
  width: 982px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .left {
    padding-top: 30px;
    width: 180px;
    border-right: 1px solid #d3d3d3;
    background-color: #f9f9f9;
    .wrap {
      border-bottom: 1px solid #d3d3d3;
      .title {
        margin-top: 10px;
        color: #333;
        height: 25px;
        padding-left: 14px;
        font-size: 16px;
        font-family: "Microsoft Yahei";
        font-weight: 700;
      }
      .artist-list {
        .artist-item {
          width: 160px;
          height: 29px;
          padding-left: 10px;
          line-height: 29px;
          font-size: 12px;
          margin-bottom: 2px;
          .active {
            border: 1px solid #ccc;
            color: #c20c0c;
            background-color: #fbfbfb;
          }
          a {
            display: inline-block;
            width: 133px;
            height: 25px;
            line-height: 25px;
            padding-left: 15px;
            border-radius: 3px;
          }
        }
      }
    }
  }
  .right {
    width: 799px;
    padding: 40px;
    .title {
      height: 40px;
      border-bottom: 2px solid #c20c0c;
      font-size: 24px;
    }
    .artist-list {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 20%;
        display: flex;
        justify-content: center;
        margin-top: 15px;
        cursor: pointer;
      }
    }
  }
`;
