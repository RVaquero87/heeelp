import styled from "styled-components";

//Images
import logo from "../images/logo-blanco.png";
import logoNegro from "../images/logo-negro.png";
import comillas from "../images/comillas.svg";
import ArrowBottom from "../images/arrow.svg";

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
    padding: 12px 25px;
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
    @media (max-width: 480px) {
      display: block;
      font-size: 12px;
      margin: 0 auto;
      max-width: 290px;
      width: 100%;
      &.big {
        font-size: 14px;
      }
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
    justify-content: space-between;
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
    margin: 0 auto;
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
    max-width: 1200px;
    width: 100%;
  }
`;

//Components Text
export const H1 = styled.h1`
  color: ${props => {
    switch (props.color) {
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

export const H2 = styled.h2`
  color: ${props => {
    switch (props.color) {
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
  padding: ${props => (props.big ? "15px 35px" : "12px 25px")};
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background: ${props => (props.blue ? "rgba(62, 56, 116,.8)" : "#3e3874")};
    text-decoration: none;
    transition: all ease 1000ms;
  }
  @media (max-width: 480px) {
    display: block;
    font-size: 12px;
    margin: 0 auto;
    max-width: 290px;
    width: 100%;
    &.big {
      font-size: 14px;
    }
  }
`;
export const FilterStars = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 490px;
  margin-bottom: 50px;
  border-bottom: 2px solid #e3e4e8;

  ${Paragraphs} {
    padding: 0;
  }
  .box-filter {
    display: block;
    float: left;
    max-width: 100%;
    position: relative;
    width: 100%;
    width: auto;
    select {
      appearance: none;
      text-transform: uppercase;
      background-color: transparent;
      border: none;
      font-family: "Roboto", helvetica;
      font-size: 1rem;
      font-weight: 300;
      max-width: 100%;
      padding: 8px 35px 8px 15px;
      margin: 0%;
      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    &:after {
      background: url(${ArrowBottom}) center no-repeat;
      content: " ";
      height: 10px;
      position: absolute;
      right: 8px;
      top: 53%;
      transform: translate(0, -50%);
      width: 17px;
    }
  }
`;

//Components DIV
export const ContainDivDefault = styled.div`
  padding: 70px 0 50px;
  max-width: 1200px;
  width: 100%;
  &.special-padding {
    padding: 100px 0 50px;
  }
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

//Components LAYOUT

export const HeaderBox = styled.header`
  display: block;
  max-width: 100%;
  position: fixed;
  width: 100%;
  z-index: 4;
  div.contain {
    display: flex;
    margin: 0 auto;
    padding: 0 2.5%;
    width: 100%;
    div.header-inner {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding: 24px 0;
      max-width: 1200px;
      width: 100%;
      .logo {
        display: block;
        width: 150px;
        cursor: pointer;
        a {
          text-indent: -99999999px;
          overflow: hidden;
          position: relative;
          display: block;
          width: 100%;
          height: 38px;
          background: url(${logo}) center no-repeat;
          background-size: contain;
        }
      }
      .box-nav {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        nav {
          margin: 0;
          padding: 0;
          margin-left: 100px;
          width: 430px;
          ul {
            display: flex;
            justify-content: space-between;
            list-style: none;
            padding: 0;
            width: 100%;
            li {
              font-family: "Roboto", sans-serif;
              line-height: 1;
              a {
                color: #fff;
                position: relative;
                text-decoration: none;
                &:hover:after,
                &.active:after {
                  text-decoration: none;
                  position: absolute;
                  bottom: -3px;
                  left: 0;
                  content: "";
                  display: block;
                  height: 1px;
                  background-color: #fff;
                  width: 100%;
                }
              }
            }
          }
        }
        .button-box {
          a {
            &:last-child {
              margin-left: 16px;
            }
          }
        }
      }

      .hamburger {
        display: none;
        &:hover {
          cursor: pointer;
        }
        &.active {
          transition: all 0.3s ease-in-out;
          transition-delay: 0.6s;
          transform: rotate(45deg);
          .line:nth-child(2) {
            width: 0px;
          }
          .line:nth-child(1),
          .line:nth-child(3) {
            transition-delay: 0.3s;
          }
          .line:nth-child(1) {
            transform: translateY(9px);
          }
          .line:nth-child(3) {
            transform: translateY(-12px) rotate(90deg);
          }
        }
        .line {
          display: none;
          width: 32px;
          height: 2px;
          background-color: #fff;
          display: block;
          margin: 8px auto;
          -webkit-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
  &.active {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.13);
    background: #fff;
    div.contain {
      div.header-inner {
        .logo a {
          background: url(${logoNegro}) center no-repeat;
          background-size: contain;
        }
        nav ul li a {
          color: #3e3874;
          &:hover:after {
            background-color: #3e3874;
          }
          &.active:after {
            background-color: #3e3874;
          }
        }
        .button-box {
          a {
            &:last-child {
              border: 2px solid #3e3874;
              color: #3e3874;
              &.white:hover {
                background: rgba(62, 56, 116, 0.2);
              }
            }
          }
        }
        .hamburger {
          .line {
            background-color: #3e3874;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    div.contain {
      div.header-inner {
        .box-nav {
          nav {
            width: 360px;
            margin-left: 70px;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    div.contain {
      div.header-inner {
        .box-nav {
          nav {
            width: 360px;
            margin-left: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    div.contain {
      div.header-inner {
        .box-nav {
          background: #fff;
          display: none;
          height: 100vh;
          left: 0;
          margin: 0;
          max-height: 100vh;
          max-width: 100vw;
          overflow: hidden;
          padding: 0;
          opacity: 0;
          position: fixed;
          top: 0;
          width: 100vw;
          z-index: -1;
          &.active {
            background-color: #8290ff;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            opacity: 1;
            z-index: 10;
            nav {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0;
              width: 100%;
              ul {
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0;
                padding: 0;
                width: 100%;
                li {
                  margin-bottom: 4vh;
                  font-size: 26px;
                  a {
                    color: #fff;
                    font-weight: 100;
                    &:hover {
                      font-weight: 300;
                    }
                    &.active {
                      font-weight: 300;
                    }
                  }
                }
              }
            }
            .button-box {
              margin-left: 0;
              margin-top: 4vh;
              max-width: 300px;
              width: 100%;
              .button {
                font-size: 16px;
                padding: 18px;
                width: 100%;
                &:first-child {
                  background-color: #fff;
                  border-color: #fff;
                  color: #3e3874;
                  margin: 0 0 24px;
                }
                &:last-child {
                  margin: 0;
                  margin-left: 0;
                }
                &:hover {
                  &:first-child {
                    background-color: rgba(255, 255, 255, 0.65);
                  }
                }
              }
            }
          }
        }
        .hamburger {
          display: block;
          z-index: 12;
          &.active .line {
            background-color: #fff;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    div.contain {
      padding: 0 4%;
    }
  }
  @media (max-width: 480px) {
    div.contain {
      padding: 0 8%;
    }
  }
`;

export const FooterBox = styled.footer`
  width: 100%;
  background: #3e3874;
  > div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 1024px;
    padding: 22px;
    .button-box {
      display: flex;
      justify-content: space-between;
      width: 350px;
      a {
        color: #fff;
        cursor: pointer;
        font-family: "roboto", sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1;
        text-align: center;
        position:relative;
        text-decoration: none;
        &:hover {
          text-decoration: none;
          &:after {
            text-decoration: none;
            position: absolute;
            bottom: -3px;
            content: "";
            display: block;
            height: 1px;
            background-color: #fff;
            width: 100%;
          }
        }
        &.active:after {
          position: absolute;
          bottom: -3px;
          content: "";
          display: block;
          height: 1px;
          background-color: #fff;
          width: 100%;
        }
      }
    }
    ${Paragraphs} {
      font-size: 14px;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 768px) {
    > div {
      padding: 32px;
      flex-direction: column;
      .button-box {
        margin-bottom: 30px;
      }
    }
  }
  @media (max-width: 480px) {
    > div 
      .button-box {
        flex-direction: column;
        margin-bottom: 0px;
        width:initial;
        a{
          margin-bottom:30px;
        }
      }
    }
  }
`;

//Components HOME PAGE
export const Col2Header = styled.div`
  padding: 125px 0 0;
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
    padding: 135px 0 10px;
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
  @media (max-width: 1024px) {
    padding: 150px 0 15px;
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
    padding-top: 125px;
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
    ${BoxImg} {
      img {
        top: 30px;
      }
    }
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
  margin-top: ${props => (props.marginTopNone ? "0" : "70px")};
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
  ${H2} {
    margin-bottom: 15px;
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
    margin-top: ${props => (props.marginTopNone ? "0" : "50px")};
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
    margin-top: ${props => (props.marginTopNone ? "0" : "40px")};
    ${ContentText} {
    }
    ${BoxImg} {
      width: 100%;
      max-width: 250px;
    }
  }
`;

export const SectionServicesRates = styled.div`
  padding: 100px 0 70px;
  width: 100%;
  &.first-section {
    padding-top: 130px;
  }
  .col5 {
    padding: 30px 0 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 100%;
  }
  ${H1}, ${H2} {
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

export const FaqsBox = styled.div`
  padding: 100px 0 70px;
  width: 100%;
  &.first-section {
    padding-top: 130px;
  }
  ${H1}, ${H2} {
    text-align: center;
    margin-bottom: 30px;
    max-width: 480px;
  }
  .accordion {
    max-width: 768px;
    width: 100%;
    .accordion-item {
      border-bottom: 1px solid #fff;
      max-width: 768px;
      padding: 24px 0;
      width: 100%;
      .accordion-title {
        .accordion-title-inner {
          outline: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-bottom: 0px;
          justify-content: space-between;
          width: 100%;
          ${ParagraphTop} {
            padding-bottom: 0px;
            width: 90%;
          }
          .icon {
            position: relative;
            height: 22px;
            width: 22px;
            img {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(0, -50%);
              &.icon-by-plus {
                opacity: 0;
              }
            }
          }
          &[aria-expanded="true"] {
            margin-bottom: 12px;
            .icon {
              img {
                &.icon-by-plus {
                  opacity: 1;
                  transform: rotate(90deg);
                }
              }
            }
          }
        }
      }
    }
  }
  > .button {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    padding: 70px 0 50px;
    ${H1}, ${H2} {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 480px) {
    padding: 50px 0 30px;
    ${H1}, ${H2} {
      margin-bottom: 5px;
    }
  }
`;

export const SectionReviewsHome = styled.div`
  padding: 100px 0 70px;
  .box-faqs {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    .box-title {
      width: 22%;
      ${H1}, ${H2} {
        margin-bottom: 30px;
      }
      .average {
        ${ParagraphTop} {
          font-weight: 700;
          margin-bottom: 10px;
          &:last-child {
            font-size: 100px;
            margin-bottom: 0px;

            span {
              font-weight: 300;
              font-size: 60px;
            }
          }
        }
      }
    }
    .box-reviews {
      align-items: flex-start;
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 66%;
      &:before,
      &:after {
        background: url(${comillas}) no-repeat center;
        bottom: -65px;
        content: "";
        display: block;
        height: 94px;
        position: absolute;
        transform: rotate(-180deg) scaleX(-1);
        right: -20px;
        width: 94px;
        z-index: -1;
      }
      &:before {
        top: -65px;
        transform: rotate(0);
        left: -20px;
      }
    }
  }
  > .button {
    margin-top: 70px;
  }
  @media (max-width: 1200px) {
    .box-faqs {
      .box-title ${H1}, .box-title ${H2} {
        margin-bottom: 25px;
      }
      .box-reviews {
        width: 73%;
      }
    }
  }
  @media (max-width: 960px) {
    padding: 70px 0 50px;
    .box-faqs {
      flex-direction: column;
      align-items: center;
      .box-title {
        display: flex;
        justify-content: space-around;
        max-width: 100%;
        width: 100%;
        align-items: flex-start;
        ${H1}, ${H2} {
          margin-bottom: 0;
          width: 30%;
        }
        .average {
          ${ParagraphTop} {
            &:last-child {
              font-size: 80px;
              span {
                font-size: 40px;
              }
            }
          }
        }
      }
      .box-reviews {
        justify-content: space-around;
        margin-top: 70px;
        width: 100%;
        &:before,
        &:after {
          bottom: -6px;
          height: 75px;
          right: -5px;
          width: 75px;
        }
        &:before {
          top: -50px;
          transform: rotate(0);
          left: -5px;
        }
      }
    }
    > .button {
      margin-top: 50px;
    }
  }
  @media (max-width: 768px) {
    padding: 50px 0 40px;
    .box-faqs {
      .box-title {
        flex-direction: column;
        align-items: center;
        ${H1}, ${H2} {
          text-align: center;
          margin-bottom: 30px;
          max-width: 350px;
          width: 100%;
        }
      }
      .box-reviews {
        flex-direction: column;
        justify-content: center;
        margin-top: 50px;
        &:before,
        &:after {
          display: none;
        }
      }
    }
    > .button {
      margin-top: 10px;
    }
  }
`;

export const SectionReviewsHeader = styled(SectionReviewsHome)`
  &.first-section {
    padding-top: 130px;
  }
  .box-faqs {
    display: flex;
    flex-direction: column;
    width: 100%;
    ${H1}, ${H2} {
      width: 100%;
      margin-bottom: 20px;
    }
    .box-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      ${Paragraphs} {
        padding: 0;
        width: 65%;
      }
      .average {
        text-align: right;
        width: 35%;

        ${ParagraphTop}:first-child {
          padding-bottom: 0;
        }
        ${ParagraphTop}:last-child {
          line-height: 1;
        }
      }
    }
  }
`;
export const SectionReviews = styled(SectionReviewsHome)`
.box-faqs {
    display: flex;
    flex-direction: column;
    width: 100%;
    .box-title {
      margin-bottom:40px;
      width: 100%;
        ${H1}, ${H2} {
          width: 100%;
          margin-bottom: 10px;
        }
     
    }
    .box-reviews{
       width:100%;
       flex-flow: row wrap;
       &:before,
        &:after {
          display: none;
        }
      
       > div{
         width: 31.5%;
         margin-bottom: 30px;
       }
    }
`;

export const FormBox = styled.form``;
export const LightBox = styled.div``;
