import styled from "styled-components";
export const PlayListWrapper = styled.div`
  padding: 40px;
  width: 900px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .header {
    height: 42px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    margin-bottom: 20px;
    .cat-name {
      font-size: 24px;
      margin-right: 12px;
    }
  }
  .playlists {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      justify-content: center;
      width: 20%;
    }
  }
`;
