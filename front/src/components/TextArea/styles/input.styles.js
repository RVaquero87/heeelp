import styled from "styled-components";

export const AreaBox = styled.textarea`
  display: block;
  margin-bottom: 30px;
  width: 100%;
  &.error {
    border: 1px solid red;
  }
`;

export const LabelAreaText = styled.label`
  display: block;
  margin-bottom: 7px;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: -19px;
`;
