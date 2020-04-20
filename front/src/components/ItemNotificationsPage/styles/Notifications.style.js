//Styles & AOS animation
import styled from "styled-components";
import { BoxImg } from "../../../styles/Index.styles";

export const BoxNotificationPage = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  p {
    color: #3e3874;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;

    &.special {
      color: #9a9caf;
      text-align: left;
      min-width: 150px;
    }
    span:first-child {
      font-weight: 500;
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-right: 60px;
    ${BoxImg} {
      border-radius: 100%;
      min-width: 40px;
      overflow: hidden;
      width: 40px;
      margin-right: 16px;
    }
  }

  .delete {
    border-radius: 0;
    color: #3e3874;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    outline: none;
    padding: 0;
    position: absolute;
    right: 0;
    text-decoration: none;
    top: 50%;
    transform: translate(0, -50%);
    &:hover {
      color: rgb(62, 56, 116, 0.85);
    }
    svg {
      position: relative;
      pointer-events: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    p {
      &.special {
        align-self: flex-end;
        margin-bottom: 3px;
        text-align: right;
      }
      span:first-child {
        display: block;
      }
      .line {
        display: none;
      }
    }
    .user {
      width: 100%;
    }
    .delete {
      translate: none;
      top: initial;
      bottom: 0;
    }
  }
`;
