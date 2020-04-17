import styled from "styled-components";

//Styles & AOS animation
import { BoxImg, Paragraphs } from "../../../styles/Index.styles";

//Images
import dotPoints from "../../../../public/images/dots.svg";
import heart1 from "../../../../public/images/heart-1.svg";
import heart2 from "../../../../public/images/heart-2.svg";

export const BoxAidRequest = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.1);
  margin-bottom: 32px;
  position: relative;
  width: 31.5%;

  .card {
    align-items: center;
    cursor: pointer;
    display: block;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    padding: 24px 32px;
    text-decoration: none;
    width: 100%;
    > div {
      pointer-events: none;
    }
    .box-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      p {
        color: #9a9caf;
        font-size: 16px;
        font-weight: 300;
        line-height: 1;
      }
    }
    .box-type {
      border-bottom: 1px solid #e3e4e8;
      margin-bottom: 26px;
      padding-bottom: 24px;
      text-align: center;
      width: 100%;
      ${BoxImg} {
        height: 72px;
        max-width: 64px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin: 13px auto 8px;
      }
      ${Paragraphs} {
        color: #3e3874;
        font-size: 18px;
        padding-bottom: 20px;
        font-weight: 700;
      }
      .content {
        color: #393b4f;
        font-size: 16px;
        font-weight: 300;
        height: 40px;
        line-height: 1.2;
      }
    }
    .box-user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .user {
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${BoxImg} {
          border-radius: 100%;
          overflow: hidden;
          height: 48px;
          width: 48px;
        }
        .data-user {
          margin-left: 16px;
          p {
            color: #3e3874;
            font-size: 16px;
            line-height: 1;
            &.no-helper {
              display: block;
              background: #f2f3f7;
              height: 16px;
            }
            &:first-child {
              font-weight: 700;
              margin-bottom: 5px;
              &.no-helper {
                width: 110px;
              }
            }
            &:last-child {
              font-weight: 300;
              &.no-helper {
                width: 80px;
              }
            }
          }
        }
      }
      .status {
        align-items: flex-end;
        color: #9a9caf;
        display: flex;
        font-weight: 300;
        flex-direction: column;
        font-size: 16px;
        line-height: 1;

        &:before {
          background: #d60000;
          border-radius: 100%;
          content: "";
          display: block;
          height: 16px;
          margin-bottom: 5px;
          width: 16px;
        }
        &.blue:before {
          background: #8290ff;
        }
        &.orange:before {
          background: #ffa500;
        }
        &.green:before {
          background: #79c802;
        }
        &.grey:before {
          background: #9a9caf;
        }
      }
    }
    &.disabled {
      background: #e3e4e8;
      pointer-events: none;
      .box-type {
        border-bottom: 1px solid #9a9caf;
      }
    }
  }

  .btn-require {
    align-items: center;
    border-radius: 22px;
    bottom: -5px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    padding: 10px 16px;
    position: absolute;
    right: -5px;
    text-transform: uppercase;
    z-index: 1;
    &:before {
      content: "";
      display: inline-block;
      margin-right: 12px;
      height: 22px;
      width: 24px;
    }
    &.add {
      background-color: #8290ff;
      &:before {
        background: url(${heart1}) center no-repeat;
      }
      &:hover:before {
        background: url(${heart2}) center no-repeat;
      }
    }
    &.remove {
      background-color: #3e3874;
      &:before {
        background: url(${heart2}) center no-repeat;
      }
      &:hover:before {
        background: url(${heart1}) center no-repeat;
      }
    }
  }

  .options {
    align-items: center;
    background: #f2f3f7;
    color: #393b4f;
    cursor: pointer;
    display: block;
    display: flex;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    height: 40px;
    justify-content: center;
    letter-spacing: 0.88px;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    width: 100%;
    &:before {
      background: url(${dotPoints}) center no-repeat;
      content: "";
      width: 40px;
      height: 8px;
      margin-right: 12px;
    }
  }
  .buttons-options {
    background: #fff;
    border-radius: 4px;
    bottom: 40px;
    box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.06);
    padding: 24px 0;
    position: absolute;
    width: 100%;
    a {
      display: block;
      cursor: pointer;
      text-decoration: none;
      color: #3e3874;
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 16px;
      font-weight: 700;
      text-align: center;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        color: #8290ff;
      }
    }
  }
  @media (max-width: 1200px) {
    .card {
      padding: 20px;
      .box-user .user .data-user {
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 1024px) {
    .card {
      .box-type .content {
        font-size: 15px;
        height: 36px;
      }
      .box-user {
        .user .data-user {
          margin-left: 7px;
          p {
            font-size: 14px;
          }
        }
        .status {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .card {
      padding: 15px 12px;
      .box-info {
        p {
          font-size: 14px;
          height: 36px;
        }
      }
      .box-type {
        margin-bottom: 18px;
        padding-bottom: 18px;
        ${Paragraphs} {
          font-size: 16px;
          padding-bottom: 12px;
        }
        ${BoxImg} {
          height: 60px;
          max-width: 55px;
        }
        .content {
          font-size: 14px;
          height: 34px;
        }
      }
      .box-user {
        .user {
          ${BoxImg} {
            height: 40px;
            width: 40px;
          }
          .data-user {
            margin-left: 7px;
            p {
              font-size: 14px;
              &.no-helper {
                height: 14px;
              }
              &:first-child {
                &.no-helper {
                  width: 80px;
                }
              }
              &:last-child {
                &.no-helper {
                  width: 50px;
                }
              }
            }
          }
        }
        .status {
          font-size: 14px;
          &:before {
            height: 12px;
            width: 12px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .card {
      padding: 24px 32px;
      .box-info {
        p {
          font-size: 16px;
        }
      }
      .box-type {
        margin-bottom: 26px;
        padding-bottom: 24px;
        ${Paragraphs} {
          font-size: 18px;
          padding-bottom: 20px;
        }
        ${BoxImg} {
          height: 72px;
          max-width: 64px;
        }
        .content {
          font-size: 16px;
          height: initial;
        }
      }
      .box-user {
        .user {
          ${BoxImg} {
            height: 48px;
            width: 48px;
          }
          .data-user {
            margin-left: 16px;
            p {
              font-size: 16px;
              &.no-helper {
                height: 16px;
              }
              &:first-child {
                &.no-helper {
                  width: 110px;
                }
              }
              &:last-child {
                &.no-helper {
                  width: 80px;
                }
              }
            }
          }
        }
        .status {
          font-size: 16px;
          &:before {
            height: 16px;
            width: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    .card {
      padding: 15px 12px;
      .box-type {
        margin-bottom: 18px;
        padding-bottom: 18px;
        ${Paragraphs} {
          font-size: 16px;
          padding-bottom: 12px;
        }
        ${BoxImg} {
          height: 60px;
          max-width: 55px;
        }
        .content {
          font-size: 15px;
        }
      }
      .box-user {
        .user {
          ${BoxImg} {
            height: 40px;
            width: 40px;
          }
          .data-user {
            margin-left: 7px;
            p {
              font-size: 14px;
              &.no-helper {
                height: 14px;
              }
              &:first-child {
                &.no-helper {
                  width: 80px;
                }
              }
              &:last-child {
                &.no-helper {
                  width: 50px;
                }
              }
            }
          }
        }
        .status {
          font-size: 14px;
          &:before {
            height: 12px;
            width: 12px;
          }
        }
      }
    }
  }
`;
