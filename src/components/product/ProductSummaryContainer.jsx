import React from 'react';
import {
  BenefitContainer,
  BenefitContent,
  BenefitRow,
  BenefitRowDl,
  BenefitTitle,
  ButtonContainer,
  ClubHeendyContainer,
  ClubHeendyDiscount,
  ClubHeendyLogo,
  DetailButton,
  InfoIconContainer,
  ProductDetailImg,
  ProductDetailImgBox,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductPriceContainer,
  ProductSummary,
} from './detail.style';
import { AiOutlineGift, AiOutlineHeart } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import clubHeendy from '../../assets/detail/club_heendy.png';
import { BsCartPlus } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdEventRepeat } from 'react-icons/md';
import { showPlainSwal } from '../global/showPlainSwal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtCheck } from '../../utils/tokenCheck';
import { showRequiredLoginSwal } from '../global/showRequiredLoginSwal';
import { loginAction } from '../../feature/member/login';

function ProductSummaryContainer({
  productInfo,
  handleShoppingBasket,
  handleCheckBillingKey,
}) {
  const member = useSelector(state => state.member);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function createOrder() {
    if (jwtCheck()) {
      showRequiredLoginSwal(() => dispatch(loginAction.setIsLogin(true)));
      return;
    }
    showPlainSwal('주문서 페이지로 이동합니다.');
    const selectedItems = [
      {
        cnt: 1,
        createdAt: new Date(),
        mainImgUrl: productInfo.mainImgUrl,
        memberId: member.id,
        name: productInfo.name,
        price: productInfo.price,
        productId: productInfo.id,
      },
    ];
    const totalAmount = productInfo.price;
    navigate('/ordersheet', { state: { selectedItems, totalAmount } });
  }

  return (
    <ProductSummary>
      <ProductDetailImgBox>
        <ProductDetailImg src={`${productInfo.mainImgUrl}`}></ProductDetailImg>
      </ProductDetailImgBox>
      <ProductInfoContainer>
        <ProductName>{`${productInfo.name}`}</ProductName>
        <ProductPriceContainer>
          <ProductPrice>{`${productInfo.price.toLocaleString()}원`}</ProductPrice>
          <InfoIconContainer>
            <AiOutlineGift style={{ fontSize: '25px', marginLeft: '12px' }} />
            <BsShare style={{ fontSize: '25px', marginLeft: '12px' }} />
            <AiOutlineHeart style={{ fontSize: '25px', marginLeft: '12px' }} />
          </InfoIconContainer>
        </ProductPriceContainer>
        <BenefitContainer>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>카드 혜택</BenefitTitle>
              <BenefitContent>
                삼성7% 즉시할인(5만원 이상 결제시)
                <br />
                현대백화점카드5%
              </BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>무이자</BenefitTitle>
              <BenefitContent>최대 6개월(5만원 이상 결제시)</BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>적립금</BenefitTitle>
              <BenefitContent>
                H.Point 90P 적립
                <br />
                KB제휴카드 결제시 최대 1.5% 추가적립
              </BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
          <BenefitRow>
            <BenefitRowDl>
              <BenefitTitle>배송비</BenefitTitle>
              <BenefitContent>무료배송</BenefitContent>
            </BenefitRowDl>
          </BenefitRow>
        </BenefitContainer>
        <ClubHeendyContainer>
          <ClubHeendyLogo src={clubHeendy}></ClubHeendyLogo>
          <ClubHeendyDiscount>흰디클럽 할인10%</ClubHeendyDiscount>
        </ClubHeendyContainer>
        <ButtonContainer>
          <DetailButton className="cart" onClick={handleShoppingBasket}>
            <BsCartPlus className="btn-icon" />
            장바구니
          </DetailButton>
          <DetailButton className="buy" onClick={createOrder}>
            <TbTruckDelivery className="btn-icon" />
            바로구매
          </DetailButton>
          <DetailButton className="monthly" onClick={handleCheckBillingKey}>
            <MdEventRepeat className="btn-icon" />
            정기배송
          </DetailButton>
        </ButtonContainer>
      </ProductInfoContainer>
    </ProductSummary>
  );
}

export default ProductSummaryContainer;
