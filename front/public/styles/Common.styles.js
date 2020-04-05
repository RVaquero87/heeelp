import styled from "styled-components";

//Global Class
export const GlobalContent = styled.div`
  .button {
    background: #3e3874;
    border-radius: 30px;
    border: 2px solid #3e3874;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: "Roboto", verdana, sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1;
    outline: none;
    padding: 8px 25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    &.big {
      font-size: 16px;
      padding: 15px 35px;
    }
    &:hover {
      background: rgba(62, 56, 116, 0.8);
      transition: all ease 1000ms;
      text-decoration: none;
    }
    &.white {
      background: rgba(255, 255, 255, 0);
      border: 2px solid #fff;
    }
    &.white:hover {
      background: #3e3874;
    }
  }
`;

//Main, SextionBox
export const Main = styled.main`
  display: block;
  max-width: 100%;
  width: 100%;
  > section {
    display: flex;
    padding: 0 2.5%;
    width: 100%;
  }
  @media (max-width: 768px) {
    > section {
      padding: 0 4%;
    }
  }
  @media (max-width: 480px) {
    > section {
      padding: 0 8%;
    }
  }
`;

export const SectionBox = styled.section`
  background: ${props => {
    switch (props.bgColor) {
      case "blueLight":
        return "#8290ff";
      case "blueMaxLight":
        return "#a2b2ff";
      case "blue":
        return "#3e3874";
      case "orange":
        return "#ffa500";
      default:
        return "#fff;";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  .contain {
    display: flex;
    justify-content: ${props => {
      switch (props.justify) {
        case "start":
          return "flex-start";
        case "between":
          return "space-between";
        case "around":
          return "space-around";
        case "evenly":
          return "space-evenly";
        case "end":
          return "flex-end";
        default:
          return "center";
      }
    }};
    flex-direction: ${props => (props.column ? "column" : "row")};
    align-items: center;
  }
`;

//Components Text
export const H1 = styled.h1`
  color: ${props => {
    switch (props.bgColor) {
      case "blue-light":
        return "#8290ff";
      case "blue":
        return "#3e3874";
      case "orange":
        return "#ffa500";
      default:
        return "#fff;";
    }
  }};
  font-family: "Roboto", verdana, sans-serif;
  font-size: 40px;
  line-height: 48px;
  font-weight: 500;
  .item-light {
    font-weight: 300;
  }
  .item-block {
    display: block;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 1024px) {
    font-size: 34px;
    line-height: 40px;
  }
  @media (max-width: 960px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 34px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const H2 = styled.h1`
  color: ${props => {
    switch (props.bgColor) {
      case "blue-light":
        return "#8290ff";
      case "blue":
        return "#3e3874";
      case "orange":
        return "#ffa500";
      default:
        return "#fff;";
    }
  }};
  font-family: "Roboto", verdana, sans-serif;
  font-size: 40px;
  line-height: 48px;
  font-weight: 500;
  .item-light {
    font-weight: 300;
  }
  .item-block {
    display: block;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 1024px) {
    font-size: 34px;
    line-height: 40px;
  }
  @media (max-width: 960px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 34px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const ParagraphTop = styled.p`
  color: ${props => (props.blue ? "#393b4f" : "#fff")};
  font-family: "Roboto", verdana, sans-serif;
  padding-bottom: 32px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
  span {
    font-weight: 500;
  }
  &:last-child {
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
    padding-bottom: 22px;
  }
`;

export const Paragraphs = styled(ParagraphTop)`
  font-weight: ${props => (props.bold ? "700" : "300")};
  font-size: 18px;
  line-height: 28px;
  padding-bottom: 24px;
  &:last-child {
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

//Component Elements
export const Button = styled.button`
  background: ${props => (props.blue ? "#3e3874" : "rgba(255,255,255,0)")};
  border-radius: 30px;
  border: 2px solid ${props => (props.blue ? "#3e3874" : "#fff")};
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: "Roboto", verdana, sans-serif;
  font-size: ${props => (props.big ? "16px" : "14px")};
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
  outline: none;
  padding: ${props => (props.big ? "15px 35px" : "8px 25px")};
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background: ${props => (props.blue ? "rgba(62, 56, 116,.8)" : "#3e3874")};
    text-decoration: none;
    transition: all ease 1000ms;
  }
