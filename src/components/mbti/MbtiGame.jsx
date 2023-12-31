import React, { useState } from 'react';
import {
  AnswerBox,
  DivideContainer,
  GameContainer,
  MbtiGameContainer,
  MbtiMainText,
  MbtiStartButton,
  QuestionBox,
  MbtiResultContainer,
  MbtiResultContentContainer,
  MbtiResultDogImg,
  SelectDogImgContainer,
  MbtiH1,
  MbtiDescription,
  MbtiCompatibilityContainer,
  MbtiCompatibilityImg,
  MbtiResultInfoContainer,
  MbtiTitle,
  LikeContainer,
} from './mbti.style';

import defaultDog from '../../assets/mbti/default_dog_img.png';

import mainText from '../../assets/mbti/mbti_main_text.png';

import mbtiGood from '../../assets/mbti/istj_good.png';
import mbtiBad from '../../assets/mbti/enfp_bad.png';

import { BsFillCameraFill } from 'react-icons/bs';
import { useRef } from 'react';
import ProductRecommendation from '../recommendation/ProductRecommendation';
import { mbtiCategory } from '../../commonCode';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeaderImg } from '../global/global.style';
import mbtiHeader from '../../assets/playground/mbti-header.png'

const mbtiQuestion = [
  {},
  {
    question: '산책하다가 다른 강아지 친구를 만났다! 나의 반응은?',
    answer: [
      ['E', '새로운 친구 좋아!'],
      ['I', '아직 어색해. 내 주인이 최고야'],
    ],
  },
  {
    question: '나의 산책길은?',
    answer: [
      ['S', '익숙한 길! 산책 좋아'],
      ['N', '우와 나비다! 저 꽃은 뭐지? 어? 저기는 지렁이다!'],
    ],
  },
  {
    question: '집사가 오늘따라 기운이 없어보인다. 나는?',
    answer: [
      ['F', '무슨 일 있나? 나도 같이 슬퍼.. 옆에 가서 위로해준다'],
      ['T', '힘없을 땐 맛있는 게 최고야. 내 최애 개껌 가져다줘야지'],
    ],
  },
  {
    question: '누르면 간식이 나오는 신기한 기계가 생겼다! 나는?',
    answer: [
      ['P', '이때다! 먹을 수 있을 때 다 먹어야지!'],
      ['J', '계획을 짜서, 배고파질 때마다 제일 맛있게 먹을거야'],
    ],
  },
];

const s3ImgUrl = process.env.REACT_APP_AWS_S3_ASSETS_URL;

function MbtiGame() {
  const member = useSelector(state => state.member);

  const [start, setStart] = useState(false);
  const [mbti, setMbti] = useState('');
  const [curQuestion, setCurQuestion] = useState();
  const [result, setResult] = useState(false);
  const [count, setCount] = useState(1);
  const [dogProfileImg, setDogProfileImg] = useState(defaultDog);

  const fileInputRef = useRef(null);

  const handleGameStart = () => {
    setStart(true);
    setCurQuestion(mbtiQuestion[count]);
  };

  const handleSelectAnswer = e => {
    if (count === 4) {
      setResult(true);
      setMbti(prev => {
        return prev + e.target.id;
      });
    } else {
      setMbti(prev => {
        return prev + e.target.id;
      });
      setCurQuestion(mbtiQuestion[count + 1]);
      setCount(prev => {
        return prev + 1;
      });
    }
  };

  const handleImageUpload = event => {
    const file = URL.createObjectURL(event.target.files[0]);
    setDogProfileImg(file);
  };

  const handleLog = (page, element, isClicked, itemId) => {
    clickDataRef.current = { page, element, isClicked, itemId };
  };

  return (
    <>
    <PageHeaderImg src={mbtiHeader} style={{marginBottom: '15px'}} />

    {member.pet && member.pet.length !== 0 && member.pet[0].name && (
    <div style={{fontSize:'25px', fontWeight: 'bold', margin: '20px 0px', color: '#616161'}}> Step 1. {member.pet[0].name}의 MBTI 검사하기</div>
    )}
      <MbtiGameContainer result={result}>
        {result ? (
          <>
            <MbtiResultContainer>
              <MbtiResultContentContainer>
                <MbtiResultDogImg
                  src={
                    localStorage.getItem('userToken') &&
                    member.pet.length !== 0 &&
                    member.pet[0].petImgUrl
                  }
                ></MbtiResultDogImg>
                {member.pet && member.pet.length !== 0 && member.pet[0].name && (
                <div style={{fontSize: '30px', fontWeight: 'bold', marginTop: '5px'}}>우리 {member.pet[0].name}은... </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file-input"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
              </MbtiResultContentContainer>

              <MbtiResultInfoContainer>
                <MbtiTitle>
                  <MbtiH1>{mbti}</MbtiH1>
                  <MbtiCompatibilityImg
                    src={`${s3ImgUrl}/${mbti.toLowerCase()}.png`}
                  ></MbtiCompatibilityImg>
                  <MbtiDescription>{mbtiCategory[mbti].title}</MbtiDescription>
                </MbtiTitle>
                <MbtiCompatibilityContainer>
                  <LikeContainer>
                    <h2>잘 맞는 유형</h2>
                    <MbtiCompatibilityImg
                      src={`${s3ImgUrl}/${mbtiCategory[
                        mbti
                      ].like.toLowerCase()}.png`}
                    />
                    <h2>{mbtiCategory[mbti].like}</h2>
                  </LikeContainer>
                  <LikeContainer>
                    <h2>안 맞는 유형</h2>
                    <MbtiCompatibilityImg
                      src={`${s3ImgUrl}/${mbtiCategory[
                        mbti
                      ].dislike.toLowerCase()}.png`}
                    />
                    <h2>{mbtiCategory[mbti].dislike}</h2>
                  </LikeContainer>
                </MbtiCompatibilityContainer>
              </MbtiResultInfoContainer>
            </MbtiResultContainer>
          </>
        ) : (
          <>
            {start ? (
              <GameContainer>
                <QuestionBox>{curQuestion.question}</QuestionBox>
                {curQuestion.answer.map(ele => (
                  <AnswerBox onClick={handleSelectAnswer} id={ele[0]}>
                    {ele[1]}
                  </AnswerBox>
                ))}
              </GameContainer>
            ) : (
              <>
                <DivideContainer></DivideContainer>
                <DivideContainer>
                  <MbtiMainText src={mainText}></MbtiMainText>
                  <MbtiStartButton onClick={handleGameStart}>
                    시작하기
                  </MbtiStartButton>
                </DivideContainer>
              </>
            )}
          </>
        )}
      </MbtiGameContainer>

      {result && (
        <>
        {member.pet && member.pet.length !== 0 && member.pet[0].name && (
          <div style={{fontSize:'25px', fontWeight: 'bold', margin: '60px 0px 20px 20px', color: '#616161'}}> Step 2. {member.pet[0].name}와 같은 {mbti} 친구들에게는 다음과 같은 상품이 딱이에요!</div>
          )}
          <ProductRecommendation handleLog={handleLog} type={'mbti-to'} param={mbti} />
          <ProductRecommendation handleLog={handleLog} type={'mbti-sp'} param={mbti} />
        </>
      )}
    </>
  );
}

export default MbtiGame;
