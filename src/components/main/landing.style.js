import styled from 'styled-components';

export const MainDescBox = styled.div`
  width: 100%;
  margin: 100px 0px;
  font-family: 'HappinessSansBold';

  @media (max-width: 800px) {
    width: 90%;

    .total-box {
      height: auto;
    }

    .content-box {
      padding: 0 20px;
    }
  }

  .heendy-box-container {
    height: 360px;
  }

  .total-box {
    position: relative;
    height: 700px;
  }

  .content-box {
    position: absolute;
    width: 100%;
    /* z-index: 10; */
  }

  .bg-box {
    position: relative;
    z-index: ;
    opacity: 0.7;
    max-width: 100%;
  }

  .bg-box img {
    display: block;
    width: 100%;
    height: auto;
  }

  .heendy-box {
    position: relative;
    margin-bottom: 80px;
  }

  .think-heendy-box {
    position: absolute;
    width: 100%;
    z-index: 20;
  }

  .good-heendy-box {
    position: absolute;
    width: 100%;
    z-index: 20;
  }

  .illust-box {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
      width: 30%;
      margin-top: -120px;
    }

    img {
      /* position: absolute; */
      opacity: 0.6;
      max-width: 100%;
    }

    .illust-img {
      width: 90px;
      height: 90px;
      position: relative;
    }

    .illust-1 {
      right: -200px;
      @media (max-width: 800px) {
        right: 0%;
      }
    }

    .illust-2 {
      left: -240px;
      @media (max-width: 800px) {
        left: 220%;
      }
    }

    .illust-3 {
      right: -260px;
      @media (max-width: 800px) {
        right: 0%;
      }
    }

    .illust-4 {
      left: -280px;
      @media (max-width: 800px) {
        left: 200%;
      }
    }
  }

  /* 말풍선 - start */
  .chat-bubble-box {
    @media (max-width: 800px) {
      display: none;
    }
    position: absolute;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chat-bubble-box p {
    border-radius: 1.15rem;
    line-height: 1.25;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-wrap: break-word;
    font-size: 15px;
    width: max-content;
    color: #fff;
  }

  .chat-bubble-box p::before,
  .chat-bubble-box p::after {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;
  }

  .chat-left::before {
    border-bottom-left-radius: 0.8rem 0.7rem;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .chat-left::after {
    background-color: #fff;
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform: translate(-30px, -2px);
    width: 10px;
  }

  p[class^='from-'] {
    width: fit-content;
  }

  .chat-right:before {
    border-bottom-right-radius: 0.8rem 0.7rem;
    left: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .chat-right::after {
    background-color: #fff;
    border-bottom-right-radius: 0.5rem;
    left: 20px;
    transform: translate(-30px, -2px);
    width: 10px;
  }

  .chat-1 {
    right: -200px;
    margin: 0;
    background-color: #c3dad1;

    @media (max-width: 800px) {
      right: 0px;
    }
  }
  .chat-1::before {
    border-left: 1rem solid #c3dad1;
  }

  .chat-2 {
    left: -220px;
    margin: 0;
    background-color: #a2c7b9;

    @media (max-width: 800px) {
      left: 0px;
      margin-top: 20px;
    }
  }
  .chat-2::before {
    border-right: 1rem solid #a2c7b9;
  }

  .chat-3 {
    margin: 15px 0 0 0;
    right: -250px;
    background-color: #95d5bc;

    @media (max-width: 800px) {
      right: 0px;
      margin-top: 20px;
    }
  }
  .chat-3::before {
    border-left: 1rem solid #95d5bc;
  }
  /* 말풍선 - end */

  .img-box {
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .thiking-heendy {
    width: 20%;
    @media (max-width: 800px) {
      width: 40%;
      margin-top: -100px;
    }
  }

  .good-heendy {
    width: 20%;
    @media (max-width: 800px) {
      width: 40%;
      margin-top: -100px;
    }
  }

  .main-title-box {
    width: 100%;
    position: static;
    display: flex;
    flex-direction: column;
    /* margin-bottom: 120px; */

    p {
      font-family: 'HappinessSansTitle';
      margin: 0 0 10px 0;
      text-align: center;
      color: #5e5e5e;
    }

    .title-1 {
      font-size: 32px;

      @media (max-width: 800px) {
        font-size: 20px;
        /* margin-top: 30%; */
        margin-top: -10%;
        z-index: 10;
      }

      @media screen {
        margin-top: 10%;
      }
    }

    .title-2 {
      font-size: 36px;
      @media (max-width: 800px) {
        font-size: 27px;
        margin-top: 0%;
      }
    }

    .title-point-color-1 {
      color: #95d0b8;
    }

    .title-point-color-2 {
      color: #5aab8a;
    }
  }

  hr {
    border-top: 0.3px solid #dbdbdb;
  }

  .more-icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* color: #808080; */
    color: black;

    @media (max-width: 800px) {
      margin-top: -120px;
    }

    @media screen {
      margin-top: 10%;
    }

    p {
      margin-bottom: 7px;
    }
  }

  .more-icon {
    text-align: center;
  }
`;

export const FeatDescBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 10%;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const BtnArea = styled.div`
  text-align: center;
  margin-top: 20%;
  z-index: 100;

  @media (max-width: 800px) {
    margin-top: 130%;
    z-index: 100;
  }

  @media (min-width: 2200px) {
    margin-top: 0%;
  }
`;

export const FeatBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: #878787;
  padding: 0 20px 50px 20px;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .w-img {
    width: 50%;

    video {
      width: 100%;
    }
    img {
      width: 100%;
    }

    .img-shadow {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 25px 0px;
    }

    @media (max-width: 800px) {
      width: 80%;
    }
  }

  .w-text {
    width: 50%;

    p {
      margin: 5px 30px;
      font-size: 19px;
      line-height: 150%;
    }

    @media (max-width: 800px) {
      width: 80%;
    }

    .text-bold {
      font-weight: bolder;
    }
  }
`;
