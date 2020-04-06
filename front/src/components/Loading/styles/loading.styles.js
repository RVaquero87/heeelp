import styled from "styled-components";

export const LoadingBox = styled.div`
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
