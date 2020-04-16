import styled from "styled-components";
import { BoxImg, Paragraphs } from "../../../styles/Index.styles";

export const BoxAidRequest = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.1);
  width: 32%;
  position: relative;

  .card {
    display: block;
    cursor: pointer;
    padding: 24px 32px;
    text-decoration: none;
    > div {
      pointer-events: none;
      .box-info {
        p {
        }
      }
      .box-type {
        ${BoxImg} {
        }
        ${Paragraphs} {
        }
        .content {
        }
      }
      .box-user {
        .user {
          ${BoxImg} {
          }
          > div {
            p:first-child {
              &.no-helper {
              }
            }
            p:last-child {
              &.no-helper {
              }
            }
          }
        }
        .status {
          &:before {
            display: block;
            content: "";
            background: #d60000;
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
    }
    &.disabled {
    }
  }
`;
