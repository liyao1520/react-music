import styled from "styled-components";
export const RecommendHeaderWrapper = styled.div`
  height: 33px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      margin-right: 20px;
      background-position: -225px -156px;
      padding-left: 34px;
      a {
        text-decoration: none;
      }
    }
    .divider {
      margin: 0 10px;
      color: #ccc;
    }
  }
  .header-right {
    i {
      display: inline-block;
      background-position: 0 -240px;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
    }
  }
`;
