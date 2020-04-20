//Styles & AOS animation
import styled from "styled-components";
import { BoxImg } from "../../../styles/Index.styles";

//Images
import trash from "../../../../public/images/trash.svg";
import trash2 from "../../../../public/images/trash2.svg";

export const BoxMessagesPage = styled.div`
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
    background: url(${trash2}) center no-repeat;
    background-size: contain;
    border-radius: 0;
    color: #3e3874;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
    height: 24px;
    line-height: 1;
    outline: none;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    text-decoration: none;
    text-indent: -999999px;
    width: 24px;
    &:hover {
      background: url(${trash}) center no-repeat;
      background-size: contain;
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
      bottom: 20px;
    }
  }
`;
