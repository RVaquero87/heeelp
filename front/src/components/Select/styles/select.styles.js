import styled from "styled-components";

//Images
import arrowBottom from "../../../../public/images/arrow.svg";

export const BoxSelect = styled.div`
  &.rol-box {
    align-items: center;
    cursor: text;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 12px;
    font-size: 14px;
    pointer-events: none;
    line-height: 1;
    label {
      font-size: 14px;
      width: initial;
      margin: 0;
      outline: none;
      &:active,
      &:focus {
        outline: none;
      }
      &:after {
        display: none;
      }
    }
    select {
      border: none;
      cursor: text;
      color: #3e3874;
      line-height: 1;
      margin-left: 12px;
      padding: 0;
      width: initial;
      &:-internal-autofill-selected {
        background-color: initial !important;
      }
    }
  }
`;

export const SelectText = styled.select`
  appearance: none !important;
  background-color: transparent !important;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #e3e4e8;
  box-shadow: none;
  display: block;
  font-family: "Roboto", sans-serif;
  margin: 0px;
  max-width: 100%;
  padding: 1px 5px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  &:-internal-autofill-selected {
    background-color: transparent !important;
  }
  &:active,
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

export const LabelText = styled.label`
  color: #9a9caf;
  display: block;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  &:after {
    background: url(${arrowBottom}) center no-repeat;
    content: " ";
    display: block;
    height: 10px;
    position: absolute;
    right: 8px;
    top: 40px;
    width: 17px;
  }
`;