`;

//Components DIV
export const ContainDivDefault = styled.div`
  padding: 100px 0 50px;
  max-width: 1200px;
  width: 100%;
`;

export const ContentText = styled.div`
  padding: 0;
  margin: 0;
`;

export const BoxImg = styled.div`
  width:100%;
  img{
    display:block;
    max-width:100%;
    width:100%:
  }
`;

export const Col2Min = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => {
    switch (props.justify) {
      case "start":
        return "flex-start";
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      case "evenly":
        return "space-evenly";
      case "end":
        return "flex-end";
      default:
        return "center";
    }
  }};
  margin-top: 70px;
  margin-bottom: ${props => (props.latest ? "70px" : "0")};
  width: 100%;
  ${ContentText} {
    width: 40%;
  }
  ${BoxImg} {
    width: 35%;
    margin: ${props => (props.inverse ? "0 5% 0 0" : "0 0 0 5%")};
    order: ${props => (props.inverse ? "-1" : "0")};
  }
  @media (max-width: 1024px) {
    ${ContentText} {
      width: 50%;
    }
    ${BoxImg} {
      width: 35%;
    }
  }
  @media (max-width: 960px) {
    ${ContentText} {
      width: 50%;
    }
    ${BoxImg} {
      width: 45%;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: ${props => (props.latest ? "50px" : "0")};
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    ${ContentText} {
      margin-top: 30px;
      width: 100%;
    }
    ${BoxImg} {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
      order: -1;
    }
  }
  @media (max-width: 480px) {
    margin-bottom: ${props => (props.latest ? "40px" : "0")};
    margin-top: 40px;
    ${ContentText} {
    }
    ${BoxImg} {
      width: 100%;
      max-width: 250px;
    }
  }
`;

//Components HOME PAGE
export const Col2Header = styled.div`
  padding: 100px 0 0;
  ${ContentText} {
    width: 43%;
    ${H1} {
      padding-bottom: 16px;
    }
    ${ParagraphTop} {
      font-weight: 100;
    }
  }
  ${BoxImg} {
    width: 53%;
    img {
      position: relative;
      top: 50px;
    }
  }
  @media (max-width: 1200px) {
    ${ContentText} {
      width: 45%;
    }
    ${BoxImg} {
      width: 50%;
      img {
        top: 50px;
      }
    }
  }
  @media (max-width: 960px) {
    align-items: flex-end;
    ${ContentText} {
      padding-bottom: 50px;
      width: 50%;
    }
    ${BoxImg} {
      width: 45%;
      img {
        top: 60px;
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      flex-direction: column;

      ${ContentText} {
        padding-bottom: 10px;
        width: 100%;
      }
      ${BoxImg} {
        max-width: 450px;
        width: 100%;
        img {
          top: 50px;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .button {
      display: block;
      margin: 0 auto;
      max-width: 320px;
      width: 100%;
    }
    ${BoxImg} {
      img {
        top: 30px;
      }
    }
  }
`;

export const SectionServicesRates = styled.div`
  padding: 100px 0 70px;
  width: 100%;
  .col5 {
    padding: 30px 0 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 100%;
  }
  ${H2} {
    margin-bottom: 20px;
  }
  > ${Paragraphs} {
    max-width: 750px;
    text-align: center;
  }
  .button {
    margin-top: 30px;
  }
  @media (max-width: 1024px) {
    padding: 70px 0 50px;

    .col5 {
      padding: 20px 0 40px;
      justify-content: space-between;
    }
  }
  @media (max-width: 768px) {
    .col5 {
      flex-wrap: wrap;
      justify-content: space-around;
      max-width: 500px;
      padding-bottom: 0;
      > div {
        width: 33%;
        text-align: center;
        margin-bottom: 40px;
      }
    }
  }
  @media (max-width: 480px) {
    padding: 50px 0 40px;
    .col5 {
      > div {
        width: 50%;
        margin-bottom: 35px;
      }
    }
    > ${Paragraphs} {
      text-align: left;
    }
    .button {
      margin-top: 20px;
    }
  }
`;
export const FormBox = styled.form``;

export const LightBox = styled.div``;
