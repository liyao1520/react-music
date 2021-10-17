import styled from "styled-components";
export const TopRankingWrapper = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    padding: 20px;
    .img-wrap {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      margin-left: 10px;
      padding-top: 10px;
      h3 {
        font-size: 14px;
        font-weight: 700;
        color: #333;
        margin-bottom: 10px;
      }
      .btn {
        a {
          display: inline-block;
          text-indent: -99999px;
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
        .play {
          background-position: -267px -205px;
        }
        .collect {
          background-position: -300px -205px;
        }
      }
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      height: 32px;
      align-items: center;
      padding-left: 10px;
      .name {
        color: #000;
        width: 170px;
      }
      .index {
        font-size: 16px;
        width: 35px;
        text-align: center;
      }
      &:hover .btn {
        opacity: 1;
      }
      .btn {
        opacity: 0;
        display: flex;
        transition: 0.2s;
        a {
          display: inline-block;
          text-indent: -9999px;
          width: 17px;
          height: 17px;
          margin-right: 10px;
        }
        .collect {
          background-position: -297px -268px;
        }
        .add {
          background-position: 0 -700px;
          margin: 2px 6px 0 0;
        }
        .play {
          background-position: -267px -268px;
        }
      }
    }
  }
  .footer {
    text-align: right;
    height: 32px;
    line-height: 32px;
    margin-right: 20px;
  }
`;
