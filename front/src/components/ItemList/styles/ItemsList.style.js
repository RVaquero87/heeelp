import styled from "styled-components";

//Styles & AOS animation
import { FormBox, ParagraphTop } from "../../../styles/Index.styles";

//Images
import dotPoints from "../../../../public/images/dots.svg";
import heart1 from "../../../../public/images/heart-1.svg";

export const ItemList = styled.div`
  margin-top: 44px;
  position: relative;
  width: 47.4%;
  &:nth-child(1),
  &:nth-child(2) {
    margin-top: 0;
  }

  ${ParagraphTop} {
    line-height: 1.4;
    padding-bottom: 7px;

    &.special {
      color: #9a9caf;
    }
    &:last-child {
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 0;
    }
  }
  .button-box {
    position: absolute;
    right: 0;
    top: 0;
    button {
      cursor: pointer;
      height: 25px;
      margin-right: 16px;
      padding: 0;
      width: 25px;
      svg {
        pointer-events: none;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  ${FormBox} {
    .box-input {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 36px;
    width: 100%;
    &:nth-child(2) {
      margin-top: 36px;
    }
  }
`;
