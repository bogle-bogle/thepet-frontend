import styled from 'styled-components';
import mbtiBackground from '../../assets/mbti/mbti_background.png';

export const MbtiGameContainer = styled.div`
  width: 100%;
  height: 735px;
  background-image: url(${mbtiBackground});
  background-repeat: no-repeat;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const DivideContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const MbtiMainText = styled.img`
  width: 360px;
  height: 150px;

  margin-bottom: 4%;
`;

export const MbtiStartButton = styled.button`
  width: 200px;
  height: 70px;

  border-radius: 20px;

  background-color: #376558;
  border: 1px solid #376558;

  color: white;

  font-weight: 600;
  font-size: 30px;

  cursor: pointer;
`;

export const GameContainer = styled.div`
  width: 50vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionBox = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 25px;

  margin-bottom: 10%;
`;

export const AnswerBox = styled.div`
  width: 70%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  border: 1px solid white;

  background-color: #6495ed;
  color: white;

  border-radius: 50px;
  margin-bottom: 3%;
  padding: 1% 0 1% 0;

  cursor: pointer;
`;
