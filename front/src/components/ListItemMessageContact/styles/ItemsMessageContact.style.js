//Styles & AOS animation
import styled from "styled-components";
import { Paragraphs, Button } from "../../../styles/Index.styles";

export const BoxMessageContact = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.1);
  padding: 25px 30px;
  width: 48.5%;
  position: relative;
  margin-bottom: 30px;
  .data-intro {
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;
    ${Paragraphs}:last-child {
      text-align: right;
    }
  }
  > ${Paragraphs} {
    padding-bottom: 14px;
    width: 100%;
    &.message {
      max-height: 85px;
      overflow-y: scroll;
      padding-right: 10px;
      padding-bottom: 0;
    }
  }
  .box-buttons {
    margin-top: 36px;
    ${Button}:last-child {
      margin-left: 16px;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    > ${Paragraphs} {
      &.message {
        max-height: initial;
        overflow: initial;
        padding-right: 0px;
      }
    }
  }
  @media (max-width: 480px) {
    padding: 30px 25px;
    .data-intro {
      flex-direction: column-reverse;
      margin-bottom: 12px;
      width: 100%;
      ${Paragraphs} {
        padding-bottom: 10px;
      }
      ${Paragraphs}:last-child {
        text-align: left;

        .item-block {
          display: inline;
          &:before {
            content: " - ";
          }
        }
      }
    }
    .box-buttons {
      margin-top: 24px;
      ${Button}:last-child {
        margin: 16px auto 0;
      }
    }
  }
`;
