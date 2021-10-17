import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content {
    height: 70px;
    justify-content: space-between;
    display: flex;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
  .header-left {
    display: flex;
    .logo {
      display: inline-block;
      width: 176px;
      height: 70px;
      background-position: 0 0;
      text-indent: -9999px;
    }
    .nav-link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 14px;
      a {
        display: flex;
        position: relative;
        flex: 1;
        align-items: center;
        height: 100%;
        color: #ccc;
        padding: 0 19px;
        text-decoration: none;
        transition: background-color color 0.3s;
        &:hover {
          background-color: #000;
          color: #fff;
        }
      }
      .nav-link-active {
        color: #fff;
        background-color: #000;
        sub {
          position: absolute;
          top: 64px;
          left: 50%;
          width: 12px;
          height: 7px;
          margin-left: -6px;
          overflow: hidden;
          background-position: -226px 0;
        }
      }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .search {
      width: 158px;
      height: 32px;
      border-radius: 16px;
      input {
        &::placeholder {
          font-size: 12px;
        }
      }
    }
    .border {
      border: 1px solid #4f4f4f;
    }
    .button {
      padding: 5px;
      color: #ccc;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 7px 9px;
      border-radius: 18px;
      margin: 0 10px;
      transition: 0.3s;
      &:hover {
        color: #fff;
        border-color: #ccc;
        cursor: pointer;
      }
    }
  }
`;
