import styled from "styled-components";

export const BoxReviews = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 11px 4px rgba(62, 56, 116, 0.1);
  padding: 50px 40px 30px;
  width: 47.5%;
  position: relative;
  .title {
    padding-bottom: 10px;
  }
  .message {
    text-align: left;
    height: 180px;
  }
  .box-reviews-user {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    .box-user-image {
      border-radius: 50%;
      max-width: 80px;
      overflow: hidden;
      width: 100%;
    }
    .box-user-item {
      width: 67%;
      .box-top-user {
        margin-bottom: 2px;
      }
      .starts {
        display: flex;
        justify-content: flex-start;
        img {
          width: 25px;
          margin-right: 7px;
        }
      }
    }
  }
  .delete {
    cursor: pointer;
    outline: none;
    color: #3e3874;
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 500;
    position: absolute;
    padding: 0;
    right: 16px;
    text-decoration: none;
    top: 16px;
    width: 16px;
    height: 16px;
    &:hover {
      opacity: 0.85;
    }
    img {
      width: 100%;
      pointer-events: none;
    }
  }
  @media (max-width: 1200px) {
    padding: 40px 30px 30px;
    width: 47%;
  }
  @media (max-width: 1024px) {
    padding: 40px 20px 30px;
    max-width: 370px;
  }
  @media (max-width: 960px) {
    max-width: 370px;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding: 40px 30px 30px;
    max-width: 370px;
    margin-bottom: 50px;
    width: 100%;
    .message {
      height: initial;
    }
  }
  @media (max-width: 480px) {
    padding: 30px 20px 20px;
    margin-bottom: 30px;
    .message {
      height: initial;
    }
    .box-reviews-user {
      margin-top: 0;
      .box-user-image {
        max-width: 70px;
      }
      .box-user-item {
        width: 65%;
        .starts img {
          width: 20px;
          margin-right: 5px;
        }
      }
    }
  }
`;
