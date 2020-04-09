import styled from "styled-components";

//Images
import logo from "../images/logo-blanco.svg";
import logoNegro from "../images/logo-negro.svg";
import comillas from "../images/comillas.svg";
import arrowBottom from "../images/arrow.svg";

//Global Class
export const GlobalContent = styled.div`
  .button {
    background: #3e3874;
    border-radius: 30px;
    border: 2px solid #3e3874;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: "Roboto", verdana, sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1;
    outline: none;
    padding: 10px 25px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    &.transparent {
      background: rgba(255, 255, 255, 0);
      border: 2px solid #ffffff;
      color: #ffffff;
    }
    &.transparent-blue {
      background: rgba(255, 255, 255, 0);
      border: 2px solid #3e3874;
      color: #3e3874;
    }
    &.white {
      background: rgba(255, 255, 255);
      border: 2px solid rgba(255, 255, 255);
      color: #3e3874;
    }
    &.big {
      font-size: 16px;
      padding: 15px 35px;
    }
    &:hover {
      background: #5f63b9;
      color: #ffffff;
      border-color: #5f63b9;
      text-decoration: none;
      transition: all ease 500ms;
      &.transparent,
      &.transparent-blue {
        background: #5f63b9;
        border: 2px solid #3e3874;
        color: #fff;
      }
      &.white {
        background: rgba(255, 255, 255, 0.5);
        border: 2px solid rgba(255, 255, 255, 0);
        color: #3e3874;
      }
    }
    @media (max-width: 480px) {
      display: block;
      font-size: 16px;
      line-height: 1;
      padding: 15px;
      margin: 0 auto;
      max-width: 300px;
      width: 100%;
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
  background: ${(props) => {
    switch (props.bgColor) {
      case "blueLight":
        return "#8290ff";
      case "blueMaxLight":
        return "#a2b2ff";
      case "blue":
        return "#3e3874";
      case "orange":
        return "#ffa500";
      case "grey":
        return "#f2f3f7";
      default:
        return "#fff;";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  &.z1 {
    position: relative;
    z-index: 1;
  }
  .contain {
    display: flex;
    margin: 0 auto;
    justify-content: ${(props) => {
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
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    align-items: center;
    max-width: 1200px;
    width: 100%;
    &.first-section {
      padding-top: 180px;
      padding-bottom: 100px;
    }
  }
  @media (max-width: 1200px) {
    .contain.first-section {
      padding-top: 160px;
      padding-bottom: 80px;
    }
  }
  @media (max-width: 1024px) {
    .contain.first-section {
      padding-top: 140px;
      padding-bottom: 70px;
    }
  }
  @media (max-width: 768px) {
    .contain.first-section {
      padding-top: 120px;
      padding-bottom: 60px;
    }
  }
`;

//Components Text
export const H1 = styled.h1`
  color: ${(props) => {
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
  color: ${(props) => {
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
  color: ${(props) => (props.blue ? "#393b4f" : "#fff")};
  font-family: "Roboto", verdana, sans-serif;
  padding-bottom: 32px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
  span {
    font-weight: 500;
  }
  span.item-light {
    font-weight: 100;
  }
  &:last-child {
    padding-bottom: 0;
  }
  a {
    color: ${(props) => (props.blue ? "#393b4f" : "#fff")};
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
    padding-bottom: 22px;
  }
`;

export const Paragraphs = styled(ParagraphTop)`
  font-weight: ${(props) => (props.bold ? "700" : "300")};
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

export const ErrorMessage = styled.div`
  background: #fdcfcc;
  border-radius: 3px;
  bottom: -26px;
  color: #e74128;
  font-size: 13px;
  font-weight: 300;
  line-height: 1;
  margin: 0;
  padding: 2px 4px;
  position: absolute;
  &:after {
    content: "";
    position: absolute;
    top: -5px;
    left: 7px;
    border-color: transparent transparent #fdcfcc transparent;
    border-style: solid;
    border-width: 0 5px 5px 5px;
    height: 0;
    width: 0;
  }
