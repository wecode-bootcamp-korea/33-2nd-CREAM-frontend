import React, { useState } from 'react';
import styled from 'styled-components';

const Category = ({ categorydata, selectClothSize, filterSelect }) => {
  const [isFilterTab, setIsFilterTab] = useState(true);

  const { categoryList, categoryName } = categorydata;

  const handelCategory = () => {
    setIsFilterTab(!isFilterTab);
  };

  return (
    <CategoryWrapper>
      <Title>
        <CategoryTag>{categoryName}</CategoryTag>
        <SeeMore onClick={handelCategory}>{isFilterTab ? '+' : '-'}</SeeMore>
      </Title>
      <List>
        {categoryList.map(category => {
          return (
            <CheckBox
              key={category.id}
              isFilterTab={isFilterTab}
              onClick={() => selectClothSize(category)}
              selected={
                filterSelect !== [] &&
                filterSelect.find(element => element === category)
              }
            >
              {category.name}
            </CheckBox>
          );
        })}
      </List>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 1rem 0.5rem;
`;

const Title = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'space-between')}
`;

const CategoryTag = styled.p`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
`;

const SeeMore = styled.button`
  background: none;
  border: none;
  font-size: ${props => props.theme.fontSizes.xxl};
  cursor: pointer;
`;

const List = styled.div`
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-wrap: wrap;
`;

const CheckBox = styled.a`
  display: ${props => (props.isFilterTab ? 'none' : 'block')};
  margin: 0.313rem;
  border-color: ${props => props.theme.colors.gray};
  border: 1px solid #d3d3d3;
  width: 6rem;
  border-radius: 0.625rem;
  text-align: center;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-size: ${props => props.theme.fontSizes.small};
`;
