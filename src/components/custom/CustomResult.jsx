import React, { useEffect, useRef } from 'react';
import {
  AnalyzeResultContainer,
  AnalyzeResultExplain,
  AnalyzeResultExplainContainer,
  CustomResultContainer,
  FlexContainer,
  ProgressBar,
  ProgressBarContainer,
  RecommendAnalyzeContainer,
  RecommendProductListContainer,
  ResultCardContainer,
  ResultPagenationContainer,
  SameProductText,
  SimilarityContainer,
  SimilarityPercentText,
  StickyContainer,
  TotalCountText,
  UserAnalyzeContainer,
  UserRegisterResultContainer,
  UserResultCard,
  UserResultImg,
  UserResultText,
} from './custom-result.style';

import {
  MiddleContainer,
  MiddlePageContainer,
  PageArrow,
  PageState,
} from '../product/index.style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ProductCard from '../product/ProductCard';
import { eventLog } from '../../utils/event_log';

function CustomResult({
  selectedPetName,
  suggestionProduct,
  selectedFeedImage,
  selectedFeedIngredients,
}) {
  const clickRef = useRef(false);
  const clickDataRef = useRef(null);

  const handleLog = (page, element, isClicked, itemId) => {
    clickDataRef.current = { page, element, isClicked, itemId };
  };

  const handleClickRef = flag => {
    clickRef.current = flag;
  };

  useEffect(() => {
    return () => {
      if (clickRef.current) {
        eventLog(clickDataRef.current);
      } else {
        eventLog({
          page: 'suggestion',
          element: 'recommend_product',
          igemId: null,
          isClicked: 'N',
        });
      }
    };
  }, []);

  const getHighlightedIngredients = ingredients => {
    return ingredients
      .split(',')
      .map((ingredient, idx) => {
        if (idx < 10) {
          return `<mark>${ingredient}</mark>`;
        }
        return ingredient;
      })
      .join(',');
  };

  return (
    <>
      <CustomResultContainer>
        <UserRegisterResultContainer>
          <StickyContainer>
            <AnalyzeResultExplainContainer>
              <AnalyzeResultExplain>
                우리 ‘{selectedPetName}’(이)가 잘 먹는 사료
              </AnalyzeResultExplain>
            </AnalyzeResultExplainContainer>
            <FlexContainer>
              <UserAnalyzeContainer>
                <UserResultCard>
                  <UserResultImg src={selectedFeedImage}></UserResultImg>
                  <UserResultText isTitle={true}>성분 분석 결과</UserResultText>
                  <UserResultText
                    style={{ height: '100px' }}
                    isTitle={false}
                    dangerouslySetInnerHTML={{
                      __html: getHighlightedIngredients(
                        selectedFeedIngredients,
                      ),
                    }}
                  ></UserResultText>
                </UserResultCard>
              </UserAnalyzeContainer>
            </FlexContainer>
          </StickyContainer>
        </UserRegisterResultContainer>
        <AnalyzeResultContainer>
          <AnalyzeResultExplainContainer>
            <AnalyzeResultExplain>유사도 기반 추천 결과</AnalyzeResultExplain>
          </AnalyzeResultExplainContainer>
          <RecommendAnalyzeContainer>
            <RecommendProductListContainer>
              {suggestionProduct !== undefined &&
                suggestionProduct.map((rp, idx) => (
                  <ResultCardContainer
                    onClick={() => {
                      handleClickRef(true);
                      handleLog('suggestion', 'recommend_product', rp.id, 'Y');
                    }}
                    key={idx}
                    match={rp.matchRate === 100 ? true : false}
                  >
                    <SameProductText
                      match={rp.matchRate === 100 ? true : false}
                    >
                      지금 사료와 같아요!!
                    </SameProductText>
                    <ProductCard product={rp}></ProductCard>
                    <SimilarityContainer percent={rp.matchRate}>
                      <ProgressBarContainer>
                        <ProgressBar
                          percent={rp.matchRate}
                          si={rp.matchRate}
                        ></ProgressBar>
                      </ProgressBarContainer>
                      <SimilarityPercentText percent={rp.matchRate}>
                        성분유사도
                      </SimilarityPercentText>
                      <SimilarityPercentText percent={rp.matchRate}>
                        {`${rp.matchRate}%`}
                      </SimilarityPercentText>
                    </SimilarityContainer>
                  </ResultCardContainer>
                ))}
            </RecommendProductListContainer>
          </RecommendAnalyzeContainer>
        </AnalyzeResultContainer>
      </CustomResultContainer>
    </>
  );
}

export default CustomResult;
