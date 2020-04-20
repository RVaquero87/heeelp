//Styles & AOS animation
import styled from "styled-components";

export const BoxNotificationPage = styled.div`
  .delete {
    border-radius: 0;
    color: #3e3874;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    outline: none;
    padding: 0;
    position: absolute;
    right: 14px;
    text-decoration: none;
    top: 14px;
    &:hover {
      color: rgb(62, 56, 116, 0.85);
    }
    svg {
      position: relative;
      pointer-events: none;
    }
  }
  @media (max-width: 768px) {
  }
`;
