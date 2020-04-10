//Styles & AOS animation
import styled from "styled-components";
import {
  BoxImg,
  Paragraphs,
  FormBox,
} from "../../../../public/styles/Common.styles";

//Img
import arrowBottom from "../../../../public/images/arrow.svg";

export const BoxUser = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.1);
  margin-bottom: 36px;
  padding: 22px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 22.5%;
  ${BoxImg} {
    border-radius: 100%;
    margin: 0 auto 30px;
    overflow: hidden;
    width: 150px;
  }
  ${FormBox} {
    position: relative;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .box-input {
      margin: 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      &:after {
        background: url(${arrowBottom}) center no-repeat;
        content: " ";
        display: block;
        height: 10px;
        position: absolute;
        right: 0px;
        top: 7px;
        width: 17px;
      }
      label {
        margin: 0%;
        font-size: 16px;
        color: #3e3874;
        width: initial;
        &:after {
          display: none;
        }
      }
      select {
        margin-left: 10px;
      }
    }
    button {
      padding: 0;
      cursor: pointer;
    }
  }

  ${Paragraphs} {
    text-align: center;
    padding-bottom: 24px;
    line-height: 1;
  }

  ${Paragraphs}.visits {
    position: absolute;
    top: 13px;
    left: 17px;
    font-size: 14px;
    padding: 0;
    span {
      font-size: 22px;
    }
  }

  .delete {
    cursor: pointer;
    outline: none;
    border-radius: 0;
    color: #3e3874;
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    position: absolute;
    right: 16px;
    text-decoration: none;
    top: 16px;
    width: 16px;
    height: 16px;
    &:hover {
      color: rgb(62, 56, 116, 0.85);
    }
    img {
      width: 100%;
      position: relative;
      pointer-events: none;
    }
  }
  @media (max-width: 1200px) {
    width: 23%;
    margin-bottom: 26px;
    ${Paragraphs} {
      font-size: 17px;
      padding-bottom: 16px;
    }
  }
  @media (max-width: 1024px) {
    width: 23.5%;
    margin-bottom: 26px;
    ${Paragraphs} {
      font-size: 16px;
      padding-bottom: 16px;
    }
  }
  @media (max-width: 960px) {
    width: 31.5%;
    margin-bottom: 26px;
    ${Paragraphs} {
      font-size: 16px;
      padding-bottom: 22px;
    }
  }
  @media (max-width: 768px) {
    width: 47%;
  }

  @media (max-width: 480px) {
    margin: 0 auto 30px;
    max-width: 320px;
    width: 100%;
  }
`;
