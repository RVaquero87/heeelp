//Styles & AOS animation
import styled from "styled-components";
import { BoxImg } from "../../../styles/Index.styles";

//Images
import trash from "../../../../public/images/trash.svg";
import trash2 from "../../../../public/images/trash2.svg";
import resp from "../../../../public/images/resp.svg";
import resp2 from "../../../../public/images/resp2.svg";

export const BoxMessagesPage = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  p {
    font-weight: 300;
    line-height: 1.3;
    color: #3e3874;
    &.special {
      color: #9a9caf;
    }
  }
  .time {
    padding-top: 10px;
    min-width: 100px;
    width: 100px;
  }
  .content {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    width: 83%;
    .message {
      padding: 0 2.5%;
      max-width: 85%;
      width: 100%;
      p {
        line-height: 1.5;
        color: #393b4f;
      }
    }
  }
  .user {
    display: flex;
    align-items: flex-start;
    max-width: 140px;
    width: 140px;
    justify-content: flex-start;
    ${BoxImg} {
      border-radius: 100%;
      min-width: 40px;
      overflow: hidden;
      width: 40px;
      margin-right: 16px;
    }
    span {
      display: block;
      font-weight: 500;
    }
  }

  .button-box {
    min-width: 89px;
    width: 89px;
    .response {
      background: url(${resp}) center no-repeat;
      background-size: contain;
      border-radius: 0;
      color: #3e3874;
      cursor: pointer;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 500;
      height: 23px;
      line-height: 1;
      min-width: 26px;
      outline: none;
      overflow: hidden;
      position: relative;
      top: 2px;

      padding: 0;
      text-decoration: none;
      text-indent: -999999px;
      width: 26px;
      &:hover {
        background: url(${resp2}) center no-repeat;
        background-size: contain;
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
      min-width: 24px;
      outline: none;
      overflow: hidden;
      padding: 0;
      margin-left: 32px;
      text-decoration: none;
      text-indent: -999999px;
      width: 24px;
      &:hover {
        background: url(${trash}) center no-repeat;
        background-size: contain;
      }
    }
  }
  .box-form {
    background: #f2f3f7;
    order: 4;
    position: relative;
    top: 20px;
    padding: 56px 20px 64px;
    width: 100%;
    .title {
      color: #393b4f;
      font-size: 24px;
      font-weight: 500;
      margin: 0 auto;
      max-width: 768px;
      padding-bottom: 16px;
      width: 100%;
    }
    .user {
      align-items: center;
      margin: 0 auto 7px;
      max-width: 768px;
      position: relative;
      width: 100%;
      span {
        display: inline-block;
      }
    }
    > button {
      display: block;
      cursor: pointer;
      height: 32px;
      position: absolute;
      right: 24px;
      top: 24px;
      width: 32px;
      img {
        pointer-events: none;
      }
    }
  }
  @media (max-width: 1200px) {
    .content {
      width: 79%;

      .message {
        max-width: 80%;
      }
    }
  }
  @media (max-width: 960px) {
    .content {
      max-width: 74%;
    }
  }

  @media (max-width: 768px) {
    flex-flow: row wrap;
    .time {
      padding-top: 0;
    }
    .content {
      flex-direction: column;
      margin-top: 14px;
      max-width: 100%;
      order: 3;
      width: 100%;
      .message {
        max-width: 100%;
        width: 100%;
        padding: 14px 0 0;
      }
    }
  }
`;
