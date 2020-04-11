//Styles & AOS animation
import styled from "styled-components";

export const BoxMessageContact = styled.div`
  .delete {
    cursor: pointer;
    outline: none;
    border-radius: 0;
    color: #3e3874;
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    position: absolute;
    right: 16px;
    text-decoration: none;
    top: 16px;
    width: 16px;
    height: 16px;
    &:hover {
      color: rgb(62, 56, 116, 0.85);
    }
    img {
      width: 100%;
      position: relative;
      pointer-events: none;
    }
  }

  @media (max-width: 480px) {
  }
`;
