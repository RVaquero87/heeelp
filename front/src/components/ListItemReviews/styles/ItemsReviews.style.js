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
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 200%;
    border: 1px solid #3e3874;
    height: 30px;
    width: 30px;
    background: #3e3874;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 0.8;
      transition: all ease 1000;
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
