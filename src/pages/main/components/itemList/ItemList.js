import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Price from './Components/Price';
import Shoes from './Components/Shoes';
import Clothing from './Components/Clothing';
import BANNER_LIST from './Components/BannerListData';
import CATEGORY_FILTER from './Components/CategoryFilter';
import PRICE_FILTER from './Components/PriceFilter';
import SHOES_FILTER from './Components/ShoesFilter';
import CLOTHING_FILTER from './Components/ClothingFilter';

const ItemList = () => {
  const [productsList, setProductsList] = useState([]);
  const [selectCategory, setSelectCategory] = useState({});
  const [selectPrice, setSelectPrice] = useState({});
  const [selectShoeSize, setSelectShoeSize] = useState([]);
  const [selectClothSize, setSelectClothSize] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    const categoryString = selectCategory.quarry
      ? `&category=${selectCategory.quarry}`
      : '';
    const priceString = selectPrice.quarry
      ? `&price=${selectPrice.quarry}`
      : '';
    const shoeSizeString = selectShoeSize
      .map(e => `&shoe_size=${e.name}`)
      .join('');
    const clothString = selectClothSize
      .map(e => `&apparel_size=${e.name}`)
      .join('');

    navigator(
      `?${categoryString}${priceString}${shoeSizeString}${clothString}`
    );
    fetch(
      `http://13.125.248.213:8000/products?${categoryString}${priceString}${shoeSizeString}${clothString}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setProductsList(data.product_list);
      });
  }, [selectCategory, selectPrice, selectShoeSize, selectClothSize]);

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

  return (
    <ContentWrapper>
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
            {selectCategory.name ||
            selectPrice.name ||
            selectShoeSize.length + selectClothSize.length !== 0 ? (
              <>
                <FilterStatus>
                  {!selectCategory.name && !selectPrice.name
                    ? selectShoeSize.length + selectClothSize.length
                    : selectCategory.name && selectPrice.name
                    ? selectShoeSize.length + selectClothSize.length + 2
                    : selectCategory.name || selectPrice.name
                    ? selectShoeSize.length + selectClothSize.length + 1
                    : null}
                </FilterStatus>
                <FilterDelete onClick={deleteALLFilter}>모두 삭제</FilterDelete>
              </>
            ) : null}
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
              {selectClothSize &&
                selectClothSize.map(clothSize => {
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
            <SortingTitle>
              <Title>인기순</Title>
              <SortIcon src="/images/ItemList/up-down.png" />
            </SortingTitle>
          </SearchOption>
          <ItemsList>
            {productsList.length !== 0 &&
              productsList.map(product => {
                const { product_id, eng_name, kor_name, price, thumbnail_url } =
                  product;
                return (
                  <Item
                    key={product_id}
                    productNameEn={eng_name}
                    productNameKr={kor_name}
                    price={price}
                    src={thumbnail_url}
                  />
                );
              })}
          </ItemsList>
        </ItemContainer>
      </Content>
    </ContentWrapper>
  );
};
export default ItemList;

const ContentWrapper = styled.div`
  ${props => props.theme.flex.flexBox('column')}
`;

const BannerWrapper = styled.div`
  width: 90vw;
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
  flex: 1;
  width: 800px;
  margin-top: ${props => props.theme.margins.base};
`;

const Filter = styled.div`
  display: block;
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  padding-left: ${props => props.theme.paddings.base};
`;

const FilterStatus = styled.div`
  width: 25px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 10px;
  text-align: center;
  background-color: black;
  color: white;
`;

const FilterDelete = styled.div`
  color: gray;
  border-bottom: 1px solid gray;
  padding-bottom: 0;
  margin-left: 70px;
`;

const ItemContainer = styled.div`
  flex: 6;
  width: 900px;
`;

const SearchOption = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FilterCategorys = styled.div`
  display: flex;
  align-items: center;
  padding-left: 52px;
`;

const FilterCategory = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  margin-left: 16px;
  padding: 5px;
`;

const DeleteButton = styled.button`
  border-style: none;
  background-color: #f4f4f4;
`;

const SortingTitle = styled.div`
  display: flex;
  justify-content: right;
  padding: 1rem 0;
  padding-right: 1rem;
`;

const SortIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  margin-right: 0.1rem;
`;

const ItemsList = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  padding: ${props => props.theme.paddings.base};
`;
