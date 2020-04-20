//Styles & AOS animation
import styled from "styled-components";
import { ParagraphTop } from "../../../styles/Index.styles";

//Images
import trash from "../../../../public/images/trash.svg";
import trash2 from "../../../../public/images/trash2.svg";

export const BoxReviews = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.1);
  padding: 40px 40px 30px;
  width: 47.5%;
  position: relative;
  .title {
    padding-bottom: 10px;
  }
  .message {
    text-align: left;
    height: 170px;
  }
  .box-reviews-user {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    .box-user-image {
      border-radius: 50%;
      max-width: 80px;
      overflow: hidden;
      width: 100%;
    }
    .box-user-item {
      width: 67%;
      .box-top-user {
        margin-bottom: 2px;
      }
      .starts {
        display: flex;
        justify-content: flex-start;
        img {
          width: 25px;
          margin-right: 7px;
        }
      }
    }
  }

  .delete {
    background: url(${trash2}) center no-repeat;
    background-size: contain;
    color: #3e3874;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
    height: 24px;
    line-height: 1;
    outline: none;
    padding: 0;
    position: absolute;
    right: 14px;
    text-decoration: none;
    text-indent: -999999px;
    top: 14px;
    width: 24px;
    &:hover {
      background: url(${trash}) center no-repeat;
      background-size: contain;
    }
    svg {
      pointer-events: none;
    }
  }
  @media (max-width: 1200px) {
    padding: 40px 30px 30px;
    width: 47%;
    .title {
      font-size: 18px;
      padding-bottom: 4px;
    }
    .message {
      font-size: 17px;
      height: 160px;
      line-height: 26px;
      padding-bottom: 18px;
    }
    .box-reviews-user {
      .box-user-image {
        max-width: 70px;
      }
      .box-user-item {
        .box-top-user {
          ${ParagraphTop} {
            font-size: 18px;
            line-height: 24px;
          }
        }
        .starts img {
          width: 23px;
          margin-right: 5px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    max-width: 370px;
    margin-bottom: 50px;
    padding: 32px 25px 25px;

    .message {
      font-size: 16px;
      height: 150px;
      line-height: 24px;
    }
    .box-reviews-user {
      .box-user-image {
        max-width: 60px;
      }
      .box-user-item {
        width: 70%;
        .starts img {
          margin-right: 4px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    max-width: 370px;
    margin-bottom: 50px;
    padding: 40px 35px 30px;
    .title {
      padding-bottom: 12px;
      font-size: 20px;
      line-height: 28px;
    }
    .message {
      font-size: 18px;
      height: 170px;
      line-height: 28px;
      padding-bottom: 32px;
    }
    .box-reviews-user {
      .box-user-image {
        max-width: 70px;
      }
      .box-user-item {
        width: 70%;
        .starts img {
          width: 25px;
          margin-right: 5px;
        }
      }
      .box-top-user {
        margin-bottom: 4px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 40px 30px 30px;
    max-width: 360px;
    margin-bottom: 50px;
    width: 100%;
    .message {
      height: initial;
    }
  }
  @media (max-width: 480px) {
    padding: 30px 20px 20px;
    margin-bottom: 30px;
    .message {
      height: initial;
    }
    .box-reviews-user {
      margin-top: 0;
      justify-content: flex-start;
      .box-user-image {
        max-width: 70px;
        margin-right: 12px;
      }
      .box-user-item {
        width: 65%;
        justify-content: flex-start;

        .starts img {
          width: 22px;
          margin-right: 5px;
        }
      }
    }
  }
`;
