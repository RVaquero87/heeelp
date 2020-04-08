import styled from "styled-components";

export const AreaBox = styled.textarea`
  appearance: none !important;
  background-color: transparent !important;
  border-radius: 0;
  border: 0;
  border: 1px solid #e3e4e8;
  box-shadow: none;
  display: block;
  margin: 0px;
  max-width:100%;
  min-width:100%;
  min-height:150px;
  width: 100%;
  &:-internal-autofill-selected {
    background-color: transparent !important;
  }
  &:focus {
    outline: none;
  }
  &.error {
    border: 1px solid #E74128;
    &:focus {
      border: 1px solid #E74128;
    }
  }
`;

export const LabelAreaText = styled.label`
  color: #9a9caf;
  display: block;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 10px;
  width: 100%;
`;
