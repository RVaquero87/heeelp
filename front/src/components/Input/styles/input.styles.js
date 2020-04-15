import styled from "styled-components";

export const InputText = styled.input.attrs({
  autoComplete: "on",
})`
  appearance: none !important;
  background-color: transparent !important;
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid #e3e4e8;
  box-shadow: none;
  color: #3e3874;
  display: block;
  margin: 0px;
  padding: 1px 5px;
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
  &[type="checkbox"] {
    appearance: checkbox !important;
  }
`;

export const LabelText = styled.label`
  color: #9a9caf;
  display: block;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 10px;
  width: 100%;
`;
