import styled from "styled-components";
export const SearchWrapper = styled.div`
  padding: 40px;
  width: 900px;
  margin: 0 auto;
  .artists-list {
    display: flex;
    flex-wrap: wrap;
    .artists-item {
      width: 20%;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      cursor: pointer;
      img {
        border-radius: 3px;
      }
    }
  }
`;
