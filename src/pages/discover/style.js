import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  height: 29px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .wrap-v1 {
    height: 100%;
  }
  .nav-link {
    display: flex;
    height: 100%;
    padding-left: 180px;
    li {
      height: 100%;
      margin: 0 20px;
      padding-top: 2px;
      a {
        width: 100%;
        padding: 3px 13px;
        color: #fff;
        text-decoration: none;
        border-radius: 10px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
      .active {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
