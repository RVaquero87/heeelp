import styled from "styled-components";

export const AreaBox = styled.textarea`
  border: none;
  border-bottom: 1px solid #e3e4e8;
  box-shadow: none;
  display: block;
  margin-bottom: 30px;
  width: 100%;
  &.error {
    border-bottom: 1px solid tomato;
  }
`;

export const LabelAreaText = styled.label`
  color: #9a9caf;
  display: block;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.2;
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
