import styled from "styled-components";
export const TopBannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;
  transition: 0.9s;
  .wrap-v2 {
    display: flex;
    position: relative;
  }
  .carousel {
    width: 730px;
    height: 285px;
    img {
      width: 730px;
      height: 285px;
    }
  }
  .download {
    width: 254px;
    height: 285px;
    background: url(https://s2.music.126.net/style/web2/img/index/download.png?a2f00738134d3f9a2049446d6b41b533)
      no-repeat 0 0;
  }
  .btn-left,
  .btn-right {
    position: absolute;
    width: 37px;
    height: 63px;
    top: 50%;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .btn-left {
    left: -68px;
    background-position: 0 -360px;
  }
  .btn-right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
