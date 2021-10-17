import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid #ccc;
  margin-bottom: 40px;

  padding: 10px 0;
  text-align: center;
  .github {
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
