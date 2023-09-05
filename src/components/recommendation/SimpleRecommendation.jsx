import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { RcContainer, RcTitle } from './index.style';
import {
  ProductCard,
  ProductContainer,
  ProductImg,
  ProductPrice,
  ProductSummary,
} from '../product/index.style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductRecommendation() {
  const [foodProductList, setFoodProductList] = useState([]);
  const navigate = useNavigate();
  const member = useSelector((state) => state.member);

  console.info(member);

  useEffect(() => {
    axios.get(`/api/recommendation/simple/${member.pets[0].id}`).then((res) => {
      setFoodProductList(() => {
        const newProducts = [...res.data.products];
        return newProducts;
      });
    });
  }, []);

  return (
    <RcContainer>
      <RcTitle>
        {member.pets[0].name}와 같은 {member.pets[0].ageCode}연령의 반려동물들은
        주로 이런 상품을 구매했어요.
      </RcTitle>

      <ProductContainer>
        {foodProductList.map((product, idx) => (
          <ProductCard
            key={idx}
            onClick={() => navigate(`/detail/${product.id}`)}
          >
            <ProductImg />
            <ProductPrice>{product.price}원</ProductPrice>
            <ProductSummary>{product.name}</ProductSummary>
          </ProductCard>
        ))}
      </ProductContainer>
    </RcContainer>
  );
}

export default ProductRecommendation;