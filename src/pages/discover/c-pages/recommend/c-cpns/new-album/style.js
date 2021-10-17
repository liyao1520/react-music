import styled from "styled-components";
export const NewAlbumWrapper = styled.div`
  .album-carousel-wrap {
    position: relative;
    height: 184px;
    padding: 0 16px;
    background: #f5f5f5;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .page {
      display: flex !important;
      align-items: center;
      justify-content: space-around;
      height: 184px;
    }
    .icon-next,
    .icon-prev {
      position: absolute;
      width: 17px;
      height: 17px;
      top: 71px;
      cursor: pointer;
    }
    .icon-prev {
      background-position: -280px -75px;
      left: 4px;
    }
    .icon-next {
      background-position: -300px -75px;
      right: 4px;
    }
  }
`;
