//Styles
import styled from "styled-components";
import {
  BoxImg,
  Paragraphs,
  ParagraphsTop,
} from "../../../styles/Index.styles";

export const ItemServiceRate = styled.div`
  &.disabled {
    opacity: 0.2;
  }
  ${BoxImg} {
    max-width: 64px;
    margin: 0 auto;
  }
  ${Paragraphs} {
    margin-top: 20px;
    text-align: center;
    padding-bottom: 7px;
    &.content-services {
      font-size: 16px;
      line-height: 1.4;
      margin: 0 auto;
      max-width: 150px;
      min-height: 85px;
    }
  }
  ${ParagraphsTop}.number-services {
    font-size: 24px;
    font-weight: 700;
    margin-top: 8px;
    text-align: center;
  }
`;
