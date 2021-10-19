import styled from "styled-components";
export const SongsCoverMiniWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  margin-bottom: 15px;
  line-height: 24px;
  .playlist-left {
    width: 50px;
    height: 50px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .playlist-right {
    margin-left: 10px;
    .name {
      width: 140px;
      a {
        color: #000;
        font-size: 14px;
      }
    }
    .creator {
      .nickname {
        margin-left: 5px;
      }
    }
  }
`;
