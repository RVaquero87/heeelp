//Styles & AOS animation
import styled from "styled-components";

export const BoxMessages = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
  padding-bottom: 15px;
  width: 100%;
  .data {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
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
    span:first-child {
      font-weight: 500;
    }
  }
  > p {
    color: #393b4f;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    .data {
      margin-bottom: 3px;
    }
    p {
      line-height: 1.3;
      width: 100%;

      > span.line {
        display: none;
      }
    }
  }
`;
