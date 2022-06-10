import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import SearchBar from './SearchBar';
import Category from './Category';
import Banner from './Banner';
import CATEGORY_LIST from './categoriesListData';
import BANNER_LIST from './BannerListData';
import ItemNotFound from './ItemNotFound';
import SORT_LIST from './SortListData';

const ItemList = () => {
  const [productsList, setProductsList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [optionValue, setOptionValue] = useState('sales');
  const [limit, setLimit] = useState(8);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      isTop ? setIsScrolled(false) : setIsScrolled(true);
    });
  }, []);

  function handleGoToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const handleInput = e => {
    e.preventDefault();
    setUserInput(e.target.search.value);
  };

  const OFFSET = 0;
  const loadQueryString = `&offset=${OFFSET}&limit=${limit}`;
  const loadMore = () => {
    if (limit > 64) {
      alert('상품이 더 이상 없습니다!');
    } else {
      setLimit(limit * 2);
    }
  };

  useEffect(() => {
    fetch(
      `http://13.125.248.213:8000/products?search=${userInput}&sort=${optionValue}${loadQueryString}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setProductsList(data.product_list);
      });
  }, [userInput, optionValue, loadQueryString]);

  return (
    <ContentWrapper>
      <SearchBar handleInput={handleInput} userInput={userInput} />
      <BannerWrapper>
        <BannerList>
          {BANNER_LIST.map(banner => {
            return (
              <Banner key={banner.id} src={banner.src} text={banner.text} />
            );
          })}
        </BannerList>
      </BannerWrapper>
      <Content>
        <SearchFilter>
          <Filter>필터</Filter>
          {CATEGORY_LIST.map(category => {
            return (
              <Category
                key={category.id}
                categoryName={category.categoryName}
                categoryList={category.categoryList}
              />
            );
          })}
        </SearchFilter>
        <ItemContainer>
          <SearchOption>
            <SortingWrapper>
              <Title
                onChange={e => {
                  setOptionValue(e.target.value);
                }}
              >
                {SORT_LIST.map(title => {
                  return (
                    <option key={title.id} value={title.value}>
                      {title.title}
                    </option>
                  );
                })}
              </Title>
            </SortingWrapper>
          </SearchOption>
          {productsList?.length !== 0 ? (
            <ItemWrapper>
              <ItemsList>
                {productsList.map(product => {
                  const {
                    product_id,
                    eng_name,
                    kor_name,
                    thumbnail_url,
                    price,
                  } = product;
                  return (
                    <Item
                      key={product_id}
                      eng_name={eng_name}
                      kor_name={kor_name}
                      price={price}
                      thumbnail_url={thumbnail_url}
                    />
                  );
                })}
              </ItemsList>
              <LoadMore onClick={loadMore}>더보기</LoadMore>
            </ItemWrapper>
          ) : (
            <ItemNotFound />
          )}
        </ItemContainer>
      </Content>
      {isScrolled && <GoToTopBtn onClick={handleGoToTop}>&uArr;</GoToTopBtn>}
    </ContentWrapper>
  );
};
export default ItemList;

const ContentWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')}
`;

const BannerWrapper = styled.div`
  width: 72rem;
  margin-top: ${props => props.theme.margins.xxxl};
`;

const BannerList = styled.ul`
  ${props => props.theme.flex.flexBox('_', '_', 'space-between')}
`;

const Content = styled.div`
  ${props => props.theme.flex.flexBox('_', 'start')}
  box-sizing: border-box;
  padding: 3rem 2.5rem;
`;

const SearchFilter = styled.div`
  width: 12rem;
  margin-top: ${props => props.theme.margins.base};
`;

const Filter = styled.p`
  display: block;
  margin-bottom: 1.5rem;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  padding-left: ${props => props.theme.paddings.base};
`;

const ItemContainer = styled.div`
  margin-left: 3rem;
  width: 60rem;
`;

const SearchOption = styled.div``;

const SortingWrapper = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'right')}
  padding: 1rem 0;
  padding-right: 1rem;
`;

const Title = styled.select`
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  padding: 0.5rem 1rem;
  margin-right: 0.1rem;
`;

const ItemWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')}
`;

const ItemsList = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  padding: ${props => props.theme.paddings.base};
`;

const LoadMore = styled.button`
  width: 8rem;
  background: none;
  border: ${props => props.theme.borders.lightGray};
  border-radius: 20px;
  font-weight: ${props => props.theme.fontWeights.thin};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.9rem 1.5rem;
  cursor: pointer;
  :hover {
    background: lightgray;
  }
`;

const GoToTopBtn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border: 1px solid lightgray;
  border-radius: 40px;
  padding: 0.9rem 1rem;
  background: white;
  cursor: pointer;
  :hover {
    background: lightgray;
  }
`;
