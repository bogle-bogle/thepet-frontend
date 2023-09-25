import React, { useEffect } from "react";
import {
  CardContainer,
  CategoryContainer,
  CategoryElementContainer,
  CategoryP,
  FilterCategoryContainer,
  FilterCategoryRow,
  FilterCategoryTitle,
  InitialButton,
  MiddleCategoryContainer,
  MiddleCategoryElement,
  MiddleContainer,
  MiddlePageContainer,
  MiddlePagenationContainer,
  PageArrow,
  PageState,
  ProductCardContainer,
  ProductContainer,
  ShopContainer,
} from "./index.style";
import { shopCategory, proteinCode } from "../../commonCode";
import CategoryFilterButton from "./CategoryFilterButton";
import { useState } from "react";
import {
  initialMainCategory,
  initialSubCategory,
  initialProteinCategory,
} from "../../utils/productFilter";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductCard from "./ProductCard";
import * as Api from "../../api";
import { TrackGoogleAnalyticsEvent } from "../../ga";
import ContactFormCategory, {
  ContactFormCompleteAction,
} from "../../ga/event/contactForm";
import { RxReset } from 'react-icons/rx';

function NewProductList() {
  const [mainCategory, setMainCategory] = useState("");
  const [subFilterList, setSubFilterList] = useState([]);
  const [proteinFilterList, setProteinFilterList] = useState([]);

  const [mainFilterChecked, setMainFilterChecked] = useState({
    ...initialMainCategory,
  });

  const [subFilterChecked, setSubFilterChecked] = useState({});
  const [proteinFilterChecked, setProteinFilterChecked] = useState({
    ...initialProteinCategory,
  });

  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL);
    Api.post(`/api/product/list/${curPage}`, {
      mainFilter: mainCategory,
      subFilter: subFilterList,
      proteinFilter: proteinFilterList,
    }).then((res) => {
      setProductList([...res.data.products]);
      setTotalCount(res.data.count);

      let cnt = parseInt(res.data.count / 20);
      if (res.data.count % 20 > 0) {
        cnt += 1;
      }
      setPageCount(cnt);
    });
  }, [curPage, subFilterList, mainCategory, proteinFilterList]);

  const handleMainChecked = (id) => {
    setMainFilterChecked(() => {
      const newObj = { ...initialMainCategory, [id]: true };
      return newObj;
    });
    setMainCategory(() => id);
    setSubFilterChecked(() => {
      return { ...initialSubCategory[mainCategory] };
    });

    setSubFilterList([]);
    setProteinFilterList([]);
    setCurPage(1);
  };

  const handleSubChecked = (id) => {
    setSubFilterList((prev) => {
      if (subFilterChecked[id] === true) {
        return prev.filter((element) => element !== id);
      } else {
        return [...prev, id];
      }
    });
    setSubFilterChecked((prev) => {
      return { ...prev, [id]: !prev[id] };
    });
    setCurPage(1);
  };

  const handleProteinChecked = (id) => {
    setProteinFilterList((prev) => {
      if (proteinFilterChecked[id] === true) {
        return prev.filter((element) => element !== id);
      } else {
        return [...prev, id];
      }
    });

    setProteinFilterChecked((prev) => {
      return { ...prev, [id]: !prev[id] };
    });
    setCurPage(1);
  };

  const handlePage = (page) => {
    if (page === 0 || page > pageCount) {
      return;
    }
    setCurPage(page);
  };

  const initFilter = () => {
    setMainCategory("");
    setSubFilterList([]);
    setProteinFilterList([]);

    setMainFilterChecked({
      ...initialMainCategory,
    });
    setSubFilterChecked({});
    setProteinFilterChecked({ ...initialProteinCategory });
  };

  return (
    <ShopContainer>
      <CategoryContainer>
        <CategoryP>
          {`쇼핑`}
          {mainCategory !== "" && `  >  ${shopCategory[mainCategory].name}`}
        </CategoryP>
        <InitialButton onClick={initFilter}>
          <RxReset style={{marginRight: "3px", color: "white"}}/>
          필터 초기화
        </InitialButton>
      </CategoryContainer>
      <FilterCategoryContainer>
        <FilterCategoryRow>
          <FilterCategoryTitle>대분류</FilterCategoryTitle>
          <CategoryElementContainer>
            {Object.entries(shopCategory).map(([key, value]) => (
              <CategoryFilterButton
                className="filter"
                key={key}
                id={key}
                isChecked={mainFilterChecked[key]}
                handleFilter={() => handleMainChecked(key)}
              >
                {value.name}
              </CategoryFilterButton>
            ))}
          </CategoryElementContainer>
        </FilterCategoryRow>
        {mainCategory !== "" && (
          <FilterCategoryRow>
            <FilterCategoryTitle>소분류</FilterCategoryTitle>
            <CategoryElementContainer>
              {Object.entries(shopCategory[mainCategory].subCategory).map(
                ([key, value]) => (
                  <CategoryFilterButton
                    className="filter"
                    key={key}
                    id={key}
                    isChecked={subFilterChecked[key]}
                    handleFilter={() => handleSubChecked(key)}
                  >
                    {value}
                  </CategoryFilterButton>
                )
              )}
            </CategoryElementContainer>
          </FilterCategoryRow>
        )}
        {mainCategory === "FD" && (
          <FilterCategoryRow>
            <FilterCategoryTitle>주재료</FilterCategoryTitle>
            <CategoryElementContainer>
              {Object.entries(proteinCode).map(([key, value]) => (
                <CategoryFilterButton
                  className="filter"
                  key={key}
                  id={key}
                  isChecked={proteinFilterChecked[key]}
                  handleFilter={() => handleProteinChecked(key)}
                >
                  {value}
                </CategoryFilterButton>
              ))}
            </CategoryElementContainer>
          </FilterCategoryRow>
        )}
      </FilterCategoryContainer>
      <MiddleContainer>
        {/* <MiddleCategoryContainer>
          <MiddleCategoryElement
            onClick={() =>
              TrackGoogleAnalyticsEvent(
                ContactFormCategory,
                ContactFormCompleteAction,
                window.location.pathname
              )
            }
          >
            신상품순
          </MiddleCategoryElement>
          <MiddleCategoryElement>추천순</MiddleCategoryElement>
          <MiddleCategoryElement>높은가격순</MiddleCategoryElement>
          <MiddleCategoryElement>낮은가격순</MiddleCategoryElement>
        </MiddleCategoryContainer> */}
        <MiddlePagenationContainer>{`${(curPage - 1) * 20 + 1}-${
          curPage === pageCount ? totalCount : curPage * 20
        } / ${totalCount}개`}</MiddlePagenationContainer>
        <MiddlePageContainer>
          <PageArrow onClick={() => handlePage(curPage - 1)}>
            <AiOutlineLeft />
          </PageArrow>
          <PageState>{`${curPage} / ${pageCount}`}</PageState>
          <PageArrow onClick={() => handlePage(curPage + 1)}>
            <AiOutlineRight />
          </PageArrow>
        </MiddlePageContainer>
      </MiddleContainer>
      <ProductContainer>
        {productList !== undefined &&
          productList.map((product, idx) => (
            <CardContainer>
              <ProductCard key={idx} product={product}></ProductCard>
            </CardContainer>
          ))}
        {productList.length < 20 &&
          Array(4 - (productList.length % 4))
            .fill()
            .map(() => <ProductCardContainer></ProductCardContainer>)}
      </ProductContainer>
    </ShopContainer>
  );
}

export default NewProductList;
