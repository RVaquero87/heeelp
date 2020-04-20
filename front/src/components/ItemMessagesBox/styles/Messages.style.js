//Styles & AOS animation
import styled from "styled-components";

export const BoxMessages = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  width: 100%;
  p {
    color: #3e3874;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;

    &.special {
      color: #9a9caf;
      text-align: right;
      width: 100px;
    }
    span {
      font-weight: 500;
    }
  }
  @media (max-width: 960px) {
    flex-direction: column;
    p {
      line-height: 1.3;
      width: 100%;
      &.special {
        padding-top: 2px;
        width: 100%;
      }
    }
  }
`;