`;

//Component Elements
export const Button = styled.button`
  background: ${(props) => {
    switch (props.type) {
      case "transparent":
        return "rgba(255,255,255, 0)";
      case "transparent-blue":
        return "rgba(255,255,255, 0)";
      case "white":
        return "rgba(255,255,255)";
      default:
        return "#3e3874";
    }
  }};
  border-radius: 30px;
  border: 2px solid
    ${(props) => {
      switch (props.type) {
        case "transparent":
          return "#ffffff";
        case "transparent-blue":
          return "#3e3874";
        case "white":
          return "rgba(255,255,255)";
        default:
          return "#3e3874";
      }
    }};
  box-sizing: border-box;
  color: ${(props) => {
    switch (props.type) {
      case "transparent":
        return "#ffffff";
      case "transparent-blue":
        return "#3e3874";
      case "white":
        return "#3e3874";
      default:
        return "#ffffff";
    }
  }};
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", verdana, sans-serif;
  font-size: ${(props) => (props.big ? "16px" : "14px")};
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
  outline: none;
  padding: ${(props) => (props.big ? "15px 35px" : "10px 25px")};
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background: ${(props) => {
      switch (props.type) {
        case "transparent":
          return "#5f63b9";
        case "transparent-blue":
          return "#5f63b9";
        case "white":
          return "rgba(255,255,255, .5)";
        default:
          return "#5f63b9";
      }
    }};
    border-color: ${(props) => {
      switch (props.type) {
        case "transparent":
          return "#3e3874";
        case "transparent-blue":
          return "#3e3874";
        case "white":
          return "rgba(255,255,255, 0)";
        default:
          return "#5f63b9";
      }
    }};
    color: ${(props) => {
      switch (props.type) {
        case "transparent":
          return "#ffffff";
        case "transparent-blue":
          return "#ffffff";
        case "white":
          return "#3e3874";
        default:
          return "#ffffff";
      }
    }};
    text-decoration: none;
    transition: all ease 500ms;
  }
  @media (max-width: 480px) {
    display: block;
    font-size: 16px;
    line-height: 1;
    padding: 15px;
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
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
      background: url(${arrowBottom}) center no-repeat;
      content: " ";
      height: 10px;
      position: absolute;
      right: 8px;
      top: 53%;
      transform: translate(0, -50%);
      width: 17px;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 35px;
    width: 100%;
    ${Paragraphs} {
      width: 50%;
      padding-right: 30px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    width: initial;
    ${Paragraphs} {
      width: 100%;
      padding-right: 0;
      margin-bottom: 10px;
    }
    .box-filter {
      select {
        padding-left: 0px;
      }
    }
  }
`;

export const FormBox = styled.form`
  margin: 25px auto 0;
  max-width: 768px;
  width: 100%;
  ${H1}, ${H2} {
    color: #393b4f;
    font-size: 24px;
    line-height: 1.2;
    width: 100%;
  }
  .box-input {
    position: relative;
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const LightBoxError = styled.div`
  background: #cbcff5;
  animation: messageError 500ms ease-in;
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  text-align: center;
  width: 100%;
  ${Paragraphs} {
    color: #393b4f;
    font-size: 14px;
    font-weight: 300;
    line-height: 1;
    padding: 15px;
    z-index: 3;
  }
  @keyframes messageError {
    0% {
      bottom: -50px;
      opacity: 0;
    }
    100% {
      bottom: 0px;
      opacity: 1;
    }
  }
`;

//Components DIV
export const ContainDivDefault = styled.div`
  padding: 70px 0 50px;
  max-width: 1200px;
  width: 100%;
  &.first-section {
    padding-top: 180px;
    padding-bottom: 100px;
  }
  &.special-padding {
    padding: 100px 0 50px;
  }
  @media (max-width: 1200px) {
    &.first-section {
      padding-top: 160px;
      padding-bottom: 80px;
    }
  }
  @media (max-width: 1024px) {
    &.first-section {
      padding-top: 140px;
      padding-bottom: 70px;
    }
  }
  @media (max-width: 768px) {
    &.first-section {
      padding-top: 120px;
      padding-bottom: 60px;
    }
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
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1200px;
      padding: 24px 0;
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
        justify-content: flex-end;
        width: 100%;
        nav {
          margin: 0;
          padding: 0;
          margin-right: 64px;
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
                &:hover,
                &.active {
                  font-weight: 500;
                }
                &:hover:after,
                &.active:after {
                  background-color: #fff;
                  bottom: -7px;
                  content: "";
                  display: block;
                  height: 2px;
                  left: 50%;
                  position: absolute;
                  text-decoration: none;
                  transform: translate(-50%, 0);
                  width: 24px;
                }
              }
            }
          }
        }
        .button-box {
          display: flex;
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
              color: #3e3874;
              border-color: #3e3874;
              &:hover {
                color: #fff;
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
            margin-right: 54px;
            width: 400px;
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
            margin-right: 48px;
            width: 360px;
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    div.contain {
      div.header-inner {
        border: none;
        .logo {
          max-width: 130px;
        }
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
              display: flex;
              max-width: 650px;
              justify-content: space-between;
              width: 100%;
              .button {
                font-size: 16px;
                max-width: 300px;
                padding: 18px;
                width: 100%;
                &:first-child {
                  background-color: #fff;
                  border-color: #fff;
                  color: #3e3874;
                  margin: 0;
                  &:hover {
                    border-color: #3e3874;
                  }
                }
                &:last-child {
                  border-color: #fff;
                  color: #fff;
                  margin: 0;
                  margin-left: 0;
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
      div.header-inner {
        .box-nav {
          &.active {
            .button-box {
              flex-direction: column;
              align-items: center;
              .button {
                font-size: 16px;
                max-width: 290px;
                padding: 18px;
                width: 100%;
                &:first-child {
                  margin: 0 0 30px;
                }
              }
            }
          }
        }
      }
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

export const Col2HeaderContact = styled(Col2Header)`
  &.contain {
    ${ContentText} {
      width: initial;
    }
    ${BoxImg} {
      max-width: 400px;
      img {
        top: 28px;
      }
    }
  }
  @media (max-width: 960px) {
    &.contain {
      flex-direction: row;
      ${ContentText} {
        padding-bottom: 0;
        width: initial;
        ${H1} {
          line-height: 1;
          padding-bottom: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      flex-direction: row;
      ${BoxImg} {
        max-width: 55%;
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      justify-content: space-between;
      ${BoxImg} {
        img {
          top: 40px;
        }
      }
    }
  }
`;

export const Col2HeaderLogin = styled(Col2Header)`
  &.contain {
    ${ContentText} {
      width: initial;
    }
    ${BoxImg} {
      max-width: 250px;
      img {
        top: 28px;
      }
    }
  }
  @media (max-width: 960px) {
    &.contain {
      flex-direction: row;
      ${ContentText} {
        padding-bottom: 0;
        width: initial;
        ${H1} {
          line-height: 1;
          padding-bottom: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      flex-direction: row;
      ${BoxImg} {
        max-width: 40%;
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      justify-content: space-between;
      ${BoxImg} {
        max-width: 50%;
        img {
          top: 40px;
        }
      }
    }
  }
`;

export const Col2Min = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => {
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
  margin-top: ${(props) => (props.marginTopNone ? "0" : "70px")};
  margin-bottom: ${(props) => (props.latest ? "70px" : "0")};
  width: 100%;
  ${ContentText} {
    width: 40%;
  }
  ${BoxImg} {
    width: 35%;
    margin: ${(props) => (props.inverse ? "0 5% 0 0" : "0 0 0 5%")};
    order: ${(props) => (props.inverse ? "-1" : "0")};
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
    margin-bottom: ${(props) => (props.latest ? "50px" : "0")};
    justify-content: center;
    flex-direction: column;
    margin-top: ${(props) => (props.marginTopNone ? "0" : "50px")};
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
    margin-bottom: ${(props) => (props.latest ? "40px" : "0")};
    margin-top: ${(props) => (props.marginTopNone ? "0" : "40px")};
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
      justify-content: center;
      align-items: flex-start;
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
                opacity: 1;
                transform: rotate(90deg);
              }
            }
          }
          &[aria-expanded="true"] {
            margin-bottom: 12px;
            .icon {
              img {
                &.icon-by-plus {
                  transform: rotate(0deg);
                  transition: all ease 300ms;
                  opacity: 0;
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
          span {
            font-weight: 100;
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    .box-faqs {
      .box-title {
        .average {
          ${ParagraphTop} {
            &:last-child {
              font-size: 100px;
              span {
                font-size: 60px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .box-faqs {
      .box-title {
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        > ${Paragraphs} {
          width: 100%;
          margin-bottom: 40px;
        }
        .average {
          margin: 0 auto;
          width: initial;
          ${ParagraphTop} {
            font-size: 20px;
          }
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
      margin-bottom: 40px;
      width: 100%;
      ${H1}, ${H2} {
        width: 100%;
        margin-bottom: 10px;
      }
      ${Paragraphs} {
        max-width: 800px;
      }
    }
    .box-reviews {
      width: 100%;
      flex-flow: row wrap;
      &:before,
      &:after {
        display: none;
      }

      > div {
        width: 31.5%;
        margin-bottom: 30px;
      }
    }
  }
  @media (max-width: 960px) {
    .box-faqs {
      align-items: flex-start;
      .box-title {
        flex-direction: column;
      }
      .box-reviews {
        justify-content: space-between;
        margin-top: 0;
        > div {
          max-width: initial;
          width: 48%;
          .message {
            height: 160px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .box-faqs {
      .box-title {
        align-items: flex-start;
        ${H2} {
          text-align: left;
        }
      }
      .box-reviews {
        justify-content: center;
        align-items: center;
        > div {
          max-width: 480px;
          margin-bottom: 40px;
          width: 100%;
          .message {
            height: initial;
          }
        }
      }
    }
  }
`;

export const TermsBox = styled.div`
  padding: 20px 0 50px;
  ${ParagraphTop} {
    text-align: left;
    padding: 50px 0 15px;
    width: 100%;
  }
  ${Paragraphs} {
    padding-top: 0;
  }
`;

export const SectionFormBox = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 70px 0 50px;
  &.contain {
    max-width: 768px;
  }
  ${H2} {
    margin-bottom: 12px;
    text-align: center;
    width: 100%;
  }
  ${ParagraphTop} {
    text-align: center;
    width: 100%;
  }
  .button {
    position: relative;
  }
`;

export const SectionProtectedBox = styled.div`
  background: #8290ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 3;
  .box-inner {
    animation: ease-in-out 500ms protectedZoom;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    padding: 40px;
    position: relative;
    @keyframes protectedZoom {
      0% {
        transform: scale(0.3);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    ${H1} {
      margin-bottom: 30px;
    }
    .button-box {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: 30px;
      width: 100%;
      .button:last-child {
        margin-left: 36px;
      }
    }
    .button-close {
      border-radius: 100%;
      color: #3e3874;
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      font-weight: 500;
      position: absolute;
      right: 20px;
      text-decoration: none;
      top: 15px;
      width: 20px;
      height: 20px;
      &:hover {
        opacity: 0.85;
      }
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    .box-inner {
      background: none;
      animation: ease-in-out 500ms protectedTop;
      border-radius: none;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      padding: 150px 40px 20px;
      position: relative;
      @keyframes protectedTop {
        0% {
          transform: translate(0, 50%);
          opacity: 0;
        }
        100% {
          transform: translate(0, 0%);
          opacity: 1;
        }
      }
      ${H1}, ${Paragraphs} {
        color: #fff;
      }
      .button-box {
        .button:first-child {
          background: rgba(255, 255, 255);
          border: 2px solid rgba(255, 255, 255);
          color: #3e3874;
          &:hover {
            background: rgba(255, 255, 255, 0.5);
            border: 2px solid rgba(255, 255, 255, 0);
            color: #3e3874;
          }
        }
        .button:last-child {
          background: rgba(255, 255, 255, 0);
          border: 2px solid #ffffff;
          color: #ffffff;
          &:hover {
            background: #5f63b9;
            border: 2px solid #3e3874;
            color: #fff;
          }
        }
      }
      .button-close {
        display: none;
      }
    }
  }
  @media (max-width: 480px) {
    .box-inner {
      .button-box {
        flex-direction: column;
        margin-top: 24px;
        .button:last-child {
          margin: 36px auto 0;
        }
      }
    }
  }
`;

export const LightBoxRegisterRol = styled.div`
  display: none;
  &.active {
    background: #8290ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 3;
    ${H2} {
      margin-bottom: 12px;
    }
    > ${ParagraphTop} {
      text-align: center;
      max-width: 350px;
      padding-bottom: 56px;
    }
    .box-buttons {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        align-items: center;
        border-radius: 4px;
        border: solid 3px rgba(255, 255, 255, 0.5);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 320px;
        max-width: 180px;
        overflow: hidden;
        padding: 21px 0;
        position: relative;
        width: 100%;
        z-index: 0;
        &:first-child ${BoxImg} img {
          max-width: 132px;
          margin: 0 auto;
        }
        &:last-child {
          margin-left: 36px;
        }
        &:hover {
          border: solid 3px rgba(255, 255, 255, 1);
        }
        ${BoxImg} {
          position: relative;
          overflow: hidden;
          z-index: -1;
        }
        ${Paragraphs} {
          margin-top: 20px;
          padding: 0 24px;
          position: relative;
          text-transform: uppercase;
          z-index: -1;
        }
      }
    }
  }
`;
