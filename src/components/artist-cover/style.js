import styled from "styled-components";
export const ArticleCoverWrapper = styled.div`
  width: 130px;
  height: 154px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-wrap {
    width: 130px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    width: 100%;
    color: #000;
    text-align: left;
    padding: 5px 0;
  }
`;
