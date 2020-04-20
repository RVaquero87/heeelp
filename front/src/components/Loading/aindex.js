//React
import React from "react";

//Images
import loading from "../../../public/images/loading.gif";

//Styles
import styled from "styled-components";

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.65);
  img {
    width: 80px;
  }
`;

const Loading = () => (
  <LoadingBox>
    <img src={loading} />
  </LoadingBox>
);

export default Loading;
