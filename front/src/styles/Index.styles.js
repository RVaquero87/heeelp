import styled from "styled-components";

//Images
import logo from "../../public/images/logo-blanco.svg";
import logoNegro from "../../public/images/logo-negro.svg";
import comillas from "../../public/images/comillas.svg";
import arrowBottomBlue from "../../public/images/arrow-blue.svg";
import arrowLeftWhite from "../../public/images/arrow-white.svg";
import logOut from "../../public/images/log-out.svg";
import logOutBlue from "../../public/images/log-out-blue.svg";
import message from "../../public/images/mensajes.svg";
import messageBlue from "../../public/images/mensajes-blue.svg";
import notifications from "../../public/images/bell.svg";
import notificationsBlue from "../../public/images/bell-blue.svg";
import editProfile from "../../public/images/edit.svg";
import heart1 from "../../public/images/heart-1.svg";
import heart2 from "../../public/images/heart-2.svg";
import startOn from "../../public/images/star-on.svg";
import startOff from "../../public/images/star-off.svg";

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
      line-height: 1.2;
      padding: 15px;
      margin: 0 auto;
      max-width: 300px;
      width: 100%;
    }
  }
  .button-back {
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    justify-content: space-between;
    letter-spacing: 1px;
    line-height: 1;
    text-transform: uppercase;
    &:before {
      background: url(${arrowLeftWhite}) no-repeat center;
      content: "";
      display: block;
      height: 18px;
      margin-right: 7px;
      position: relative;
      top: -1.5px;
      width: 11px;
    }
    &:hover:before {
      animation: buttonBack 500ms ease-in-out infinite;
    }
    @keyframes buttonBack {
      0% {
        left: 0;
      }
      50% {
        left: -3px;
      }
      100% {
        left: 0;
      }
    }
  }
  .myrequest-mt {
    margin-top: 80px;
  }
  p {
    font-family: "Roboto", verdana, sans-serif;
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
  .item-resp {
    display: none;
  }
  .item-desktop {
    display: inline-block;
  }
  @media (max-width: 768px) {
    > section {
      padding: 0 4%;
    }
    .item-resp {
      display: inline-block;
    }
    .item-desktop {
      display: none;
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
      case "black":
        return "#393b4f";
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
      case "black":
        return "#393b4f";
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
  span.item-block {
    display: block;
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
    line-height: 1.2;
    padding: 15px;
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
  }
`;

export const FilterText = styled.input`
  appearance: none !important;
  background-color: transparent !important;
  border-radius: 0;
  border: 0;
  font-weight: 300;
  border-bottom: 1px solid #e3e4e8;
  box-shadow: none;
  font-family: "Roboto", sans-serif;
  display: block;
  margin: 0px;
  padding: 1px 10px;
  width: 100%;
  &:-internal-autofill-selected {
    background-color: transparent !important;
  }
  &:focus {
    border: 1px solid #e3e4e8;
    outline: none;
  }
  &.error {
    border-bottom: 1px solid #e74128;
    &:focus {
      border: 1px solid #e74128;
    }
  }
`;

export const FilterStars = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 490px;
  margin-bottom: 50px;

  ${Paragraphs} {
    padding: 0;
  }
  .box-filter {
    border-radius: 30px;
    border: solid 2px #3e3874;
    display: block;
    max-width: 100%;
    position: relative;
    width: auto;
    select {
      appearance: none;
      color: #3e3874;
      cursor: pointer;
      background-color: transparent;
      border: none;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 500;
      max-width: 100%;
      padding: 8px 40px 8px 15px;
      margin: 0%;
      width: 100%;
      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    &:after {
      background: url(${arrowBottomBlue}) center no-repeat;
      content: " ";
      height: 10px;
      pointer-events: none;
      position: absolute;
      right: 15px;
      top: 53%;
      transform: translate(0, -50%);
      width: 17px;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 35px;
    width: 100%;
    max-width: 485px;
    ${Paragraphs} {
      width: initial;
      padding-right: 30px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    ${Paragraphs} {
      width: 100%;
      padding-right: 0;
      margin-bottom: 10px;
    }
    .box-filter {
      width: 100%;
      select {
        padding-left: 25px;
        width: 100%;
      }
    }
  }
`;

export const FilterUser = styled(FilterStars)`
  margin: 0;
  display: flex;
  align-items: flex-start;
  align-items: center;
  width: 630px;

  .contain-filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${Paragraphs} {
      padding-bottom: 0;
      width: 100%;
    }
  }
  @media (max-width: 960px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    .contain-filters {
      margin-bottom: 0;
      &:last-child {
        padding-bottom: 20px;
      }
    }
  }
  @media (max-width: 480px) {
    .contain-filters {
      width: 100%;
      &:last-child {
        padding-bottom: 10px;
      }
    }
  }
`;

export const FilterContactMessage = styled(FilterStars)`
  &.contain {
    margin: 0 0 50px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .contain-filters {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      width: 490px;
      ${Paragraphs} {
        width: 330px;
      }
    }
  }
  @media (max-width: 1024px) {
    &.contain {
      .contain-filters {
        width: 48.5%;
      }
    }
  }
  @media (max-width: 960px) {
    &.contain {
      .contain-filters {
        max-width: 400px;
        width: 100%;
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      .contain-filters {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        ${Paragraphs} {
          width: 100%;
          padding-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const FilterAidsRequest = styled(FilterStars)`
  justify-content: flex-start;
  margin-bottom: 0;
  width: 100%;
  .box-filter {
    width: 260px;
    &:last-child {
      margin-left: 36px;
    }
    select {
      padding-left: 24px;
    }
  }
  @media (max-width: 768px) {
    margin: 10px auto 0;
  }
  @media (max-width: 480px) {
    margin: 10px auto 0;
    .box-filter {
      margin: 0 auto;
      max-width: 260px;
      width: 100%;
      &:last-child {
        margin: 24px auto 0;
      }
    }
  }
`;

export const FormBox = styled.form`
  margin: 25px auto 0;
  max-width: 768px;
  width: 100%;
  .box-input {
    position: relative;
    margin-bottom: 40px;
    font-family: "Roboto", sans-serif;
    width: 100%;
    &.border input {
      border: 1px solid #e3e4e8;
    }
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
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
    padding: 24px 20px;
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
  margin: 0 auto;
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
  width: 100%;
  img {
    display: block;
    max-width: 100%;
    width: 100%;
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
          ul {
            display: flex;
            justify-content: flex-end;
            list-style: none;
            padding: 0;
            width: 100%;
            li {
              font-family: "Roboto", sans-serif;
              line-height: 1;
              width: initial;
              margin-left: 50px;
              &:first-child {
                margin-left: 0;
              }
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
          overflow: hidden;
          display: flex;
          a {
            &:last-child {
              margin-left: 16px;
            }
          }
          &.icons {
            position: relative;
            align-items: center;
            overflow: initial;
            > a,
            button {
              color: #fff;
              cursor: pointer;
              margin-left: 36px;
              text-decoration: none;
              &.profile {
                display: flex;
                justify-content: space-between;
                align-items: center;

                ${BoxImg} {
                  border-radius: 100%;
                  height: 48px;
                  overflow: hidden;
                  pointer-events: none;
                  width: 48px;
                }
                p {
                  font-family: "Roboto", sans-serif;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 1;
                  margin-left: 12px;
                  position: relative;
                  pointer-events: none;
                }
                &:hover p,
                &.active p {
                  font-weight: 500;
                }
                &:hover p:after,
                &.active p:after {
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
              &.messages,
              &.notifications,
              &.log-out {
                border: none;
                padding: 0;
                height: 24px;
                position: relative;
                line-height: 0;
                font-size: 0;
                text-indent: -999999999px;
                &:hover {
                  opacity: 0.85;
                }
                &.active:after {
                  content: "";
                  background-color: #ffa500;
                  border-radius: 100%;
                  border: 2px solid #8290ff;
                  bottom: -3px;
                  height: 14px;
                  position: absolute;
                  right: -6px;
                  width: 14px;
                }
              }
              &.messages {
                background: url(${message}) no-repeat center;
                background-size: contain;
                border-radius: initial;
                width: 24px;
              }
              &.notifications {
                background: url(${notifications}) no-repeat center;
                background-size: contain;
                width: 21px;
              }
              &.log-out {
                background: url(${logOut}) no-repeat center;
                background-size: contain;
                width: 22px;
              }
            }
            .lightbox-nav {
              background-color: #ffffff;
              border-radius: 4px;
              padding: 20px 24px 10px;
              box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.1);
              position: absolute;
              right: 0;
              top: 57px;
              width: 440px;
              > button {
                display: block;
                color: #3e3874;
                cursor: pointer;
                font-family: "Roboto", sans-serif;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.88px;
                line-height: 1;
                margin: 0 auto;
                padding: 7px 10px 10px;
                text-transform: uppercase;
                width: 130px;
              }
              &:before {
                content: "";
                border-color: transparent transparent #ffffff transparent;
                border-style: solid;
                border-width: 0 6px 7px 6px;
                height: 0;
                position: absolute;
                top: -7px;
                width: 0;
              }
              &.l-notifications:before {
                right: 62px;
              }
              &.l-messages:before {
                right: 118px;
              }
              > button.active {
                position: relative;

                &:before {
                  content: "";
                  display: inline-block;
                  background-color: #ffa500;
                  border-radius: 100%;
                  height: 10px;
                  width: 10px;
                  margin-right: 4px;
                }
              }
            }
          }
        }
      }

      .hamburger {
        display: none;
        position: relative;
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
        &.active-notice:after {
          content: "";
          background-color: #ffa500;
          border-radius: 100%;
          border: 2px solid #8290ff;
          bottom: 2px;
          height: 14px;
          position: absolute;
          right: 0;
          width: 14px;
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
          &.icons {
            > a,
            button {
              color: #3e3874;
              &.profile {
                &:hover p:after,
                &.active p:after {
                  background-color: #3e3874;
                }
              }
              &.messages,
              &.notifications,
              &.log-out {
                &.active:after {
                  content: "";
                  border: 2px solid #fff;
                }
              }
              &.messages {
                background: url(${messageBlue}) no-repeat center;
                background-size: contain;
              }
              &.notifications {
                background: url(${notificationsBlue}) no-repeat center;
                background-size: contain;
              }
              &.log-out {
                background: url(${logOutBlue}) no-repeat center;
                background-size: contain;
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
            ul li {
              margin-left: 40px;
            }
            &.user-nav {
              margin-right: 27px;
            }
            &.user-helped {
              margin-right: 36px;
            }
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
            margin-right: 42px;
            ul li {
              margin-left: 30px;
            }
            &.user-nav {
              margin-right: 10px;
            }
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
          overflow: auto;
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
                  margin: 0 auto 4vh;
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
            nav {
              ul li {
                a {
                  &.active,
                  &:hover {
                    font-weight: 500;
                  }
                  &.active:after,
                  &:hover:after {
                    display: none;
                  }
                }
              }
              &.user-nav {
                ul li {
                  font-size: 24px;
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
              &.icons {
                flex-direction: column;
                justify-content: center;
                margin: 0 auto;
                max-width: 250px;
                .profile {
                  border: none;
                  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                  border-top: 1px solid rgba(255, 255, 255, 0.2);
                  padding: 1.5vh 0;
                  justify-content: center;
                  margin: 0;
                  width: 100%;
                  ${BoxImg} {
                    height: 64px;
                    width: 64px;
                  }
                  p {
                    font-size: 18px;
                    margin-left: 18px;
                    color: #fff;
                  }
                }
                .messages,
                .notifications,
                .log-out {
                  display: block;
                  margin: 5vh 0 0;
                  height: 30px;
                }
                .messages {
                  background: url(${message}) no-repeat center;
                  background-size: contain;
                  width: 32px;
                  &.active:after {
                    right: -6px;
                    width: 12px;
                  }
                }
                .notifications {
                  background: url(${notifications}) no-repeat center;
                  background-size: contain;
                  width: 28px;
                  &.active:after {
                    right: -6px;
                    width: 12px;
                  }
                }
                .log-out {
                  background: url(${logOut}) no-repeat center;
                  background-size: contain;
                  width: 29.3px;
                }
                .lightbox-nav {
                  width: 100%;
                  margin-top: 15px;
                  position: relative;
                  &:before {
                    left: 47.8%;
                    transform: (translate(-50%, 0));
                  }
                  &.l-notifications {
                    top: 0;
                    left: 0;
                  }
                  &.l-messages {
                    top: 0;
                    left: 0;
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
    &.active {
      &.icons {
        > a,
        button {
          color: #3e3874;
        }
      }
      .contain .header-inner {
        .hamburger {
          &.active-notice:after {
            border: 2px solid #ffffff;
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
        position: relative;
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
    > div .button-box {
      flex-direction: column;
      margin-bottom: 0px;
      width: initial;
      a {
        margin-bottom: 30px;
      }
    }
  }
`;

//COMPONENTS SPECIFIC
//Headers
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

export const Col2HeaderRegister = styled(Col2Header)`
  &.contain {
    ${ContentText} {
      width: initial;
    }
    ${BoxImg} {
      max-width: 361px;
      &.helped {
        max-width: 344px;
        img {
        }
      }
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
        max-width: 50%;
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      justify-content: space-between;
      ${BoxImg} {
        max-width: 55%;
        img {
          top: 0px;
        }
      }
    }
  }
`;

export const Col2HeaderPrivacy = styled(Col2Header)`
  &.contain {
    ${ContentText} {
      max-width: 250px;
      width: initial;
    }
    ${BoxImg} {
      max-width: 381px;
      img {
        top: 37px;
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
      ${BoxImg} {
        img {
          top: 45px;
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
        max-width: 45%;
        img {
          top: 0px;
        }
      }
    }
  }
`;

export const Col2HeaderTerms = styled(Col2Header)`
  &.contain {
    ${ContentText} {
      max-width: 250px;
      width: initial;
    }
    ${BoxImg} {
      max-width: 475px;
      img {
        top: 37px;
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
        max-width: 60%;
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      justify-content: space-between;
      ${BoxImg} {
        max-width: 42%;
        img {
          top: 0px;
        }
      }
    }
  }
`;

export const Col2HeaderControlUser = styled(Col2Header)`
  &.contain {
    ${ContentText} {
      width: initial;
    }
    ${BoxImg} {
      max-width: 341px;
      img {
        top: 37px;
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
      ${BoxImg} {
        img {
          top: 45px;
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
        max-width: 50%;
        img {
          top: 0px;
        }
      }
    }
  }
`;

export const Col2HeaderHomeRol = styled(Col2Header)`
  &.contain {
    padding: 150px 0 0;
    ${ContentText} {
      width: 35%;
    }
    ${BoxImg} {
      width: 60%;
      max-width: 474px;
      &.helped {
        max-width: 400px;
        img {
        }
      }
      img {
        top: 28px;
      }
    }
  }
  @media (max-width: 1200px) {
    &.contain {
      ${BoxImg} {
        max-width: 395px;
        &.helped {
          max-width: 370px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    &.contain {
      padding: 120px 0 0;
      ${BoxImg} {
        max-width: 365px;
        &.helped {
          max-width: 350px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      ${ContentText} {
        text-align: center;
        width: 100%;
      }
      ${BoxImg} {
        max-width: 325px;
        &.helped {
          max-width: 300px;
        }
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      ${BoxImg} {
        max-width: 280px;
        width: 100%;
        &.helped {
          max-width: 280px;
        }
      }
    }
  }
`;

export const SectionHeaderSingleTitle = styled.div`
  padding: 250px 0 130px;
  position: relative;
  ${H1} {
    font-size: 40px;
    line-height: 1.2;
  }
  button {
    position: absolute;
    top: 110px;
    left: 0;
  }
  @media (max-width: 1200px) {
    padding: 225px 0 120px;
    ${H1} {
      font-size: 36px;
    }
  }
  @media (max-width: 1024px) {
    ${H1} {
      font-size: 34px;
    }
  }
  @media (max-width: 960px) {
    padding: 200px 0 100px;
    ${H1} {
      font-size: 32px;
    }
  }
  @media (max-width: 960px) {
    padding: 200px 0 80px;

    ${H1} {
      font-size: 30px;
      text-align: center;
    }
  }
`;

//Sections Specials
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

//Reviews
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
  padding-top: 60px;
  &.my-reviews {
    padding-top: 80px;
    padding-bottom: 0;
    .box-faqs .box-title {
      margin-bottom: 30px;
    }
  }
  .box-faqs {
    display: flex;
    flex-direction: column;
    width: 100%;
    .box-title {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      ${H1}, ${H2} {
        width: 100%;
        margin-bottom: 10px;
      }
      ${Paragraphs} {
        max-width: 800px;
      }
      &.active {
        margin-top: 0;
      }
    }
    .box-reviews {
      width: 100%;
      flex-flow: row wrap;
      justify-content: flex-start;
      &:before,
      &:after {
        display: none;
      }

      > ${Paragraphs} {
        text-align: left;
        width: 100%;
      }

      > div {
        width: 31.5%;
        margin-bottom: 30px;
        margin-right: 2.75%;
        &:nth-child(3n) {
          margin-right: 0;
        }
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
        justify-content: space-around;
        margin-top: 0;
        > div {
          width: 48%;
          margin-right: 0;
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.my-reviews {
      justify-content: space-around;
      .box-faqs .box-title {
        margin-bottom: 20px;
      }
    }
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
          margin-bottom: 40px;
          justify-content: space-between;
          width: 100%;
          .message {
            height: initial;
          }
        }
      }
    }
  }
`;

export const SectionCreateReview = styled.div`
  .content-text {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
    &.active {
      border-bottom: 1px solid rgba(154, 156, 175, 0.3);
    }
    ${ParagraphTop} {
      padding-bottom: 0;
      width: 70%;
    }
  }
  ${FormBox} {
    margin: 0;
    padding: 80px 0;
    ${H2} {
      padding-bottom: 50px;
    }
    .rating {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-end;
      p {
        order: 1;
        color: #9a9caf;
        display: block;
        font-size: 18px;
        font-weight: 300;
        line-height: 1;
        margin-right: 10px;
      }
      button {
        background: url(${startOff}) no-repeat center;
        background-size: contain;
        cursor: pointer;
        height: 25px;
        margin-right: 7px;
        overflow: hidden;
        text-indent: -999999px;
        width: 25px;
        display: inline-block;
        &.active,
        &.active ~ button,
        &:hover,
        &:hover ~ button,
        &:focus,
        &:focus ~ button {
          background: url(${startOn}) no-repeat center;
          background-size: contain;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .content-text {
      flex-direction: column;
      padding: 60px 0;
      ${ParagraphTop} {
        padding-bottom: 24px;
        width: 100%;
      }
    }
    ${FormBox} {
      padding: 60px 0;
      ${H2} {
        padding-bottom: 40px;
      }
    }
  }
  @media (max-width: 480px) {
    ${FormBox} {
      .rating {
        flex-flow: wrap row-reverse;
        p {
          order: -1;
          margin-bottom: 10px;
          width: 100%;
        }
        button {
          height: 30px;
          margin-right: 12px;
          width: 30px;
        }
      }
    }
  }
`;

//Admin
export const SectionReviewsAdmin = styled(SectionReviews)`
  &.contain {
    padding: 0px 0 70px;
    ${FilterStars} {
      border: none;
    }
  }
`;

export const SectionUsersAdmin = styled(SectionReviews)`
  &.contain {
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
    padding: 0px 0 70px;
    .box-counter {
      align-items: flex-start;
      flex-direction: column;
      margin: 0;
      padding: 0;
      width: 155px;
      ${Paragraphs} {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  @media (max-width: 1200px) {
    width: 23%;
    margin-bottom: 26px;
    ${Paragraphs} {
      font-size: 16px;
      padding-bottom: 16px;
    }
  }
  @media (max-width: 960px) {
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
    &.contain {
      align-items: flex-start;
      flex-direction: column-reverse;
      padding-bottom: 50px;
      .box-counter {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
        ${Paragraphs} {
          max-width: 155px;
          width: 48%;
        }
      }
      ${FilterStars} {
        margin: 40px 0 0;
        max-width: 400px;
        width: 100%;
        .contain-filters {
          margin-bottom: 7px;
        }
        p {
          padding: 0;
        }
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      .box-counter {
        display: flex;
        flex-direction: column;
        ${Paragraphs} {
          width: 100%;
        }
      }
      ${FilterStars} {
        .contain-filters {
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        p {
          padding: 0;
        }
      }
    }
  }
`;

export const AdminPanelBox = styled.div`
  padding: 150px 0 0;
  border-bottom: 1px solid #e3e4e8;
  .button-box {
    display: flex;
    width: 100%;
    button {
      position: relative;
      border: 1px solid transparent;
      border-radius: 4px 4px 0 0;
      color: #3e3874;
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      line-height: 1;
      padding: 14px 28px 12px;
      position: relative;
      top: 1px;
      cursor: pointer;
      text-align: left;
      i,
      span {
        pointer-events: none;
      }
      &.active {
        background-color: #fff;
        border-color: #e3e4e8;
        border-bottom: 1px solid transparent;
      }
      svg {
        position: relative;
        margin-right: 12px;
        top: 5px;
      }
    }
  }
  @media (max-width: 1200px) {
    padding-top: 120px;
  }
  @media (max-width: 768px) {
    padding-top: 100px;
    .button-box {
      button {
        text-transform: capitalize;
        padding: 14px 16px 12px;

        span {
          display: none;
        }
      }
    }
  }
  @media (max-width: 480px) {
    padding-top: 80px;
    .button-box {
      button {
        padding: 10px 10px 8px;
        font-size: 16px;
        i {
          display: none;
        }
      }
    }
  }
`;

export const SectionUserAdminList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  > div {
    margin-right: 3.3%;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
  @media (max-width: 1200px) {
    > div {
      margin-right: 2.6%;
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 1024px) {
    > div {
      margin-right: 2%;
    }
  }
  @media (max-width: 960px) {
    > div {
      margin-right: 2.6%;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(4n) {
        margin-right: 2.7%;
      }
    }
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    > div {
      margin-right: 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 480px) {
    justify-content: space-between;
    > div {
      margin-right: auto;
      &:nth-child(3n) {
        margin-right: auto;
      }
      &:nth-child(4n) {
        margin-right: auto;
      }
    }
  }
`;

//Forms Sections Pages
export const SectionFormBox = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 100px 0;
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

export const SectionFormBoxRegister = styled(SectionFormBox)`
  .box-title-image {
    align-items: flex-start;
    display: flex;
    margin-bottom: 7px;
    justify-content: space-between;
    width: 100%;
    ${H2} {
      text-align: left;
      width: 200px;
    }
    .box-input {
      margin: 0%;
      width: 100px;
      &:after {
        color: #9a9caf;
        content: "Sube tu foto";
        display: inline-block;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
      .box-image-profile {
        border-radius: 100%;
        border: 2px solid #8290ff;
        margin: 0;
        position: relative;
        overflow: hidden;
        height: 100px;
        width: 100px;
        &:hover {
          opacity: 0.75;
        }
        img {
          width: 100%;
        }
        input {
          cursor: pointer;
          height: 100px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          top: 0;
          width: 100%;
          &:focus,
          &:active {
            outline: none;
          }
          &::-webkit-file-upload-button {
            visibility: hidden;
          }
        }
      }
    }
  }

  ${ParagraphTop} {
    font-size: 24px;
    padding: 24px 0;
    text-align: left;
  }
  .box-personal {
    .passport-dni {
      margin-bottom: 12px;
      line-height: 1;
      font-weight: 300;
      button {
        cursor: pointer;
        font-weight: 100;
        color: #9a9caf;
        padding: 0;
        &.active {
          color: #3e3874;
          font-weight: 500;
        }
      }
    }
  }
  .box-check-box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    input {
      width: 20px;
    }
    p {
      color: #9a9caf;
      font-size: 16px;
      line-height: 1.1;
      padding: 0 0 0 6px;
    }
  }
  @media (max-width: 960px) {
    .box-title-image {
      ${H2} {
        text-align: left;
        width: 150px;
      }
    }
  }
  @media (max-width: 480px) {
    .box-title-image {
      margin-bottom: 16px;
    }
  }
`;

export const SectionFormBoxContact = styled(SectionFormBox)`
  ${H2}, > ${Paragraphs}{
    text-align:left;
  }
`;

export const SectionFormBoxAdminContact = styled(SectionFormBox)`
  padding: 0 0 70px;
  form {
    margin: 0 auto;
    .delete {
      margin-left: 24px;
    }
  }
  @media (max-width: 480px) {
    form .delete {
      margin: 24px auto 0;
    }
  }
`;

export const SectionFormBoxProfile = styled(SectionFormBoxRegister)`
  &.contain {
    align-items: flex-start;
    border-bottom: 1px solid #e3e4e8;
    margin: 80px auto;
    max-width: 995px;
    padding: 0;
    ${FormBox} {
      justify-content: flex-start;
      margin: 0;
      max-width: 768px;
      padding-bottom: 64px;
      width: 100%;
      ${H2} {
        font-size: 32px;
        margin-bottom: 30px;
        text-align: left;
      }
      .box-direction {
        margin-top: 60px;
      }
      .box-input {
        label {
          font-size: 20px;
        }
      }
      .button-box {
        align-content: center;
        display: flex;
        justify-content: center;
        width: 100%;
        button:first-child {
          margin-right: 36px;
        }
      }
    }
    &.no-edit {
      .data-profile {
        justify-content: flex-start;
        margin-left: 0;
        max-width: 768px;
        padding-bottom: 64px;
        width: 100%;
        ${H2} {
          font-size: 32px;
          margin-bottom: 30px;
          text-align: left;
        }
        ${Paragraphs} {
          font-size: 20px;
          span:first-child {
            display: inline-block;
            color: #9a9caf;
            font-weight: 300;
            width: 290px;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    &.contain.no-edit {
      .data-profile {
        ${Paragraphs} span:first-child {
          width: 220px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.contain.no-edit {
      .data-profile {
        ${Paragraphs} {
          display: flex;
          align-items: flex-start;
          span {
            font-size: 16px;
            width: 50%;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      .no-edit {
        .data-profile {
          ${Paragraphs} {
            flex-direction: column;
            padding-top: 0;
            &:last-child {
              padding-bottom: 0;
            }
            span {
              width: 100%;
              &:first-child {
                padding-bottom: 3px;
              }
            }
          }
        }
      }
      .button-box {
        flex-direction: column-reverse;

        button:first-child {
          margin: 24px 0 0;
        }
      }
    }
  }
`;

//Section Services Provided
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
      align-items: flex-end;
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

export const SectionServicesProvided = styled(SectionServicesRates)`
  .total-services {
    color: #8290ff;
    font-size: 120px;
    font-weight: 700;
    line-height: 1;
    padding-bottom: 0;
    text-align: center;
  }
`;

export const SectionServicesProvidedProfile = styled(SectionServicesProvided)`
  &.contain {
    padding-top: 0;
    max-width: 995px;
  }
  ${H2} {
    align-self: flex-start;
    font-size: 32px;
    margin-bottom: 30px;
    text-align: left;
  }
  > ${Paragraphs} {
    align-self: flex-start;
    font-size: 20px;
    text-align: left;
    span:first-child {
      display: inline-block;
      color: #9a9caf;
      font-weight: 300;
      width: 290px;
    }
    span:last-child {
      font-size: 24px;
    }
  }
  .col5 {
    justify-content: space-between;
  }
`;

//Pages Sections
export const ProfileHeader = styled.div`
  &.contain {
    max-width: 995px;
    padding: 190px 0 65px;

    ${BoxImg} {
      border-radius: 100%;
      height: 230px;
      overflow: hidden;
      width: 230px;
      &.active {
        position: relative;
        overflow: visible;
        &:hover.active:after {
          opacity: 0.85;
        }
      }
      &.active:after {
        background: #fff url(${editProfile}) center no-repeat;
        background-size: 20px;
        border-radius: 100%;
        bottom: 4px;
        content: "";
        display: block;
        height: 40px;
        pointer-events: none;
        position: absolute;
        right: 30px;
        width: 40px;
      }
      .box-image-profile {
        border-radius: 100%;
        height: 230px;
        margin: 0;
        overflow: hidden;
        position: relative;
        width: 230px;
        &:hover {
          opacity: 0.75;
        }
        img {
          width: 100%;
        }
        input {
          cursor: pointer;
          height: 230px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          top: 0;
          width: 100%;
          &:focus,
          &:active {
            outline: none;
          }
          &::-webkit-file-upload-button {
            visibility: hidden;
          }
        }
      }
    }
    .box-text {
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      ${H1} {
      }
      ${H2} {
      }
      .button-box {
        align-items: center;
        display: flex;
        margin-top: 35px;
        > ${Button} {
          margin-right: 32px;
        }
        .box-unsubscribe {
          position: relative;
          > button {
            color: #fff;
            cursor: pointer;
            font-family: "Roboto", sans-serif;
            font-size: 14px;
            letter-spacing: 1px;
            position: relative;
            text-transform: uppercase;
            &:hover:after {
              background-color: #fff;
              bottom: -2px;
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
          .box-segure {
            align-items: center;
            background: #fff;
            border-radius: 5px;
            cursor: default;
            display: flex;
            justify-content: space-between;
            bottom: -80px;
            padding: 12px 20px;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0%);
            width: 200px;
            &:before {
              border-color: transparent transparent #ffffff transparent;
              border-style: solid;
              border-width: 0 7.5px 8px 7.5px;
              content: "";
              display: block;
              height: 0;
              left: 50%;
              position: absolute;
              top: -8px;
              transform: translate(-50%, 0);
              width: 0;
            }
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    &.contain {
      max-width: 995px;
      padding: 150px 0 50px;
      .box-text .button-box > ${Button} {
        margin-right: 32px;
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      flex-direction: column-reverse;
      .box-text {
        margin: 0 0 50px;
      }
      ${BoxImg} {
        height: 180px;
        width: 180px;
        &.active:after {
          bottom: 6px;
          right: 10px;
        }
        .box-image-profile {
          height: 180px;
          width: 180px;

          input {
            height: 180px;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      .box-text {
        ${H1} {
          margin-bottom: 10px;
        }
        .button-box {
          flex-direction: column;
          .box-unsubscribe {
            margin-top: 24px;
            > button:hover:after {
              display: none;
            }
            .box-segure ${Button} {
              display: inline-block;
              padding: 12px 20px;
              width: initial;
            }
          }
        }
      }
    }
  }
`;

export const TermsBox = styled.div`
  &.contain {
    padding: 60px 0 80px;
    max-width: 768px;
    ${ParagraphTop} {
      text-align: left;
      padding: 50px 0 15px;
      width: 100%;
    }
    ${Paragraphs} {
      padding-top: 0;
    }
  }
  @media (max-width: 768px) {
    &.contain {
      padding: 60px 0 50px;
    }
  }
  @media (max-width: 480px) {
    &.contain {
      padding: 30px 0 40px;
    }
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
        pointer-events: none;
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

export const SectionMessageContactContent = styled.div`
  flex-flow: row wrap;
`;

export const Page404 = styled.div`
  &.contain {
    max-width: 558px;
    height: 93vh;
    padding: 20vh 0 15vh;
    text-align: center;
    ${H1} {
      margin: 30px auto 15px;
    }
    ${Paragraphs} {
      padding-bottom: 36px;
    }
    .button-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  @media (max-height: 768px) {
    &.contain {
      height: initial;
    }
  }
  @media (max-width: 768px) {
    .button-box {
      flex-direction: column;
      .button {
        margin: 0 auto;
        .item-resp {
          display: inline-block;
        }
        &:last-child {
          margin-top: 24px;
        }
      }
    }
  }
`;

//LightBox
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
        border: solid 3px rgba(255, 255, 255, 0.3);
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
  @media (max-width: 960px) {
    &.active {
      justify-content: flex-start;
      padding: 150px 0 50px;
      overflow: scroll;
    }
  }
  @media (max-width: 480px) {
    &.active {
      justify-content: flex-start;
      padding: 140px 15px 50px;
      overflow: scroll;
      > ${ParagraphTop} {
        padding-bottom: 26px;
      }
      .box-buttons {
        button {
          height: 280px;
          &:first-child ${BoxImg} img {
            max-width: 100px;
          }
          &:last-child {
            margin-left: 16px;
          }
        }
      }
    }
  }
`;

//AidsRequest Sections
export const SectionAidsRequest = styled.div`
  padding: 96px 0 80px;
  &.zero-aids {
    ${H2} {
      margin-bottom: 34px;
    }
    .box-aids {
      justify-content: center;
    }
  }
  &.list-aids {
    padding-top: 64px;
  }
  ${H2} {
    margin-bottom: 64px;
  }
  .box-aids {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
    margin-bottom: 60px;
    width: 100%;
    > div {
      margin-right: 2.7%;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  &.my-request-aids {
    padding-bottom: 0;
    ${H2} {
      text-align: left;
      display: inline-block;
      width: 100%;
      .item-block {
        display: inline;
      }
    }
    .box-aids {
      margin-bottom: 0;
      > .box-button {
        display: block;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        width: 100%;
      }
    }
    &.zero-aids {
      .box-aids {
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .box-aids {
      justify-content: center;
      align-items: center;
      > div {
        max-width: 360px;
        width: 100%;
        margin-right: 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width: 480px) {
    &.my-request-aids {
      ${H2} .item-block {
        display: block;
      }
    }
    &.list-aids {
      padding-top: 40px;
    }
    .box-aids {
      > div {
        max-width: 330px;
      }
    }
  }
`;

export const SectionFilterAidRequest = styled.div`
  padding-top: 90px;
`;

export const SectionCreateAidsRequest = styled.div`
  .content-text {
    align-items: center;
    border-top: 1px solid rgba(154, 156, 175, 0.3);
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
    &.active {
      border-bottom: 1px solid rgba(154, 156, 175, 0.3);
    }
    ${ParagraphTop} {
      padding-bottom: 0;
      width: 70%;
    }
  }
  ${FormBox} {
    margin: 0;
    padding: 80px 0;
    ${H2} {
      padding-bottom: 50px;
    }
  }
  @media (max-width: 960px) {
    .content-text {
      flex-direction: column;
      padding: 60px 0;
      ${ParagraphTop} {
        padding-bottom: 24px;
        width: 100%;
      }
    }
    ${FormBox} {
      padding: 60px 0;
      ${H2} {
        padding-bottom: 40px;
      }
    }
  }
`;

export const SectionEditAidsRequest = styled(SectionCreateAidsRequest)`
  &.contain {
    max-width: 960px;
    .content-text {
      flex-direction: column;
      ${ParagraphTop} {
        width: 100%;
      }
      .buttons-options {
        margin-top: 36px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        ${Button} {
          margin-right: 24px;
        }
        .link {
          color: #3e3874;
          cursor: pointer;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
          position: relative;
          text-transform: uppercase;
          &:hover:after {
            background-color: #3e3874;
            bottom: -2px;
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
  @media (max-width: 768px) {
    &.contain {
      .content-text {
        .buttons-options {
          flex-direction: column;
          margin-top: 24px;

          ${Button} {
            margin: 0 auto 24px;
            width: 100%;
            max-width: 320px;
          }
        }
      }
    }
  }
`;

export const SectionDetailsContent = styled.div`
  &.contain {
    padding: 96px 0 64px;
    align-items: flex-start;
    max-width: 960px;
    border-bottom: 1px solid rgba(154, 156, 175, 0.3);

    .aids-content {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;

      .content {
        max-width: 700px;
        padding-right: 50px;
        width: 100%;
        ${H2} {
          font-size: 32px;
          line-height: 1.2;
          padding-bottom: 12px;
        }
        ${ParagraphTop} {
          color: #9a9caf;
        }
      }
      .button-box {
        .btn-require {
          align-items: center;
          border-radius: 22px;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          font-family: "Roboto", sans-serif;
          font-size: 12px;
          font-weight: 700;
          justify-content: center;
          line-height: 1;
          padding: 10px 16px;
          margin-bottom: 24px;

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
      }
    }
    .aids-details {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 200px;
      .text {
        > p {
          color: #9a9caf;
          font-weight: 300;
          font-size: 16px;
          text-align: right;
          padding-bottom: 24px;

          span {
            display: block;
            font-weight: 700;
            color: #393b4f;
          }
        }
      }

      .type {
        text-align: right;
        ${BoxImg} {
          display: inline-block;
          max-width: 70px;
          margin-bottom: 7px;
        }
        ${Paragraphs} {
          color: #3e3874;
        }
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      padding-top: 70px;
      .aids-content {
        .content {
          ${H2} {
            font-size: 28px;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      flex-direction: column;
      .aids-content {
        .content {
          padding-right: 0;
          ${H2} {
            font-size: 24px;
          }
        }
      }
      .aids-details {
        align-items: flex-end;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 36px;
        .text {
          > p {
            text-align: left;
            line-height: 1.2;
            &:last-child {
              padding-bottom: 0;
            }
            span {
              padding-top: 4px;
            }
          }
        }

        .type {
          max-width: 140px;
          ${Paragraphs} {
            line-height: 1.2;
          }
        }
      }
    }
  }
`;

export const SectionDetailsProfile = styled.div`
  &.contain {
    align-items: flex-end;
    border-bottom: 1px solid rgba(154, 156, 175, 0.3);
    flex-flow: wrap row;
    max-width: 960px;
    padding: 64px 0;
    ${H2} {
      font-size: 32px;
      line-height: 1.2;
      padding-bottom: 40px;
      width: 100%;
    }
    .user {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      max-width: 700px;
      padding-right: 50px;
      width: 100%;
      ${BoxImg} {
        border-radius: 100%;
        height: 128px;
        margin-right: 24px;
        overflow: hidden;
        width: 128px;
        min-width: 128px;
      }
      .data-user {
        ${ParagraphTop} {
          color: #3e3874;
          line-height: 1.2;
          padding-bottom: 10px;
          &.special {
            color: #9a9caf;
          }
          &:last-child {
            padding-bottom: 0;
          }
        }
      }
    }
    .actions {
      margin-bottom: 10px;
    }
    ${FormBox} {
      margin: 60px auto 0;
    }
  }
  @media (max-width: 960px) {
    &.contain {
      .user {
        padding-right: 0;
        width: 70%;
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      ${H2} {
        font-size: 28px;
      }
      .user {
        width: 100%;
      }
      .actions {
        margin: 36px 0 0;
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      ${H2} {
        font-size: 24px;
      }
      .user {
        ${BoxImg} {
          height: 100px;
          margin-right: 15px;
          width: 100px;
          min-width: 100px;
        }
        .data-user {
          ${ParagraphTop} {
            padding-bottom: 7px;
            &.special {
            }
          }
        }
      }
      .actions {
        width: 100%;
        margin: 36px 0 0;
      }
    }
  }
`;

export const SectionDetailsListItem = styled.div`
  &.contain {
    max-width: 960px;
    padding: 64px 0;
    position: relative;
    ${H2} {
      font-size: 32px;
      line-height: 1.2;
      padding-bottom: 40px;
      width: 100%;
    }
    .box-list {
      align-items: flex-start;
      display: flex;
      flex-flow: wrap row;
      justify-content: space-between;
      width: 100%;
    }
    .buttons-box {
      position: absolute;
      top: 62px;
      right: 0;
    }
    .box-create-form {
      width: 100%;
      margin-bottom: 60px;
      ${FormBox} {
        margin-top: 0;
        max-width: initial;
      }
    }
  }
  @media (max-width: 768px) {
    &.contain {
      ${H2} {
        font-size: 28px;
      }
    }
  }
  @media (max-width: 480px) {
    &.contain {
      ${H2} {
        font-size: 24px;
      }
      ${H2} {
        padding-bottom: 24px;
      }
      .buttons-box {
        position: static;
        width: 100%;
        margin: 0 auto 24px;
      }
    }
  }
`;

//Notifications
export const SectionNotificationsList = styled.div`
  &.contain {
    padding: 64px 0 80px;
    justify-content: flex-start;
    max-width: 960px;
    min-height: 49vh;
    .box-notifications {
      width: 100%;
    }
  }
  @media (max-width: 960px) {
    &.contain {
      min-height: 50vh;
    }
  }
  @media (max-width: 480px) {
    &.contain {
      min-height: 39vh;
    }
  }
`;

export const SectionTabsMessages = styled.div`
  padding: 64px 0 16px;
  margin-bottom: 64px;
  border-bottom: 1px solid #e3e4e8;
  button {
    color: #3e3874;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.2;
    position: relative;
    text-transform: uppercase;
    &:first-child {
      margin-right: 40px;
    }
    &:hover:after,
    &.active:after {
      background: #3e3874;
      bottom: -16px;
      content: "";
      height: 3px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
`;

export const SectionMessagesList = styled.div`
  &.contain {
    padding: 64px 0 80px;
    justify-content: flex-start;
    min-height: 49vh;
    .box-messages {
      width: 100%;
    }
  }
  @media (max-width: 960px) {
    &.contain {
      min-height: 50vh;
    }
  }
  @media (max-width: 480px) {
    &.contain {
      min-height: 39vh;
    }
  }
`;
