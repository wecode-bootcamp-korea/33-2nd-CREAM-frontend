import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import Category from './Category';
import Banner from './Banner';
import CATEGORY_LIST from './categoriesListData';
import BANNER_LIST from './BannerListData';

const ItemList = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch('/data/productsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductsList(data);
      });
  }, []);

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
            <SortingTitle>
              <Title>인기순</Title>
              <SortIcon src="/images/ItemList/up-down.png" />
            </SortingTitle>
          </SearchOption>
          <ItemsList>
            {productsList.map(product => {
              const { id, productNameEn, productNameKr, price, src } = product;
              return (
                <Item
                  key={id}
                  productNameEn={productNameEn}
                  productNameKr={productNameKr}
                  price={price}
                  src={src}
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
  flex: 6;
`;

const SearchOption = styled.div``;

const SortingTitle = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'right')}
  padding: 1rem 0;
  padding-right: 1rem;
`;

const SortIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Title = styled.p`
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
