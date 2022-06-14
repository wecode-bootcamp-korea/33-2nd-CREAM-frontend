import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Components/Item';
import SearchBar from './Components/SearchBar';
import ItemNotFound from './Components/ItemNotFound';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Price from './Components/Price';
import Shoes from './Components/Shoes';
import Clothing from './Components/Clothing';
import BANNER_LIST from './Data/bannerListData';
import SORT_LIST from './Components/SortListData';
import { CATEGORY_FILTER } from './Data/categoryData';
import { PRICE_FILTER } from './Data/categoryData';
import { SHOES_FILTER } from './Data/categoryData';
import { CLOTHING_FILTER } from './Data/categoryData';
import { BASE_URL } from '../../../../config';

const OFFSET = 0;

const ItemList = () => {
  const [productsList, setProductsList] = useState([]);
  const [selectCategory, setSelectCategory] = useState({});
  const [selectPrice, setSelectPrice] = useState({});
  const [selectShoeSize, setSelectShoeSize] = useState([]);
  const [selectClothSize, setSelectClothSize] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [optionValue, setOptionValue] = useState('sales');
  const [limit, setLimit] = useState(8);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      setIsScrolled(!isTop);
    });
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleInput = e => {
    e.preventDefault();
    setUserInput(e.target.search.value);
  };

  const loadQueryString = `&offset=${OFFSET}&limit=${limit}`;
  const loadMore = () => {
    if (limit > 64) {
      alert('상품이 더 이상 없습니다!');
    } else {
      setLimit(limit + 8);
    }
  };

  useEffect(() => {
    const categoryString = selectCategory.query
      ? `&category=${selectCategory.query}`
      : '';
    const priceString = selectPrice.query ? `&price=${selectPrice.query}` : '';
    const shoeSizeString = selectShoeSize
      .map(e => `&shoe_size=${e.name}`)
      .join('');
    const clothString = selectClothSize
      .map(e => `&apparel_size=${e.name}`)
      .join('');

    fetch(
      `${BASE_URL}products?${categoryString}${priceString}${shoeSizeString}${clothString}&search=${userInput}&sort=${optionValue}${loadQueryString}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setProductsList(data.product_list);
      });
  }, [
    selectCategory,
    selectPrice,
    selectShoeSize,
    selectClothSize,
    userInput,
    optionValue,
    loadQueryString,
  ]);

  const handelCategory = category => {
    if (selectCategory.name === category.name) {
      setSelectCategory({});
    } else {
      setSelectCategory(category);
    }
  };

  const handelPrice = price => {
    if (selectPrice.name === price.name) {
      setSelectPrice({});
    } else {
      setSelectPrice(price);
    }
  };

  const handleSelectShoeSize = sizes => {
    if (selectShoeSize.includes(sizes)) {
      setSelectShoeSize([...selectShoeSize.filter(size => size !== sizes)]);
    } else {
      setSelectShoeSize(prev => [...prev, sizes]);
    }
  };

  const handleSelectClothSize = sizes => {
    if (selectClothSize.includes(sizes)) {
      setSelectClothSize([...selectClothSize.filter(size => size !== sizes)]);
    } else {
      setSelectClothSize(prev => [...prev, sizes]);
    }
  };

  const deleteALLFilter = () => {
    setSelectCategory({});
    setSelectPrice({});
    setSelectShoeSize([]);
    setSelectClothSize([]);
  };

  const deleteFilter = selectedCategory => {
    setSelectShoeSize([
      ...selectShoeSize.filter(size => size !== selectedCategory),
    ]);
    setSelectClothSize([
      ...selectClothSize.filter(size => size !== selectedCategory),
    ]);
    setSelectCategory(
      selectCategory === selectedCategory ? {} : selectCategory
    );
    setSelectPrice(selectPrice === selectedCategory ? {} : selectPrice);
  };

  const isCategorySelected =
    selectCategory.name ||
    selectPrice.name ||
    selectShoeSize.length + selectClothSize.length !== 0;
  const totalFilter =
    !selectCategory.name && !selectPrice.name
      ? selectShoeSize.length + selectClothSize.length
      : selectCategory.name && selectPrice.name
      ? selectShoeSize.length + selectClothSize.length + 2
      : selectCategory.name || selectPrice.name
      ? selectShoeSize.length + selectClothSize.length + 1
      : null;

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
          <Filter>
            필터
            {isCategorySelected && (
              <>
                <FilterStatus>{totalFilter}</FilterStatus>
                <FilterDelete onClick={deleteALLFilter}>모두 삭제</FilterDelete>
              </>
            )}
          </Filter>

          <Category
            categorydata={CATEGORY_FILTER}
            selectCategory={handelCategory}
            filterSelect={selectCategory}
          />
          <Price
            categorydata={PRICE_FILTER}
            selectPrice={handelPrice}
            filterSelect={selectPrice}
          />
          <Shoes
            categorydata={SHOES_FILTER}
            selectShoeSize={handleSelectShoeSize}
            filterSelect={selectShoeSize}
          />
          <Clothing
            categorydata={CLOTHING_FILTER}
            selectClothSize={handleSelectClothSize}
            filterSelect={selectClothSize}
          />
        </SearchFilter>
        <ItemContainer>
          <SearchOption>
            <FilterCategorys>
              {selectCategory.name && (
                <FilterCategory>
                  {selectCategory.name}
                  <DeleteButton onClick={() => deleteFilter(selectCategory)}>
                    X
                  </DeleteButton>
                </FilterCategory>
              )}
              {selectPrice.name && (
                <FilterCategory>
                  {selectPrice.name}
                  <DeleteButton onClick={() => deleteFilter(selectPrice)}>
                    X
                  </DeleteButton>
                </FilterCategory>
              )}

              {selectShoeSize &&
                selectShoeSize.map(shoeSize => {
                  return (
                    <FilterCategory key={shoeSize.id}>
                      {shoeSize.name}
                      <DeleteButton onClick={() => deleteFilter(shoeSize)}>
                        X
                      </DeleteButton>
                    </FilterCategory>
                  );
                })}
              {selectClothSize.map(clothSize => {
                return (
                  <FilterCategory key={clothSize.id}>
                    {clothSize.name}
                    <DeleteButton onClick={() => deleteFilter(clothSize)}>
                      X
                    </DeleteButton>
                  </FilterCategory>
                );
              })}
            </FilterCategorys>
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
          {productsList.length !== 0 ? (
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
                      productId={product_id}
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
  width: 15rem;
  margin-top: ${props => props.theme.margins.base};
`;

const Filter = styled.div`
  display: block;
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  padding-left: ${props => props.theme.paddings.base};
`;

const FilterStatus = styled.div`
  width: 1.25rem;
  border: 1px solid black;
  border-radius: 0.625rem;
  margin-left: 0.625rem;
  text-align: center;
  background-color: ${props => props.theme.colors.black};
  color: white;
`;

const ItemContainer = styled.div`
  margin-left: 3rem;
  width: 60rem;
`;

const FilterDelete = styled.div`
  color: gray;
  border-bottom: 1px solid gray;
  padding-bottom: 0;
  margin-left: 4.375rem;
`;

const SearchOption = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FilterCategorys = styled.div`
  display: flex;
  align-items: center;
`;

const FilterCategory = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  border-radius: 0.625rem;
  margin-left: ${props => props.theme.margins.large};
  padding: 0.313rem;
`;

const DeleteButton = styled.button`
  border-style: none;
  background-color: #f4f4f4;
`;

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
  margin-left: 1rem;
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
  border-radius: 1.25rem;
  font-weight: ${props => props.theme.fontWeights.thin};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.9rem 1.5rem;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.colors.lightGray};
  }
`;

const GoToTopBtn = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  border: 1px solid lightgray;
  border-radius: 2.5rem;
  padding: 0.9rem 1rem;
  background: ${props => props.theme.colors.white};
  cursor: pointer;
  :hover {
    background: ${props => props.theme.colors.lightGray};
  }
`;
